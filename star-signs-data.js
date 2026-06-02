// ============================================================================
// Star Signs — fontes de pontos de constelação (PokeXGames).
// Extraído de: https://wiki.pokexgames.com/index.php/Star_Signs
//
// Schema por item:
//   {
//     id:        kebab-case estável (usado como chave no localStorage)
//     nome:      nome exibido (igual ao da wiki, em inglês)
//     categoria: string usada pra agrupar visualmente
//     pontos:    quantos pontos de constelação a fonte concede
//     questLink: (opcional) URL completa pra página da quest/recurso
//     nota:      (opcional) descrição curta
//   }
// ============================================================================

const STAR_SIGNS = [
  // --------------- Rocket Quests (Johto) ---------------
  {
    id: "three-initial-rocket-quests-johto",
    nome: "Três Rocket Quests Iniciais de Johto",
    categoria: "Rocket Quests (Johto)",
    pontos: 1,
    nota: "Slowpoke Well + Red Gyarados + Radio Tower Hijack (1 ponto pelas 3 juntas)"
  },
  {
    id: "time-traveler-quest",
    nome: "Time Traveler Quest",
    categoria: "Rocket Quests (Johto)",
    pontos: 3,
    questLink: "https://wiki.pokexgames.com/index.php/Time_Traveler_Quest",
    nota: "4ª Rocket Quest"
  },
  {
    id: "fifth-rocket-quest-johto",
    nome: "Fifth Rocket Quest of Johto",
    categoria: "Rocket Quests (Johto)",
    pontos: 3,
    nota: "5ª Rocket Quest"
  },

  // --------------- Outras Quests ---------------
  {
    id: "rainbow-hero-quest",
    nome: "The Rainbow Hero Quest",
    categoria: "Quests",
    pontos: 3,
    questLink: "https://wiki.pokexgames.com/index.php/The_Rainbow_Hero_Quest"
  },
  {
    id: "echoes-of-mt-silver-quest",
    nome: "Echoes of MT Silver Quest",
    categoria: "Quests",
    pontos: 1,
    questLink: "https://wiki.pokexgames.com/index.php/Echoes_of_MT_Silver_Quest"
  },

  // --------------- Conquistas / Progressão ---------------
  {
    id: "ascension-path",
    nome: "Ascension Path",
    categoria: "Conquistas",
    pontos: 2,
    nota: "Completar o Ascension Path"
  },
  {
    id: "johto-regional-level-200",
    nome: "Regional Level of Johto (200)",
    categoria: "Conquistas",
    pontos: 2,
    nota: "Atingir Level Regional 200 em Johto"
  },
  {
    id: "johto-pokemon-league",
    nome: "Johto Pokémon League",
    categoria: "Conquistas",
    pontos: 3,
    questLink: "https://wiki.pokexgames.com/index.php/Johto_Pok%C3%A9mon_League",
    nota: "Vencer a Liga de Johto"
  },
  {
    id: "all-unown-trials-johto",
    nome: "Unown Trials (All of Johto)",
    categoria: "Conquistas",
    pontos: 1,
    questLink: "https://wiki.pokexgames.com/index.php/Unown_Trials",
    nota: "Completar todas as Unown Trials de Johto"
  },
  {
    id: "all-world-bosses-johto",
    nome: "All World Bosses of Johto",
    categoria: "Conquistas",
    pontos: 1,
    nota: "Derrotar todos os World Bosses de Johto"
  },

  // --------------- Dungeon ---------------
  {
    id: "mystery-dungeon-stage-1",
    nome: "Mystery Dungeon — Stage 1",
    categoria: "Mystery Dungeon (Blue Energy)",
    pontos: 1
  },
  {
    id: "mystery-dungeon-stage-2",
    nome: "Mystery Dungeon — Stage 2",
    categoria: "Mystery Dungeon (Blue Energy)",
    pontos: 1
  },
  {
    id: "mystery-dungeon-stage-3",
    nome: "Mystery Dungeon — Stage 3",
    categoria: "Mystery Dungeon (Blue Energy)",
    pontos: 1
  },
  {
    id: "mystery-dungeon-stage-4",
    nome: "Mystery Dungeon — Stage 4",
    categoria: "Mystery Dungeon (Blue Energy)",
    pontos: 1
  },
  {
    id: "mystery-dungeon-stage-5",
    nome: "Mystery Dungeon — Stage 5",
    categoria: "Mystery Dungeon (Blue Energy)",
    pontos: 1
  },
  {
    id: "mystery-dungeon-stage-6",
    nome: "Mystery Dungeon — Stage 6",
    categoria: "Mystery Dungeon (Blue Energy)",
    pontos: 1
  },
  {
    id: "mystery-dungeon-stage-7",
    nome: "Mystery Dungeon — Stage 7",
    categoria: "Mystery Dungeon (Blue Energy)",
    pontos: 1
  },

  // --------------- Coleção ---------------
  {
    id: "rainbow-orbs-125",
    nome: "125 Rainbow Orbs",
    categoria: "Coleção",
    pontos: 1
  },
  {
    id: "rainbow-orbs-251",
    nome: "251 Rainbow Orbs",
    categoria: "Coleção",
    pontos: 1
  },

  // --------------- Marcos de Level ---------------
  { id: "level-605", nome: "Level 605", categoria: "Marcos de Level", pontos: 2 },
  { id: "level-610", nome: "Level 610", categoria: "Marcos de Level", pontos: 3 },
  { id: "level-615", nome: "Level 615", categoria: "Marcos de Level", pontos: 3 },
  { id: "level-620", nome: "Level 620", categoria: "Marcos de Level", pontos: 3 },
  { id: "level-625", nome: "Level 625", categoria: "Marcos de Level", pontos: 3 },

  // --------------- Champion ---------------
  {
    id: "red-the-greatest-trainer",
    nome: "Red, The Greatest Trainer",
    categoria: "Champion",
    pontos: 2,
    nota: "Derrotar Red"
  }
];
