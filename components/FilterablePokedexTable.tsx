'use client'

import { useState } from 'react'
import { trpc } from '@/server/client'
import PokemonTypeSelection from './PokemonTypeSelection'
import PokedexTable from './PokedexTable'

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  )
  const { data: pokemons, refetch } = trpc.pokemons.getPokemonByType.useQuery(
    selectedType,
    {
      enabled: false,
    }
  )

  const handleTypeChange = (type: string | undefined) => {
    setSelectedType(type)
    refetch()
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-purple-100 rounded-lg shadow-lg">
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={handleTypeChange}
      />
      {pokemons && <PokedexTable pokemons={pokemons} />}
    </div>
  )
}

export default FilterablePokedexTable
