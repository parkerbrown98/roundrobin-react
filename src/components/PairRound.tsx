import PersonPair from "./PersonPair"

type Props = {
    round: number,
    pairs: string[][]
}

export default function PairRound({ round, pairs }: Props) {
    return (
        <div className="py-8">
            <h3 className="text-2xl text-stone-700 font-bold">Round { round }</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-8">
                { pairs.map((pair, idx) => <PersonPair key={idx} pair={pair} />) }
            </div>
        </div>
    )
}