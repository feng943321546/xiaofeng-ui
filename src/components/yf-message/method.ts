// src/components/yf-message/method.ts
import { createVNode, render ,VNode} from "vue";
import YfMessage from "./yf-message.vue";

interface MessageOptions {
    message: string;
    type?: "primary" | "success" | "info" | "warning" | "error";
    plain?: boolean;
    duration?: number;
    onClose?: () => void;
}

let seed = 0;
let instances: { id: string; el: HTMLElement; height: number }[] = [];
const GAP = 16;

export function showMessage(options: MessageOptions) {
    const id = `yf-message-${seed++}`;
    const container = document.createElement("div");
    container.id = id;
    
    const verticalOffset = instances.reduce(
        (offset, inst) => offset + inst.height + GAP,
        20
    );
    
    const vnode = createVNode(YfMessage, {
        id,
        ...options,
        top: verticalOffset,
        // 在销毁时触发
        onDestroy: () => {
            const idx = instances.findIndex((inst) => inst.id === id);
            if (idx === -1) return;
            
            const removed = instances[idx];
            const removedHeight = removed.height;
            instances.splice(idx, 1);
            document.body.removeChild(removed.el);
            
            // 向上的位移更新
            for (let i = idx; i < instances.length; i++) {
                const el = instances[i].el.firstElementChild as HTMLElement;
                const oldTop = parseInt(el.style.top);
                el.style.top = `${oldTop - removedHeight - GAP}px`;
            }
            
            options.onClose?.();
        },
    });
    
    render(vnode, container);
    document.body.appendChild(container);
    
    // 记录 DOM 信息
    const el = container;
    const height = (el.firstElementChild as HTMLElement).offsetHeight;
    instances.push({ id, el, height });
}

/*export function showMessage(options: MessageOptions) {
    const container = document.createElement("div");
    container.id = `yf-message-${seed++}`;
    document.body.appendChild(container);

    const vnode = createVNode(YfMessage, {
        ...options,
        onDestroy: () => {
            render(null, container);
            document.body.removeChild(container);
            options.onClose?.();
        },
    });

    render(vnode, container);
}*/
