// components/Toast.tsx
import { useEffect, useState } from "react";

type ToastProps = {
    type: "success" | "error";
    message: string;
    onClose: () => void;
};

export default function Toast({ type, message, onClose }: ToastProps) {
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        
        const timer = setTimeout(onClose, 6000); // Increased to 6 seconds
        return () => clearTimeout(timer);
    }, [onClose, isPaused]);
    const colorMap = {
        success: {
            bg: "bg-white",
            border: "border-primary",
            text: "text-primary",
            icon: "text-primary",
            progress: "bg-primary",
        },
        error: {
            bg: "bg-white",
            border: "border-red-200",
            text: "text-red-800",
            icon: "text-red-600",
            progress: "bg-red-600",
        },
    }[type];

    const isSuccess = type === "success";

    return (
        <div 
            className={`fixed top-2 sm:bottom-2 sm:left-2 sm:translate-x-0 left-1/2 -translate-x-1/2 ${colorMap.bg} ${colorMap.border} text-right flex items-center justify-between gap-4 shadow-lg border rounded-md px-4 py-3 w-[90%] max-w-md h-fit z-[999999] animate-fade-in`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-black text-lg"
            >
                ×
            </button>
            <span className={`${colorMap.text} font-semibold`}>{message}</span>
            <div className={`${colorMap.icon} text-xl`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 9v2m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
            </div>
            <div className={`absolute bottom-0 left-0 h-1 ${colorMap.progress} transition-all duration-75 ${isPaused ? 'animate-paused' : 'animate-toast-progress'}`} />
        </div>
    );
}
