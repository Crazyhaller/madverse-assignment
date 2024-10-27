import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const pokemonRouter = router({
  // GET ALL POKEMONS
  getAllPokemons: publicProcedure.query(async () => {
    return await prisma.pokemon.findMany()
  }),

  // Part 1: Get Pokémon by name
  getPokemonByName: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
        include: { pokemonType: true },
      })
      if (!pokemon) {
        throw new Error(`Pokemon with name ${input} not found`)
      }
      return pokemon
    }),

  // Part 2: Get Pokémon by an array of names
  getPokemonByNames: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: { name: { in: input } },
        include: { pokemonType: true },
      })
      return pokemons
    }),

  // Part 3: Get Pokémon by type
  getPokemonByType: publicProcedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: input ? { pokemonType: { some: { name: input } } } : {},
        include: { pokemonType: true },
      })
      return pokemons
    }),
})
