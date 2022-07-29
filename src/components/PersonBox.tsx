import React from "react"

type Props = {
    id: string,
    name: string,
    onDelete?: (id: string) => void
}

export default function PersonBox({ id, name, onDelete }: Props) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (onDelete)
            onDelete(id);
    }

    return (
        <button className="text-lg font-semibold sm:text-base text-stone-600 sm:hover:outline sm:hover:outline-1 sm:hover:outline-red-700 sm:hover:text-red-700 cursor-pointer transition-colors flex items-center gap-1 px-2 py-2 sm:px-2 sm:py-1 bg-stone-100 rounded" onClick={handleClick}>
            <span>{ name }</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </button>
    )
}