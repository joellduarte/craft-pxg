// ============================================================================
// engineer-data.js — gerado por scripts/scrape-engineer.js em 2026-06-18T21:15:09.138Z
// Fonte: https://wiki.pokexgames.com/index.php/Craft_Profiss%C3%B5es_-_Engenheiro
//
// Schema:
//   { id, nome, imagem, tipo, rank, skill, [unidadesPorReceita], [tempo], recursos: [{nome, quantidade, imagem}] }
//   unidadesPorReceita=N => receita produz N unidades por execução (default 1 quando omitido)
//
// NÃO EDITE ESTE ARQUIVO À MÃO. Re-rode o scraper quando precisar atualizar.
// ============================================================================

const CRAFTS_ENGINEER = [
  {
    "id": "poke-ball-engenheiro",
    "nome": "Poke Ball",
    "imagem": "https://wiki.pokexgames.com/images/8/8e/Poke-ball%281%29.png",
    "tipo": "pokebola",
    "rank": "E",
    "skill": 0,
    "unidadesPorReceita": 100,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Screw",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Rubber Ball",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "glass-engenheiro",
    "nome": "Glass",
    "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png",
    "tipo": "material",
    "rank": "E",
    "skill": 7,
    "tempo": "30 Segundos",
    "recursos": [
      {
        "nome": "Sandbag",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/52/SandbagMark.png"
      }
    ]
  },
  {
    "id": "screw-engenheiro",
    "nome": "Screw",
    "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png",
    "tipo": "material",
    "rank": "E",
    "skill": 0,
    "unidadesPorReceita": 80,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Iron Ore",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "diamond-dust-engenheiro",
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
    "id": "viking-helmet-engenheiro",
    "nome": "Viking Helmet",
    "imagem": "https://wiki.pokexgames.com/images/7/72/Viking_Helmet.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 10,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Piece of Diglett",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2a/Piece_Of_Diglett.png"
      },
      {
        "nome": "Earth Ball",
        "quantidade": 168,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Earth_Ball.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "frankenstein-cap-engenheiro",
    "nome": "Frankenstein Cap",
    "imagem": "https://wiki.pokexgames.com/images/0/0a/Frankenstein_Cap.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 12,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Psyduck Mug",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Psyduck_Mug.png"
      },
      {
        "nome": "Screw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "flying-glasses-1-engenheiro",
    "nome": "Flying Glasses",
    "imagem": "https://wiki.pokexgames.com/images/c/cb/Flying_Glasses.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 14,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Colored Feather",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Glass",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Straw",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "dog-collar-engenheiro",
    "nome": "Dog Collar",
    "imagem": "https://wiki.pokexgames.com/images/8/8a/Dog-collar.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 16,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Giant Piece of Fur",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Fur",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/FurMark.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "game-boy-advanced-engenheiro",
    "nome": "Game Boy Advanced",
    "imagem": "https://wiki.pokexgames.com/images/6/6f/Game_Boy_Advanced.png",
    "tipo": "eletronico",
    "rank": "E",
    "skill": 3,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Screw",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "super-nintendo-engenheiro",
    "nome": "Super Nintendo",
    "imagem": "https://wiki.pokexgames.com/images/1/13/Super_Nintendo.png",
    "tipo": "eletronico",
    "rank": "E",
    "skill": 8,
    "tempo": "8 Minutos",
    "recursos": [
      {
        "nome": "Screw",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "game-boy-color-engenheiro",
    "nome": "Game Boy Color",
    "imagem": "https://wiki.pokexgames.com/images/c/c6/Game-boy-color.png",
    "tipo": "eletronico",
    "rank": "E",
    "skill": 7,
    "tempo": "18 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Screw",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "nintendo-3ds-engenheiro",
    "nome": "Nintendo 3DS",
    "imagem": "https://wiki.pokexgames.com/images/9/9e/Nintendo_3DS.png",
    "tipo": "eletronico",
    "rank": "E",
    "skill": 12,
    "tempo": "28 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Screw",
        "quantidade": 160,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "px-portable-engenheiro",
    "nome": "PX Portable",
    "imagem": "https://wiki.pokexgames.com/images/e/e0/PX_Portable.png",
    "tipo": "movel",
    "rank": "E",
    "skill": 17,
    "tempo": "28 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 27,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "computer-engenheiro",
    "nome": "Computer",
    "imagem": "https://wiki.pokexgames.com/images/0/02/Computer.png",
    "tipo": "eletronico",
    "rank": "E",
    "skill": 16,
    "tempo": "14 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      },
      {
        "nome": "Screw",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      }
    ]
  },
  {
    "id": "analog-television-engenheiro",
    "nome": "Analog Television",
    "imagem": "https://wiki.pokexgames.com/images/7/77/Analog_Television.png",
    "tipo": "eletronico",
    "rank": "E",
    "skill": 18,
    "tempo": "20 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "workshop-d-engenheiro",
    "nome": "Workshop D",
    "imagem": "https://wiki.pokexgames.com/images/1/1f/Workshop_D_engenheiro.png",
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
    "id": "workshop-d-portatil-engenheiro",
    "nome": "Workshop D (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/a/ad/Workshop_D_Port%C3%A1til_Engenheiro.png",
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
    "id": "great-ball-engenheiro",
    "nome": "Great Ball",
    "imagem": "https://wiki.pokexgames.com/images/9/96/Great-ball%281%29.png",
    "tipo": "pokebola",
    "rank": "D",
    "skill": 20,
    "unidadesPorReceita": 100,
    "tempo": "6 Minutos",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Stone Orb",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Water_gem.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "iron-bar-engenheiro",
    "nome": "Iron Bar",
    "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png",
    "tipo": "material",
    "rank": "D",
    "skill": 20,
    "tempo": "1 Segundo",
    "recursos": [
      {
        "nome": "Iron Ore",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "caterpie-turret-engenheiro",
    "nome": "Caterpie Turret",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/Caterpie_Turret.png",
    "tipo": "turret",
    "rank": "D",
    "skill": 30,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      }
    ]
  },
  {
    "id": "tool-box-engenheiro",
    "nome": "Tool Box",
    "imagem": "https://wiki.pokexgames.com/images/1/10/Tool_Box.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 25,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Farfetch'd Stick",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/0f/Farfetch%27d_Stick.png"
      },
      {
        "nome": "Monkey Paw",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/cc/Monkey_Paw.png"
      },
      {
        "nome": "Stone Orb",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "squad-costume-engenheiro",
    "nome": "Squad Costume",
    "imagem": "https://wiki.pokexgames.com/images/5/52/Squad_Costume.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 36,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Viking Helmet",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/72/Viking_Helmet.png"
      },
      {
        "nome": "Ninja Mask",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Ninja_Mask-Diglett.png"
      },
      {
        "nome": "Cowboy Hat",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Cowboy_Hat.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "roman-helmet-engenheiro",
    "nome": "Roman Helmet",
    "imagem": "https://wiki.pokexgames.com/images/d/d7/Roman_Helmet.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 32,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Bat Wing",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/35/Bat_Wing.png"
      },
      {
        "nome": "Bottle of Poison",
        "quantidade": 168,
        "imagem": "https://wiki.pokexgames.com/images/b/b1/BottleOfPoison.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "true-champion-belt-engenheiro",
    "nome": "True Champion Belt",
    "imagem": "https://wiki.pokexgames.com/images/8/8a/True_Champion_Belt.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 34,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Iron Bracelet",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/40/Iron_Bracelet.png"
      },
      {
        "nome": "Band Aid",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/BandAid.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "fake-fork-engenheiro",
    "nome": "Fake Fork",
    "imagem": "https://wiki.pokexgames.com/images/5/5c/Fake_Fork.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 38,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Blue Vines",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Blue_Vines.png"
      },
      {
        "nome": "Seed",
        "quantidade": 108,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Seed.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "playstation-engenheiro",
    "nome": "Playstation",
    "imagem": "https://wiki.pokexgames.com/images/5/55/Playstation.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 24,
    "tempo": "9 Minutos",
    "recursos": [
      {
        "nome": "Electric Box",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "game-cube-engenheiro",
    "nome": "Game Cube",
    "imagem": "https://wiki.pokexgames.com/images/2/27/Game_Cube.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 26,
    "tempo": "9 Minutos",
    "recursos": [
      {
        "nome": "Screw",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "psp-engenheiro",
    "nome": "PSP",
    "imagem": "https://wiki.pokexgames.com/images/1/1f/PSP.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 28,
    "tempo": "40 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Sheep Wool",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "smartphone-engenheiro",
    "nome": "Smartphone",
    "imagem": "https://wiki.pokexgames.com/images/3/3d/Smartphone.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 37,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "white-computer-engenheiro",
    "nome": "White Computer",
    "imagem": "https://wiki.pokexgames.com/images/d/df/White_Computer.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 30,
    "tempo": "28 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "black-computer-engenheiro",
    "nome": "Black Computer",
    "imagem": "https://wiki.pokexgames.com/images/7/7d/Black_Computer.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 36,
    "tempo": "28 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Strange Thing",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "television-engenheiro",
    "nome": "Television",
    "imagem": "https://wiki.pokexgames.com/images/7/75/Television.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 28,
    "tempo": "40 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 92,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      }
    ]
  },
  {
    "id": "modern-television-engenheiro",
    "nome": "Modern Television",
    "imagem": "https://wiki.pokexgames.com/images/2/22/Modern_Television.png",
    "tipo": "eletronico",
    "rank": "D",
    "skill": 34,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Sheep Wool",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png"
      },
      {
        "nome": "Screw",
        "quantidade": 116,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "elixir-lab-engenheiro",
    "nome": "Elixir Lab",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/ElixirlabMESA.png",
    "tipo": "material",
    "rank": "D",
    "skill": 40,
    "tempo": "1 Hora e 20 Minutos",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Tooth",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/7/78/Tooth.png"
      },
      {
        "nome": "Lizard Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Lizard_Tail.png"
      },
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "workshop-c-engenheiro",
    "nome": "Workshop C",
    "imagem": "https://wiki.pokexgames.com/images/0/0b/Workshop_C_engenheir.png",
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
    "id": "workshop-c-portatil-engenheiro",
    "nome": "Workshop C (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/4/44/Workshop_C_Port%C3%A1til.png",
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
    "id": "super-ball-engenheiro",
    "nome": "Super Ball",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Super-ball%281%29.png",
    "tipo": "pokebola",
    "rank": "C",
    "skill": 40,
    "unidadesPorReceita": 100,
    "tempo": "30 Minutos",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 65,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Enchanted Gem",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/EnchantedGem.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "gear-engenheiro",
    "nome": "Gear",
    "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png",
    "tipo": "material",
    "rank": "C",
    "skill": 42,
    "tempo": "5 Minutos",
    "recursos": [
      {
        "nome": "Screw",
        "quantidade": 2000,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      }
    ]
  },
  {
    "id": "black-dye-engenheiro",
    "nome": "Black Dye",
    "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png",
    "tipo": "material",
    "rank": "C",
    "skill": 44,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Dark Gem",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/21/DarkGem.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      }
    ]
  },
  {
    "id": "blue-dye-engenheiro",
    "nome": "Blue Dye",
    "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png",
    "tipo": "material",
    "rank": "C",
    "skill": 44,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Water Gem",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Watergem.png"
      },
      {
        "nome": "Insect Claw",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png"
      }
    ]
  },
  {
    "id": "red-dye-engenheiro",
    "nome": "Red Dye",
    "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png",
    "tipo": "material",
    "rank": "C",
    "skill": 44,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Rubber Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      },
      {
        "nome": "Lobster Claw",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png"
      }
    ]
  },
  {
    "id": "pink-dye-engenheiro",
    "nome": "Pink Dye",
    "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png",
    "tipo": "material",
    "rank": "C",
    "skill": 44,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Sandbag",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/5/52/SandbagMark.png"
      },
      {
        "nome": "Topknot",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/2/29/Topknot.png"
      }
    ]
  },
  {
    "id": "green-dye-engenheiro",
    "nome": "Green Dye",
    "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png",
    "tipo": "material",
    "rank": "C",
    "skill": 44,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Seed",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Seed.png"
      },
      {
        "nome": "Bulb",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/Bulb.png"
      }
    ]
  },
  {
    "id": "yellow-dye-engenheiro",
    "nome": "Yellow Dye",
    "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png",
    "tipo": "material",
    "rank": "C",
    "skill": 44,
    "tempo": "1 Minuto",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Armadillo Claw",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Armadillo_Claw.png"
      }
    ]
  },
  {
    "id": "hourglass-engenheiro",
    "nome": "Hourglass",
    "imagem": "https://wiki.pokexgames.com/images/thumb/1/11/Hourglass.png/30px-Hourglass.png",
    "tipo": "material",
    "rank": "C",
    "skill": 51,
    "tempo": "12 Horas e 53 Minutos",
    "recursos": [
      {
        "nome": "Big Enchanted Gem",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/BigEnchantedGem.gif"
      },
      {
        "nome": "Glass",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "duelist-radar-engenheiro",
    "nome": "Duelist Radar",
    "imagem": "https://wiki.pokexgames.com/images/e/eb/Duelist-radar.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 50,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Spin Machine",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Spin_Machine.png"
      },
      {
        "nome": "Kick Machine",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/0d/Kick_Machine.png"
      },
      {
        "nome": "Punch Machine",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/26/Punch_Machine.png"
      },
      {
        "nome": "Iron Bracelet",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/4/40/Iron_Bracelet.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "bellsprout-turret-engenheiro",
    "nome": "Bellsprout Turret",
    "imagem": "https://wiki.pokexgames.com/images/c/c8/Bellsprout_Turret.png",
    "tipo": "turret",
    "rank": "C",
    "skill": 50,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      }
    ]
  },
  {
    "id": "koffing-turret-engenheiro",
    "nome": "Koffing Turret",
    "imagem": "https://wiki.pokexgames.com/images/0/09/Koffing_Turret.png",
    "tipo": "turret",
    "rank": "C",
    "skill": 60,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      }
    ]
  },
  {
    "id": "tv-camera-engenheiro",
    "nome": "TV Camera",
    "imagem": "https://wiki.pokexgames.com/images/a/a2/TV_Camera.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 58,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Magnet",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Fur Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Fur_Ball.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      },
      {
        "nome": "Iron Ore",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      }
    ]
  },
  {
    "id": "singer-microphone-engenheiro",
    "nome": "Singer Microphone",
    "imagem": "https://wiki.pokexgames.com/images/2/2e/Singer_Microphone.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 48,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Microphone",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Microphone.png"
      },
      {
        "nome": "Rubber Ball",
        "quantidade": 48,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "metal-claw-engenheiro",
    "nome": "Metal Claw",
    "imagem": "https://wiki.pokexgames.com/images/a/ac/Metal_Claw.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 50,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Armadillo Claw",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Armadillo_Claw.png"
      },
      {
        "nome": "Earth Ball",
        "quantidade": 48,
        "imagem": "https://wiki.pokexgames.com/images/6/61/EarthBall.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "red-glasses-engenheiro",
    "nome": "Red Glasses",
    "imagem": "https://wiki.pokexgames.com/images/d/dc/Red_Glasses.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 52,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Strange Spike",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Strange_Spike.png"
      },
      {
        "nome": "Glass",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "pitbull-collar-engenheiro",
    "nome": "Pitbull Collar",
    "imagem": "https://wiki.pokexgames.com/images/b/bb/Pitbull_Collar.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 56,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Crystal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Giant Piece of Fur",
        "quantidade": 67,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Fur",
        "quantidade": 77,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/FurMark.png"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "steel-helmet-engenheiro",
    "nome": "Steel Helmet",
    "imagem": "https://wiki.pokexgames.com/images/4/49/Steel_Helmet.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 54,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Strange Rock",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Stone Orb",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "flying-glasses-2-engenheiro",
    "nome": "Flying Glasses",
    "imagem": "https://wiki.pokexgames.com/images/c/cb/Flying_Glasses.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 58,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Colored Feather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Feather",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/FeatherMark.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "lunch-pack-engenheiro",
    "nome": "Lunch Pack",
    "imagem": "https://wiki.pokexgames.com/images/8/8b/Lunch_Pack.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 54,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Psychic Spoon",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Tongue",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Toungue.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "xbox-360-engenheiro",
    "nome": "Xbox 360",
    "imagem": "https://wiki.pokexgames.com/images/9/9a/Xbox_360.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 52,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Electric Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Gift Bag",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Gift_Bag.png"
      },
      {
        "nome": "Magnet",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "slim-black-computer-engenheiro",
    "nome": "Slim Black Computer",
    "imagem": "https://wiki.pokexgames.com/images/2/29/Slim_Black_Computer.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 52,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Strange Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Strange_Tail.png"
      },
      {
        "nome": "Screw",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Gear",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Glass",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "slim-white-computer-engenheiro",
    "nome": "Slim White Computer",
    "imagem": "https://wiki.pokexgames.com/images/5/54/Slim_White_Computer.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 52,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Piece of Steel",
        "quantidade": 56,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Sheep Wool",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png"
      },
      {
        "nome": "Gear",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Magnet",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "notebook-engenheiro",
    "nome": "Notebook",
    "imagem": "https://wiki.pokexgames.com/images/9/95/Notebook.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 50,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Magnet",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Glass",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Strange Thing",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "classic-television-engenheiro",
    "nome": "Classic Television",
    "imagem": "https://wiki.pokexgames.com/images/4/40/Classic_Television.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 48,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Shock Topknot",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "lcd-television-engenheiro",
    "nome": "LCD Television",
    "imagem": "https://wiki.pokexgames.com/images/3/39/LCD_Television.png",
    "tipo": "eletronico",
    "rank": "C",
    "skill": 50,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Magnet",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Iron ore",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Iron_ore.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "washing-machine-engenheiro",
    "nome": "Washing Machine",
    "imagem": "https://wiki.pokexgames.com/images/8/88/Washing_Machine.png",
    "tipo": "eletrodomestico",
    "rank": "C",
    "skill": 46,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Ice Orb",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Screw",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Watergem.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "blue-wall-lamp-engenheiro",
    "nome": "Blue Wall Lamp",
    "imagem": "https://wiki.pokexgames.com/images/5/59/Blue_Wall_Lamp.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 54,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Point of Light",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "yellow-wall-lamp-engenheiro",
    "nome": "Yellow Wall Lamp",
    "imagem": "https://wiki.pokexgames.com/images/7/73/Yellow_Wall_Lamp.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 54,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Point of Light",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "workshop-b-engenheiro",
    "nome": "Workshop B",
    "imagem": "https://wiki.pokexgames.com/images/7/73/Workshop_B_Engenheiro.png",
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
    "id": "workshop-b-portatil-engenheiro",
    "nome": "Workshop B (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/6/68/Workshop_B_%28Port%C3%A1til%29_Engenheiro.png",
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
    "id": "ultra-ball-engenheiro",
    "nome": "Ultra Ball",
    "imagem": "https://wiki.pokexgames.com/images/9/9b/Ultra-ball%281%29.png",
    "tipo": "pokebola",
    "rank": "B",
    "skill": 60,
    "unidadesPorReceita": 100,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Scythe",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Scythe1.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Dark Gem",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/2/21/DarkGem.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Straw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "tire-engenheiro",
    "nome": "Tire",
    "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/32px-Tire.png",
    "tipo": "material",
    "rank": "B",
    "skill": 80,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Streak Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/37/Streak_Tail.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Mini Vulcano",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Mini_Volcano.png"
      },
      {
        "nome": "Ice Block",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/e/e2/Ice_Blocks.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "charmander-turret-engenheiro",
    "nome": "Charmander Turret",
    "imagem": "https://wiki.pokexgames.com/images/2/2c/Charmander_Turret.png",
    "tipo": "turret",
    "rank": "B",
    "skill": 80,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      }
    ]
  },
  {
    "id": "squirtle-turret-engenheiro",
    "nome": "Squirtle Turret",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Squirtle_Turret.png",
    "tipo": "turret",
    "rank": "B",
    "skill": 80,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      }
    ]
  },
  {
    "id": "digital-clock-engenheiro",
    "nome": "Digital Clock",
    "imagem": "https://wiki.pokexgames.com/images/4/46/Digital-clock.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 76,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Steelix Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Steelix_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Magnet",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Zap",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "health-check-engenheiro",
    "nome": "Health Check",
    "imagem": "https://wiki.pokexgames.com/images/9/9f/Health-check.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 78,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Mystic Star",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Miss Trace",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png"
      },
      {
        "nome": "Snake Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Snake_Tail.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 480,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "advanced-incubator-engenheiro",
    "nome": "Advanced Incubator",
    "imagem": "https://wiki.pokexgames.com/images/9/98/Advanced_Incubator.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 68,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Topaz",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Topaz1.png"
      },
      {
        "nome": "Mirror Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b8/Mirror.png"
      },
      {
        "nome": "Dimensional Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Dimensional.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 750,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "iron-mask-engenheiro",
    "nome": "Iron Mask",
    "imagem": "https://wiki.pokexgames.com/images/f/fb/Iron_Mask-Manectric.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 72,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Shock Topknot",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Mini Vulcano",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Mini_Volcano.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 840,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "cyber-mask-engenheiro",
    "nome": "Cyber Mask",
    "imagem": "https://wiki.pokexgames.com/images/2/2b/Cyber_Mask.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 74,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Giant Bat Wing",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Giant_Bat_Wing.png"
      },
      {
        "nome": "Ancient Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif"
      },
      {
        "nome": "Venom Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Venom-stone.gif"
      },
      {
        "nome": "Bat Wing",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/35/Bat_Wing.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 840,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "green-scouter-engenheiro",
    "nome": "Green Scouter",
    "imagem": "https://wiki.pokexgames.com/images/0/05/Green_Scouter.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 70,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "Leaf Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif"
      },
      {
        "nome": "Glass",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "blue-scouter-engenheiro",
    "nome": "Blue Scouter",
    "imagem": "https://wiki.pokexgames.com/images/9/90/Blue_Scouter.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 70,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "Water Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Glass",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "thorn-shoulder-engenheiro",
    "nome": "Thorn Shoulder",
    "imagem": "https://wiki.pokexgames.com/images/a/a9/Thorn_Shoulder.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 76,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "Stone Orb",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Horn",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/5/58/Horn.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Small Stone",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/d/d5/Smallstone.png"
      },
      {
        "nome": "Rock Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif"
      },
      {
        "nome": "Horn Drill",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 144,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "slime-brain-cap-engenheiro",
    "nome": "Slime Brain Cap",
    "imagem": "https://wiki.pokexgames.com/images/9/95/Slime_Brain_Cap.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 68,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Ruby",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/73/RubyMark.png"
      },
      {
        "nome": "Giant Ruby",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Giant_Ruby.png"
      },
      {
        "nome": "Fins",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Layer4.png"
      },
      {
        "nome": "Scythe",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Scythe1.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "bloody-brain-cap-engenheiro",
    "nome": "Bloody Brain Cap",
    "imagem": "https://wiki.pokexgames.com/images/8/8d/Bloody_Brain_Cap.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 68,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Ruby",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/73/RubyMark.png"
      },
      {
        "nome": "Red Wing",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/b/ba/Red_Wing.png"
      },
      {
        "nome": "Air Tank",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/58/Layer5.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "water-brain-cap-engenheiro",
    "nome": "Water Brain Cap",
    "imagem": "https://wiki.pokexgames.com/images/e/ed/Water_Brain_Cap.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 68,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Giant Ruby",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Giant_Ruby.png"
      },
      {
        "nome": "Seahorse Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Seahorse_Tail.png"
      },
      {
        "nome": "Diving Mask",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4e/Layer2.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "gladiator-helmet-engenheiro",
    "nome": "Gladiator Helmet",
    "imagem": "https://wiki.pokexgames.com/images/a/a1/Gladiator_Helmet.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 72,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "Belt of Champion",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png"
      },
      {
        "nome": "Samurai Hair",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Samurai_Hair.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 160,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "playstation-4-engenheiro",
    "nome": "Playstation 4",
    "imagem": "https://wiki.pokexgames.com/images/3/3a/Playstation_4.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 68,
    "tempo": "18 Horas",
    "recursos": [
      {
        "nome": "Shock Topknot",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Psychic Spoon",
        "quantidade": 28,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Gear",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "nintendo-wii-engenheiro",
    "nome": "Nintendo Wii",
    "imagem": "https://wiki.pokexgames.com/images/f/ff/Nintendo_Wii.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 68,
    "tempo": "18 Horas",
    "recursos": [
      {
        "nome": "Gear",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Karate Duck",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "macbook-engenheiro",
    "nome": "Macbook",
    "imagem": "https://wiki.pokexgames.com/images/4/41/Macbook.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 74,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Glass",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Gear",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "squirtle-computer-engenheiro",
    "nome": "Squirtle Computer",
    "imagem": "https://wiki.pokexgames.com/images/c/cf/Squirtle_Computer.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Computer",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/White_Computer.png/40px-White_Computer.png"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Squirtle Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Squirtle_Toy.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 34,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      }
    ]
  },
  {
    "id": "voltorb-computer-engenheiro",
    "nome": "Voltorb Computer",
    "imagem": "https://wiki.pokexgames.com/images/5/53/Voltorb_Computer.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Computer",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/White_Computer.png/40px-White_Computer.png"
      },
      {
        "nome": "Empty Poke Ball",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/8/8e/Poke-ball%281%29.png"
      },
      {
        "nome": "Voltorb Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Voltorb_Toy.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      }
    ]
  },
  {
    "id": "snorlax-computer-engenheiro",
    "nome": "Snorlax Computer",
    "imagem": "https://wiki.pokexgames.com/images/6/66/Snorlax_Computer.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Computer",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/White_Computer.png/40px-White_Computer.png"
      },
      {
        "nome": "Bitten Apple",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/1/12/BittenApple.png"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Black Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      }
    ]
  },
  {
    "id": "pikachu-computer-engenheiro",
    "nome": "Pikachu Computer",
    "imagem": "https://wiki.pokexgames.com/images/7/72/Pikachu_Computer.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Computer",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/White_Computer.png/40px-White_Computer.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Pikachu Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Pikachu_Toy.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      }
    ]
  },
  {
    "id": "jigglypuff-computer-engenheiro",
    "nome": "Jigglypuff Computer",
    "imagem": "https://wiki.pokexgames.com/images/9/93/Jigglypuff_Computer.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Computer",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/White_Computer.png/40px-White_Computer.png"
      },
      {
        "nome": "Jigglypuff Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/Jigglypuff_Toy.png"
      },
      {
        "nome": "Microphone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Microphone.png"
      },
      {
        "nome": "Comb",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      }
    ]
  },
  {
    "id": "charmander-computer-engenheiro",
    "nome": "Charmander Computer",
    "imagem": "https://wiki.pokexgames.com/images/7/72/Charmander_Computer.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Computer",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/White_Computer.png/40px-White_Computer.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Charmander Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a9/Charmander_Toy.png"
      },
      {
        "nome": "Pot of Lava",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      }
    ]
  },
  {
    "id": "bulbasaur-computer-engenheiro",
    "nome": "Bulbasaur Computer",
    "imagem": "https://wiki.pokexgames.com/images/7/77/Bulbasaur_Computer.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Computer",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/d/df/White_Computer.png/40px-White_Computer.png"
      },
      {
        "nome": "Bulb",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/Bulb.png"
      },
      {
        "nome": "Leaves",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Leaves.png"
      },
      {
        "nome": "Bulbasaur Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/26/Bulbasaur_Toy.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      }
    ]
  },
  {
    "id": "3d-television-engenheiro",
    "nome": "3D Television",
    "imagem": "https://wiki.pokexgames.com/images/f/f2/3D_Television.png",
    "tipo": "eletronico",
    "rank": "B",
    "skill": 72,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Gear",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Glass",
        "quantidade": 33,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Zap",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "clean-refrigerator-engenheiro",
    "nome": "Clean Refrigerator",
    "imagem": "https://wiki.pokexgames.com/images/3/31/Clean_Refrigerator.png",
    "tipo": "eletrodomestico",
    "rank": "B",
    "skill": 70,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Seal Tail",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/7/73/Seal_Tail.png"
      },
      {
        "nome": "Ice Orb",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Snowball",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/0/04/Snowball.png"
      },
      {
        "nome": "Tusk",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Tusk.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "clean-stove-engenheiro",
    "nome": "Clean Stove",
    "imagem": "https://wiki.pokexgames.com/images/a/ae/Clean_Stove.png",
    "tipo": "eletrodomestico",
    "rank": "B",
    "skill": 70,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Giant Piece of Fur",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Fox Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Fox_Tail.png"
      },
      {
        "nome": "Eggshell",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Eggshell.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "deluxe-stove-engenheiro",
    "nome": "Deluxe Stove",
    "imagem": "https://wiki.pokexgames.com/images/8/84/Deluxe_Stove.png",
    "tipo": "eletrodomestico",
    "rank": "B",
    "skill": 64,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Fire Feather",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Nu Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "jacks-stove-engenheiro",
    "nome": "Jacks Stove",
    "imagem": "https://wiki.pokexgames.com/images/7/7a/Jacks_Stove.png",
    "tipo": "eletrodomestico",
    "rank": "B",
    "skill": 64,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Essence of Fire",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/9/94/Essence_of_fire.png"
      },
      {
        "nome": "Fire Ear",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Fire_Ear.png"
      },
      {
        "nome": "Strange Bone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Strange_Bone.png"
      },
      {
        "nome": "Pot of Lava",
        "quantidade": 64,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "black-white-stove-engenheiro",
    "nome": "Black/White Stove",
    "imagem": "https://wiki.pokexgames.com/images/6/69/Black_White_Stove.png",
    "tipo": "eletrodomestico",
    "rank": "B",
    "skill": 64,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Fire Horse Foot",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/38/Fire_Horse_Foot.png"
      },
      {
        "nome": "Pot of Lava",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Metal Jaw",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Metal_Jaw.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "green-glass-table-engenheiro",
    "nome": "Green Glass Table",
    "imagem": "https://wiki.pokexgames.com/images/9/9b/Green_Glass_Table.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 64,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Palm Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png"
      },
      {
        "nome": "Big Seed",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Big_Seed.png"
      },
      {
        "nome": "Water Plant",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/8/89/Water_Plant.png"
      },
      {
        "nome": "Glass",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "blue-glass-table-engenheiro",
    "nome": "Blue Glass Table",
    "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Glass_Table.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 64,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Gyarados Tail",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Mimic Clothes",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/1a/Mimic_Clothes.png"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "kitchen-sink-engenheiro",
    "nome": "Kitchen Sink",
    "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Kitchen_Sink.webp/190px-Kitchen_Sink.webp.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 80,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Water Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Glass",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "locker-engenheiro",
    "nome": "Locker",
    "imagem": "https://wiki.pokexgames.com/images/1/19/Locker.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 76,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Electric Box",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Shock Topknot",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Empty Ultra Ball",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Ultra-ball%281%29.png"
      },
      {
        "nome": "Point of Light",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 750,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "red-wall-lamp-engenheiro",
    "nome": "Red Wall Lamp",
    "imagem": "https://wiki.pokexgames.com/images/1/12/Red_Wall_Lamp.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 62,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Point of Light",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "purple-wall-lamp-engenheiro",
    "nome": "Purple Wall Lamp",
    "imagem": "https://wiki.pokexgames.com/images/f/f0/Purple_Wall_Lamp.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 62,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Point of Light",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "green-wall-lamp-engenheiro",
    "nome": "Green Wall Lamp",
    "imagem": "https://wiki.pokexgames.com/images/5/5d/Green_Wall_Lamp.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 62,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Point of Light",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Glass",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Iron Bar",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Iron_Bar.png"
      }
    ]
  },
  {
    "id": "workshop-a-engenheiro",
    "nome": "Workshop A",
    "imagem": "https://wiki.pokexgames.com/images/2/21/Workshop_A_Engenheiro.png",
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
    "id": "workshop-a-portatil-engenheiro",
    "nome": "Workshop A (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/a/a4/Workshop_A_Engenheiro_%28POrt%C3%A1til%29.png",
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
    "id": "fast-ball-engenheiro",
    "nome": "Fast Ball",
    "imagem": "https://wiki.pokexgames.com/images/f/fe/Fast-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 80,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Fire Horse Foot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/38/Fire_Horse_Foot.png"
      }
    ]
  },
  {
    "id": "heavy-ball-engenheiro",
    "nome": "Heavy Ball",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Heavy-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 80,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Rock Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      }
    ]
  },
  {
    "id": "magu-ball-engenheiro",
    "nome": "Magu Ball",
    "imagem": "https://wiki.pokexgames.com/images/0/02/Magu-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Earth Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0f/Earth-stone.gif"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Earth Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Earth_Ball.png"
      },
      {
        "nome": "Essence of Fire",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/94/Essence_of_fire.png"
      }
    ]
  },
  {
    "id": "sora-ball-engenheiro",
    "nome": "Sora Ball",
    "imagem": "https://wiki.pokexgames.com/images/b/b9/Sora-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Feather Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Feather1.png"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Snowball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/04/Snowball.png"
      },
      {
        "nome": "Straw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      }
    ]
  },
  {
    "id": "yume-ball-engenheiro",
    "nome": "Yume Ball",
    "imagem": "https://wiki.pokexgames.com/images/9/9f/Yume-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Rubber Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      },
      {
        "nome": "Enchanted Gem",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/EnchantedGem.png"
      }
    ]
  },
  {
    "id": "dusk-ball-engenheiro",
    "nome": "Dusk Ball",
    "imagem": "https://wiki.pokexgames.com/images/2/2a/Dusk-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Punch Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/da/3mDejdt.png"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Small Stone",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/d/d5/Smallstone.png"
      },
      {
        "nome": "Band Aid",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/BandAid.png"
      }
    ]
  },
  {
    "id": "tale-ball-engenheiro",
    "nome": "Tale Ball",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Tale-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Enigma Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Dragon Scale",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/58/DragonScale.png"
      },
      {
        "nome": "Rubber Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      }
    ]
  },
  {
    "id": "moon-ball-engenheiro",
    "nome": "Moon Ball",
    "imagem": "https://wiki.pokexgames.com/images/b/ba/Moon-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Darkness Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5d/HrnVNwK.png"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Dark Gem",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/21/DarkGem.png"
      },
      {
        "nome": "Ghost Essence",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/GhostEssence.png"
      }
    ]
  },
  {
    "id": "net-ball-engenheiro",
    "nome": "Net Ball",
    "imagem": "https://wiki.pokexgames.com/images/0/02/Net-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Cocoon Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Cocoon_stone.gif"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Bug Gosme",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/BugGosme.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Water_gem.png"
      }
    ]
  },
  {
    "id": "janguru-ball-engenheiro",
    "nome": "Janguru Ball",
    "imagem": "https://wiki.pokexgames.com/images/9/90/Janguru-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Venom Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Venom-stone.gif"
      },
      {
        "nome": "Screw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Bottle of Poison",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b1/BottleOfPoison.png"
      },
      {
        "nome": "Seed",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Seed.png"
      }
    ]
  },
  {
    "id": "tinker-ball-engenheiro",
    "nome": "Tinker Ball",
    "imagem": "https://wiki.pokexgames.com/images/8/8b/Tinker-ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Apricorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Screw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Piece of Steel",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      }
    ]
  },
  {
    "id": "old-ball-engenheiro",
    "nome": "Old Ball",
    "imagem": "https://wiki.pokexgames.com/images/f/f1/Old_Ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 95,
    "unidadesPorReceita": 100,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Dome Fossil",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Dome_Fossil.png"
      },
      {
        "nome": "Helix Fossil",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Helix_Fossil.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "platinum-bar-engenheiro",
    "nome": "Platinum Bar",
    "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png",
    "tipo": "material",
    "rank": "A",
    "skill": 80,
    "tempo": "10 Segundos",
    "recursos": [
      {
        "nome": "Platinum Ore",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "platinum-ore-engenheiro",
    "nome": "Platinum Ore",
    "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png",
    "tipo": "material",
    "rank": "A",
    "skill": 100,
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
    "id": "engine-engenheiro",
    "nome": "Engine",
    "imagem": "https://wiki.pokexgames.com/images/2/27/Engine.png",
    "tipo": "material",
    "rank": "A",
    "skill": 84,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Magnet",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Onix Tail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/7/78/Onix_Tail.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "advanced-engine-engenheiro",
    "nome": "Advanced Engine",
    "imagem": "https://wiki.pokexgames.com/images/b/bf/Advanced_Engine.png",
    "tipo": "material",
    "rank": "A",
    "skill": 86,
    "tempo": "14 Dias",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Zap",
        "quantidade": 52,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Blaze Topknot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Blaze_Topknot.png"
      },
      {
        "nome": "Max Volt Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Max_Volt_Paw.png"
      },
      {
        "nome": "Solid Rock Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Solid_Rock_Paw.png"
      },
      {
        "nome": "Wooper Horn",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Wooper_Horn.png"
      },
      {
        "nome": "Boost Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/01/Boost1.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "pikachu-turret-engenheiro",
    "nome": "Pikachu Turret",
    "imagem": "https://wiki.pokexgames.com/images/2/26/Pikachu_Turret.png",
    "tipo": "turret",
    "rank": "A",
    "skill": 96,
    "tempo": "8 Minutos",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      }
    ]
  },
  {
    "id": "bulbasaur-turret-engenheiro",
    "nome": "Bulbasaur Turret",
    "imagem": "https://wiki.pokexgames.com/images/9/9b/Bulbasaur_Turret.png",
    "tipo": "turret",
    "rank": "A",
    "skill": 94,
    "tempo": "8 Minutos",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      }
    ]
  },
  {
    "id": "boss-detector-engenheiro",
    "nome": "Boss Detector",
    "imagem": "https://wiki.pokexgames.com/images/1/1a/Boss-detector.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 100,
    "tempo": "6 Dias",
    "recursos": [
      {
        "nome": "Solid Rock Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Solid_Rock_Paw.png"
      },
      {
        "nome": "Massive Vines",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Massive_Vines.png"
      },
      {
        "nome": "Max Volt Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Max_Volt_Paw.png"
      },
      {
        "nome": "Blaze Topknot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Blaze_Topknot.png"
      },
      {
        "nome": "Scary Smile",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Scary_Smile.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "treadmill-engenheiro",
    "nome": "Treadmill",
    "imagem": "https://wiki.pokexgames.com/images/4/48/Treadmill.png",
    "tipo": "eletrodomestico",
    "rank": "A",
    "skill": 90,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Gear",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Tire",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/30px-Tire.png"
      },
      {
        "nome": "Pony Saddle",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Pony_Saddle.png"
      },
      {
        "nome": "Horse Saddle",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Horse_Saddle.png"
      },
      {
        "nome": "Bear Paw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Bear_Paw.png"
      },
      {
        "nome": "Elephant Foot",
        "quantidade": 115,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Elephant_Foot.png"
      },
      {
        "nome": "Bull Tail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/1/1c/Bull_Tail.png"
      },
      {
        "nome": "Giant Piece of Fur",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "fake-poke-ball-kit-engenheiro",
    "nome": "Fake Poké Ball Kit",
    "imagem": "https://wiki.pokexgames.com/images/b/be/Fake_Pok%C3%A9_Ball_Kit.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 100,
    "tempo": "8 Horas",
    "recursos": [
      {
        "nome": "Empty Magu Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Magu-ball.png"
      },
      {
        "nome": "Empty Sora Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Sora-ball.png"
      },
      {
        "nome": "Empty Yume Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/Yume-ball.png"
      },
      {
        "nome": "Empty Dusk Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/2a/Dusk-ball.png"
      },
      {
        "nome": "Empty Fast Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Fast-ball.png"
      },
      {
        "nome": "Empty Heavy Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c5/Heavy-ball.png"
      },
      {
        "nome": "Empty Tale Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Tale-ball.png"
      },
      {
        "nome": "Empty Moon Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/ba/Moon-ball.png"
      },
      {
        "nome": "Empty Net Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Net-ball.png"
      },
      {
        "nome": "Empty Janguru Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Janguru-ball.png"
      },
      {
        "nome": "Empty Ultra Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Ultra-ball%281%29.png"
      },
      {
        "nome": "Empty Tinker Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/8/8b/Tinker-ball.png"
      }
    ]
  },
  {
    "id": "heavy-thorn-ball-engenheiro",
    "nome": "Heavy Thorn Ball",
    "imagem": "https://wiki.pokexgames.com/images/e/e5/Heavy_Thorn_Ball.png",
    "tipo": "pokebola",
    "rank": "A",
    "skill": 90,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Metal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Ancient Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif"
      },
      {
        "nome": "Strange Rock",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Horn Drill",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png"
      },
      {
        "nome": "Steelix Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Steelix_Tail.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "royal-armor-engenheiro",
    "nome": "Royal Armor",
    "imagem": "https://wiki.pokexgames.com/images/a/a3/Royal_Armor.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 92,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Metal Hull",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Black Hull",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/7/7c/Black_Hull.png"
      },
      {
        "nome": "Luck Medallion",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Luck_Medallion.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "metal-pack-engenheiro",
    "nome": "Metal Pack",
    "imagem": "https://wiki.pokexgames.com/images/6/67/Metal_Pack.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 98,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Max Volt Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Max_Volt_Paw.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Metal Jaw",
        "quantidade": 129,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Metal_Jaw.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "titan-mask-engenheiro",
    "nome": "Titan Mask",
    "imagem": "https://wiki.pokexgames.com/images/3/35/Titan_Mask.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 88,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Data UFO",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Data_Ufo.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Zap",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Shock Topknot",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "titanium-armor-engenheiro",
    "nome": "Titanium Armor",
    "imagem": "https://wiki.pokexgames.com/images/5/59/Titanium_Armor.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 86,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Red Scale",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Gem Star",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/eb/Gem_Star.png"
      },
      {
        "nome": "Giant Fin",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Giant_Fin.png"
      },
      {
        "nome": "Diving Mask",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4e/Layer2.png"
      },
      {
        "nome": "Fins",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Layer4.png"
      },
      {
        "nome": "Air Tank",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/58/Layer5.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "3d-rift-videogame-engenheiro",
    "nome": "3D Rift Videogame",
    "imagem": "https://wiki.pokexgames.com/images/c/c3/Rift_Videogame.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 82,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Zap",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Blue Scouter",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Blue_Scouter.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "blue-alienware-engenheiro",
    "nome": "Blue Alienware",
    "imagem": "https://wiki.pokexgames.com/images/0/07/Blue_Alienware.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 84,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Blue Ball",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Blue_Ball.png"
      },
      {
        "nome": "Glass",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "green-alienware-engenheiro",
    "nome": "Green Alienware",
    "imagem": "https://wiki.pokexgames.com/images/2/26/Green_Alienware.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 84,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Greens",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Greens.png"
      },
      {
        "nome": "Glass",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "red-alienware-engenheiro",
    "nome": "Red Alienware",
    "imagem": "https://wiki.pokexgames.com/images/b/bd/Red_Alienware.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 84,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Fire Ear",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Fire_Ear.png"
      },
      {
        "nome": "Glass",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "holographic-notebook-engenheiro",
    "nome": "Holographic Notebook",
    "imagem": "https://wiki.pokexgames.com/images/b/bd/Holographic_Notebook.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 92,
    "tempo": "6 Dias",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Female Ear",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Female_Ear.png"
      },
      {
        "nome": "Male Ear",
        "quantidade": 44,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Male_Ear.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "virtual-tv-engenheiro",
    "nome": "Virtual TV",
    "imagem": "https://wiki.pokexgames.com/images/9/90/Virtual_TV.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 92,
    "tempo": "6 Dias",
    "recursos": [
      {
        "nome": "Electronic Scraps",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Magnet1.png"
      },
      {
        "nome": "Steelix Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Steelix_Tail.png"
      },
      {
        "nome": "Screw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "hd-cine-tv-engenheiro",
    "nome": "HD Cine TV",
    "imagem": "https://wiki.pokexgames.com/images/2/23/HD_Cine_TV1.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 100,
    "tempo": "6 Dias",
    "recursos": [
      {
        "nome": "Virtual TV",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/9/90/Virtual_TV.png/50px-Virtual_TV.png"
      },
      {
        "nome": "3D Television",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/f/f2/3D_Television.png/50px-3D_Television.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "hd-home-tv-engenheiro",
    "nome": "HD Home TV",
    "imagem": "https://wiki.pokexgames.com/images/1/18/HD_Home_TV1.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 100,
    "tempo": "6 Dias",
    "recursos": [
      {
        "nome": "Virtual TV",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/9/90/Virtual_TV.png/50px-Virtual_TV.png"
      },
      {
        "nome": "3D Television",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/f/f2/3D_Television.png/50px-3D_Television.png"
      },
      {
        "nome": "Zap",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "hd-tron-tv-engenheiro",
    "nome": "HD Tron TV",
    "imagem": "https://wiki.pokexgames.com/images/c/ca/HD_Tron_TV1.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 100,
    "tempo": "6 Dias",
    "recursos": [
      {
        "nome": "Virtual TV",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/9/90/Virtual_TV.png/50px-Virtual_TV.png"
      },
      {
        "nome": "3D Television",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/f/f2/3D_Television.png/50px-3D_Television.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "LCD Television",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/thumb/3/39/LCD_Television.png/50px-LCD_Television.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "tron-toaster-engenheiro",
    "nome": "Tron Toaster",
    "imagem": "https://wiki.pokexgames.com/images/f/fb/Tron_Toaster.png",
    "tipo": "eletrodomestico",
    "rank": "A",
    "skill": 80,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Piece of Steel",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png"
      },
      {
        "nome": "Essence of Fire",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e5/EssenceofFire.png"
      },
      {
        "nome": "Screw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "tron-stove-engenheiro",
    "nome": "Tron Stove",
    "imagem": "https://wiki.pokexgames.com/images/3/3c/Tron_Stove.png",
    "tipo": "eletrodomestico",
    "rank": "A",
    "skill": 86,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "tron-refrigerator-engenheiro",
    "nome": "Tron Refrigerator",
    "imagem": "https://wiki.pokexgames.com/images/6/61/Tron_Refrigerator.png",
    "tipo": "eletrodomestico",
    "rank": "A",
    "skill": 86,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Ice Bra",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Locksmith of Shell",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Locksmith_Of_Shell.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Strange Spike",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Strange_Spike.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "blue-microscope-engenheiro",
    "nome": "Blue Microscope",
    "imagem": "https://wiki.pokexgames.com/images/e/ec/Blue_Microscope.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 84,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Zap",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "green-microscope-engenheiro",
    "nome": "Green Microscope",
    "imagem": "https://wiki.pokexgames.com/images/9/9c/Green_Microscope.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 84,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Palm Leaves",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png"
      },
      {
        "nome": "Sharp Leaves",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Sharp_Leaves.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "red-microscope-engenheiro",
    "nome": "Red Microscope",
    "imagem": "https://wiki.pokexgames.com/images/7/7c/Red_Microscope.png",
    "tipo": "eletronico",
    "rank": "A",
    "skill": 84,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Lobster Claw",
        "quantidade": 33,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png"
      },
      {
        "nome": "Creepy Eye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/64/Creepy_Eye.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      },
      {
        "nome": "Platinum Ore",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Platinum_Ore.png"
      }
    ]
  },
  {
    "id": "blue-globe-engenheiro",
    "nome": "Blue Globe",
    "imagem": "https://wiki.pokexgames.com/images/d/d3/Blue_Globe.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 94,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Zap",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Ice Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Ice-stone.gif"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "green-globe-engenheiro",
    "nome": "Green Globe",
    "imagem": "https://wiki.pokexgames.com/images/1/1d/Green_Globe.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 94,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Sand Tail",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Sand_Tail.png"
      },
      {
        "nome": "Helicopter Leave",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Helicopter_Leave.png"
      },
      {
        "nome": "Brush",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/Brush.png"
      },
      {
        "nome": "Greens",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Greens.png"
      },
      {
        "nome": "Leaf Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "red-globe-engenheiro",
    "nome": "Red Globe",
    "imagem": "https://wiki.pokexgames.com/images/5/5d/Red_Globe.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 94,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Glass",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Glass.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Mini Wings",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      },
      {
        "nome": "Great Petal",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Great_Petal.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "white-locker-engenheiro",
    "nome": "White Locker",
    "imagem": "https://wiki.pokexgames.com/images/d/d2/White-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 87,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Gear",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Ice Orb",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Seal Tail",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/7/73/Seal_Tail.png"
      },
      {
        "nome": "Wingeon Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Wingeon_Tapestry.png"
      },
      {
        "nome": "Crystal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "tron-locker-engenheiro",
    "nome": "Tron Locker",
    "imagem": "https://wiki.pokexgames.com/images/e/e1/Tron-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 87,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Gear",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Tron Stove",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/3/3c/Tron_Stove.png/40px-Tron_Stove.png"
      },
      {
        "nome": "Tron Toaster",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/fb/Tron_Toaster.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "classic-locker-engenheiro",
    "nome": "Classic Locker",
    "imagem": "https://wiki.pokexgames.com/images/9/92/Classic-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 90,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/40px-Locker.png"
      },
      {
        "nome": "Electronic Scraps",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Electronic_Scraps.png"
      },
      {
        "nome": "Gear",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Gear.png"
      },
      {
        "nome": "Classic Furniture",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/7/72/Classic_Furniture.png/40px-Classic_Furniture.png"
      },
      {
        "nome": "Classic Dresser",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/3/38/Classic_Dresser.png/40px-Classic_Dresser.png"
      },
      {
        "nome": "Classic Bookcase",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4a/Classic_Bookcase.png/40px-Classic_Bookcase.png"
      },
      {
        "nome": "Nu Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png"
      },
      {
        "nome": "Sand Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Sand_Tail.png"
      },
      {
        "nome": "Ancient Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "black-motorcycle-engenheiro",
    "nome": "Black Motorcycle",
    "imagem": "https://wiki.pokexgames.com/images/a/ab/Black-motorcycle.png",
    "tipo": "veiculo",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Engine",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/27/Engine.png/40px-Engine.png"
      },
      {
        "nome": "Tire",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/30px-Tire.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Orebound Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Orebound_Urn.png"
      },
      {
        "nome": "Malefic Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0b/Malefic_Urn.png"
      },
      {
        "nome": "Rock Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif"
      },
      {
        "nome": "Darkness Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5d/HrnVNwK.png"
      }
    ]
  },
  {
    "id": "blue-motorcycle-engenheiro",
    "nome": "Blue Motorcycle",
    "imagem": "https://wiki.pokexgames.com/images/5/5f/Blue-motorcycle.png",
    "tipo": "veiculo",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Engine",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/27/Engine.png/40px-Engine.png"
      },
      {
        "nome": "Tire",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/30px-Tire.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Seavell Urn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Seavell_Urn.png"
      },
      {
        "nome": "Ice Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Ice-stone.gif"
      },
      {
        "nome": "Water Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      }
    ]
  },
  {
    "id": "green-motorcycle-engenheiro",
    "nome": "Green Motorcycle",
    "imagem": "https://wiki.pokexgames.com/images/9/9e/Green-motorcycle.png",
    "tipo": "veiculo",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Engine",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/27/Engine.png/40px-Engine.png"
      },
      {
        "nome": "Tire",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/30px-Tire.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Naturia Urn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Naturia_Urn.png"
      },
      {
        "nome": "Cocoon Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Cocoon_stone.gif"
      },
      {
        "nome": "Leaf Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif"
      }
    ]
  },
  {
    "id": "yellow-motorcycle-engenheiro",
    "nome": "Yellow Motorcycle",
    "imagem": "https://wiki.pokexgames.com/images/4/40/Yellow-motorcycle.png",
    "tipo": "veiculo",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Engine",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/27/Engine.png/40px-Engine.png"
      },
      {
        "nome": "Tire",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/30px-Tire.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      },
      {
        "nome": "Raibolt Urn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/8b/Raibolt_Urn.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Enigma Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      }
    ]
  },
  {
    "id": "red-motorcycle-engenheiro",
    "nome": "Red Motorcycle",
    "imagem": "https://wiki.pokexgames.com/images/5/5e/Red-motorcycle.png",
    "tipo": "veiculo",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Engine",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/27/Engine.png/40px-Engine.png"
      },
      {
        "nome": "Tire",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/30px-Tire.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Volcanic Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Volcanic_Urn.png"
      },
      {
        "nome": "Wingeon Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Wingeon_Urn.png"
      },
      {
        "nome": "Crystal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      }
    ]
  },
  {
    "id": "pink-motorcycle-engenheiro",
    "nome": "Pink Motorcycle",
    "imagem": "https://wiki.pokexgames.com/images/7/7c/Pink-motorcycle.png",
    "tipo": "veiculo",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Engine",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/27/Engine.png/40px-Engine.png"
      },
      {
        "nome": "Tire",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/4c/Tire.png/30px-Tire.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      },
      {
        "nome": "Gardestrike Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f9/Gardestrike_Urn.png"
      },
      {
        "nome": "Psycraft Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Psycraft_Urn.png"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Feather Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Feather1.png"
      }
    ]
  },
  {
    "id": "future-motorcycle-engenheiro",
    "nome": "Future Motorcycle",
    "imagem": "https://wiki.pokexgames.com/images/b/b9/Future-motorcycle.png",
    "tipo": "veiculo",
    "rank": "A",
    "skill": 100,
    "tempo": "14 Dias",
    "recursos": [
      {
        "nome": "Advanced Engine",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/b/bf/Advanced_Engine.png/50px-Advanced_Engine.png"
      },
      {
        "nome": "Dark Moon",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Dark_Moon.png"
      },
      {
        "nome": "Steel Wing",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/e/e5/Steel_Wing.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Ancient Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif"
      }
    ]
  },
  {
    "id": "mecha-right-arm-engenheiro",
    "nome": "Mecha Right Arm",
    "imagem": "https://wiki.pokexgames.com/images/a/ab/Mecha_Right_Arm.png",
    "tipo": "mecha",
    "rank": "A",
    "skill": 98,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Talon",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Talon4.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Big Hands",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/Big_Hands.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "mecha-left-arm-engenheiro",
    "nome": "Mecha Left Arm",
    "imagem": "https://wiki.pokexgames.com/images/a/aa/Mecha_Left_Arm.png",
    "tipo": "mecha",
    "rank": "A",
    "skill": 98,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Talon",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Talon4.png"
      },
      {
        "nome": "Titanium Imam",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Titanium_Imam.png"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Big Hands",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/Big_Hands.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "mecha-chest-engenheiro",
    "nome": "Mecha Chest",
    "imagem": "https://wiki.pokexgames.com/images/9/9d/Mecha_Chest.png",
    "tipo": "mecha",
    "rank": "A",
    "skill": 100,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Metal Jaw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Metal_Jaw.png"
      },
      {
        "nome": "Bone Shield",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Bone_Shield.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Gem Star",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/e/eb/Gem_Star.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Platinum Bar",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Platinum_Bar.png"
      }
    ]
  },
  {
    "id": "mecha-engenheiro",
    "nome": "Mecha",
    "imagem": "https://wiki.pokexgames.com/images/1/19/Mecha.png",
    "tipo": "mecha",
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
    "id": "workshop-s-engenheiro",
    "nome": "Workshop S",
    "imagem": "https://wiki.pokexgames.com/images/4/43/Engineer_workshop_S.png",
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
    "id": "workshop-s-portatil-engenheiro",
    "nome": "Workshop S",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Engineer_Workshop_S_-_Port.png",
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
    "id": "nightmare-ball-engenheiro",
    "nome": "Nightmare Ball",
    "imagem": "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png",
    "tipo": "pokebola",
    "rank": "S",
    "skill": 100,
    "unidadesPorReceita": 100,
    "tempo": "2 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 210,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      }
    ]
  },
  {
    "id": "beast-ball-engenheiro",
    "nome": "Beast Ball",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Beast_Ball.png",
    "tipo": "pokebola",
    "rank": "S",
    "skill": 120,
    "unidadesPorReceita": 15,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 9000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Yellow Star Pieces",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Yellow-Star-Piece.gif"
      },
      {
        "nome": "Apricorns",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Land Shark Horns",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Whiskers Fins",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      },
      {
        "nome": "Gear Noses",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      }
    ]
  },
  {
    "id": "xbox-series-s-engenheiro",
    "nome": "Xbox Series S",
    "imagem": "https://wiki.pokexgames.com/images/f/f1/Xbox_Series_S.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 105,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Elefish Fins",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Ice Pieces",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Savage Fins",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Electric Fish Tails",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      }
    ]
  },
  {
    "id": "playstation-5-engenheiro",
    "nome": "PlayStation 5",
    "imagem": "https://wiki.pokexgames.com/images/3/30/PlayStation_5.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 105,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Corrupted Dragon Teeth",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Corrupted Champion Belts",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "virtual-television-engenheiro",
    "nome": "Virtual Television",
    "imagem": "https://wiki.pokexgames.com/images/5/5c/Virtual_Television.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 105,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Corrupted Dragon Teeth",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Royal Manes",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Cave Nails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Toxic Gosmes",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Giant Tusk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png"
      }
    ]
  },
  {
    "id": "futurist-tv-engenheiro",
    "nome": "Futurist TV",
    "imagem": "https://wiki.pokexgames.com/images/6/63/Futurist-TV.gif",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 9000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Corrupted Doll Stars",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Black Lucky Charms",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Corrupted Pinsir Horns",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      },
      {
        "nome": "Corrupted Ice Orbs",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Electric Fish Tails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      },
      {
        "nome": "Alolan Electric Rat Tails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Virtual Television",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/5/5c/Virtual_Television.png/40px-Virtual_Television.png"
      }
    ]
  },
  {
    "id": "exercise-bicycle-engenheiro",
    "nome": "Exercise Bicycle",
    "imagem": "https://wiki.pokexgames.com/images/0/07/Exercise_Bicycle.png",
    "tipo": "eletrodomestico",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 9000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Ice Orbs",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Razor Claws",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Red Spikes",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Mach Nails",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      },
      {
        "nome": "Gear Noses",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      }
    ]
  },
  {
    "id": "exercise-machine-engenheiro",
    "nome": "Exercise Machine",
    "imagem": "https://wiki.pokexgames.com/images/d/d7/Exercise_Machine.png",
    "tipo": "eletrodomestico",
    "rank": "S",
    "skill": 110,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 9000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Corrupted Champion Belts",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Corrupted Lizard Tails",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      },
      {
        "nome": "Royal Manes",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Cow Tails",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      },
      {
        "nome": "Blade Horns",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      }
    ]
  },
  {
    "id": "supine-engenheiro",
    "nome": "Supine",
    "imagem": "https://wiki.pokexgames.com/images/1/1d/Supine.png",
    "tipo": "eletrodomestico",
    "rank": "S",
    "skill": 110,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 9000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Corrupted Steelix Tails",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Catfish Tails",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Corrupted Pinsir Horns",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Flame Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      }
    ]
  },
  {
    "id": "mecha-cam-engenheiro",
    "nome": "Mecha Cam",
    "imagem": "https://wiki.pokexgames.com/images/7/76/Mecha_Cam.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 103,
    "tempo": "2 dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 6000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Big Screws",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Big_Screw.png"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Mole Big Hairs",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      }
    ]
  },
  {
    "id": "golden-cam-engenheiro",
    "nome": "Golden Cam",
    "imagem": "https://wiki.pokexgames.com/images/7/74/Golden_Cam.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 106,
    "tempo": "2 dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 6000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Big Screws",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Big_Screw.png"
      },
      {
        "nome": "Corrupted Champion Belts",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Black Lucky Charms",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Corrupted Doll Stars",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Virtual Heads",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/04/Virtual_Head.png"
      }
    ]
  },
  {
    "id": "spherical-cam-engenheiro",
    "nome": "Spherical Cam",
    "imagem": "https://wiki.pokexgames.com/images/9/97/Spherical_Cam.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 110,
    "tempo": "2 dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 6000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 2000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Big Screws",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Big_Screw.png"
      },
      {
        "nome": "Corrupted Ice Pieces",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Green Hairs",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      }
    ]
  },
  {
    "id": "heavy-cam-engenheiro",
    "nome": "Heavy Cam",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Heavy_Cam.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 113,
    "tempo": "2 dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 6000,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Big Screws",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Big_Screw.png"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Big Mount Horns",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Mount_Big_Horn.png"
      },
      {
        "nome": "Corrupted Steelix Tails",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      }
    ]
  },
  {
    "id": "futurist-cam-engenheiro",
    "nome": "Futurist Cam",
    "imagem": "https://wiki.pokexgames.com/images/9/99/Futurist_Cam.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 118,
    "tempo": "4 dias",
    "recursos": [
      {
        "nome": "15k Corrupted Iron Ores",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Big Screws",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Big_Screw.png"
      },
      {
        "nome": "Corrupted Poisonous Tails",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Cow Tails",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      },
      {
        "nome": "Corrupted Doll Stars",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Dragon Wings",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/f/fa/Dragon_Wings.png"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Ice Crystals",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
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
    "id": "futurist-refrigerator-engenheiro",
    "nome": "Futurist Refrigerator",
    "imagem": "https://wiki.pokexgames.com/images/d/d9/Futurist_Refrigerator.png",
    "tipo": "eletrodomestico",
    "rank": "S",
    "skill": 103,
    "tempo": "3 dias",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 1050,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Virtual Tails",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Virtual_Tail.png"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      }
    ]
  },
  {
    "id": "slim-futurist-balcony-engenheiro",
    "nome": "Slim Futurist Balcony",
    "imagem": "https://wiki.pokexgames.com/images/9/95/Slim_Futurist_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Corrupted Champion Belts",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "futurist-balcony-engenheiro",
    "nome": "Futurist Balcony",
    "imagem": "https://wiki.pokexgames.com/images/3/36/Futurist_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 102,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Lovely Topknots",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Small Bird Beaks",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bugs",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      }
    ]
  },
  {
    "id": "large-futurist-balcony-engenheiro",
    "nome": "Large Futurist Balcony",
    "imagem": "https://wiki.pokexgames.com/images/3/33/Large_Futurist_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Lovely Topknots",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      }
    ]
  },
  {
    "id": "small-futurist-table-engenheiro",
    "nome": "Small Futurist Table",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/Small_Futurist_Table.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Cave Nails",
        "quantidade": 22,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      }
    ]
  },
  {
    "id": "large-futurist-table-engenheiro",
    "nome": "Large Futurist Table",
    "imagem": "https://wiki.pokexgames.com/images/2/23/Large_Futurist_Table.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Elefish Fins",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Ice Pieces",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      }
    ]
  },
  {
    "id": "z-balcony-engenheiro",
    "nome": "Z-Balcony",
    "imagem": "https://wiki.pokexgames.com/images/b/bb/Z-Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Corrupted Ice Orbs",
        "quantidade": 21,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      }
    ]
  },
  {
    "id": "compact-high-tech-computer-engenheiro",
    "nome": "Compact High-Tech Computer",
    "imagem": "https://wiki.pokexgames.com/images/2/24/Compact_High-Tech_Computer.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 110,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Corrupted Iron Ores",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Compressed Steels",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Compressed_Steel.png"
      },
      {
        "nome": "Big Screws",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Big_Screw.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      }
    ]
  },
  {
    "id": "technological-hammer-engenheiro",
    "nome": "Technological Hammer",
    "imagem": "https://wiki.pokexgames.com/images/1/1a/Technological_Hammer.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 120,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "15k Corrupted Iron Ores",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Corrupted_Iron_Ore.png"
      },
      {
        "nome": "Ancient Charmander Idols",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/5/57/Ancient_Charmander_Idol.png"
      },
      {
        "nome": "Ancient Claydol Idols",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/f/f9/Ancient_Claydol_Idol.png"
      },
      {
        "nome": "Ancient Dragalge Idols",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Ancient_Dragalge_Idol.png"
      },
      {
        "nome": "Ancient Dragonite Idols",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Anciente_Dragonite_Idol.png"
      },
      {
        "nome": "Ancient Vespiquen Idols",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Ancient_Vespiquen_Idol.png"
      },
      {
        "nome": "Giant Kobans",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Giant_Koban.png"
      },
      {
        "nome": "Giant Hamburguers",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Giant_Hamburguer.png"
      },
      {
        "nome": "Big Rock Tails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Big_Rock_Tail.png"
      },
      {
        "nome": "Big Red Feathers",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e5/Big_Red_Feather.png"
      },
      {
        "nome": "Beetle Horns",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Beetle_Horn.png"
      },
      {
        "nome": "Star Remains",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b1/Star_Remains.png"
      },
      {
        "nome": "Mecha Reactor",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/45/Mecha_Reactor.png"
      }
    ]
  },
  {
    "id": "nintendo-switch-engenheiro",
    "nome": "Nintendo Switch",
    "imagem": "https://wiki.pokexgames.com/images/4/42/Nintendo_Switch.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 117,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 1800,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Corrupted Magnets",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Black Lucky Charms",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bugs",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Corrupted Steelix Tails",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Twin Stings",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Twin_Stings.png"
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
        "nome": "Flame Tails",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Xbox Series S",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/f/f1/Xbox_Series_S.png/30px-Xbox_Series_S.png"
      },
      {
        "nome": "PlayStation 5",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/3/30/PlayStation_5.png/28px-PlayStation_5.png"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      }
    ]
  },
  {
    "id": "special-flash-drive-engenheiro",
    "nome": "Special Flash Drive",
    "imagem": "https://wiki.pokexgames.com/images/5/50/Special_Flash_Drive.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 100,
    "tempo": "30 minutos",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Feline Furs",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Feline_Fur.png"
      }
    ]
  },
  {
    "id": "rotom-market-engenheiro",
    "nome": "Rotom Market",
    "imagem": "https://wiki.pokexgames.com/images/b/bd/Rotom_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Elefish Fins",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Alolan Electric Rat Tails",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Gleam Tails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "shiny-rotom-market-engenheiro",
    "nome": "Shiny Rotom Market",
    "imagem": "https://wiki.pokexgames.com/images/0/05/Shiny_Rotom_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 112,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 2100,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Big Eagle Feather",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/7/76/Big_Eagle_Feather.png"
      },
      {
        "nome": "Elefish Fins",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Alolan Electric Rat Tails",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Royal Tails",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Gleam Tails",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      }
    ]
  },
  {
    "id": "wooden-market-engenheiro",
    "nome": "Wooden Market",
    "imagem": "https://wiki.pokexgames.com/images/6/64/Wooden_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 2100,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Whiskers Fins",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Virtual Tails",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Virtual_Tail.png"
      },
      {
        "nome": "Corrupted Tree Branches",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Corrupted Steelix Tails",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Razor Claws",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Continent Thorns",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      }
    ]
  },
  {
    "id": "red-woodden-market-engenheiro",
    "nome": "Red Woodden Market",
    "imagem": "https://wiki.pokexgames.com/images/9/9b/Red_Wooden_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 2100,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Corrupted Pots Of Lava",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Red Spikes",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Corrupted Tree Branches",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Corrupted Feathers",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif"
      },
      {
        "nome": "Royal Tails",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Flame Tails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      }
    ]
  },
  {
    "id": "capsule-market-engenheiro",
    "nome": "Capsule Market",
    "imagem": "https://wiki.pokexgames.com/images/5/5c/Capsule_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Empty Nightmare Balls",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Doll Stars",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Gear Noses",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "black-capsule-market-engenheiro",
    "nome": "Black Capsule Market",
    "imagem": "https://wiki.pokexgames.com/images/6/69/Black_Capsule_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Empty Nightmare Ball",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Toxic Gosmes",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "pink-capsule-market-engenheiro",
    "nome": "Pink Capsule Market",
    "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Capsule_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Empty Nightmare Balls",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Corrupted Gem Stars",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Pig Ears",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Curly Pig Tails",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "orange-capsule-market-engenheiro",
    "nome": "Orange Capsule Market",
    "imagem": "https://wiki.pokexgames.com/images/8/8f/Orange_Capsule_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Empty Nightmare Balls",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Royal Manes",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Flame Tails",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "blue-capsule-market-engenheiro",
    "nome": "Blue Capsule Market",
    "imagem": "https://wiki.pokexgames.com/images/3/36/Blue_Capsule_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Apricorns",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/c/c2/Apricorn.png"
      },
      {
        "nome": "Empty Nightmare Ball",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png"
      },
      {
        "nome": "Corrupted Ice Orbs",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Whiskers Fins",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Virtual Bodies",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Virtual_Body.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "futurist-market-engenheiro",
    "nome": "Futurist Market",
    "imagem": "https://wiki.pokexgames.com/images/c/c0/Futurist_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 120,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 3000,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Corrupted Magnets",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "White Hairs",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Solid Heads",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Razor Claws",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Giant Tusks",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png"
      },
      {
        "nome": "Flame Tails",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      }
    ]
  },
  {
    "id": "green-futurist-market-engenheiro",
    "nome": "Green Futurist Market",
    "imagem": "https://wiki.pokexgames.com/images/6/6f/Green_Futurist_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 120,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 3000,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Corrupted Doll Stars",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Pots Of Lava",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Black Lucky Charms",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Corrupted Ice Pieces",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      },
      {
        "nome": "Gear Noses",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Mole Big Hairs",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Gleam Tails",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      }
    ]
  },
  {
    "id": "purple-futurist-market-engenheiro",
    "nome": "Purple Futurist Market",
    "imagem": "https://wiki.pokexgames.com/images/b/ba/Purple_Futurist_Market.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 120,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 3000,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Cave Nails",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Virtual Heads",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/04/Virtual_Head.png"
      },
      {
        "nome": "Continent Thorns",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      }
    ]
  },
  {
    "id": "silver-high-tech-locker-engenheiro",
    "nome": "Silver High-Tech Locker",
    "imagem": "https://wiki.pokexgames.com/images/8/87/Silver_High-Tech_Locker.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 2100,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Corrupted Poisonous Tails",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      },
      {
        "nome": "Curly Pig Tails",
        "quantidade": 62,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Electric Fish Tails",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      },
      {
        "nome": "Remains of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Giant Tusks",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png"
      },
      {
        "nome": "Emperor Tridents",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Continent Thorns",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 185,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      }
    ]
  },
  {
    "id": "black-high-tech-locker-engenheiro",
    "nome": "Black High-Tech Locker",
    "imagem": "https://wiki.pokexgames.com/images/e/ed/Black_High-Tech_Locker.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 2100,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Corrupted Pinsir Horns",
        "quantidade": 180,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Big Boss Hats",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/31/Big_Boss_Hat.png"
      },
      {
        "nome": "Virtual Heads",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/04/Virtual_Head.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 185,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      }
    ]
  },
  {
    "id": "enhancement-kit-engenheiro",
    "nome": "Enhancement Kit",
    "imagem": "https://wiki.pokexgames.com/images/b/b3/Enhancement_Kit.png",
    "tipo": "material",
    "rank": "S",
    "skill": 107,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Wolf Tails",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/Wolf_Tail.png"
      },
      {
        "nome": "Black Wool Balls",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      }
    ]
  },
  {
    "id": "drone-engenheiro",
    "nome": "Drone",
    "imagem": "https://wiki.pokexgames.com/images/e/ec/Drone.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 110,
    "tempo": "7 dias",
    "recursos": [
      {
        "nome": "30k Tech Data",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Corrupted Streak Tails",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Corrupted Ice Orbs",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Corrupted Ice Pieces",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Feathers",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif"
      },
      {
        "nome": "Brutall Fins",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png"
      },
      {
        "nome": "Gear Noses",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Twin Stings",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Twin_Stings.png"
      },
      {
        "nome": "Giant Dragon Pearl",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Giant_Dragon_Pearl.gif"
      },
      {
        "nome": "Beetle Horns",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Beetle_Horn.png"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      }
    ]
  },
  {
    "id": "light-bomb-engenheiro",
    "nome": "Light Bomb",
    "imagem": "https://wiki.pokexgames.com/images/6/6b/Light_Bomb.png",
    "tipo": "turret",
    "rank": "S",
    "skill": 100,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Corrupted Champion Belts",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "gravity-field-engenheiro",
    "nome": "Gravity Field",
    "imagem": "https://wiki.pokexgames.com/images/0/07/Gravity_Field.png",
    "tipo": "turret",
    "rank": "S",
    "skill": 105,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Corrupted Streak Tails",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      }
    ]
  },
  {
    "id": "snow-bomb-engenheiro",
    "nome": "Snow Bomb",
    "imagem": "https://wiki.pokexgames.com/images/5/51/Snow_Bomb.png",
    "tipo": "turret",
    "rank": "S",
    "skill": 100,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      }
    ]
  },
  {
    "id": "laser-gun-turret-engenheiro",
    "nome": "Laser Gun Turret",
    "imagem": "https://wiki.pokexgames.com/images/1/1c/Laser_Gun_turret.png",
    "tipo": "turret",
    "rank": "S",
    "skill": 100,
    "tempo": "30 minutos",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Cave Nails",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      }
    ]
  },
  {
    "id": "laser-beam-turret-engenheiro",
    "nome": "Laser Beam Turret",
    "imagem": "https://wiki.pokexgames.com/images/0/05/Laser_Beam_Turret.png",
    "tipo": "turret",
    "rank": "S",
    "skill": 100,
    "tempo": "30 minutos",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Royal Manes",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Toxic Gosmes",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      }
    ]
  },
  {
    "id": "thunder-shock-turret-engenheiro",
    "nome": "Thunder Shock Turret",
    "imagem": "https://wiki.pokexgames.com/images/f/f3/Thunder_Shock_Turret.png",
    "tipo": "turret",
    "rank": "S",
    "skill": 105,
    "tempo": "30 minutos",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Corrupted Dragon Teeth",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      }
    ]
  },
  {
    "id": "mecha-device-engenheiro",
    "nome": "Mecha Device",
    "imagem": "https://wiki.pokexgames.com/images/a/af/Mecha_Device.png",
    "tipo": "mecha",
    "rank": "S",
    "skill": 120,
    "tempo": "7 dias",
    "recursos": [
      {
        "nome": "36k Tech Data",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Dragon Goo",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Dragon_Goo.png"
      },
      {
        "nome": "Neutral Essences",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b5/Neutral_essence.png"
      },
      {
        "nome": "Turtle Spike",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Turtle_Spike.png"
      },
      {
        "nome": "Psychic Mustaches",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      },
      {
        "nome": "Corrupted Feathers",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif"
      },
      {
        "nome": "Corrupted Magnets",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Corrupted Ice Orbs",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Savage Fins",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Virtual Tails",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Virtual_Tail.png"
      },
      {
        "nome": "Solid Heads",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Metal Stones",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Traces of Voodoo Doll",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c5/Traces_of_Voodoo_doll.png"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      }
    ]
  },
  {
    "id": "full-fuel-tank-engenheiro",
    "nome": "Full Fuel Tank",
    "imagem": "https://wiki.pokexgames.com/images/4/4a/Full_Fuel_Tank.png",
    "tipo": "material",
    "rank": "S",
    "skill": 100,
    "tempo": "1 minuto",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 140,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Empty Fuel Tank",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/EmptyFuelTank.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Nightmare Gems",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/01/Nightmare_Gem.png"
      }
    ]
  },
  {
    "id": "blueprint-engenheiro",
    "nome": "Blueprint",
    "imagem": "https://wiki.pokexgames.com/images/9/98/Blueprint.png",
    "tipo": "eletronico",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Petite Leaves",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Corrupted Doll Stars",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Ice Orbs",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Catfish Tails",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      },
      {
        "nome": "Gear Noses",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      }
    ]
  },
  {
    "id": "fuel-tank-upgrade-i-engenheiro",
    "nome": "Fuel Tank Upgrade I",
    "imagem": "https://wiki.pokexgames.com/images/9/92/Fuel_Tank_Upgrade_I.png",
    "tipo": "material",
    "rank": "S",
    "skill": 103,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 3000,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Nightmare Ores",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/NW_ore.png"
      },
      {
        "nome": "Nightmare Unusual Ores",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/NW_unusual_ore.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Blueprint",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Blueprint.png"
      }
    ]
  },
  {
    "id": "fuel-tank-upgrade-ii-engenheiro",
    "nome": "Fuel Tank Upgrade II",
    "imagem": "https://wiki.pokexgames.com/images/9/92/Fuel_Tank_Upgrade_I.png",
    "tipo": "material",
    "rank": "S",
    "skill": 107,
    "tempo": "7 dias",
    "recursos": [
      {
        "nome": "Tech Data",
        "quantidade": 7500,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Nightmare Ores",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/NW_ore.png"
      },
      {
        "nome": "Nightmare Unusual Ores",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/NW_unusual_ore.png"
      },
      {
        "nome": "Gear Noses",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Alolan Electric Rat Tails",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Razor Claws",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Emperor Tridents",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Blueprint",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Blueprint.png"
      }
    ]
  },
  {
    "id": "speed-boost-upgrade-engenheiro",
    "nome": "Speed Boost Upgrade",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Speed_Boost_Upgrade.png",
    "tipo": "material",
    "rank": "S",
    "skill": 116,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "24k Tech Data",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Small Bird Beaks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Pig Ears",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Corrupted Feathers",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif"
      },
      {
        "nome": "Solid Heads",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Compressed Nightmare Gems",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Compressed_Nightmare_Gem.png"
      },
      {
        "nome": "Nightmare Ores",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/NW_ore.png"
      },
      {
        "nome": "Nightmare Unusual Ores",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/NW_unusual_ore.png"
      },
      {
        "nome": "Mole Big Hairs",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Alolan Electric Rat Tails",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Emperor Tridents",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Gleam Tails",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Blueprint",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Blueprint.png"
      }
    ]
  },
  {
    "id": "fuel-consumption-upgrade-i-engenheiro",
    "nome": "Fuel Consumption Upgrade I",
    "imagem": "https://wiki.pokexgames.com/images/d/dc/Fuel_Consumption_Upgrade_I.png",
    "tipo": "material",
    "rank": "S",
    "skill": 110,
    "tempo": "5 dias",
    "recursos": [
      {
        "nome": "24k Tech Data",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Corrupted Pots Of Lava",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Doll Stars",
        "quantidade": 165,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Black Lucky Charms",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Corrupted Lizard Tails",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Mole Big Hairs",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Gleam Tails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Blade Horns",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      },
      {
        "nome": "Nightmare Ores",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/NW_ore.png"
      },
      {
        "nome": "Nightmare Unusual Ores",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/NW_unusual_ore.png"
      },
      {
        "nome": "Emperor Tridents",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Blueprint",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Blueprint.png"
      }
    ]
  },
  {
    "id": "fuel-consumption-upgrade-ii-engenheiro",
    "nome": "Fuel Consumption Upgrade II",
    "imagem": "https://wiki.pokexgames.com/images/d/dc/Fuel_Consumption_Upgrade_I.png",
    "tipo": "material",
    "rank": "S",
    "skill": 113,
    "tempo": "7 dias",
    "recursos": [
      {
        "nome": "30k Tech Data",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/65/Tech_Data.png"
      },
      {
        "nome": "Metal Scraps",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Metal_Scraps.png"
      },
      {
        "nome": "Corrupted Gem Stars",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Corrupted Cow Tails",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Lovely Topknots",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Razor Claws",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Nightmare Ores",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/d/dd/NW_ore.png"
      },
      {
        "nome": "Nightmare Unusual Ores",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/NW_unusual_ore.png"
      },
      {
        "nome": "Catfish Whiskers",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Catfish_Whiskers.png"
      },
      {
        "nome": "Mach Nails",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      },
      {
        "nome": "Blade Horns",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      },
      {
        "nome": "Blueprint",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Blueprint.png"
      }
    ]
  },
  {
    "id": "mini-ammunition-factory-engenheiro",
    "nome": "Mini Ammunition Factory",
    "imagem": "https://wiki.pokexgames.com/images/0/0c/Mini_Ammunition_Factory.png",
    "tipo": "turret",
    "rank": "S",
    "skill": 100,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Magnets",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Black Hulls",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Solid Heads",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Lovely Topknots",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Razor Claws",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Corrupted Steelix Tails",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Catfish Whiskers",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Catfish_Whiskers.png"
      }
    ]
  },
  {
    "id": "nightmare-pokegear-engenheiro",
    "nome": "Nightmare Pokégear",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Nightmare_Pokegear.png",
    "tipo": "material",
    "rank": "S",
    "skill": 103,
    "tempo": "20 horas",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Black Lucky Charms",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Green Hairs",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Ice Crystals",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Savage Fins",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Corrupted Champion Belts",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Blue Ghost Candle",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/61/Blue_Ghost_Candle.png"
      },
      {
        "nome": "Solid Heads",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      }
    ]
  },
  {
    "id": "pokegear-battery-engenheiro",
    "nome": "Pokégear Battery",
    "imagem": "https://wiki.pokexgames.com/images/a/a5/Pokegear_Battery.png",
    "tipo": "material",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Crypto Diamond Tokens",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/f/f8/Crypto_Diamond_Token.png"
      },
      {
        "nome": "Corrupted Magnets",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Mole Hairs",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bugs",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Small Bird Beaks",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      }
    ]
  }
];
