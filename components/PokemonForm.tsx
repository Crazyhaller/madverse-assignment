import React, { useState } from 'react'
import { trpc } from '@/server/client'
import PokemonRow from './PokemonRow'

const PokemonForm: React.FC = () => {
  const [name, setName] = useState('')
  const { data: pokemon, refetch } = trpc.pokemons.getPokemonByName.useQuery(
    name,
    {
      enabled: false,
    }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-blue-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Pokémon name"
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Get Pokémon
        </button>
      </form>
      {pokemon && (
        <PokemonRow
          {...pokemon}
          pokemonType={pokemon.pokemonType.map((type) => type.name)}
        />
      )}
    </div>
  )
}

export default PokemonForm
