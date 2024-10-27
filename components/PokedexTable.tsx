import PokemonRow from './PokemonRow'

type PokedexTableProps = {
  pokemons: {
    id: number
    name: string
    pokemonType: { name: string }[]
    sprite: string
  }[]
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => (
  <div className="grid grid-cols-1 gap-4 p-4 bg-red-100 rounded-lg shadow-lg">
    {pokemons.map((pokemon) => (
      <PokemonRow
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        pokemonType={pokemon.pokemonType.map((type) => type.name)}
        sprite={pokemon.sprite}
      />
    ))}
  </div>
)

export default PokedexTable
