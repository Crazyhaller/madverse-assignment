-- CreateTable
CREATE TABLE "Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sprite" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PokemonType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PokemonToPokemonType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PokemonToPokemonType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PokemonToPokemonType_B_fkey" FOREIGN KEY ("B") REFERENCES "PokemonType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PokemonType_name_key" ON "PokemonType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToPokemonType_AB_unique" ON "_PokemonToPokemonType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToPokemonType_B_index" ON "_PokemonToPokemonType"("B");
