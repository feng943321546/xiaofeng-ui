// src/components/yf-message-box/type.ts
export interface MessageBoxOptions {
  title?: string
  message?: string
  confirmButtonText?: string
  cancelButtonText?: string
  closeOnClickModal?: boolean
  showCancelIcon?: boolean
  type?: 'success' | 'warning' | 'info' | 'danger' | 'primary'
}
