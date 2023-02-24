import './App.css';
import MovieList from './components/MovieList.js';

function App() {
    const movies = [
        { title: 'Strangler', year: 2008, stars: ['Keira Knightley', 'Carrie Coon', 'Chris Cooper'] },
        { title: 'Ke Huy Quan', year: 2006, stars: ['Ke Huy Quan', 'Carrie Coon'] },
        { title: 'Good child', year: 2009, stars: ['Ke Huy Quan', 'Carrie Coon'] }
    ];
    return (
        <div className="App">
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
