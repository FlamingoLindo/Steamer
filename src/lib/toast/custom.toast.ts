import toast from 'svelte-french-toast';

type ToastType = 'success' | 'error' | 'loading' | 'custom' | 'promise';

type ToastPositions =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

interface ToastOptions {
	type: ToastType;
	message: string;
	duration?: number;
	icon?: string;
	className?: string;
	position?: ToastPositions;
}

interface PromiseToastOptions {
	promise: Promise<any>;
	loading: string;
	success: string | null;
	error: string | ((err: any) => string);
	duration?: number;
	position?: ToastPositions;
}

export class CustomToast {
	static show(options: ToastOptions) {
		const { type, message, duration = 3000, icon, className, position } = options;

		const toastOptions = {
			duration,
			icon,
			className,
			position
		};

		switch (type) {
			case 'success':
				return toast.success(message, toastOptions);
			case 'error':
				return toast.error(message, toastOptions);
			case 'loading':
				return toast.loading(message, toastOptions);
			case 'custom':
				return toast(message, toastOptions);
			default:
				return toast(message, toastOptions);
		}
	}

	static showPromise(options: PromiseToastOptions) {
		const { promise, loading, success, error, duration = 3000, position } = options;

		const toastId = toast.loading(loading, { position });

		promise
			.then((data) => {
				if (success !== null) {
					toast.success(success, { id: toastId, duration, position });
				} else {
					toast.dismiss(toastId);
				}
				return data;
			})
			.catch((err) => {
				const errorMessage = typeof error === 'function' ? error(err) : error;
				toast.error(errorMessage, { id: toastId, duration, position });
			});

		return promise;
	}
}
