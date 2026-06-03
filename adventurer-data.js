// ============================================================================
// adventurer-data.js — gerado por scripts/scrape-adventurer.js em 2026-06-03T13:23:36.423Z
// Fonte: https://wiki.pokexgames.com/index.php/Craft_Profiss%C3%B5es_-_Aventureiro
//
// Schema:
//   { id, nome, imagem, tipo, rank, skill, [unidadesPorReceita], [tempo], recursos: [{nome, quantidade, imagem}] }
//   unidadesPorReceita=N => receita produz N unidades por execução (default 1 quando omitido)
//
// NÃO EDITE ESTE ARQUIVO À MÃO. Re-rode o scraper quando precisar atualizar.
// ============================================================================

const CRAFTS_ADVENTURER = [
  {
    "id": "diamond-dust-aventureiro",
    "nome": "Diamond Dust",
    "imagem": "https://wiki.pokexgames.com/images/a/a3/Diamond-dust.gif",
    "tipo": "material",
    "rank": "E",
    "skill": 2,
    "unidadesPorReceita": 20,
    "tempo": "5 Segundos",
    "recursos": [
      {
        "nome": "Diamond",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "item-finder-e-aventureiro",
    "nome": "Item Finder E",
    "imagem": "https://wiki.pokexgames.com/images/b/b3/Finder_E.png",
    "tipo": "finder",
    "rank": "E",
    "skill": 0,
    "unidadesPorReceita": 10,
    "tempo": "8 Minutos",
    "recursos": [
      {
        "nome": "Water Pendant",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Pot of Lava",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Rubber Ball",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      },
      {
        "nome": "Essence of Fire",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/94/Essence_of_fire.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Water_gem.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      }
    ]
  },
  {
    "id": "lockpick-aventureiro",
    "nome": "Lockpick",
    "imagem": "https://wiki.pokexgames.com/images/0/01/Lock_pick.png",
    "tipo": "item",
    "rank": "E",
    "skill": 0,
    "unidadesPorReceita": 2,
    "tempo": "20 Segundos",
    "recursos": [
      {
        "nome": "Small Stone",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Small_stone.png"
      },
      {
        "nome": "Earth Ball",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Earth_Ball.png"
      },
      {
        "nome": "Screw",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      }
    ]
  },
  {
    "id": "x-block-tier-1-aventureiro",
    "nome": "X-Block (Tier: 1)",
    "imagem": "https://wiki.pokexgames.com/images/b/bf/Blockt1.png",
    "tipo": "x-block",
    "rank": "E",
    "skill": 20,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Gold Coin",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Gold_Coin.png"
      }
    ]
  },
  {
    "id": "workshop-d-aventureiro",
    "nome": "Workshop D",
    "imagem": "https://wiki.pokexgames.com/images/c/c8/Adventurer_Workshop_D.png",
    "tipo": "workshop",
    "rank": "E",
    "skill": 20,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Diamond",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-d-portatil-aventureiro",
    "nome": "Workshop D (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/4/4b/Workshop_D_%28Port%C3%A1til%29.png",
    "tipo": "workshop",
    "rank": "E",
    "skill": 20,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Diamond",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "item-finder-d-aventureiro",
    "nome": "Item Finder D",
    "imagem": "https://wiki.pokexgames.com/images/d/db/Finder_D.png",
    "tipo": "finder",
    "rank": "D",
    "skill": 20,
    "unidadesPorReceita": 10,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Gold Coin",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Gold_coin.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Magnet",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Pot of Lava",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      }
    ]
  },
  {
    "id": "gold-bar-aventureiro",
    "nome": "Gold Bar",
    "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png",
    "tipo": "material",
    "rank": "D",
    "skill": 20,
    "tempo": "1 Segundo",
    "recursos": [
      {
        "nome": "Gold Coin",
        "quantidade": 110,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Gold_coin.png"
      }
    ]
  },
  {
    "id": "hotdog-costume-aventureiro",
    "nome": "Hotdog Costume",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Hotdog_costume.png",
    "tipo": "traje",
    "rank": "D",
    "skill": 25,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Hotdog",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Cachorrinho.png"
      },
      {
        "nome": "Hamburger",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Hamburguer.png"
      },
      {
        "nome": "Cooking Token",
        "quantidade": 175,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Cooking_Token.png"
      }
    ]
  },
  {
    "id": "pile-of-rocks-aventureiro",
    "nome": "Pile of Rocks",
    "imagem": "https://wiki.pokexgames.com/images/thumb/9/98/Pile_of_Rocks.png/70px-Pile_of_Rocks.png",
    "tipo": "material",
    "rank": "D",
    "skill": 30,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Stone Orb",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Strange Rock",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Gold Coin",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Gold_coin.png"
      }
    ]
  },
  {
    "id": "x-block-tier-2-aventureiro",
    "nome": "X-Block (Tier: 2)",
    "imagem": "https://wiki.pokexgames.com/images/8/8f/Blockt2.png",
    "tipo": "x-block",
    "rank": "D",
    "skill": 40,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "workshop-c-aventureiro",
    "nome": "Workshop C",
    "imagem": "https://wiki.pokexgames.com/images/0/0c/Adventurer_Workshop_C.png",
    "tipo": "workshop",
    "rank": "D",
    "skill": 40,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Diamond",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-c-portatil-aventureiro",
    "nome": "Workshop C (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/f/f3/Workshop_C%28Port%C3%A1til%29.png",
    "tipo": "workshop",
    "rank": "D",
    "skill": 40,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Diamond",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "item-finder-c-aventureiro",
    "nome": "Item Finder C",
    "imagem": "https://wiki.pokexgames.com/images/e/e7/Finder_C.png",
    "tipo": "finder",
    "rank": "C",
    "skill": 40,
    "unidadesPorReceita": 10,
    "tempo": "30 Minutos",
    "recursos": [
      {
        "nome": "Gold Coin",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Gold_coin.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Pot of Lava",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Pinsir Horn",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/d/de/Pinsir_Horn.png"
      },
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Insect Claw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png"
      },
      {
        "nome": "Bug Gosme",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Bug_Gosme.png"
      }
    ]
  },
  {
    "id": "unfinished-articuno-sculpture-aventureiro",
    "nome": "Unfinished Articuno Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/0/0b/Unfinished_Articuno_Sculpture.png",
    "tipo": "sculpture",
    "rank": "C",
    "skill": 50,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Gold Coin",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Gold_coin.png"
      },
      {
        "nome": "Pile of Rocks",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/thumb/9/98/Pile_of_Rocks.png/40px-Pile_of_Rocks.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Ice Orb",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Seal Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/7/73/Seal_Tail.png"
      },
      {
        "nome": "Bird Beak",
        "quantidade": 167,
        "imagem": "https://wiki.pokexgames.com/images/0/0c/BirdBeak.png"
      }
    ]
  },
  {
    "id": "unfinished-moltres-sculpture-aventureiro",
    "nome": "Unfinished Moltres Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/7/76/Unfinished_Moltres_Sculpture.png",
    "tipo": "sculpture",
    "rank": "C",
    "skill": 50,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Gold Coin",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Gold_coin.png"
      },
      {
        "nome": "Pile of Rocks",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/thumb/9/98/Pile_of_Rocks.png/40px-Pile_of_Rocks.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Pot of Lava",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 34,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Bird Beak",
        "quantidade": 167,
        "imagem": "https://wiki.pokexgames.com/images/0/0c/BirdBeak.png"
      }
    ]
  },
  {
    "id": "unfinished-zapdos-sculpture-aventureiro",
    "nome": "Unfinished Zapdos Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/2/26/Unfinished_Zapdos_Sculpture.png",
    "tipo": "sculpture",
    "rank": "C",
    "skill": 50,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Gold Coin",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Gold_coin.png"
      },
      {
        "nome": "Pile of Rocks",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/thumb/9/98/Pile_of_Rocks.png/40px-Pile_of_Rocks.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Bird Beak",
        "quantidade": 167,
        "imagem": "https://wiki.pokexgames.com/images/0/0c/BirdBeak.png"
      }
    ]
  },
  {
    "id": "x-block-tier-3-aventureiro",
    "nome": "X-Block (Tier: 3)",
    "imagem": "https://wiki.pokexgames.com/images/8/83/Blockt3.png",
    "tipo": "x-block",
    "rank": "C",
    "skill": 60,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "workshop-b-aventureiro",
    "nome": "Workshop B",
    "imagem": "https://wiki.pokexgames.com/images/e/ee/Adventurer_Workshop_B.png",
    "tipo": "workshop",
    "rank": "C",
    "skill": 60,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Diamonds",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-b-portatil-aventureiro",
    "nome": "Workshop B (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/Workshop_B_%28Port%C3%A1til%29.png",
    "tipo": "workshop",
    "rank": "C",
    "skill": 60,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Diamonds",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "item-finder-b-aventureiro",
    "nome": "Item Finder B",
    "imagem": "https://wiki.pokexgames.com/images/f/f8/Finder_B.png",
    "tipo": "finder",
    "rank": "B",
    "skill": 60,
    "unidadesPorReceita": 10,
    "tempo": "1 Hora e 40 Minutos",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      },
      {
        "nome": "Strange Rock",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Horn Drill",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Miss Trace",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png"
      },
      {
        "nome": "Strange Antenna",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Strange_Antenna.png"
      },
      {
        "nome": "Lizard Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Lizard_Tail.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Sheep Wool",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png"
      },
      {
        "nome": "Wooper Horn",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Wooper_Horn.png"
      }
    ]
  },
  {
    "id": "articuno-sculpture-aventureiro",
    "nome": "Articuno Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/0/08/Articuno_Sculpture.png",
    "tipo": "sculpture",
    "rank": "B",
    "skill": 70,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Unfinished Articuno Sculpture",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/thumb/0/0b/Unfinished_Articuno_Sculpture.png/50px-Unfinished_Articuno_Sculpture.png"
      },
      {
        "nome": "Ice Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Ice-stone.gif"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "moltres-sculpture-aventureiro",
    "nome": "Moltres Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/f/f8/Moltres_Sculpture.png",
    "tipo": "sculpture",
    "rank": "B",
    "skill": 70,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Unfinished Moltres Sculpture",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/thumb/7/76/Unfinished_Moltres_Sculpture.png/50px-Unfinished_Moltres_Sculpture.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "zapdos-sculpture-aventureiro",
    "nome": "Zapdos Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/b/b5/Zapdos_Sculpture.png",
    "tipo": "sculpture",
    "rank": "B",
    "skill": 70,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Unfinished Zapdos Sculpture",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/26/Unfinished_Zapdos_Sculpture.png/45px-Unfinished_Zapdos_Sculpture.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "x-block-tier-4-aventureiro",
    "nome": "X-Block (Tier: 4)",
    "imagem": "https://wiki.pokexgames.com/images/8/80/Blockt4.png",
    "tipo": "x-block",
    "rank": "B",
    "skill": 80,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "super-grill-aventureiro",
    "nome": "Super Grill",
    "imagem": "https://wiki.pokexgames.com/images/a/a4/Super_Grill1.png",
    "tipo": "máquina",
    "rank": "B",
    "skill": 64,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      },
      {
        "nome": "Pikaburger",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Pikaburguer.png"
      },
      {
        "nome": "Hamburger",
        "quantidade": 750,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Hamburguer.png"
      },
      {
        "nome": "Cooking Token",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Cooking_Token.png"
      }
    ]
  },
  {
    "id": "workshop-a-aventureiro",
    "nome": "Workshop A",
    "imagem": "https://wiki.pokexgames.com/images/b/b6/Adventurer_Workshop_A.png",
    "tipo": "workshop",
    "rank": "B",
    "skill": 80,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Diamonds",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-a-portatil-aventureiro",
    "nome": "Workshop A (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/1/1c/Workshop_A_%28Port%C3%A1til%29.png",
    "tipo": "workshop",
    "rank": "B",
    "skill": 80,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Diamonds",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "item-finder-a-aventureiro",
    "nome": "Item Finder A",
    "imagem": "https://wiki.pokexgames.com/images/9/90/Item_finder_A.png",
    "tipo": "finder",
    "rank": "A",
    "skill": 80,
    "unidadesPorReceita": 10,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      },
      {
        "nome": "Metal Jaw",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Metal_Jaw.png"
      },
      {
        "nome": "Giant Bat Wing",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Giant_Bat_Wing.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Bear Paw",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Bear_Paw.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      },
      {
        "nome": "Seahorse Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Seahorse_Tail.png"
      },
      {
        "nome": "Karate Duck",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Dog Ear",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e5/Dog_Ear.png"
      },
      {
        "nome": "Strange Flower",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/Strange_Flower.png"
      },
      {
        "nome": "Hyena Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Hyena_tail.png"
      },
      {
        "nome": "Mini Wings",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      }
    ]
  },
  {
    "id": "mystic-lamp-aventureiro",
    "nome": "Mystic Lamp",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Mystic_lamp.png",
    "tipo": "item",
    "rank": "A",
    "skill": 92,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Mystic Fragment",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/3/3a/Mystic_fragment.png"
      },
      {
        "nome": "Solid Rock Paw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Solid_Rock_Paw.png"
      },
      {
        "nome": "Massive Vines",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Massive_Vines.png"
      },
      {
        "nome": "Max Volt Paw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Max_Volt_Paw.png"
      },
      {
        "nome": "Blaze Topknot",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Blaze_Topknot.png"
      },
      {
        "nome": "Scary Smile",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Scary_Smile.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Mummy Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Mummy_toy.png"
      },
      {
        "nome": "Old Book",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/30/Old_book.png"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "gold-coin-aventureiro",
    "nome": "Gold Coin",
    "imagem": "https://wiki.pokexgames.com/images/1/1f/Gold_Coin.png",
    "tipo": "material",
    "rank": "A",
    "skill": 80,
    "unidadesPorReceita": 100,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "High Tech CHIP",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Hightechchip.png"
      }
    ]
  },
  {
    "id": "chef-costume-aventureiro",
    "nome": "Chef Costume",
    "imagem": "https://wiki.pokexgames.com/images/6/6b/Chef_male.png",
    "tipo": "traje",
    "rank": "A",
    "skill": 90,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Roasted Shiny Magikarp",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Roasted_shiny_magikarp.png"
      },
      {
        "nome": "Grilled Gyarados Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Grilled_gyarados_tail.png"
      },
      {
        "nome": "Shoyu Tentacles",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Shoyu_tentacles.png"
      },
      {
        "nome": "Fried Omanyte",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/1b/Fried_omanyte.png"
      },
      {
        "nome": "Cooking Token",
        "quantidade": 750,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Cooking_Token.png"
      }
    ]
  },
  {
    "id": "bicycle-aventureiro",
    "nome": "Bicycle",
    "imagem": "https://wiki.pokexgames.com/images/9/95/Bicycle4.png",
    "tipo": "item",
    "rank": "A",
    "skill": 100,
    "tempo": "7 Dias",
    "recursos": [
      {
        "nome": "Metal Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Scythe",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Scythe1.png"
      },
      {
        "nome": "Venom flute",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Venom_Flute.png"
      },
      {
        "nome": "Horse Saddle",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Horse_Saddle.png"
      },
      {
        "nome": "Bull Red Saddle",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/01/Bull_Red_Saddle.png"
      },
      {
        "nome": "Bull Black Saddle",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/10/Bull_Black_Saddle.png"
      },
      {
        "nome": "Pony Saddle",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Pony_Saddle.png"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "power-source-aventureiro",
    "nome": "Power Source",
    "imagem": "https://wiki.pokexgames.com/images/f/fc/Power_Source.gif",
    "tipo": "item",
    "rank": "A",
    "skill": 98,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      },
      {
        "nome": "Greens",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Greens.png"
      },
      {
        "nome": "Zap",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Mini Volcano",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Mini_Volcano.png"
      },
      {
        "nome": "Palm Leaves",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png"
      }
    ]
  },
  {
    "id": "arceus-sculpture-aventureiro",
    "nome": "Arceus Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/3/3c/Arceus_Sculpture.png",
    "tipo": "sculpture",
    "rank": "A",
    "skill": 100,
    "tempo": "8 Dias",
    "recursos": [
      {
        "nome": "Scary Smile",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Scary_Smile.png"
      },
      {
        "nome": "Strange Tail",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Strange_Tail.png"
      },
      {
        "nome": "Golden Animal Statue",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/Golden_Animal_Statue.png/30px-Golden_Animal_Statue.png"
      },
      {
        "nome": "Mummy Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Mummy_toy.png"
      },
      {
        "nome": "Precious Ring",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Precious_ring.png"
      },
      {
        "nome": "Jewel Case",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/9/97/Jewel_Case.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Giant Pearl",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Giant_pearl.png"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "colored-articuno-sculpture-aventureiro",
    "nome": "Colored Articuno Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/7/7a/Colored_Articuno_Sculpture.png",
    "tipo": "sculpture",
    "rank": "A",
    "skill": 90,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Articuno Sculpture",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/0/08/Articuno_Sculpture.png/40px-Articuno_Sculpture.png"
      },
      {
        "nome": "Seavell Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Seavell_Urn.png"
      },
      {
        "nome": "Beautiful Scales",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Beautiful_Scales.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "colored-moltres-sculpture-aventureiro",
    "nome": "Colored Moltres Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Colored_Moltres_Sculpture.png",
    "tipo": "sculpture",
    "rank": "A",
    "skill": 90,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Moltres Sculpture",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/f/f8/Moltres_Sculpture.png/45px-Moltres_Sculpture.png"
      },
      {
        "nome": "Volcanic Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Volcanic_Urn.png"
      },
      {
        "nome": "Blaze Topknot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Blaze_Topknot.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "colored-zapdos-sculpture-aventureiro",
    "nome": "Colored Zapdos Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/0/00/Colored_Zapdos_Sculpture.png",
    "tipo": "sculpture",
    "rank": "A",
    "skill": 90,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Zapdos Sculpture",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/b/b5/Zapdos_Sculpture.png/40px-Zapdos_Sculpture.png"
      },
      {
        "nome": "Raibolt Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/8b/Raibolt_Urn.png"
      },
      {
        "nome": "Max Volt Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Max_Volt_Paw.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      },
      {
        "nome": "Gold Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "x-block-tier-5-aventureiro",
    "nome": "X-Block (Tier: 5)",
    "imagem": "https://wiki.pokexgames.com/images/1/13/Bockt5.png",
    "tipo": "x-block",
    "rank": "A",
    "skill": 100,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "x-block-tier-6-aventureiro",
    "nome": "X-Block (Tier: 6)",
    "imagem": "https://wiki.pokexgames.com/images/3/3c/Blockt6.png",
    "tipo": "x-block",
    "rank": "A",
    "skill": 100,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Gold Bar",
        "quantidade": 650,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Gold_bar.png"
      }
    ]
  },
  {
    "id": "mecha-aventureiro",
    "nome": "Mecha",
    "imagem": "https://wiki.pokexgames.com/images/1/19/Mecha.png",
    "tipo": "item",
    "rank": "A",
    "skill": 100,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Mecha Chip",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/35/Mecha_Chip.png"
      },
      {
        "nome": "Mecha Right Arm",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Mecha_Right_Arm.png"
      },
      {
        "nome": "Mecha Chest",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Mecha_Chest.png"
      },
      {
        "nome": "Mecha Left Arm",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Mecha_Left_Arm.png"
      },
      {
        "nome": "Power Source",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/fc/Power_Source.gif"
      }
    ]
  },
  {
    "id": "workshop-s-aventureiro",
    "nome": "Workshop S",
    "imagem": "https://wiki.pokexgames.com/images/6/65/Adventurer_workshop_S.png",
    "tipo": "workshop",
    "rank": "A",
    "skill": 100,
    "tempo": "7 Dias",
    "recursos": [
      {
        "nome": "Diamond",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-s-portatil-aventureiro",
    "nome": "Workshop S",
    "imagem": "https://wiki.pokexgames.com/images/d/de/Adventurer_Workshop_S_-_Port.png",
    "tipo": "workshop",
    "rank": "A",
    "skill": 100,
    "tempo": "7 Dias",
    "recursos": [
      {
        "nome": "Diamond",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "treasure-map-aventureiro",
    "nome": "Treasure Map",
    "imagem": "https://wiki.pokexgames.com/images/2/25/Treasure_Map.png",
    "tipo": "mapa",
    "rank": "S",
    "skill": 100,
    "tempo": "30 Minutos",
    "recursos": [
      {
        "nome": "Hidden Relic",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      }
    ]
  },
  {
    "id": "old-map-1-aventureiro",
    "nome": "Old Map",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Old_Map1.png",
    "tipo": "mapa",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      }
    ]
  },
  {
    "id": "old-map-2-aventureiro",
    "nome": "Old Map",
    "imagem": "https://wiki.pokexgames.com/images/3/36/Old_Map2.png",
    "tipo": "mapa",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      }
    ]
  },
  {
    "id": "old-map-3-aventureiro",
    "nome": "Old Map",
    "imagem": "https://wiki.pokexgames.com/images/9/9e/Old_Map3.png",
    "tipo": "mapa",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "old-map-4-aventureiro",
    "nome": "Old Map",
    "imagem": "https://wiki.pokexgames.com/images/b/ba/Old_Map4.png",
    "tipo": "mapa",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      }
    ]
  },
  {
    "id": "lost-jungle-rift-crystal-aventureiro",
    "nome": "Lost Jungle Rift Crystal",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Nightmare_Rift.png",
    "tipo": "rift",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Hidden Relic",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Small Eagle Feather",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Small_Eagle_Feather.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "forgotten-fortress-rift-crystal-aventureiro",
    "nome": "Forgotten Fortress Rift Crystal",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Nightmare_Rift.png",
    "tipo": "rift",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Hidden Relic",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Blue Ghost Candle",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/61/Blue_Ghost_Candle.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      }
    ]
  },
  {
    "id": "rainbow-woods-rift-crystal-aventureiro",
    "nome": "Rainbow Woods Rift Crystal",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Nightmare_Rift.png",
    "tipo": "rift",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Hidden Relic",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Small Eagle Feather",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Small_Eagle_Feather.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      }
    ]
  },
  {
    "id": "frozen-tunnels-rift-crystal-aventureiro",
    "nome": "Frozen Tunnels Rift Crystal",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Nightmare_Rift.png",
    "tipo": "rift",
    "rank": "S",
    "skill": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Hidden Relic",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      }
    ]
  },
  {
    "id": "gold-chest-aventureiro",
    "nome": "Gold Chest",
    "imagem": "https://wiki.pokexgames.com/images/d/d9/Gold_Chest.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 100,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      }
    ]
  },
  {
    "id": "bronze-chest-aventureiro",
    "nome": "Bronze Chest",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Bronze_Chest.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 100,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      }
    ]
  },
  {
    "id": "air-fryer-aventureiro",
    "nome": "Air Fryer",
    "imagem": "https://wiki.pokexgames.com/images/b/b6/Air_Fryer.png",
    "tipo": "máquina",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Food Bag",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Food_Bag.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "silver-air-fryer-aventureiro",
    "nome": "Silver Air Fryer",
    "imagem": "https://wiki.pokexgames.com/images/a/a4/Silver_Air_Fryer.png",
    "tipo": "máquina",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Food Bag",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Food_Bag.png"
      },
      {
        "nome": "Corrupted Dragon Thooth",
        "quantidade": 47,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      }
    ]
  },
  {
    "id": "microwave-aventureiro",
    "nome": "Microwave",
    "imagem": "https://wiki.pokexgames.com/images/6/6b/Microwave.png",
    "tipo": "máquina",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Food Bag",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Food_Bag.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      }
    ]
  },
  {
    "id": "futurist-stove-aventureiro",
    "nome": "Futurist Stove",
    "imagem": "https://wiki.pokexgames.com/images/c/c1/Futurist_Stove.png",
    "tipo": "máquina",
    "rank": "S",
    "skill": 103,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Food Bag",
        "quantidade": 6000,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Food_Bag.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Compressed Nightmare Gem",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      }
    ]
  },
  {
    "id": "adventurer-s-utility-belt-aventureiro",
    "nome": "Adventurer's Utility Belt",
    "imagem": "https://wiki.pokexgames.com/images/0/04/Adventurer%27s_Utility_Belt.png",
    "tipo": "item",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Hidden Relics",
        "quantidade": 3000,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      }
    ]
  },
  {
    "id": "golden-finder-aventureiro",
    "nome": "Golden Finder",
    "imagem": "https://wiki.pokexgames.com/images/0/03/Golden_Finder.png",
    "tipo": "finder",
    "rank": "S",
    "skill": 107,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Strange Gold Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Strange_Gold_Bar.png"
      },
      {
        "nome": "Red Spike",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Strange Fur",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Strange_Fur.png"
      },
      {
        "nome": "Corrupted Belt Champion",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      }
    ]
  },
  {
    "id": "silver-finder-aventureiro",
    "nome": "Silver Finder",
    "imagem": "https://wiki.pokexgames.com/images/b/b1/Silver_Finder.png",
    "tipo": "finder",
    "rank": "S",
    "skill": 110,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Strange Gold Bar",
        "quantidade": 21,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Strange_Gold_Bar.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Solid Head",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Dog Collar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/fd/Dog_Ear-Granbull_NW.png"
      }
    ]
  },
  {
    "id": "nightmare-compass-aventureiro",
    "nome": "Nightmare Compass",
    "imagem": "https://wiki.pokexgames.com/images/f/fb/Nightmare_Compass.gif",
    "tipo": "item",
    "rank": "S",
    "skill": 110,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Hidden Relics",
        "quantidade": 6000,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Strange Fur",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Strange_Fur.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Dragon Wings",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/f/fa/Dragon_Wings.png"
      },
      {
        "nome": "Corrupted Lizard Tail",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      },
      {
        "nome": "Corrupted Feather",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      },
      {
        "nome": "Corrupted Miss Trace",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Magnet Remains",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Magnet_Remains.png"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      }
    ]
  },
  {
    "id": "flame-chest-aventureiro",
    "nome": "Flame Chest",
    "imagem": "https://wiki.pokexgames.com/images/5/5d/Flame_Chest.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 110,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      }
    ]
  },
  {
    "id": "purple-flame-chest-aventureiro",
    "nome": "Purple Flame Chest",
    "imagem": "https://wiki.pokexgames.com/images/f/f7/Purple_Flame_Chest.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 110,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      }
    ]
  },
  {
    "id": "green-flame-chest-aventureiro",
    "nome": "Green Flame Chest",
    "imagem": "https://wiki.pokexgames.com/images/0/02/Green_Flame_Chest_.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 110,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Green Hair",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "blue-flame-chest-aventureiro",
    "nome": "Blue Flame Chest",
    "imagem": "https://wiki.pokexgames.com/images/1/17/Blue_Flame_Chest_.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 110,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Corrupted Lizard Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      }
    ]
  },
  {
    "id": "red-heavy-chest-aventureiro",
    "nome": "Red Heavy Chest",
    "imagem": "https://wiki.pokexgames.com/images/5/50/Red_Heavy_Chest_.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 110,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      }
    ]
  },
  {
    "id": "blue-heavy-chest-aventureiro",
    "nome": "Blue Heavy Chest",
    "imagem": "https://wiki.pokexgames.com/images/b/ba/Blue_Heavy_Chest_.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 110,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 36,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "imperial-chest-aventureiro",
    "nome": "Imperial Chest",
    "imagem": "https://wiki.pokexgames.com/images/a/ae/Imperial_Chest_.png",
    "tipo": "baú",
    "rank": "S",
    "skill": 110,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "mew-mewtwo-sculpture-aventureiro",
    "nome": "Mew & Mewtwo Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/c/cc/Mew_%26_Mewtwo_Sculpture.gif",
    "tipo": "sculpture",
    "rank": "S",
    "skill": 115,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Enigma Stone",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Pig Ear",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Cerise Shard",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Cerise_Shard.png"
      },
      {
        "nome": "Star Remains",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b1/Star_Remains.png"
      }
    ]
  },
  {
    "id": "celebi-sculpture-1-aventureiro",
    "nome": "Celebi Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/6/63/Celebi_Sculpture.png",
    "tipo": "sculpture",
    "rank": "S",
    "skill": 115,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Psycraft Essence",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/PsycraftEssence.png"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Red Spike",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Ancient Stone",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif"
      },
      {
        "nome": "Solid Head",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Beetle Horn",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Beetle_Horn.png"
      }
    ]
  },
  {
    "id": "celebi-sculpture-2-aventureiro",
    "nome": "Celebi Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/3/33/Celebi_Sculpture2.gif",
    "tipo": "sculpture",
    "rank": "S",
    "skill": 115,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Compressed Nightmare Gem",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Mole Big Hair",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      },
      {
        "nome": "Giant Dragon Pearl",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Giant_Dragon_Pearl.gif"
      }
    ]
  },
  {
    "id": "entei-sculpture-aventureiro",
    "nome": "Entei Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/9/9a/Entei_Sculpture.png",
    "tipo": "sculpture",
    "rank": "S",
    "skill": 115,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Entei's Legendary Fur",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Entei%27s_Legendary_Fur.png"
      },
      {
        "nome": "Royal Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Scarlet Shard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Scarlet_Shard.png"
      },
      {
        "nome": "Flame Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Flame Essence",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Flame-Essence.gif"
      }
    ]
  },
  {
    "id": "suicune-sculpture-aventureiro",
    "nome": "Suicune Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/2/29/Suicune_Sculpture.png",
    "tipo": "sculpture",
    "rank": "S",
    "skill": 115,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 110,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Suicune's Legendary Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Suicune%27s_Legendary_Tail.png"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Azure Shard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/25/Azure_Shard.png"
      },
      {
        "nome": "Emperor Trident",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Water Essence",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Water-Essencev2.gif"
      }
    ]
  },
  {
    "id": "raikou-sculpture-aventureiro",
    "nome": "Raikou Sculpture",
    "imagem": "https://wiki.pokexgames.com/images/8/8e/Raikou_Sculpture.png",
    "tipo": "sculpture",
    "rank": "S",
    "skill": 115,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Raikou's Legendary Tail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/f/fb/Raikou%27s_Legendary_Tail.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Sunflower Shard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Sunflower_Shard.png"
      },
      {
        "nome": "Gleam Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Thunder Essence",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/Thunder-Essence.gif"
      }
    ]
  },
  {
    "id": "nightmare-finder-aventureiro",
    "nome": "Nightmare Finder",
    "imagem": "https://wiki.pokexgames.com/images/0/0b/Nightmare_Finder.png",
    "tipo": "finder",
    "rank": "S",
    "skill": 106,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Hidden Relic",
        "quantidade": 102,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Hidden_Relic.png"
      },
      {
        "nome": "Dragon Slime",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Dragon_Slime.png"
      },
      {
        "nome": "Small Eagle Feather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Small_Eagle_Feather.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Compressed Nightmare Gem",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      }
    ]
  },
  {
    "id": "x-block-tier-7-aventureiro",
    "nome": "X-Block (Tier: 7)",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Block7.png",
    "tipo": "x-block",
    "rank": "S",
    "skill": 115,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 420,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Centipede Armors",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Golden Nuggets",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/d/d0/Golden_Nuggets.png"
      },
      {
        "nome": "Dragon Remains",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/79/Dragon_Remains.png"
      },
      {
        "nome": "Turtle Shell",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/5e/Turtle_Shell.png"
      }
    ]
  },
  {
    "id": "x-block-tier-8-aventureiro",
    "nome": "X-Block (Tier: 8)",
    "imagem": "https://wiki.pokexgames.com/images/8/8a/Block8.png",
    "tipo": "x-block",
    "rank": "S",
    "skill": 120,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 750,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Cow Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Lovely Topknot",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Corrupted Steelix Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Catfish Whiskers",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Catfish_Whiskers.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      },
      {
        "nome": "Mach Nail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Star Remains",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b1/Star_Remains.png"
      },
      {
        "nome": "Dragon Remains",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/7/79/Dragon_Remains.png"
      },
      {
        "nome": "Bear Feet",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/ef/Bear_Feet.png"
      },
      {
        "nome": "Magnet Remains",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Magnet_Remains.png"
      }
    ]
  },
  {
    "id": "rampardos-fossil-statue-s-platform-aventureiro",
    "nome": "Rampardos Fossil Statue's Platform",
    "imagem": "https://wiki.pokexgames.com/images/4/4b/Fossil_Statue_Platform.png",
    "tipo": "decoração",
    "rank": "S",
    "skill": 103,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Solid Red Head",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/7/79/Solid_Red_Head.png"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Corrupted Lizard Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      },
      {
        "nome": "Solid Head",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      }
    ]
  },
  {
    "id": "tyrantrum-fossil-statue-s-platform-aventureiro",
    "nome": "Tyrantrum Fossil Statue's Platform",
    "imagem": "https://wiki.pokexgames.com/images/4/4b/Fossil_Statue_Platform.png",
    "tipo": "decoração",
    "rank": "S",
    "skill": 103,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Dragon Wings",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/fa/Dragon_Wings.png"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Mach Nail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      }
    ]
  },
  {
    "id": "aurorus-fossil-statue-s-platform-aventureiro",
    "nome": "Aurorus Fossil Statue's Platform",
    "imagem": "https://wiki.pokexgames.com/images/4/4b/Fossil_Statue_Platform.png",
    "tipo": "decoração",
    "rank": "S",
    "skill": 103,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Corrupted Gold Bar",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted_Gold_Bar.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Frosty Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f2/Frosty_Tail.png"
      },
      {
        "nome": "Red Spike",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      }
    ]
  }
];
