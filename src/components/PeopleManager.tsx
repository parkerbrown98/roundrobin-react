import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import PersonBox from './PersonBox';
import PersonInput from './PersonInput';
import PairRound from './PairRound';
import LoadingBars from './LoadingBars';

export type Person = {
    id: string,
    name: string
}

export default function PeopleManager() {
    const [people, setPeople] = useState<Person[]>([]);
    const [rounds, setRounds] = useState<string[][][]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handlePersonAdd = (name: string) => {
        setPeople([...people, { id: uuidv4(), name }]);
    }

    const handlePersonDelete = (id: string) => {
        const newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople);
    }

    const handleGenerateClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setLoading(true);

        const peopleString = people.map(person => person.name.replace(',', '_')).join(',');
        const response = await axios.get(process.env.REACT_APP_API_URL!, {
            params: {
                p: peopleString
            }
        });

        setRounds(response.data as string[][][]);
        setLoading(false);
    }

    return (
        <>
            <PersonInput className="mt-16" onChange={handlePersonAdd} />
            <div className="mt-4 flex flex-wrap sm:flex-wrap gap-2">
                <button className={`${people.length > 0 ? 'text-white hover:bg-blue-800 bg-blue-700' : 'text-stone-400 bg-stone-200'} w-full sm:w-auto mt-2 sm:mt-0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base py-3 sm:text-sm px-4 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors`} onClick={handleGenerateClick} disabled={people.length === 0}>Generate</button>
                { people.map(person => <PersonBox key={person.id} id={person.id} name={person.name} onDelete={handlePersonDelete} />) }
            </div>
            { loading ? <LoadingBars /> : (
                <div className="mt-4 divide-y divide-stone-300">
                    { rounds.map((round, idx) => <PairRound key={idx} round={idx + 1} pairs={round} />) }
                </div>
            )}
        </>
    )
}