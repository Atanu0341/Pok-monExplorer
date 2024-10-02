import React from 'react';

const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="relative bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col items-center text-center overflow-hidden">
      <figure className="relative flex flex-col items-center z-10">
        <img
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain mb-4 transition-transform duration-500 transform hover:scale-110 z-20"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
        <figcaption className="text-xl font-semibold text-gray-800 capitalize mt-2 z-20">
          {pokemonData.name}
        </figcaption>
      </figure>

      {/* Type Badges */}
      <div className="flex items-center justify-center gap-2 mt-2 z-10">
        <span className="px-3 py-1 bg-yellow-200 text-blue-800 text-xs font-medium rounded-full">
          {pokemonData.types[0].type.name}
        </span>
        {pokemonData.types[1] && (
          <span className="px-3 py-1 bg-green-200 text-green-800 text-xs font-medium rounded-full">
            {pokemonData.types[1].type.name}
          </span>
        )}
      </div>

      {/* Redesigned 2x2 Grid for Height, Weight, Base Experience, and Abilities */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
        <p className="flex flex-col items-center">
          <span className="font-semibold">Height</span>
          <span>{pokemonData.height} dm</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="font-semibold">Weight</span>
          <span>{pokemonData.weight} hg</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="font-semibold">Base Exp</span>
          <span>{pokemonData.base_experience}</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="font-semibold">Abilities</span>
          <span>
            {pokemonData.abilities.map((ability, index) => (
              <span key={index} className="ml-1 capitalize">
                {ability.ability.name}
                {index < pokemonData.abilities.length - 1 && ', '}
              </span>
            ))}
          </span>
        </p>
      </div>

      {/* Base Stats */}
      <div className="mt-6">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Base Stats:</span>
        </p>
        <ul className="text-sm text-gray-600 space-y-1 mt-2">
          {pokemonData.stats.map((stat, index) => (
            <li key={index} className="flex justify-between">
              <span className="font-semibold capitalize">{stat.stat.name}:</span>
              <span className="ml-6">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PokemonCards;
