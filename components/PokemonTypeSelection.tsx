type PokemonTypeSelectionProps = {
  selectedType: string | undefined
  selectType: (type: string | undefined) => void
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectType(e.target.value || undefined)
  }

  return (
    <select
      value={selectedType}
      onChange={handleChange}
      className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-100"
    >
      <option value="">All</option>
      <option value="Grass">Grass</option>
      <option value="Air">Air</option>
      <option value="Water">Water</option>
      {/* Add more types as needed */}
    </select>
  )
}

export default PokemonTypeSelection
