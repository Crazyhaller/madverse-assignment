import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Pokemon Types
  const grassType = await prisma.pokemonType.create({
    data: { name: 'Grass' },
  })

  const airType = await prisma.pokemonType.create({
    data: { name: 'Air' },
  })

  const waterType = await prisma.pokemonType.create({
    data: { name: 'Water' },
  })

  // Create Pokemons
  await prisma.pokemon.create({
    data: {
      name: 'Dragon',
      sprite:
        'https://cdn.mos.cms.futurecdn.net/JYEXpJURGks76oHVBc5cik-1200-80.jpg',
      pokemonType: {
        connect: [{ id: grassType.id }],
      },
    },
  })

  await prisma.pokemon.create({
    data: {
      name: 'Charmander',
      sprite:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVFNKUT6OcGKlCRlHkyDawCkLEX4fPpQsEw&s',
      pokemonType: {
        connect: [{ id: airType.id }],
      },
    },
  })

  await prisma.pokemon.create({
    data: {
      name: 'Squirtle',
      sprite:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png',
      pokemonType: {
        connect: [{ id: waterType.id }],
      },
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
