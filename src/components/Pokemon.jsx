import React, { useEffect, useState } from 'react';
import PokemonCards from './PokemonCards';

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20); // Set items per page

    const API = `https://pokeapi.co/api/v2/pokemon?limit=500&offset=${(currentPage - 1) * itemsPerPage}`; // Increased limit for pagination

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            const detailedPokemonData = await Promise.all(
                data.results.map(async (curPokemon) => {
                    const res = await fetch(curPokemon.url);
                    return res.json();
                })
            );

            setPokemon(detailedPokemonData);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    // search functionality
    const searchData = pokemon.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const indexOfLastPokemon = currentPage * itemsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
    const currentPokemon = searchData.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const totalPages = Math.ceil(searchData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        return <h1 className="text-2xl font-bold text-center text-gray-500 mt-48">Loading...</h1>;
    }

    if (error) {
        return <h1 className="text-2xl font-bold text-center text-red-500 mt-48">{error.message}</h1>;
    }

    return (
        <section className="p-4">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-yellow-600">Let's Catch Pokémon</h1>
            </header>

            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search Pokémon..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6M10 4a6 6 0 100 12 6 6 0 000-12z" />
                        </svg>
                    </span>
                </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentPokemon.map((curPokemon) => (
                    <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                ))}
            </ul>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-6">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 transition duration-200">
                    Previous
                </button>
                <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 transition duration-200">
                    Next
                </button>
            </div>
        </section>
    );
}

export default Pokemon;
