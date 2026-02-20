import { useState } from "react";
import { Book } from "../types/Book";

export default function useBookToggle(onToggle: (id: string) => Promise<any>, data: Book | null) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingId, setPendingId] = useState<string | null>(null);

    const requestToggle = (checked: boolean) => {
        console.log(checked)
        if (!data) return;

        if (data.active && !checked) {
            setPendingId(data.id);
            setShowConfirm(true);
        } else {
            onToggle(data.id);
        }
    };

    const confirmToggle = async () => {
        if (pendingId) await onToggle(pendingId);
        setPendingId(null);
        setShowConfirm(false);
    };

    const cancelToggle = () => {
        setPendingId(null);
        setShowConfirm(false);
    };

    return { showConfirm, requestToggle, confirmToggle, cancelToggle };
}