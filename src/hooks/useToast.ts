import { showToast } from '@nutui/nutui'

export function useToast() {
    const loading = (msg = '加载中') => {
        const _toast = showToast.loading(msg, {
            cover: true,
        })
        return _toast;
    }
    return {
        ...showToast,
        loading,
    }
}