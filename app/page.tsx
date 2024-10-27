'use client'

import FilterablePokedexTable from '@/components/FilterablePokedexTable'
import PokemonArrayForm from '@/components/PokemonArrayForm'
import PokemonForm from '@/components/PokemonForm'

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-yellow-800">Pokemons</h1>
      <PokemonForm />
      <PokemonArrayForm />
      <FilterablePokedexTable />
    </div>
  )
}
