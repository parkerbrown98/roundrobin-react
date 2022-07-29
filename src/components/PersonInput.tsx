import React, { useState } from "react";

type Props = {
    className?: string,
    onChange?: (name: string) => void
}

export default function PeopleInput({ className, onChange }: Props) {
    const [text, setText] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setText(event.target.value);
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (onChange && text.length > 0)
            onChange(text);

        setText('');
    }

    return (
        <form className={className} onSubmit={handleFormSubmit}>   
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </div>
                <input type="search" id="search" className="block p-4 pl-11 w-full text-xl text-stone-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type a name" value={text} onChange={handleTextChange} autoFocus required />
                <button type="submit" className="text-white absolute right-3 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </div>
        </form>
    )
}