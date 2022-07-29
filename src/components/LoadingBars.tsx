export default function LoadingBars() {
    return (
        <div>
            <h3 className="mt-16 text-2xl text-stone-500 font-bold animate-pulse">Fetching awesome results...</h3>
            <div className="mt-8 flex flex-col gap-16 animate-pulse">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-2 bg-stone-200 rounded"></div>
                    <div className="w-2/3 h-2 bg-stone-200 rounded"></div>
                    <div className="w-1/3 h-2 bg-stone-200 rounded"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-full h-2 bg-stone-200 rounded"></div>
                    <div className="w-2/3 h-2 bg-stone-200 rounded"></div>
                    <div className="w-1/3 h-2 bg-stone-200 rounded"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-full h-2 bg-stone-200 rounded"></div>
                    <div className="w-2/3 h-2 bg-stone-200 rounded"></div>
                    <div className="w-1/3 h-2 bg-stone-200 rounded"></div>
                </div>
            </div>
        </div>
    )
}