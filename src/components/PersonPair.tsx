type Props = {
    pair: string[]
}

export default function PersonPair({ pair }: Props) {
    return (
        <div className="relative flex flex-col gap-2">
            <div className="overflow-x-clip whitespace-nowrap text-ellipsis text-center rounded-full bg-stone-100 text-stone-600 font-semibold px-4 py-1">{ pair[0] }</div>
            <div className="overflow-x-clip whitespace-nowrap text-ellipsis text-center rounded-full bg-stone-100 text-stone-600 font-semibold px-4 py-1">{ pair[1] }</div>
            <div className="link-bar"></div>
        </div>
    )
}