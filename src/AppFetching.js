import React, {useEffect, useRef, useState} from 'react'
import axios from "axios";

export default function App() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('react hooks');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchInputRef = useRef();

    useEffect(() => {
        getResults()
    }, [query]);

    const getResults = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setResults(response.data.hits);
        } catch (err) {
            setError(err)
        }
        setLoading(false);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        getResults();
    };

    const handleClearSearch = () => {
        setQuery("");
        searchInputRef.current.focus();
    };

    return (<div className={"container max-w-md mx-auto p-4 m-2 bg-purple-500 shadow-lg rounded"}>
            <h1 className={"text-grey-darkest font-thin text-center"}>Hooks News</h1>
            <form onSubmit={handleSearch} className={"mb-2"}>
                <input type="text" value={query} onChange={event => setQuery(event.target.value)} ref={searchInputRef}/>
                <button type={"submit"} className={"bg-orange-500 rounded m-1 p-1"}>Search</button>
                <button type={"button"} className={"bg-teal-500 rounded m-1 p-1"} onClick={handleClearSearch}>Clear</button>
            </form>
            {loading ? (
                <div>Loading results...</div>
            ) : (<ul className={"list-reset leading-normal"}>
                {results.map((result) => (
                    <li key={result.objectID}>
                        <a href={result.url} className={"text-indigo-dark hover:text-indigo-darkest"}>{result.title}</a>
                    </li>
                ))}
            </ul>)}
            {error && <div>{error.message}</div>}
        </div>
    );
}