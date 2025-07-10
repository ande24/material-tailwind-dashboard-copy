import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

type AlertProps = {
    color?: string;
    open: boolean;
    text: string | ReactNode;
    icon?: ReactNode;
    onClose: () => void;
}

export default function Alert ({ color, open, text, icon, onClose }: AlertProps) {
    if (!open) { 
        return; 
    }
    return (
        <div className={`w-full h-14 rounded-lg shadow-sm flex justify-between items-center p-4 text-gray-200 font-lg ${color === "green" ? "bg-green-700" : color === "orange" ? "bg-orange-400" : color === "red" ? "bg-red-500" : "bg-black"}`}>
            <div className={`flex justify-center items-center gap-4`}>
                {icon}
                {text}
            </div>
            <button className={`cursor-pointer`} onClick={onClose}>
                <RxCross2 strokeWidth={1} className={`text-xl`}/>
            </button>
        </div>
    )
}