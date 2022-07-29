import Container from './components/Container';
import PeopleManager from './components/PeopleManager';

function App() {
    return (
        <Container>
            <h1 className="mt-16 text-center text-5xl sm:text-6xl font-bold">Pair Generator</h1>
            <h4 className="text-center text-xl sm:text-2xl text-stone-400 font-semibold">(with rounds)</h4>
            <PeopleManager />
        </Container>
    )
}

export default App;
