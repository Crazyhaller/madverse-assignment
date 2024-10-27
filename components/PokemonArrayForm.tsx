'use client'

import { useState } from 'react'
import { trpc } from '@/server/client'
import PokedexTable from './PokedexTable'

const PokemonArrayForm: React.FC = () => {
  const [names, setNames] = useState<string[]>([])
  const { data: pokemons, refetch } = trpc.pokemons.getPokemonByNames.useQuery(
    names,
    {
      enabled: false,
    }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-green-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={names.join(', ')}
          onChange={(e) => setNames(e.target.value.split(', '))}
          placeholder="Enter Pokémon names (comma separated)"
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Get Pokémons
        </button>
      </form>
      {pokemons && <PokedexTable pokemons={pokemons} />}
    </div>
  )
}

export default PokemonArrayForm
