// src/components/yf-message/method.ts
import { createVNode, render } from "vue";
import YfMessage from "./yf-message.vue";

interface MessageOptions {
    message: string;
    type?: "primary" | "success" | "info" | "warning" | "error";
    plain?: boolean;
    duration?: number;
    onClose?: () => void;
}

let seed = 0;

export function showMessage(options: MessageOptions) {
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
}
