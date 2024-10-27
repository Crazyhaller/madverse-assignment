import React from 'react'

type PokemonRowProps = {
  id: number
  name: string
  pokemonType: string[]
  sprite: string
}

const PokemonRow: React.FC<PokemonRowProps> = ({
  id,
  name,
  pokemonType,
  sprite,
}) => (
  <div className="flex items-center space-x-4 p-4 border border-yellow-500 rounded-lg shadow-lg bg-yellow-100 hover:bg-yellow-200 transition duration-300">
    <img src={sprite} alt={name} className="w-16 h-16" />
    <div>
      <p className="text-lg font-bold text-yellow-800">{name}</p>
      <p className="text-yellow-700">ID: {id}</p>
      <p className="text-yellow-700">Types: {pokemonType.join(', ')}</p>
    </div>
  </div>
)

export default PokemonRow
