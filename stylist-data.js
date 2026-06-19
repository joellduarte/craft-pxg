// ============================================================================
// stylist-data.js — gerado por scripts/scrape-stylist.js em 2026-06-18T22:09:12.110Z
// Fonte: https://wiki.pokexgames.com/index.php/Craft_Profiss%C3%B5es_-_Estilista
//
// Schema:
//   { id, nome, imagem, tipo, rank, skill, [unidadesPorReceita], [tempo], recursos: [{nome, quantidade, imagem}] }
//   unidadesPorReceita=N => receita produz N unidades por execução (default 1 quando omitido)
//
// NÃO EDITE ESTE ARQUIVO À MÃO. Re-rode o scraper quando precisar atualizar.
// ============================================================================

const CRAFTS_STYLIST = [
  {
    "id": "diamond-dust-estilista",
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
    "id": "cloth-estilista",
    "nome": "Cloth",
    "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png",
    "tipo": "material",
    "rank": "E",
    "skill": 0,
    "tempo": "5 Segundos",
    "recursos": [
      {
        "nome": "Wool Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/41/Wool_Ball.png"
      }
    ]
  },
  {
    "id": "xp-plank-estilista",
    "nome": "XP Plank",
    "imagem": "https://wiki.pokexgames.com/images/c/c8/XP_Plank.png",
    "tipo": "xp-banner",
    "rank": "E",
    "skill": 0,
    "tempo": "5 Minutos",
    "recursos": [
      {
        "nome": "Earth Ball",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Earth_Ball.png"
      },
      {
        "nome": "Log",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "wooden-chair-estilista",
    "nome": "Wooden Chair",
    "imagem": "https://wiki.pokexgames.com/images/8/87/Wooden_Chair.png",
    "tipo": "movel",
    "rank": "E",
    "skill": 0,
    "unidadesPorReceita": 5,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Log",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "oak-table-estilista",
    "nome": "Oak Table",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Mesavelhaa.png",
    "tipo": "movel",
    "rank": "E",
    "skill": 0,
    "unidadesPorReceita": 2,
    "tempo": "5 Minutos",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Log",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "locker-estilista",
    "nome": "Locker",
    "imagem": "https://wiki.pokexgames.com/images/3/3a/Locker-esi.png",
    "tipo": "movel",
    "rank": "E",
    "skill": 0,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Log",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "dresser-estilista",
    "nome": "Dresser",
    "imagem": "https://wiki.pokexgames.com/images/a/a1/Dresser.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 0,
    "unidadesPorReceita": 2,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Log",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "hippie-male-outfit-estilista",
    "nome": "Hippie Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/d/d7/Hippie_male.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 15,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Squirrel Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/60/Squirrel_Tail.png"
      },
      {
        "nome": "Red Wing",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/ba/Red_Wing.png"
      },
      {
        "nome": "Comb",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "hippie-female-outfit-estilista",
    "nome": "Hippie Female Outfit",
    "imagem": "https://wiki.pokexgames.com/images/4/43/Hippie_female.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 15,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Squirrel Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/60/Squirrel_Tail.png"
      },
      {
        "nome": "Blue Vines",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Blue_Vines.png"
      },
      {
        "nome": "Strange Flower",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/Strange_Flower.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "cook-male-outfit-estilista",
    "nome": "Cook Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/7/7b/CookOutfit.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 17,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Pizza",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/bd/Pizzinha.png"
      },
      {
        "nome": "Sushi",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Sushiii.png"
      },
      {
        "nome": "Fake Fork",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Fake_Fork.png"
      },
      {
        "nome": "Bear Paw",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Bear_Paw.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "school-girl-outfit-estilista",
    "nome": "School Girl Outfit",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/SchoolGirl.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 17,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Comb",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Cloth",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Red Scarf",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Red_Scarf.png"
      },
      {
        "nome": "Pink Bow",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4e/Pink_Bow.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "air-tank-estilista",
    "nome": "Air Tank",
    "imagem": "https://wiki.pokexgames.com/images/5/58/Layer5.png",
    "tipo": "addon",
    "rank": "E",
    "skill": 15,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Rubber Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      },
      {
        "nome": "Feather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/FeatherMark.png"
      },
      {
        "nome": "Bat Wing",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/35/Bat_Wing.png"
      },
      {
        "nome": "Log",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "fins-estilista",
    "nome": "Fins",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Layer4.png",
    "tipo": "addon",
    "rank": "E",
    "skill": 15,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Water Gem",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Water_gem.png"
      },
      {
        "nome": "Magikarp Fin",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c6/Magikarp_Fin.png"
      },
      {
        "nome": "Log",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "diving-mask-estilista",
    "nome": "Diving Mask",
    "imagem": "https://wiki.pokexgames.com/images/4/4e/Layer2.png",
    "tipo": "addon",
    "rank": "E",
    "skill": 15,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Water Gem",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Water_gem.png"
      },
      {
        "nome": "Ruby",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/73/RubyMark.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Log",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "snow-ski-estilista",
    "nome": "Snow Ski",
    "imagem": "https://wiki.pokexgames.com/images/4/48/Layer1.png",
    "tipo": "addon",
    "rank": "E",
    "skill": 15,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Ice Orb",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Tooth",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/7/78/Tooth.png"
      },
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Log",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "ski-poles-estilista",
    "nome": "Ski Poles",
    "imagem": "https://wiki.pokexgames.com/images/8/8b/Layer0.png",
    "tipo": "addon",
    "rank": "E",
    "skill": 15,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Stone Orb",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Screw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Log",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "goggles-estilista",
    "nome": "Goggles",
    "imagem": "https://wiki.pokexgames.com/images/3/3b/Layer3.png",
    "tipo": "addon",
    "rank": "E",
    "skill": 15,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Sandbag",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/52/SandbagMark.png"
      },
      {
        "nome": "Bag of Pollen",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/BagOfPollem.png"
      },
      {
        "nome": "Bird Beak",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/0c/BirdBeak.png"
      },
      {
        "nome": "Log",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "red-cap-estilista",
    "nome": "Red Cap",
    "imagem": "https://wiki.pokexgames.com/images/0/0f/Red_Cap.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 10,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Bulb",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/Bulb.png"
      },
      {
        "nome": "Seed",
        "quantidade": 72,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Seed.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "ninja-mask-1-estilista",
    "nome": "Ninja Mask",
    "imagem": "https://wiki.pokexgames.com/images/e/e9/Ninja_Mask.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 10,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Fire Tail",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Essence of Fire",
        "quantidade": 288,
        "imagem": "https://wiki.pokexgames.com/images/9/94/Essence_of_fire.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 800,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "bandit-scarf-estilista",
    "nome": "Bandit Scarf",
    "imagem": "https://wiki.pokexgames.com/images/5/5c/Bandit_Scarf.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 12,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Squirtle Hull",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 72,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Water_gem.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "green-beret-estilista",
    "nome": "Green Beret",
    "imagem": "https://wiki.pokexgames.com/images/e/e2/Green_Beret.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 2,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Butterfly Wing",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/0/01/Butterfly_Wing.png"
      },
      {
        "nome": "Bug Gosme",
        "quantidade": 72,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Bug_Gosme.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "rambo-band-estilista",
    "nome": "Rambo Band",
    "imagem": "https://wiki.pokexgames.com/images/6/62/Rambo_Band.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 2,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "purple-band-estilista",
    "nome": "Purple Band",
    "imagem": "https://wiki.pokexgames.com/images/c/c0/Purple_Band.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 2,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Bug Gosme",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Bug_Gosme.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "yellow-scarf-1-estilista",
    "nome": "Yellow Scarf",
    "imagem": "https://wiki.pokexgames.com/images/8/85/Yellow_Scarf.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Bee Sting",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Bee_Sting.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "red-scarf-1-estilista",
    "nome": "Red Scarf",
    "imagem": "https://wiki.pokexgames.com/images/4/4f/Red_Scarf.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Butterfly Wing",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/0/01/Butterfly_Wing.png"
      },
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "captain-hat-estilista",
    "nome": "Captain Hat",
    "imagem": "https://wiki.pokexgames.com/images/4/4d/Captain_Hat.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Bag of Pollen",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/BagOfPollem.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "fantasy-hat-estilista",
    "nome": "Fantasy Hat",
    "imagem": "https://wiki.pokexgames.com/images/1/13/Fantasy_Hat.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 4,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Feather",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/FeatherMark.png"
      },
      {
        "nome": "Straw",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "bone-cap-estilista",
    "nome": "Bone Cap",
    "imagem": "https://wiki.pokexgames.com/images/1/19/Bone_Cap.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 4,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Feather",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/FeatherMark.png"
      },
      {
        "nome": "Bone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Bone.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "zombie-cap-estilista",
    "nome": "Zombie Cap",
    "imagem": "https://wiki.pokexgames.com/images/7/77/Zombie_Cap.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 6,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Colored Feather",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "shower-cap-estilista",
    "nome": "Shower Cap",
    "imagem": "https://wiki.pokexgames.com/images/2/27/Shower_Cap.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 4,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Bitten Apple",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/1/12/BittenApple.png"
      },
      {
        "nome": "Rubber Ball",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "yellow-scarf-2-estilista",
    "nome": "Yellow Scarf",
    "imagem": "https://wiki.pokexgames.com/images/d/db/Yellow_Scarf-Fearow.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 14,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Feather",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/FeatherMark.png"
      },
      {
        "nome": "Red Wing",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/ba/Red_Wing.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "red-scarf-2-estilista",
    "nome": "Red Scarf",
    "imagem": "https://wiki.pokexgames.com/images/f/f0/Red_Scarf-2.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 14,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Red Wing",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/ba/Red_Wing.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "green-scarf-1-estilista",
    "nome": "Green Scarf",
    "imagem": "https://wiki.pokexgames.com/images/6/6f/Green_Scarf-2.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 14,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Bird Beak",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/0c/BirdBeak.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "pink-bow-estilista",
    "nome": "Pink Bow",
    "imagem": "https://wiki.pokexgames.com/images/4/4e/Pink_Bow.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 10,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Snake Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Snake_Tail.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "yellow-bow-estilista",
    "nome": "Yellow Bow",
    "imagem": "https://wiki.pokexgames.com/images/c/c9/Yellow_Bow.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 10,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Mushroom",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/8c/Mushroom.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "ghost-costume-1-estilista",
    "nome": "Ghost Costume",
    "imagem": "https://wiki.pokexgames.com/images/7/7d/Ghost_Costume.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Electric Rat Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Traces of Ghost",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 800,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "orange-scarf-estilista",
    "nome": "Orange Scarf",
    "imagem": "https://wiki.pokexgames.com/images/6/6c/Orange_Scarf.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Electric Rat Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Screw",
        "quantidade": 62,
        "imagem": "https://wiki.pokexgames.com/images/5/59/Screw.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "green-scarf-2-estilista",
    "nome": "Green Scarf",
    "imagem": "https://wiki.pokexgames.com/images/6/6a/Green_Scarf.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Electric Box",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "blue-scarf-1-estilista",
    "nome": "Blue Scarf",
    "imagem": "https://wiki.pokexgames.com/images/2/21/Blue_Scarf.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Electric Box",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "skull-cap-estilista",
    "nome": "Skull Cap",
    "imagem": "https://wiki.pokexgames.com/images/a/a5/Skull_Cap.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Sandbag",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/5/52/SandbagMark.png"
      },
      {
        "nome": "Bone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Bone.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "old-man-glasses-estilista",
    "nome": "Old Man Glasses",
    "imagem": "https://wiki.pokexgames.com/images/a/a9/Old_Man_Glasses.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 16,
    "tempo": "6 Minutos",
    "recursos": [
      {
        "nome": "Sandbag",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/5/52/SandbagMark.png"
      },
      {
        "nome": "Bone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Bone.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "red-stripe-estilista",
    "nome": "Red Stripe",
    "imagem": "https://wiki.pokexgames.com/images/a/af/Red_Stripe.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 18,
    "tempo": "6 Minutos",
    "recursos": [
      {
        "nome": "Female Ear",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Female_Ear.png"
      },
      {
        "nome": "Bottle of Poison",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Bottles_of_poison.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 800,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "ninja-mask-2-estilista",
    "nome": "Ninja Mask",
    "imagem": "https://wiki.pokexgames.com/images/2/2d/Ninja_Mask-Diglett.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Earth Ball",
        "quantidade": 82,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Earth_Ball.png"
      },
      {
        "nome": "Piece of Diglett",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/2a/Piece_Of_Diglett.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "freddy-krueger-costume-estilista",
    "nome": "Freddy Krueger Costume",
    "imagem": "https://wiki.pokexgames.com/images/1/14/Freddy_Krueger_Costume.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 12,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Nail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/4/40/Nail.png"
      },
      {
        "nome": "Luck Medallion",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Luck_Medallion.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 800,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "magic-kit-estilista",
    "nome": "Magic Kit",
    "imagem": "https://wiki.pokexgames.com/images/3/37/Magic_Kit.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 10,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Future Orb",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Psychic Spoon",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "wrestling-mask-1-estilista",
    "nome": "Wrestling Mask",
    "imagem": "https://wiki.pokexgames.com/images/b/b8/Wrestling_Mask.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Band Aid",
        "quantidade": 220,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Band_aids.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "disguise-estilista",
    "nome": "Disguise",
    "imagem": "https://wiki.pokexgames.com/images/e/e3/Disguise.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 14,
    "tempo": "5 Minutos",
    "recursos": [
      {
        "nome": "Plant Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Plant_Tail.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "kid-cap-estilista",
    "nome": "Kid Cap",
    "imagem": "https://wiki.pokexgames.com/images/1/1e/Kid_Cap.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 6,
    "tempo": "2 Minutos",
    "recursos": [
      {
        "nome": "Helicopter Leave",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Helicopter_Leave.png"
      },
      {
        "nome": "Strange Rock",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "ghost-costume-2-estilista",
    "nome": "Ghost Costume",
    "imagem": "https://wiki.pokexgames.com/images/3/3b/Ghost_Costume-Haunter.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 10,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Traces of Ghost",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "kiss-makeup-estilista",
    "nome": "Kiss Makeup",
    "imagem": "https://wiki.pokexgames.com/images/4/46/Kiss_Makeup.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 14,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Bone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Bone.png"
      },
      {
        "nome": "Tongue",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Toungue.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 800,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "pipe-estilista",
    "nome": "Pipe",
    "imagem": "https://wiki.pokexgames.com/images/b/b9/Pipe.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Venom Flute",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Venom_Flute.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "jester-hat-1-estilista",
    "nome": "Jester Hat",
    "imagem": "https://wiki.pokexgames.com/images/c/c7/Jester_Hat-Tangela.png",
    "tipo": "acessorio",
    "rank": "E",
    "skill": 10,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Blue Vines",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Blue_Vines.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 800,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "ghost-costume-3-estilista",
    "nome": "Ghost Costume",
    "imagem": "https://wiki.pokexgames.com/images/3/30/Ghost_Costume-tangela.png",
    "tipo": "outfit",
    "rank": "E",
    "skill": 8,
    "tempo": "3 Minutos",
    "recursos": [
      {
        "nome": "Blue Vines",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Blue_Vines.png"
      },
      {
        "nome": "Traces of Ghost",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Ghost Essence",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/fd/Ghost_essences.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 800,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "white-bed-estilista",
    "nome": "White Bed",
    "imagem": "https://wiki.pokexgames.com/images/a/ac/White_Bed1.png",
    "tipo": "movel",
    "rank": "E",
    "skill": 14,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Straw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Log",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "pink-tapestry-estilista",
    "nome": "Pink Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/0/00/Pink_Tapestry.png",
    "tipo": "movel",
    "rank": "E",
    "skill": 14,
    "tempo": "6 Minutos",
    "recursos": [
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Purple Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/30/Purple_Tapestry.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "dark-purple-tapestry-estilista",
    "nome": "Dark Purple Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/3/33/Dark_Purple_Tapestry.png",
    "tipo": "movel",
    "rank": "E",
    "skill": 14,
    "tempo": "6 Minutos",
    "recursos": [
      {
        "nome": "Blue Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Blue_Tapestry.png"
      },
      {
        "nome": "Purple Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/30/Purple_Tapestry.png"
      },
      {
        "nome": "Ghost Essence",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/fd/Ghost_essences.png"
      },
      {
        "nome": "Style Point",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "workshop-d-estilista",
    "nome": "Workshop D",
    "imagem": "https://wiki.pokexgames.com/images/d/d1/Stylist_Workshop_D.png",
    "tipo": "workshop",
    "rank": "E",
    "skill": 20,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Diamante",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-d-portatil-estilista",
    "nome": "Workshop D (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Workshop_D_Stylist_%28Port%C3%A1til%29.png",
    "tipo": "workshop",
    "rank": "E",
    "skill": 20,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Diamante",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "planks-estilista",
    "nome": "Planks",
    "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png",
    "tipo": "material",
    "rank": "D",
    "skill": 20,
    "tempo": "1 Segundo",
    "recursos": [
      {
        "nome": "Log",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "refined-style-point-estilista",
    "nome": "Refined Style Point",
    "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png",
    "tipo": "material",
    "rank": "D",
    "skill": 20,
    "tempo": "1 Segundo",
    "recursos": [
      {
        "nome": "Style Point",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png"
      }
    ]
  },
  {
    "id": "lesser-xp-banner-estilista",
    "nome": "Lesser XP Banner",
    "imagem": "https://wiki.pokexgames.com/images/5/5a/Lesser_XP_Banner.png",
    "tipo": "xp-banner",
    "rank": "D",
    "skill": 20,
    "tempo": "30 Minutos",
    "recursos": [
      {
        "nome": "Tissue",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Tissue.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "dragon-tamer-outfit-estilista",
    "nome": "Dragon Tamer Outfit",
    "imagem": "https://wiki.pokexgames.com/images/c/cb/DragonMaster.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 35,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Sand Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Sand_Tail.png"
      },
      {
        "nome": "Mini Wing",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "grandma-outfit-estilista",
    "nome": "Grandma Outfit",
    "imagem": "https://wiki.pokexgames.com/images/3/36/GrandmaOutfit.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 35,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Pumpkin Head",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/ef/Pumpkin_Head.png"
      },
      {
        "nome": "Ghost Costume",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Ghost_Costume.png"
      },
      {
        "nome": "Zombie Cap",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/77/Zombie_Cap.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Traces of Ghost",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Miss Trace",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "karate-outfit-estilista",
    "nome": "Karate Outfit",
    "imagem": "https://wiki.pokexgames.com/images/e/e8/KarateOutfit.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 37,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Wrestling Mask",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b8/Wrestling_Mask.png"
      },
      {
        "nome": "Green Belt Karate Kimono",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/29/Green_Belt_Karate_Kimono.png"
      },
      {
        "nome": "Onix Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/7/78/Onix_Tail.png"
      },
      {
        "nome": "Steelix Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Steelix_Tail.png"
      },
      {
        "nome": "Big Hands",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/Big_Hands.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "karate-master-outfit-estilista",
    "nome": "Karate Master Outfit",
    "imagem": "https://wiki.pokexgames.com/images/6/63/KarateMaster.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 37,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Wrestling Mask",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b8/Wrestling_Mask.png"
      },
      {
        "nome": "Yellow Belt Karate Kimono",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/df/Yellow_Belt_Karate_Kimono.png"
      },
      {
        "nome": "Belt of Champion",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png"
      },
      {
        "nome": "Iron Bracelet",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/40/Iron_Bracelet.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "street-female-outfit-estilista",
    "nome": "Street Female Outfit",
    "imagem": "https://wiki.pokexgames.com/images/3/3d/StreetOutfit.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 32,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Bandit Scarf",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Bandit_Scarf.png"
      },
      {
        "nome": "Blue Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Blue_Ball.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Greens",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Greens.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "purple-stripe-estilista",
    "nome": "Purple Stripe",
    "imagem": "https://wiki.pokexgames.com/images/c/c1/Purple_Stripe.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 22,
    "tempo": "9 Minutos",
    "recursos": [
      {
        "nome": "Earth Ball",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Earth_Ball.png"
      },
      {
        "nome": "Bottle of Poison",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Bottles_of_poison.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "clown-nose-estilista",
    "nome": "Clown Nose",
    "imagem": "https://wiki.pokexgames.com/images/b/b0/Clown_Nose.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 24,
    "tempo": "9 Minutos",
    "recursos": [
      {
        "nome": "Piece of Diglett",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/2a/Piece_Of_Diglett.png"
      },
      {
        "nome": "Topknot",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/29/Topknot.png"
      },
      {
        "nome": "Comb",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-karate-headband-estilista",
    "nome": "Red Karate Headband",
    "imagem": "https://wiki.pokexgames.com/images/4/4b/Red_Karate_Headband.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 24,
    "tempo": "9 Minutos",
    "recursos": [
      {
        "nome": "Karate Duck",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      },
      {
        "nome": "Essence of Fire",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/94/Essence_of_fire.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "yellow-karate-headband-estilista",
    "nome": "Yellow Karate Headband",
    "imagem": "https://wiki.pokexgames.com/images/0/07/Yellow_Karate_Headband.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 24,
    "tempo": "9 Minutos",
    "recursos": [
      {
        "nome": "Karate Duck",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      },
      {
        "nome": "Straw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "black-karate-headband-estilista",
    "nome": "Black Karate Headband",
    "imagem": "https://wiki.pokexgames.com/images/4/41/Black_Karate_Headband.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 24,
    "tempo": "9 Minutos",
    "recursos": [
      {
        "nome": "Karate Duck",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      },
      {
        "nome": "Dark Gem",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/21/DarkGem.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "splinter-kimono-estilista",
    "nome": "Splinter Kimono",
    "imagem": "https://wiki.pokexgames.com/images/f/ff/Splinter_Kimono.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 20,
    "tempo": "8 Minutos",
    "recursos": [
      {
        "nome": "Heart Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Rat Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Rat_Tail.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "clown-mask-estilista",
    "nome": "Clown Mask",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Clown_Mask.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 24,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Seal Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/73/Seal_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "ash-ketchum-cap-estilista",
    "nome": "Ash Ketchum Cap",
    "imagem": "https://wiki.pokexgames.com/images/9/99/Ash_Ketchum_Cap.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 30,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Electric Rat Tail",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Cloth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "jester-hat-2-estilista",
    "nome": "Jester Hat",
    "imagem": "https://wiki.pokexgames.com/images/9/9b/Jester_Hat.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 22,
    "tempo": "4 Minutos",
    "recursos": [
      {
        "nome": "Cute Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Springs",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/cf/Springs.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "angel-halo-estilista",
    "nome": "Angel Halo",
    "imagem": "https://wiki.pokexgames.com/images/7/77/Angel_Halo.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 30,
    "tempo": "25 Minutos",
    "recursos": [
      {
        "nome": "Fur Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Fur_Ball.png"
      },
      {
        "nome": "Topknot",
        "quantidade": 28,
        "imagem": "https://wiki.pokexgames.com/images/2/29/Topknot.png"
      },
      {
        "nome": "Comb",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Cure Flower",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Cure_Flower.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "ice-cream-estilista",
    "nome": "Ice Cream",
    "imagem": "https://wiki.pokexgames.com/images/5/5d/Ice_Cream.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 26,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Microphone",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Microphone.png"
      },
      {
        "nome": "Eevee Cream",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/e/e1/Eeveecreminho.png"
      },
      {
        "nome": "Comb",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "suicide-bomber-costume-estilista",
    "nome": "Suicide Bomber Costume",
    "imagem": "https://wiki.pokexgames.com/images/e/e8/Suicide_Bomber_Costume.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 28,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Strange Rock",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Stone Orb",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "yellow-belt-karate-kimono-estilista",
    "nome": "Yellow Belt Karate Kimono",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Yellow_Belt_Karate_Kimono.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 24,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Belt of Champion",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png"
      },
      {
        "nome": "Strange Thing",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "green-belt-karate-kimono-estilista",
    "nome": "Green Belt Karate Kimono",
    "imagem": "https://wiki.pokexgames.com/images/2/29/Green_Belt_Karate_Kimono.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 24,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Big Hands",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/Big_Hands.png"
      },
      {
        "nome": "Strange Thing",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "black-belt-karate-kimono-estilista",
    "nome": "Black Belt Karate Kimono",
    "imagem": "https://wiki.pokexgames.com/images/9/95/Black_Belt_Karate_Kimono.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 34,
    "tempo": "35 Minutos",
    "recursos": [
      {
        "nome": "Strange Thing",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png"
      },
      {
        "nome": "Iron Bracelet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/4/40/Iron_Bracelet.png"
      },
      {
        "nome": "Monkey Paw",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/c/cc/Monkey_Paw.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Punch Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/da/3mDejdt.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "dragon-karate-kimono-estilista",
    "nome": "Dragon Karate Kimono",
    "imagem": "https://wiki.pokexgames.com/images/9/9d/Dragon_Karate_Kimono.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 34,
    "tempo": "35 Minutos",
    "recursos": [
      {
        "nome": "Strange Thing",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Punch Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/da/3mDejdt.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pimp-hat-estilista",
    "nome": "Pimp Hat",
    "imagem": "https://wiki.pokexgames.com/images/3/35/Pimp_Hat.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 22,
    "tempo": "8 Minutos",
    "recursos": [
      {
        "nome": "Farfetch'D Stick",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/0/0f/Farfetch%27d_Stick.png"
      },
      {
        "nome": "Cloth",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pumpkin-head-estilista",
    "nome": "Pumpkin Head",
    "imagem": "https://wiki.pokexgames.com/images/e/ef/Pumpkin_Head.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 20,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Ghost Skull",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png"
      },
      {
        "nome": "Sandbag",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/52/SandbagMark.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pumpkin-pack-estilista",
    "nome": "Pumpkin Pack",
    "imagem": "https://wiki.pokexgames.com/images/5/5e/Pumpkin_Pack.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 26,
    "tempo": "13 Minutos",
    "recursos": [
      {
        "nome": "Ghost Skull",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png"
      },
      {
        "nome": "Creepy Eye",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/64/Creepy_Eye.png"
      },
      {
        "nome": "Bone",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Bone.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "reaper-costume-estilista",
    "nome": "Reaper Costume",
    "imagem": "https://wiki.pokexgames.com/images/c/ca/Reaper_Costume-Marowak.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 37,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Creepy Eye",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/64/Creepy_Eye.png"
      },
      {
        "nome": "Tribe Mark",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Tribe_Mark.png"
      },
      {
        "nome": "Dark Moon",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Dark_Moon.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "nurse-costume-estilista",
    "nome": "Nurse Costume",
    "imagem": "https://wiki.pokexgames.com/images/c/c9/Nurse_Costume.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 28,
    "tempo": "12 Minutos",
    "recursos": [
      {
        "nome": "Mediling",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Mediling.png"
      },
      {
        "nome": "Cure Flower",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Cure_Flower.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "witch-costume-1-estilista",
    "nome": "Witch Costume",
    "imagem": "https://wiki.pokexgames.com/images/1/1d/Witch_Costume.png",
    "tipo": "outfit",
    "rank": "D",
    "skill": 30,
    "tempo": "12 Minutos",
    "recursos": [
      {
        "nome": "Eggshell",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Eggshell.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "black-cape-estilista",
    "nome": "Black Cape",
    "imagem": "https://wiki.pokexgames.com/images/b/bc/Black_Cape.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 37,
    "tempo": "20 Minutos",
    "recursos": [
      {
        "nome": "Belt Of Champion",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Kick Machine",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/0/0d/Kick_Machine.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-taek-headband-estilista",
    "nome": "Red Taek Headband",
    "imagem": "https://wiki.pokexgames.com/images/8/8d/Red_Taek_Headband.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 37,
    "tempo": "20 Minutos",
    "recursos": [
      {
        "nome": "Kick Machine",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/0d/Kick_Machine.png"
      },
      {
        "nome": "Band Aid",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/BandAid.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blue-taek-headband-estilista",
    "nome": "Blue Taek Headband",
    "imagem": "https://wiki.pokexgames.com/images/9/9e/Blue_Taek_Headband.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 37,
    "tempo": "20 Minutos",
    "recursos": [
      {
        "nome": "Kick Machine",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/0d/Kick_Machine.png"
      },
      {
        "nome": "Band Aid",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/BandAid.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-headband-estilista",
    "nome": "Red Headband",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Red_Headband.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 37,
    "tempo": "20 Minutos",
    "recursos": [
      {
        "nome": "Punch Machine",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/26/Punch_Machine.png"
      },
      {
        "nome": "Band Aid",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/BandAid.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "white-headband-estilista",
    "nome": "White Headband",
    "imagem": "https://wiki.pokexgames.com/images/9/9b/White_Headband.png",
    "tipo": "acessorio",
    "rank": "D",
    "skill": 37,
    "tempo": "20 Minutos",
    "recursos": [
      {
        "nome": "Punch Machine",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/26/Punch_Machine.png"
      },
      {
        "nome": "Band Aid",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/BandAid.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "rustic-chair-estilista",
    "nome": "Rustic Chair",
    "imagem": "https://wiki.pokexgames.com/images/b/bb/Rustic_Chair.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 20,
    "tempo": "5 Minutos",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Log",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "strong-wooden-table-estilista",
    "nome": "Strong Wooden Table",
    "imagem": "https://wiki.pokexgames.com/images/e/eb/Strong_Wooden_Table.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 22,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Straw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Oak Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Mesavelhaa.png"
      },
      {
        "nome": "Log",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "jungle-counter-estilista",
    "nome": "Jungle Counter",
    "imagem": "https://wiki.pokexgames.com/images/a/a6/Jungle_Balcony.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 24,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Leaves.png"
      },
      {
        "nome": "Bag of Pollen",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/BagOfPollem.png"
      },
      {
        "nome": "Wooden Counter",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/e/e7/Mesa_velhaa.png/35px-Mesa_velhaa.png"
      },
      {
        "nome": "Log",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Log.png"
      }
    ]
  },
  {
    "id": "green-bed-estilista",
    "nome": "Green Bed",
    "imagem": "https://wiki.pokexgames.com/images/e/e0/Green_Bed1.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 30,
    "tempo": "28 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Green Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Green_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "blue-bed-estilista",
    "nome": "Blue Bed",
    "imagem": "https://wiki.pokexgames.com/images/6/6e/Blue_bed1.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 30,
    "tempo": "28 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Blue Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Blue_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "purple-bed-estilista",
    "nome": "Purple Bed",
    "imagem": "https://wiki.pokexgames.com/images/1/19/Purple_Bed1.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 30,
    "tempo": "28 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Purple Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/30/Purple_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "ping-pong-table-estilista",
    "nome": "Ping Pong Table",
    "imagem": "https://wiki.pokexgames.com/images/0/0f/Ping_Pong_Table1.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 26,
    "tempo": "15 Minutos",
    "recursos": [
      {
        "nome": "Blue Ball",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Blue_Ball.png"
      },
      {
        "nome": "Planks",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "bellossom-big-figure-estilista",
    "nome": "Bellossom Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/0/0b/Bellofigure.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 29,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Strange Flower",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/Strange_Flower.png"
      },
      {
        "nome": "Leaves",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Leaves.png"
      },
      {
        "nome": "Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "rhyhorn-big-figure-estilista",
    "nome": "Rhyhorn Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/6/6f/Rhyhornfigure.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 29,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Horn Drill",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png"
      },
      {
        "nome": "Horn",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/58/Horn.png"
      },
      {
        "nome": "Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "sandshrew-big-figure-estilista",
    "nome": "Sandshrew Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/c/ca/Sandshrewfigure.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 29,
    "tempo": "1 Hora",
    "recursos": [
      {
        "nome": "Armadillo Claw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Armadillo_Claw.png"
      },
      {
        "nome": "Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "mist-tapestry-estilista",
    "nome": "Mist Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/0/00/Mist_Tapestry.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 37,
    "tempo": "40 Minutos",
    "recursos": [
      {
        "nome": "Dark Purple Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Dark_Purple_Tapestry.png"
      },
      {
        "nome": "Blue Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Blue_Ball.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Watergem.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "salmon-tapestry-estilista",
    "nome": "Salmon Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/3/3e/Salmon_Tapestry.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 37,
    "tempo": "40 Minutos",
    "recursos": [
      {
        "nome": "Pink Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/00/Pink_Tapestry.png"
      },
      {
        "nome": "Dark Purple Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Dark_Purple_Tapestry.png"
      },
      {
        "nome": "Magikarp Fin",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/c/c6/Magikarp_Fin.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "chameleon-tapestry-estilista",
    "nome": "Chameleon Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/7/72/Chameleon_Tapestry.png",
    "tipo": "movel",
    "rank": "D",
    "skill": 37,
    "tempo": "40 Minutos",
    "recursos": [
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Pot Of Lava",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "workshop-c-estilista",
    "nome": "Workshop C",
    "imagem": "https://wiki.pokexgames.com/images/2/27/Stylist_Workshop_C.png",
    "tipo": "workshop",
    "rank": "D",
    "skill": 40,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Diamonds",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-c-portatil-estilista",
    "nome": "Workshop C (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/3/3a/Workshop_C_Stylist_%28Port%C3%A1til%29.png",
    "tipo": "workshop",
    "rank": "D",
    "skill": 40,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Diamonds",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "silk-estilista",
    "nome": "Silk",
    "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG",
    "tipo": "material",
    "rank": "C",
    "skill": 40,
    "tempo": "5 Minutos",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Spider Leg",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Spider_Leg.png"
      },
      {
        "nome": "Bug Venom",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/56/Bug_Venom.png"
      },
      {
        "nome": "Big Bug Gosme",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/Big_Bug_Gosme.gif"
      }
    ]
  },
  {
    "id": "black-dye-estilista",
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
    "id": "blue-dye-estilista",
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
    "id": "red-dye-estilista",
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
    "id": "pink-dye-estilista",
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
    "id": "green-dye-estilista",
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
    "id": "yellow-dye-estilista",
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
    "id": "average-xp-banner-estilista",
    "nome": "Average XP Banner",
    "imagem": "https://wiki.pokexgames.com/images/e/ef/Average_XP_Banner.png",
    "tipo": "xp-banner",
    "rank": "C",
    "skill": 40,
    "tempo": "1 Hora 30 Minutos",
    "recursos": [
      {
        "nome": "Pink Tissue",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Pink_Tissue.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pikachu-female-outfit-estilista",
    "nome": "Pikachu Female Outfit",
    "imagem": "https://wiki.pokexgames.com/images/5/53/PikachuCosplay.png",
    "tipo": "outfit",
    "rank": "C",
    "skill": 52,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Ash Ketchum Cap",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Ash_Ketchum_Cap.png"
      },
      {
        "nome": "Jester Hat",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Jester_Hat.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Silk",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "azumarill-female-outfit-estilista",
    "nome": "Azumarill Female Outfit",
    "imagem": "https://wiki.pokexgames.com/images/b/b8/AzumarilCosplay.png",
    "tipo": "outfit",
    "rank": "C",
    "skill": 52,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Blue Ball",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Blue_Ball.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Cow Tail",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/60/Cow_Tail.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Fur Balls",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Fur_Ball.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "meowth-female-outfit-estilista",
    "nome": "Meowth Female Outfit",
    "imagem": "https://wiki.pokexgames.com/images/5/5e/MeowthCosplay.png",
    "tipo": "outfit",
    "rank": "C",
    "skill": 52,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Luck Medallion",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Luck_Medallion.png"
      },
      {
        "nome": "Wool Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/4/41/Wool_Ball.png"
      },
      {
        "nome": "Cat Ear",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Cat_Ear.png"
      },
      {
        "nome": "Tribe Mark",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Tribe_Mark.png"
      },
      {
        "nome": "Cow Tail",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/60/Cow_Tail.png"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "venusaur-male-outfit-estilista",
    "nome": "Venusaur Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/1/12/VenusaurCosplay.png",
    "tipo": "outfit",
    "rank": "C",
    "skill": 52,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Red Cap",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/0f/Red_Cap.png"
      },
      {
        "nome": "Bag Of Pollen",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/BagOfPollem.png"
      },
      {
        "nome": "Bulb",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/Bulb.png"
      },
      {
        "nome": "Poisonous Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Poisonous_Tail.png"
      },
      {
        "nome": "Leaf Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif"
      },
      {
        "nome": "Venom Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Venom-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blastoise-male-outfit-estilista",
    "nome": "Blastoise Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/f/fd/BlastoiseCosplay.png",
    "tipo": "outfit",
    "rank": "C",
    "skill": 52,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Water Pendant",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Seahorse Tail",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Seahorse_Tail.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "charizard-male-outfit-estilista",
    "nome": "Charizard Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/6/67/CharizardCosplay.png",
    "tipo": "outfit",
    "rank": "C",
    "skill": 52,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Ninja Mask",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Ninja_Mask.png"
      },
      {
        "nome": "Pot Of Lava",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Fire Feather",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Feather Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Feather1.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-cape-estilista",
    "nome": "Red Cape",
    "imagem": "https://wiki.pokexgames.com/images/b/bd/Red_Cape.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 44,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Stone Orb",
        "quantidade": 65,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Small Stone",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/d/d5/Smallstone.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Watergem.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "party-cap-estilista",
    "nome": "Party Cap",
    "imagem": "https://wiki.pokexgames.com/images/8/84/Party_Cap.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 42,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Stone Orb",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Small Stone",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/d/d5/Smallstone.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Watergem.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "star-glasses-estilista",
    "nome": "Star Glasses",
    "imagem": "https://wiki.pokexgames.com/images/9/9a/Star_Glasses.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 44,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Omanyte Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Omanyte_Toy.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "dragon-tattoo-estilista",
    "nome": "Dragon Tattoo",
    "imagem": "https://wiki.pokexgames.com/images/4/47/Dragon_Tattoo.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 48,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Belt Of Champion",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png"
      },
      {
        "nome": "Big Hands",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/Big_Hands.png"
      },
      {
        "nome": "Samurai Hair",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Samurai_Hair.png"
      },
      {
        "nome": "Mini Wings",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "green-scarf-3-estilista",
    "nome": "Green Scarf",
    "imagem": "https://wiki.pokexgames.com/images/6/6a/Green_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 50,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Giant Piece Of Fur",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Fur",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/0/00/Fur.png"
      },
      {
        "nome": "Leaves",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Leaves.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blue-scarf-2-estilista",
    "nome": "Blue Scarf",
    "imagem": "https://wiki.pokexgames.com/images/2/21/Blue_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 50,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Giant Piece Of Fur",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Fur",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/0/00/Fur.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "purple-scarf-1-estilista",
    "nome": "Purple Scarf",
    "imagem": "https://wiki.pokexgames.com/images/8/86/Purple_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 50,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Giant Piece Of Fur",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Fur",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/0/00/Fur.png"
      },
      {
        "nome": "Strange Spike",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Strange_Spike.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "purple-bandana-estilista",
    "nome": "Purple Bandana",
    "imagem": "https://wiki.pokexgames.com/images/8/8e/Purple_Bandana.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 46,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Traces Of Ghost",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Miss Trace",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "black-bandana-estilista",
    "nome": "Black Bandana",
    "imagem": "https://wiki.pokexgames.com/images/e/eb/Black_Bandana.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 46,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Traces Of Ghost",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Doll Star",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Doll_Star.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "green-bandana-estilista",
    "nome": "Green Bandana",
    "imagem": "https://wiki.pokexgames.com/images/1/1d/Green_Bandana.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 46,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Traces Of Ghost",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Ghost Skull",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "dj-cap-estilista",
    "nome": "Dj Cap",
    "imagem": "https://wiki.pokexgames.com/images/3/34/DJ_Cap.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 48,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Sticky Hand",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/7/7a/Sticky_Hand.png"
      },
      {
        "nome": "Gosme",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/a/ae/Gosme.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "green-apron-estilista",
    "nome": "Green Apron",
    "imagem": "https://wiki.pokexgames.com/images/d/d7/Green_Apron.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 45,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Mimic Clothes",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/1/1a/Mimic_Clothes.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "bandit-mask-estilista",
    "nome": "Bandit Mask",
    "imagem": "https://wiki.pokexgames.com/images/9/94/Bandit_Mask.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 52,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Electric Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Cloth",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-stripes-estilista",
    "nome": "Red Stripes",
    "imagem": "https://wiki.pokexgames.com/images/d/d3/Red_Stripes.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 46,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Horn Drill",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png"
      },
      {
        "nome": "Horn",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/5/58/Horn.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pearl-necklace-estilista",
    "nome": "Pearl Necklace",
    "imagem": "https://wiki.pokexgames.com/images/c/cf/Pearl_Necklace.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 48,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Giant Fin",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Giant_Fin.png"
      },
      {
        "nome": "Ski Poles",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/8b/Layer0.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pink-shell-estilista",
    "nome": "Pink Shell",
    "imagem": "https://wiki.pokexgames.com/images/d/de/Pink_Shell.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 46,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Eggshell",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Eggshell.png"
      },
      {
        "nome": "Water Gem",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Water_gem.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "yellow-shell-estilista",
    "nome": "Yellow Shell",
    "imagem": "https://wiki.pokexgames.com/images/e/ee/Yellow_Shell.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 46,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Eggshell",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Eggshell.png"
      },
      {
        "nome": "Snowball",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/0/04/Snowball.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "dark-pendant-estilista",
    "nome": "Dark Pendant",
    "imagem": "https://wiki.pokexgames.com/images/d/d8/Dark_Pendant.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 50,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Giant Fin",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Giant_Fin.png"
      },
      {
        "nome": "Snow Skis",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Layer1.png"
      },
      {
        "nome": "Goggles",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Layer3.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "bear-cap-estilista",
    "nome": "Bear Cap",
    "imagem": "https://wiki.pokexgames.com/images/a/a0/Bear_Cap.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Bear Paw",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Bear_Paw.png"
      },
      {
        "nome": "Strange Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/4/44/Strange_Ball.png"
      },
      {
        "nome": "pawn",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Eruption Ears",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/f/f0/Eruption_Ears.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "polar-bear-cap-estilista",
    "nome": "Polar Bear Cap",
    "imagem": "https://wiki.pokexgames.com/images/5/5c/Polar_Bear_Cap.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Bear Paw",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Bear_Paw.png"
      },
      {
        "nome": "ice Blocks",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e2/Ice_Blocks.png"
      },
      {
        "nome": "Seal Mustache",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Seal_Mustache.png"
      },
      {
        "nome": "Ice Orb",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "yellow-ribbon-estilista",
    "nome": "Yellow Ribbon",
    "imagem": "https://wiki.pokexgames.com/images/d/db/Yellow_Ribbon.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 50,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Pinsir Horn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/de/Pinsir_Horn.png"
      },
      {
        "nome": "Pot Of Moss Bug",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "purple-scarf-2-estilista",
    "nome": "Purple Scarf",
    "imagem": "https://wiki.pokexgames.com/images/8/86/Purple_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 42,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Colored Feather",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Male Ear",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Male_Ear.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "green-scarf-4-estilista",
    "nome": "Green Scarf",
    "imagem": "https://wiki.pokexgames.com/images/6/6a/Green_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 42,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Colored Feather",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Greens",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Greens.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blue-scarf-3-estilista",
    "nome": "Blue Scarf",
    "imagem": "https://wiki.pokexgames.com/images/2/21/Blue_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 42,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Colored Feather",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Female Ear",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Female_Ear.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-dragon-scarf-estilista",
    "nome": "Red Dragon Scarf",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Red_Dragon_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Crimson Feather",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/de/Crimson_Feather.png"
      },
      {
        "nome": "Cloud",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Cloud.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Mini Wings",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "green-dragon-scarf-estilista",
    "nome": "Green Dragon Scarf",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Green_Dragon_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Crimson Feather",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/de/Crimson_Feather.png"
      },
      {
        "nome": "Cloud",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Cloud.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Sand Tail",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Sand_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "yellow-dragon-scarf-estilista",
    "nome": "Yellow Dragon Scarf",
    "imagem": "https://wiki.pokexgames.com/images/f/fb/Yellow_Dragon_Scarf.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Crimson Feather",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/de/Crimson_Feather.png"
      },
      {
        "nome": "Cloud",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Cloud.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-postman-bag-estilista",
    "nome": "Red Postman Bag",
    "imagem": "https://wiki.pokexgames.com/images/b/be/Red_Postman_Bag.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Dragon Scale",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/58/DragonScale.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Mini Wings",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blue-postman-bag-estilista",
    "nome": "Blue Postman Bag",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Blue_Postman_Bag.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Dragon Scale",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/58/DragonScale.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Seahorse Tail",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Seahorse_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "gray-postman-bag-estilista",
    "nome": "Gray Postman Bag",
    "imagem": "https://wiki.pokexgames.com/images/9/9d/Gray_Postman_Bag.png",
    "tipo": "acessorio",
    "rank": "C",
    "skill": 57,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Dragon Scale",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/5/58/DragonScale.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Cloud",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Cloud.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "wooden-poke-ball-table-estilista",
    "nome": "Wooden Poké Ball Table",
    "imagem": "https://wiki.pokexgames.com/images/9/9e/Wooden_Pok%C3%A9_Ball_Table.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 42,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Wooden Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/6/6c/Mesa_velha.png/30px-Mesa_velha.png"
      },
      {
        "nome": "Farfetch'd Stick",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0f/Farfetch%27d_Stick.png"
      },
      {
        "nome": "Feather",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Feather.png"
      },
      {
        "nome": "Planks",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "grey-poke-ball-table-estilista",
    "nome": "Grey Poké Ball Table",
    "imagem": "https://wiki.pokexgames.com/images/b/b4/Grey_Pok%C3%A9_Ball_Table.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 42,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "White Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/5/5c/Meta_preta.png/30px-Meta_preta.png"
      },
      {
        "nome": "Empty Poké Ball",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/8e/Poke-ball%281%29.png"
      },
      {
        "nome": "Planks",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "poke-ball-table-estilista",
    "nome": "Poké Ball Table",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Pok%C3%A9_Ball_Table.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 45,
    "tempo": "2 Horas e 16 Minutos",
    "recursos": [
      {
        "nome": "White Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/5/5c/Meta_preta.png/30px-Meta_preta.png"
      },
      {
        "nome": "Empty Poké Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/8e/Poke-ball%281%29.png"
      },
      {
        "nome": "Empty Great Ball",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Great-ball%281%29.png"
      },
      {
        "nome": "Empty Super Ball",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/d/d6/Super-ball%281%29.png"
      },
      {
        "nome": "Empty Ultra Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Ultra-ball%281%29.png"
      },
      {
        "nome": "Planks",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "bubble-bed-estilista",
    "nome": "Bubble Bed",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Bubble_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Tentacle",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Tentacle.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "thunder-bed-estilista",
    "nome": "Thunder Bed",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Thunder_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Raibolt Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Raibolt_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "flame-bed-estilista",
    "nome": "Flame Bed",
    "imagem": "https://wiki.pokexgames.com/images/c/ce/Flame_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Volcanic Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Volcanic_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "psychic-bed-estilista",
    "nome": "Psychic Bed",
    "imagem": "https://wiki.pokexgames.com/images/3/34/Psychic_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Psycraft Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Psycraft_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "rock-bed-estilista",
    "nome": "Rock Bed",
    "imagem": "https://wiki.pokexgames.com/images/e/ec/Rock_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Orebound Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Orebound_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "sea-bed-estilista",
    "nome": "Sea Bed",
    "imagem": "https://wiki.pokexgames.com/images/2/24/Sea_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Seavell Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Seavell_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "black-white-bed-estilista",
    "nome": "Black/White Bed",
    "imagem": "https://wiki.pokexgames.com/images/b/bd/BlackWhite_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Malefic Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Malefic_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "poke-ball-bed-estilista",
    "nome": "Poké Ball Bed",
    "imagem": "https://wiki.pokexgames.com/images/6/67/Pok%C3%A9_Ball_Bed1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 49,
    "tempo": "1 Hora e 30 Minutos",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Gardestrike Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/44/Gardestrike_Tapestry.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "snooker-table-estilista",
    "nome": "Snooker Table",
    "imagem": "https://wiki.pokexgames.com/images/b/b5/Snooker_Table1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 44,
    "tempo": "4 Horas e 30 Minutos",
    "recursos": [
      {
        "nome": "Blue Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Blue_Ball.png"
      },
      {
        "nome": "Cow Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/60/Cow_Tail.png"
      },
      {
        "nome": "Strange Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/4/44/Strange_Ball.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Wool Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/4/41/Wool_Ball.png"
      },
      {
        "nome": "Planks",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "red-snooker-table-estilista",
    "nome": "Red Snooker Table",
    "imagem": "https://wiki.pokexgames.com/images/6/64/Red_Snooker_Table1.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 48,
    "tempo": "5 Horas e 30 Minutos",
    "recursos": [
      {
        "nome": "Snooker Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Snooker_Table.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "snorlax-big-figure-estilista",
    "nome": "Snorlax Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/8/8d/Snorlaxfigure.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 40,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Heart Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Bitten Apple",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/1/12/BittenApple.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "growlithe-big-figure-estilista",
    "nome": "Growlithe Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/2/25/Growfigure.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 51,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Giant Piece Of Fur",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Fur",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/00/Fur.png"
      },
      {
        "nome": "Planks",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "houndour-big-figure-estilista",
    "nome": "Houndour Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/4/4d/Houdourfigure.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 51,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Strange Bone",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Strange_Bone.png"
      },
      {
        "nome": "Pot Of Lava",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Planks",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "psyduck-big-figure-estilista",
    "nome": "Psyduck Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/8/8c/Psyduckfigure.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 51,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Water Pendant",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Psyduck Mug",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Psyduck_Mug.png"
      },
      {
        "nome": "Planks",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "sunflora-big-figure-estilista",
    "nome": "Sunflora Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/c/c1/Sunflorafigure.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 51,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Helicopter Leave",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Helicopter_Leave.png"
      },
      {
        "nome": "Leaves",
        "quantidade": 220,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Leaves.png"
      },
      {
        "nome": "Planks",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "unpacked-unown-toy-estilista",
    "nome": "Unpacked Unown Toy",
    "imagem": "https://wiki.pokexgames.com/images/f/f6/Unpacked_Unown_Toy.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 47,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Strange Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Strange_Tail.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "master-tapestry-estilista",
    "nome": "Master Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/7/77/Master_Tapestry.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 52,
    "tempo": "4 Horas e 54 Minutos",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Empty Ultra Ball",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Ultra-ball%281%29.png"
      },
      {
        "nome": "Blue dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "red-master-tapestry-estilista",
    "nome": "Red Master Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/9/9d/Red_Master_Tapestry.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 52,
    "tempo": "4 Horas e 54 Minutos",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Empty Ultra Ball",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Ultra-ball%281%29.png"
      },
      {
        "nome": "Red dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "misdreavus-tapestry-estilista",
    "nome": "Misdreavus Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/e/e3/Misdreavus_Tapestry.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 46,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Blue dye",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Miss Traces",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "dragonite-tapestry-estilista",
    "nome": "Dragonite Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/e/e5/Dragonite_Tapestry.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 46,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Black dye",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "golem-tapestry-estilista",
    "nome": "Golem Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/0/03/Golem_Tapestry.png",
    "tipo": "movel",
    "rank": "C",
    "skill": 46,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Black dye",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Strange Rock",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "workshop-b-estilista",
    "nome": "Workshop B",
    "imagem": "https://wiki.pokexgames.com/images/3/34/Stylist_Workshop_B.png",
    "tipo": "workshop",
    "rank": "C",
    "skill": 60,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Diamonds.",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "workshop-b-portatil-estilista",
    "nome": "Workshop B (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/9/92/Workshop_B_Stylist_%28Port%C3%A1til%29.png",
    "tipo": "workshop",
    "rank": "C",
    "skill": 60,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Diamonds.",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      }
    ]
  },
  {
    "id": "leather-estilista",
    "nome": "Leather",
    "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png",
    "tipo": "material",
    "rank": "B",
    "skill": 60,
    "tempo": "10 Minutos",
    "recursos": [
      {
        "nome": "Onix Tail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/7/78/Onix_Tail.png"
      },
      {
        "nome": "Elephant Foot",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Elephant_Foot.png"
      },
      {
        "nome": "Streak Tail",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/3/37/Streak_Tail.png"
      },
      {
        "nome": "Lizard Tail",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Lizard_Tail.png"
      },
      {
        "nome": "Karate Duck",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      }
    ]
  },
  {
    "id": "refined-fashion-point-estilista",
    "nome": "Refined Fashion Point",
    "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png",
    "tipo": "material",
    "rank": "B",
    "skill": 60,
    "tempo": "10 Segundos",
    "recursos": [
      {
        "nome": "Fashion Point",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Fashion_Point.png"
      }
    ]
  },
  {
    "id": "greater-xp-banner-estilista",
    "nome": "Greater XP Banner",
    "imagem": "https://wiki.pokexgames.com/images/0/07/Great_XP_Banner.png",
    "tipo": "xp-banner",
    "rank": "B",
    "skill": 60,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Green Tissue",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/a/a9/Green_Tissue.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "toy-factory-estilista",
    "nome": "Toy Factory",
    "imagem": "https://wiki.pokexgames.com/images/a/ab/Toy_Factory1.png",
    "tipo": "maquina",
    "rank": "B",
    "skill": 80,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Treadmill",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/48/Treadmill.png/50px-Treadmill.png"
      },
      {
        "nome": "Oak Log",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/6/61/Oak_Log.png"
      }
    ]
  },
  {
    "id": "tailoring-machine-only-stylist-estilista",
    "nome": "Tailoring Machine (Only Stylist)",
    "imagem": "https://wiki.pokexgames.com/images/d/d5/Tailoring_Machine.png",
    "tipo": "maquina",
    "rank": "B",
    "skill": 80,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Dimensional Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Dimensional.png"
      },
      {
        "nome": "Mirror Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b8/Mirror.png"
      },
      {
        "nome": "Ice Blocks",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/e/e2/Ice_Blocks.png"
      },
      {
        "nome": "Japanese Bonsai",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/1a/Japanese_Bonsai.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Oak Log",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/6/61/Oak_Log.png"
      }
    ]
  },
  {
    "id": "mewtwo-male-outfit-estilista",
    "nome": "Mewtwo Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/c/ca/MewtwoCosplay.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 78,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Strange Antenna",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Strange_Antenna.png"
      },
      {
        "nome": "Slow Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Slow_Tail.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Psycraft Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Psycraft_Tapestry.png"
      },
      {
        "nome": "Psyduck Mug",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Psyduck_Mug.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "cowgirl-outfit-estilista",
    "nome": "Cowgirl Outfit",
    "imagem": "https://wiki.pokexgames.com/images/3/36/CowgirlOutfit.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 76,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Bull Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/1c/Bull_Tail.png"
      },
      {
        "nome": "Cowboy Hat",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Cowboy_Hat.png"
      },
      {
        "nome": "Mimic Clothes",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/1a/Mimic_Clothes.png"
      },
      {
        "nome": "Disguise",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Disguise.png"
      },
      {
        "nome": "Mediling",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Mediling.png"
      },
      {
        "nome": "Palm Leaves",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png"
      },
      {
        "nome": "Cure Flower",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Cure_Flower.png"
      },
      {
        "nome": "Water Plant",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/89/Water_Plant.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "oriental-fighter-outfit-estilista",
    "nome": "Oriental Fighter Outfit",
    "imagem": "https://wiki.pokexgames.com/images/7/78/OrientalFighter.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 74,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Splinter Kimono",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Splinter_Kimono.png"
      },
      {
        "nome": "Dragon Tattoo",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/47/Dragon_Tattoo.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Eruption Ears",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f0/Eruption_Ears.png"
      },
      {
        "nome": "Female Ear",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Female_Ear.png"
      },
      {
        "nome": "Fox Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Fox_Tail.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "longcap-female-outfit-estilista",
    "nome": "Longcap Female Outfit",
    "imagem": "https://wiki.pokexgames.com/images/8/8a/LongcapeOutfit.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 74,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Streak Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/37/Streak_Tail.png"
      },
      {
        "nome": "Lizard Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Lizard_Tail.png"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Big Seed",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Big_Seed.png"
      },
      {
        "nome": "Beautiful Scales",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Beautiful_Scales.png"
      },
      {
        "nome": "Doll Star",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Doll_Star.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "street-fighter-outfit-estilista",
    "nome": "Street Fighter Outfit",
    "imagem": "https://wiki.pokexgames.com/images/0/02/StreetFighter.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 74,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Dj Cap",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/DJ_Cap.png"
      },
      {
        "nome": "Iron Bracelet",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/40/Iron_Bracelet.png"
      },
      {
        "nome": "Karate Duck",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      },
      {
        "nome": "Sharp Leaves",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Sharp_Leaves.png"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      },
      {
        "nome": "Samurai Hair",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Samurai_Hair.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "power-topaz-estilista",
    "nome": "Power Topaz",
    "imagem": "https://wiki.pokexgames.com/images/5/53/Power_Topaz.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 67,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Ice Orb",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Armadillo Claw",
        "quantidade": 350,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Armadillo_Claw.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "power-emerald-estilista",
    "nome": "Power Emerald",
    "imagem": "https://wiki.pokexgames.com/images/0/0c/Power_Emerald.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 67,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Ice Orb",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Sand Tail",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Sand_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "power-ruby-estilista",
    "nome": "Power Ruby",
    "imagem": "https://wiki.pokexgames.com/images/8/86/Power_Ruby.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 67,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Ice Orb",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Mediling",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Mediling.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "sack-estilista",
    "nome": "Sack",
    "imagem": "https://wiki.pokexgames.com/images/6/61/Sack.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 67,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Mediling",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Mediling.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Springs",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/cf/Springs.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blue-bunny-ear-estilista",
    "nome": "Blue Bunny Ear",
    "imagem": "https://wiki.pokexgames.com/images/8/8d/Blue_Bunny_Ear.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 67,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Zap",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Blue Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Blue_Ball.png"
      },
      {
        "nome": "Dragon Tail",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pink-bunny-ear-estilista",
    "nome": "Pink Bunny Ear",
    "imagem": "https://wiki.pokexgames.com/images/f/fe/Pink_Bunny_Ear.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 67,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Fur Ball",
        "quantidade": 230,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Fur_Ball.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "traveler-bag-estilista",
    "nome": "Traveler Bag",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Traveler_Bag.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 62,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Fire Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Cloth",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "mafia-cap-estilista",
    "nome": "Mafia Cap",
    "imagem": "https://wiki.pokexgames.com/images/6/63/Mafia_Cap.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 67,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Brush",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/Brush.png"
      },
      {
        "nome": "Captain Hat",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/4d/Captain_Hat.png"
      },
      {
        "nome": "Red Cape",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/bd/Red_Cape.png"
      },
      {
        "nome": "Black Bandana",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/eb/Black_Bandana.png"
      },
      {
        "nome": "Bandit Mask",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/94/Bandit_Mask.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "sword-ninja-pack-estilista",
    "nome": "Sword Ninja Pack",
    "imagem": "https://wiki.pokexgames.com/images/7/7a/Sword_Ninja_Pack.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 66,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Zap",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "sai-ninja-pack-estilista",
    "nome": "Sai Ninja Pack",
    "imagem": "https://wiki.pokexgames.com/images/b/b2/Sai_Ninja_Pack.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 66,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Lobster Claw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "nunchaku-ninja-pack-estilista",
    "nome": "Nunchaku Ninja Pack",
    "imagem": "https://wiki.pokexgames.com/images/d/d3/Nunchaku_Ninja_Pack.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 66,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      },
      {
        "nome": "Nu Ball",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "staff-ninja-pack-estilista",
    "nome": "Staff Ninja Pack",
    "imagem": "https://wiki.pokexgames.com/images/d/d0/Staff_Ninja_Pack.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 66,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      },
      {
        "nome": "Dark Moon",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Dark_Moon.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "wizard-hat-estilista",
    "nome": "Wizard Hat",
    "imagem": "https://wiki.pokexgames.com/images/a/a4/Wizard_Hat-Alakazam.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 68,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Enigma Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Psychic Spoon",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Strange Wing",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Strange_Wing.png"
      },
      {
        "nome": "Slow Tail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Slow_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "mage-hat-estilista",
    "nome": "Mage Hat",
    "imagem": "https://wiki.pokexgames.com/images/9/98/Mage_Hat.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 70,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Psychic Spoon",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Strange Antenna",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Strange_Antenna.png"
      },
      {
        "nome": "Enigma Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Strange Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Strange_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "warlock-hat-estilista",
    "nome": "Warlock Hat",
    "imagem": "https://wiki.pokexgames.com/images/7/71/Warlock_Hat.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 68,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Enigma Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Psychic Spoon",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Strange Antenna",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Strange_Antenna.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "wrestling-mask-2-estilista",
    "nome": "Wrestling Mask",
    "imagem": "https://wiki.pokexgames.com/images/6/62/Westling_Mask.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 66,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Small Shell",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Small_Shell.png"
      },
      {
        "nome": "Piece Of Coral",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Piece_Of_Coral.png"
      },
      {
        "nome": "Tusk",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Tusk.png"
      },
      {
        "nome": "Belt Of Champion",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "gentleman-hat-estilista",
    "nome": "Gentleman Hat",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Gentleman_Hat.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 70,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Kanga Ear",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Kanga_Ear.png"
      },
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Reindeer Horn",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Reindeer_Horn.png"
      },
      {
        "nome": "Owl Feather",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Owl_Feather.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "magician-hat-estilista",
    "nome": "Magician Hat",
    "imagem": "https://wiki.pokexgames.com/images/e/e1/Magician_Hat.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 63,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Mimic Clothes",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/1/1a/Mimic_Clothes.png"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Black Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "black-robe-estilista",
    "nome": "Black Robe",
    "imagem": "https://wiki.pokexgames.com/images/8/83/Black_Robe.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 71,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Scythe",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Scythe1.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Insect Claw",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png"
      },
      {
        "nome": "Leather",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Ladybug Wing",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Ladybug_Wing.png"
      },
      {
        "nome": "Gligar Claw",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Gligar_Claw.png"
      },
      {
        "nome": "Long Antenna",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Long_Antenna.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "monk-robe-estilista",
    "nome": "Monk Robe",
    "imagem": "https://wiki.pokexgames.com/images/b/b3/Monk_Robe.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 71,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Scythe",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Scythe1.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Insect Claw",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png"
      },
      {
        "nome": "Leather",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Crab Claw",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Crab_Claw.png"
      },
      {
        "nome": "Long Antenna",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Long_Antenna.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "wedding-dress-estilista",
    "nome": "Wedding Dress",
    "imagem": "https://wiki.pokexgames.com/images/6/65/Wedding_Dress.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 70,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Ice Bra",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Ski Poles",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/8b/Layer0.png"
      },
      {
        "nome": "Snow Skis",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Layer1.png"
      },
      {
        "nome": "Goggles",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Layer3.png"
      },
      {
        "nome": "Strange Spike",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Strange_Spike.png"
      },
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Gem Star",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/eb/Gem_Star.png"
      },
      {
        "nome": "Strange Flower",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/Strange_Flower.png"
      },
      {
        "nome": "Comb",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "witch-costume-2-estilista",
    "nome": "Witch Costume",
    "imagem": "https://wiki.pokexgames.com/images/6/6d/Witch_Costume-Jynx.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 70,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Ice Bra",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Ski Poles",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/8b/Layer0.png"
      },
      {
        "nome": "Snow Skis",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Layer1.png"
      },
      {
        "nome": "Goggles",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Layer3.png"
      },
      {
        "nome": "Dark Beak",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/f/f9/Dark_Beak.png"
      },
      {
        "nome": "Small Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Small_Tail.png"
      },
      {
        "nome": "Black Hull",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/7c/Black_Hull.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      },
      {
        "nome": "Ice Blocks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e2/Ice_Blocks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "flamethrower-kit-estilista",
    "nome": "Flamethrower Kit",
    "imagem": "https://wiki.pokexgames.com/images/6/6c/Flamethrower_Kit.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 72,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Magma Foot",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Fire Feather",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Mini Volcano",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Mini_Volcano.png"
      },
      {
        "nome": "Fire Horse Foot",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/38/Fire_Horse_Foot.png"
      },
      {
        "nome": "Strange Bone",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Strange_Bone.png"
      },
      {
        "nome": "Black Hull",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/7/7c/Black_Hull.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "water-pendant-estilista",
    "nome": "Water Pendant",
    "imagem": "https://wiki.pokexgames.com/images/7/76/Water_Pendant-Lapras.png",
    "tipo": "acessorio",
    "rank": "B",
    "skill": 70,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Beautiful Scales",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Beautiful_Scales.png"
      },
      {
        "nome": "Ruby",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/a/a9/Ruby.png"
      },
      {
        "nome": "Giant Ruby",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Giant_Ruby.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "classic-vampire-costume-estilista",
    "nome": "Classic Vampire Costume",
    "imagem": "https://wiki.pokexgames.com/images/d/d8/Classic_Vampire_Costume.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 66,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Dome Fossil",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Dome_Fossil.png"
      },
      {
        "nome": "Insect Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Insect_Tail.png"
      },
      {
        "nome": "Rock Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "vampire-costume-estilista",
    "nome": "Vampire Costume",
    "imagem": "https://wiki.pokexgames.com/images/c/c2/Vampire_Costume.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 66,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Dome Fossil",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Dome_Fossil.png"
      },
      {
        "nome": "Insect Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Insect_Tail.png"
      },
      {
        "nome": "Rock Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "chef-costume-estilista",
    "nome": "Chef Costume",
    "imagem": "https://wiki.pokexgames.com/images/7/7e/Chef_Costume-Snorlax.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 74,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Pizza",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/bd/Pizzinha.png"
      },
      {
        "nome": "Bitten Apple",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/1/12/BittenApple.png"
      },
      {
        "nome": "Mushroom",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/8/8c/Mushroom.png"
      },
      {
        "nome": "Plant Foot",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Plant_Foot.png"
      },
      {
        "nome": "Magikarp Fin",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/c/c6/Magikarp_Fin.png"
      },
      {
        "nome": "Small Wing",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Small_Wing.png"
      },
      {
        "nome": "Tentacle",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Tentacle.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "chair-estilista",
    "nome": "Chair",
    "imagem": "https://wiki.pokexgames.com/images/7/76/Chair.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 60,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Rustic Chair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/bb/Rustic_Chair.png"
      },
      {
        "nome": "Fire Feather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Lobster Claw",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png"
      },
      {
        "nome": "Nu Ball",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png"
      },
      {
        "nome": "Planks",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "rustic-counter-estilista",
    "nome": "Rustic Counter",
    "imagem": "https://wiki.pokexgames.com/images/5/59/Rustic_Balcony.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 64,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Strong Wooden Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/e/eb/Strong_Wooden_Table.png/30px-Strong_Wooden_Table.png"
      },
      {
        "nome": "Fire Feather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Colored Feather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Nu Ball",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "wooden-stand-estilista",
    "nome": "Wooden Stand",
    "imagem": "https://wiki.pokexgames.com/images/6/60/Wooden_Stand.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Farfetch'd Stick",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/0f/Farfetch%27d_Stick.png"
      },
      {
        "nome": "Fire Feather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Lobster Claw",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png"
      },
      {
        "nome": "Nu Ball",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png"
      },
      {
        "nome": "Planks",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "classic-furniture-estilista",
    "nome": "Classic Furniture",
    "imagem": "https://wiki.pokexgames.com/images/7/72/Classic_Furniture.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 62,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Great Petal",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Great_Petal.png"
      },
      {
        "nome": "Fire Feather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "classic-clock-estilista",
    "nome": "Classic Clock",
    "imagem": "https://wiki.pokexgames.com/images/5/54/Classic_Clock.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 69,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Steel Wing",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/e5/Steel_Wing.png"
      },
      {
        "nome": "Spin Machine",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Spin_Machine.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "classic-wardrobe-estilista",
    "nome": "Classic Wardrobe",
    "imagem": "https://wiki.pokexgames.com/images/9/95/Classic_Wardrobe.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 70,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Shock Topknot",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "classic-bookcase-estilista",
    "nome": "Classic Bookcase",
    "imagem": "https://wiki.pokexgames.com/images/4/4a/Classic_Bookcase.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 71,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Bat Wing",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/35/Bat_Wing.png"
      },
      {
        "nome": "Point Of Light",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Planks",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "classic-dresser-estilista",
    "nome": "Classic Dresser",
    "imagem": "https://wiki.pokexgames.com/images/3/38/Classic_Dresser.png",
    "tipo": "outfit",
    "rank": "B",
    "skill": 71,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Big Crystal",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Planks",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "abra-bed-estilista",
    "nome": "Abra Bed",
    "imagem": "https://wiki.pokexgames.com/images/0/03/Abra_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Psycraft Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Psycraft_Tapestry.png"
      },
      {
        "nome": "Psychic Spoon",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "bulbasaur-bed-estilista",
    "nome": "Bulbasaur Bed",
    "imagem": "https://wiki.pokexgames.com/images/3/35/Bulbasaur_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Naturia Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/93/Naturia_Tapestry.png"
      },
      {
        "nome": "Bulb",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/Bulb.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "scyther-bed-estilista",
    "nome": "Scyther Bed",
    "imagem": "https://wiki.pokexgames.com/images/d/d2/Scyther_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Naturia Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/93/Naturia_Tapestry.png"
      },
      {
        "nome": "Scythe",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Scythe1.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "umbreon-bed-estilista",
    "nome": "Umbreon Bed",
    "imagem": "https://wiki.pokexgames.com/images/b/b7/Umbreon_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Malefic Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Malefic_Tapestry.png"
      },
      {
        "nome": "Dark Beak",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f9/Dark_Beak.png"
      },
      {
        "nome": "Dark Moon",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Dark_Moon.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "vaporeon-bed-estilista",
    "nome": "Vaporeon Bed",
    "imagem": "https://wiki.pokexgames.com/images/2/2b/Vaporeon_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Seavell Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Seavell_Tapestry.png"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Lobster Claw",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "lucario-bed-estilista",
    "nome": "Lucario Bed",
    "imagem": "https://wiki.pokexgames.com/images/2/2b/Lucario_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Gardestrike Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/44/Gardestrike_Tapestry.png"
      },
      {
        "nome": "Metal Jaw",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/Metal_Jaw.png"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "pidgeot-bed-estilista",
    "nome": "Pidgeot Bed",
    "imagem": "https://wiki.pokexgames.com/images/c/cb/Pidgeot_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Wingeon Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Wingeon_Tapestry.png"
      },
      {
        "nome": "Colored Feather",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "raichu-bed-estilista",
    "nome": "Raichu Bed",
    "imagem": "https://wiki.pokexgames.com/images/7/7f/Raichu_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 60,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Raibolt Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Raibolt_Tapestry.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "marowak-bed-estilista",
    "nome": "Marowak Bed",
    "imagem": "https://wiki.pokexgames.com/images/a/ab/Marowak_Bed1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 68,
    "tempo": "16 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Orebound Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Orebound_Tapestry.png"
      },
      {
        "nome": "Bone",
        "quantidade": 160,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Bone.png"
      },
      {
        "nome": "Planks",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "blackjack-table-estilista",
    "nome": "Blackjack Table",
    "imagem": "https://wiki.pokexgames.com/images/2/25/Blackjack_Table1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 62,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Luck Medallion",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Luck_Medallion.png"
      },
      {
        "nome": "Punch Machine",
        "quantidade": 22,
        "imagem": "https://wiki.pokexgames.com/images/2/26/Punch_Machine.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "roulette-table-estilista",
    "nome": "Roulette Table",
    "imagem": "https://wiki.pokexgames.com/images/a/a5/Roulette_Table1.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 65,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Luck Medallion",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Luck_Medallion.png"
      },
      {
        "nome": "Spin Machine",
        "quantidade": 22,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Spin_Machine.png"
      },
      {
        "nome": "Planks",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "bulbasaur-big-figure-estilista",
    "nome": "Bulbasaur Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/6/61/Bulbafigure.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 67,
    "tempo": "18 Horas",
    "recursos": [
      {
        "nome": "Bulb",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/Bulb.png"
      },
      {
        "nome": "Great Petal",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Great_Petal.png"
      },
      {
        "nome": "Greens",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Greens.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "squirtle-big-figure-estilista",
    "nome": "Squirtle Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/4/45/Squirtlefigure.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 67,
    "tempo": "18 Horas",
    "recursos": [
      {
        "nome": "Squirtle Hull",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "charmander-big-figure-estilista",
    "nome": "Charmander Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/0/0c/Manderfigure.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 67,
    "tempo": "18 Horas",
    "recursos": [
      {
        "nome": "Fire Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Fire Feather",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "rapidash-toy-estilista",
    "nome": "Rapidash Toy",
    "imagem": "https://wiki.pokexgames.com/images/3/38/Rapidash_Toy.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 65,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Fire Horse Foot",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/38/Fire_Horse_Foot.png"
      },
      {
        "nome": "Giant Piece Of Fur",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Mini Volcano",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Mini_Volcano.png"
      },
      {
        "nome": "Black Hull",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/7/7c/Black_Hull.png"
      },
      {
        "nome": "Planks",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "blue-rapidash-toy-estilista",
    "nome": "Blue Rapidash Toy",
    "imagem": "https://wiki.pokexgames.com/images/8/80/Blue_Rapidash_Toy.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 70,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Rapidash Toy",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/38/Rapidash_Toy.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      }
    ]
  },
  {
    "id": "unpacked-toy-estilista",
    "nome": "Unpacked Toy",
    "imagem": "https://wiki.pokexgames.com/images/d/dd/UnpackedToy.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 76,
    "tempo": "4 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "pikachu-tapestry-estilista",
    "nome": "Pikachu Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/1/16/Pikachu_Tapestry.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 66,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      },
      {
        "nome": "Electric Rat Tail",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blue-official-tapestry-estilista",
    "nome": "Blue Official Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/7/79/Blue_Official_Tapestry.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 72,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Karate Duck",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Karate_Duck.png"
      },
      {
        "nome": "Giant Bat Wing",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Giant_Bat_Wing.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "official-tapestry-estilista",
    "nome": "Official Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/7/7e/Official_Tapestry.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 72,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Fire Ear",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Fire_Ear.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "venusaur-tapestry-estilista",
    "nome": "Venusaur Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/5/5b/Venusaur_Tapestry.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 69,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Bag Of Pollen",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/BagOfPollem.png"
      },
      {
        "nome": "Leaves",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Leaves.png"
      },
      {
        "nome": "Bulb",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/b3/Bulb.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "blastoise-tapestry-estilista",
    "nome": "Blastoise Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Blastoise_Tapestry.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 69,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "charizard-tapestry-estilista",
    "nome": "Charizard Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/4/41/Charizard_Tapestry.png",
    "tipo": "movel",
    "rank": "B",
    "skill": 69,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Pot Of Lava",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Refined Style Point",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Refined_style_point.png"
      }
    ]
  },
  {
    "id": "workshop-a-estilista",
    "nome": "Workshop A",
    "imagem": "https://wiki.pokexgames.com/images/2/28/Stylist_Workshop_A.png",
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
    "id": "workshop-a-portatil-estilista",
    "nome": "Workshop A (Portátil)",
    "imagem": "https://wiki.pokexgames.com/images/4/43/Workshop_A_Stylist_%28Port%C3%A1til%29.png",
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
    "id": "oak-planks-estilista",
    "nome": "Oak Planks",
    "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png",
    "tipo": "material",
    "rank": "A",
    "skill": 80,
    "tempo": "10 Segundos",
    "recursos": [
      {
        "nome": "Oak Log",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/61/Oak_Log.png"
      }
    ]
  },
  {
    "id": "style-point-estilista",
    "nome": "Style Point",
    "imagem": "https://wiki.pokexgames.com/images/e/e0/Style_point.png",
    "tipo": "material",
    "rank": "A",
    "skill": 85,
    "unidadesPorReceita": 40,
    "tempo": "1 Segundos",
    "recursos": [
      {
        "nome": "Fashion Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Fashion_Point.png"
      }
    ]
  },
  {
    "id": "oak-log-estilista",
    "nome": "Oak Log",
    "imagem": "https://wiki.pokexgames.com/images/6/61/Oak_Log.png",
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
    "id": "fashion-point-estilista",
    "nome": "Fashion Point",
    "imagem": "https://wiki.pokexgames.com/images/0/07/Fashion_Point.png",
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
    "id": "superior-xp-banner-estilista",
    "nome": "Superior XP Banner",
    "imagem": "https://wiki.pokexgames.com/images/c/c8/Superior_XP_Banner.png",
    "tipo": "xp-banner",
    "rank": "A",
    "skill": 80,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Blue Tissue",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Blue_Tissue.png"
      },
      {
        "nome": "Fashion Point",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Fashion_Point.png"
      }
    ]
  },
  {
    "id": "wiseman-elixir-estilista",
    "nome": "Wiseman Elixir",
    "imagem": "https://wiki.pokexgames.com/images/5/56/Wiseman.png",
    "tipo": "elixir",
    "rank": "A",
    "skill": 80,
    "unidadesPorReceita": 10,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Emerald",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/3/31/Emeralds.png"
      },
      {
        "nome": "Volcanic Essence",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/79/Volcanicessence.png"
      },
      {
        "nome": "Wingeon Essence",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/49/Wingeon_essence.png"
      },
      {
        "nome": "Orebound Essence",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Oreessence.png"
      },
      {
        "nome": "Fashion Points",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/0/07/Fashion_Point.png"
      }
    ]
  },
  {
    "id": "knowledge-elixir-estilista",
    "nome": "Knowledge Elixir",
    "imagem": "https://wiki.pokexgames.com/images/a/ad/Knowledge.png",
    "tipo": "elixir",
    "rank": "A",
    "skill": 90,
    "unidadesPorReceita": 20,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Topaz",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6d/Topaz1.png"
      },
      {
        "nome": "Ironhard Essence",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f2/Ironessence.png"
      },
      {
        "nome": "Psycraft Essence",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/d/d6/Psyessence.png"
      },
      {
        "nome": "Malefic Essence",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/53/Maleficessence.png"
      },
      {
        "nome": "Raibolt Essence",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/68/RaiboltEssence.png"
      },
      {
        "nome": "Refined Fashion Points",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "lycanroc-male-outfit-estilista",
    "nome": "Lycanroc Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/a/a8/LycanrocOutfit.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 96,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Miss Trace",
        "quantidade": 350,
        "imagem": "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png"
      },
      {
        "nome": "Ghost Skull",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png"
      },
      {
        "nome": "Lizard Tail",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Lizard_Tail.png"
      },
      {
        "nome": "Ten Thousand Dollars",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/100_Ten_Hundred_Dollars.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "persian-female-outfit-estilista",
    "nome": "Persian Female Outfit",
    "imagem": "https://wiki.pokexgames.com/images/3/34/PersianCosplay.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 96,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Tribe Mark",
        "quantidade": 180,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Tribe_Mark.png"
      },
      {
        "nome": "Cat Ear",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Cat_Ear.png"
      },
      {
        "nome": "Sharp Leaves",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Sharp_Leaves.png"
      },
      {
        "nome": "Luck Medallion",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Luck_Medallion.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Yellow Wool Ball",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Yellow_Ball.png"
      },
      {
        "nome": "Ten Thousand Dollars",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/100_Ten_Hundred_Dollars.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "masked-male-outfit-estilista",
    "nome": "Masked Male Outfit",
    "imagem": "https://wiki.pokexgames.com/images/d/d3/MaskedOutfit.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Gladiador Helmet",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/Gladiator_Helmet.png"
      },
      {
        "nome": "Samurai Hair",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Samurai_Hair.png"
      },
      {
        "nome": "Punch Machine",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/2/26/Punch_Machine.png"
      },
      {
        "nome": "Kick Machine",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/0/0d/Kick_Machine.png"
      },
      {
        "nome": "Mini Wings",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      },
      {
        "nome": "Eruption Ears",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/f/f0/Eruption_Ears.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "pirate-lady-outfit-estilista",
    "nome": "Pirate Lady Outfit",
    "imagem": "https://wiki.pokexgames.com/images/5/56/PirateLady.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Giant Ruby",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Giant_Ruby.png"
      },
      {
        "nome": "Poisonous Tail",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Poisonous_Tail.png"
      },
      {
        "nome": "Dark Pendant",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Dark_Pendant.png"
      },
      {
        "nome": "Pirate Costume",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Pirate_Costume-Raichu.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "surgeon-of-death-outfit-estilista",
    "nome": "Surgeon of Death Outfit",
    "imagem": "https://wiki.pokexgames.com/images/6/62/SungeonOfDeath.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Nurse Costume",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Nurse_Costume.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Reaper Costume",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Reaper_Costume-Marowak.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "hacker-outfit-estilista",
    "nome": "Hacker Outfit",
    "imagem": "https://wiki.pokexgames.com/images/4/4c/HackerOutfit.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Macbook",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/41/Macbook.png"
      },
      {
        "nome": "Red Cape",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/bd/Red_Cape.png"
      },
      {
        "nome": "Zap",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/4/4f/Zap1.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Mimic Clothes",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/1a/Mimic_Clothes.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "boss-outfit-estilista",
    "nome": "Boss Outfit",
    "imagem": "https://wiki.pokexgames.com/images/e/e4/BossOutfit.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Splinter Kimono",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Splinter_Kimono.png"
      },
      {
        "nome": "Male Ear",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Male_Ear.png"
      },
      {
        "nome": "Lizard Tail",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Lizard_Tail.png"
      },
      {
        "nome": "Blaze Topknot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Blaze_Topknot.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "celestial-outfit-estilista",
    "nome": "Celestial Outfit",
    "imagem": "https://wiki.pokexgames.com/images/f/fc/Celestial.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Cloud",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Cloud.png"
      },
      {
        "nome": "Red Glasses",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Red_Glasses.png"
      },
      {
        "nome": "Crimson Feather",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/d/de/Crimson_Feather.png"
      },
      {
        "nome": "Scary Smile",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Scary_Smile.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "sunny-outfit-estilista",
    "nome": "Sunny Outfit",
    "imagem": "https://wiki.pokexgames.com/images/9/9a/Sunny.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Beautiful Scale",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Beautiful_Scales.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Mimic Clothes",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/1a/Mimic_Clothes.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Sharp Leaves",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Sharp_Leaves.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "bikini-outfit-estilista",
    "nome": "Bikini Outfit",
    "imagem": "https://wiki.pokexgames.com/images/4/44/BikiniTOP.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Massive Vines",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Massive_Vines.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Mediling",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Mediling.png"
      },
      {
        "nome": "Gift Bag",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Gift_Bag.png"
      },
      {
        "nome": "Streak Tail",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/3/37/Streak_Tail.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "tayuya-costume-estilista",
    "nome": "Tayuya Costume",
    "imagem": "https://wiki.pokexgames.com/images/d/dc/Tayuya_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 92,
    "tempo": "3 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Metal Hull",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Metal Claw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Metal_Claw.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Red Dragon Scarf",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c5/Red_Dragon_Scarf.png"
      },
      {
        "nome": "Green Dragon Scarf",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d6/Green_Dragon_Scarf.png"
      },
      {
        "nome": "Yellow Dragon Scarf",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/fb/Yellow_Dragon_Scarf.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "mariachi-costume-estilista",
    "nome": "Mariachi Costume",
    "imagem": "https://wiki.pokexgames.com/images/7/75/Mariachi_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 92,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Palm Leaves",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png"
      },
      {
        "nome": "Water Plant",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/8/89/Water_Plant.png"
      },
      {
        "nome": "Sharp Leaves",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Sharp_Leaves.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "majin-costume-estilista",
    "nome": "Majin Costume",
    "imagem": "https://wiki.pokexgames.com/images/8/8b/Majin_Costume-Blissey.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 92,
    "tempo": "3 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Chocolat Bar",
        "quantidade": 65,
        "imagem": "https://wiki.pokexgames.com/images/1/14/Chocolat_bar.png"
      },
      {
        "nome": "Sticky Hand",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/7/7a/Sticky_Hand.png"
      },
      {
        "nome": "Cure Flower",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Cure_Flower.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      },
      {
        "nome": "Scary Smile",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Scary_Smile.png"
      },
      {
        "nome": "Gosme",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/ae/Gosme.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "nursering-kit-estilista",
    "nome": "Nursering Kit",
    "imagem": "https://wiki.pokexgames.com/images/1/10/Nursering_Kit.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 86,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Nurse Costume",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Nurse_Costume.png"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "big-momma-s-dress-estilista",
    "nome": "Big Momma's dress",
    "imagem": "https://wiki.pokexgames.com/images/5/58/Big_Momma%27s_Dress.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 86,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Female Ear",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Female_Ear.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "tentacool-hood-estilista",
    "nome": "Tentacool Hood",
    "imagem": "https://wiki.pokexgames.com/images/f/f3/Tentacool_Hood.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 84,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Giant Bat Wing",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Giant_Bat_Wing.png"
      },
      {
        "nome": "Ruby",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/a/a9/Ruby.png"
      },
      {
        "nome": "Tentacle",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Tentacle.png"
      },
      {
        "nome": "Giant Ruby",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Giant_Ruby.png"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Venom Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Venom-stone.gif"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "rock-guitar-estilista",
    "nome": "Rock Guitar",
    "imagem": "https://wiki.pokexgames.com/images/2/2c/Rock_Guitar.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 93,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Bandit Mask",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/94/Bandit_Mask.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Max Volt Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Max_Volt_Paw.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "flat-iron-estilista",
    "nome": "Flat Iron",
    "imagem": "https://wiki.pokexgames.com/images/4/41/Flat_Iron.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 86,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Comb",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Cure Flower",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Cure_Flower.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "predator-mask-estilista",
    "nome": "Predator Mask",
    "imagem": "https://wiki.pokexgames.com/images/b/b3/Predator_Mask.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 92,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Mini Volcano",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Mini_Volcano.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Blaze Topknot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Blaze_Topknot.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "demon-costume-estilista",
    "nome": "Demon Costume",
    "imagem": "https://wiki.pokexgames.com/images/5/53/Demon_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 88,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Scary Smile",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Scary_Smile.png"
      },
      {
        "nome": "Mini Wings",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "transformers-suit-estilista",
    "nome": "Transformers Suit",
    "imagem": "https://wiki.pokexgames.com/images/0/08/Transformers_Suit.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 94,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Lizard Tail",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/e/e8/Lizard_Tail.png"
      },
      {
        "nome": "Ancient Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif"
      },
      {
        "nome": "Red Dye",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "street-fighter-costume-estilista",
    "nome": "Street Fighter Costume",
    "imagem": "https://wiki.pokexgames.com/images/6/6c/Street_Fighter_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 91,
    "tempo": "3 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Insect Claw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "White Headband",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/White_Headband.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "street-fighter-red-costume-estilista",
    "nome": "Street Fighter Red Costume",
    "imagem": "https://wiki.pokexgames.com/images/3/3b/Street_Fighter_Red_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 91,
    "tempo": "3 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Insect Claw",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Red Taek Headband",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Red_Taek_Headband.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "cowgirl-costume-estilista",
    "nome": "Cowgirl Costume",
    "imagem": "https://wiki.pokexgames.com/images/7/72/Cowgirl_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 91,
    "tempo": "3 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Cow Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/6/60/Cow_Tail.png"
      },
      {
        "nome": "Female Ear",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Female_Ear.png"
      },
      {
        "nome": "Yellow Bow",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Yellow_Bow.png"
      },
      {
        "nome": "Cute Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png"
      },
      {
        "nome": "Samurai Hair",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/ff/Samurai_Hair.png"
      },
      {
        "nome": "Topknot",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/2/29/Topknot.png"
      },
      {
        "nome": "Beautiful Scales",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Beautiful_Scales.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "farmer-costume-estilista",
    "nome": "Farmer Costume",
    "imagem": "https://wiki.pokexgames.com/images/4/4b/Farmer_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 91,
    "tempo": "3 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Cow Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/6/60/Cow_Tail.png"
      },
      {
        "nome": "Straw",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/5/55/Straw.png"
      },
      {
        "nome": "Feather",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Feather.png"
      },
      {
        "nome": "Bull Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/1/1c/Bull_Tail.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "flash-mask-estilista",
    "nome": "Flash Mask",
    "imagem": "https://wiki.pokexgames.com/images/b/b5/Flash_Mask.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 88,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Scythe",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/c/cd/Scythe.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Lobster Claw",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "superdog-costume-estilista",
    "nome": "Superdog Costume",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Superdog_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 89,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Strange Bone",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Strange_Bone.png"
      },
      {
        "nome": "Giant Piece of Fur",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Ghost Skull",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png"
      },
      {
        "nome": "Black Cape",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/Black_Cape.png"
      },
      {
        "nome": "Dog Ear",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/e/e5/Dog_Ear.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "dynomutt-costume-estilista",
    "nome": "Dynomutt Costume",
    "imagem": "https://wiki.pokexgames.com/images/a/aa/Dynomutt_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 89,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Strange Bone",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Strange_Bone.png"
      },
      {
        "nome": "Giant Piece of Fur",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png"
      },
      {
        "nome": "Ghost Skull",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png"
      },
      {
        "nome": "Black Cape",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/bc/Black_Cape.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "pirate-empress-red-dress-estilista",
    "nome": "Pirate Empress Red Dress",
    "imagem": "https://wiki.pokexgames.com/images/c/c5/Pirate_Empress_Red_Dress.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Snake Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Snake_Tail.png"
      },
      {
        "nome": "Poisonous Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Poisonous_Tail.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "pirate-empress-blue-dress-estilista",
    "nome": "Pirate Empress Blue Dress",
    "imagem": "https://wiki.pokexgames.com/images/a/a4/Pirate_Empress_Blue_Dress.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Snake Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Snake_Tail.png"
      },
      {
        "nome": "Poisonous Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Poisonous_Tail.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "pirate-empress-yellow-dress-estilista",
    "nome": "Pirate Empress Yellow Dress",
    "imagem": "https://wiki.pokexgames.com/images/a/ab/Pirate_Empress_Yellow_Dress.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Snake Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Snake_Tail.png"
      },
      {
        "nome": "Poisonous Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Poisonous_Tail.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "pokemon-trainer-costume-estilista",
    "nome": "Pokemon Trainer Costume",
    "imagem": "https://wiki.pokexgames.com/images/6/67/Pok%C3%A9mon_Trainer_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 86,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Red Cap",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/0f/Red_Cap.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Empty Ultra Ball",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/8a/UltraBall.png"
      },
      {
        "nome": "Ultimate Potion",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/84/Ultimate_Potion.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "ninja-costume-estilista",
    "nome": "Ninja Costume",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Ninja_Costume-Typhlosion.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 86,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Ninja Mask",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Ninja_Mask.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Creepy Eye",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/64/Creepy_Eye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "clan-costume-estilista",
    "nome": "Clan Costume",
    "imagem": "https://wiki.pokexgames.com/images/6/65/Clan_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Ninja Mask",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Ninja_Mask.png"
      },
      {
        "nome": "Hot Fur",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/9/95/Hot_Fur.png"
      },
      {
        "nome": "Creepy Eye",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/64/Creepy_Eye.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "sailor-costume-estilista",
    "nome": "Sailor Costume",
    "imagem": "https://wiki.pokexgames.com/images/2/2c/Sailor_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Angel Halo",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/77/Angel_Halo.png"
      },
      {
        "nome": "Great Petal",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Great_Petal.png"
      },
      {
        "nome": "Dark Moon",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Dark_Moon.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "m-i-b-costume-estilista",
    "nome": "M.I.B Costume",
    "imagem": "https://wiki.pokexgames.com/images/d/d2/M.I.B_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 86,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "superhero-costume-estilista",
    "nome": "Superhero Costume",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Superhero_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 86,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Sheep Wool",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Raibolt Tapestry",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Raibolt_Tapestry.png"
      },
      {
        "nome": "Electric Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "life-jacket-estilista",
    "nome": "Life Jacket",
    "imagem": "https://wiki.pokexgames.com/images/8/89/Life_Jacket-Feraligatr.png",
    "tipo": "addon",
    "rank": "A",
    "skill": 86,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Nu Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png"
      },
      {
        "nome": "Springs",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/cf/Springs.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "lifeguard-costume-estilista",
    "nome": "Lifeguard Costume",
    "imagem": "https://wiki.pokexgames.com/images/4/48/Lifeguard_Costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 90,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Gem Star",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/eb/Gem_Star.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Fins",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Layer4.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "zoom-mask-estilista",
    "nome": "Zoom Mask",
    "imagem": "https://wiki.pokexgames.com/images/c/c2/Zoom_Costume.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 88,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Creepy Eye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/64/Creepy_Eye.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Crystal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "diving-suit-estilista",
    "nome": "Diving Suit",
    "imagem": "https://wiki.pokexgames.com/images/f/ff/SwimmerEstilista_male.png",
    "tipo": "addon",
    "rank": "A",
    "skill": 90,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Fins",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/a/a7/Layer4.png"
      },
      {
        "nome": "Diving Mask",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/4/4e/Layer2.png"
      },
      {
        "nome": "Air Tank",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/5/58/Layer5.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Scythe",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/cd/Scythe.png"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Seahorse Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Seahorse_Tail.png"
      },
      {
        "nome": "Giant Fin",
        "quantidade": 112,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Giant_Fin.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "roller-skate-estilista",
    "nome": "Roller Skate",
    "imagem": "https://wiki.pokexgames.com/images/e/e5/Roller-skate.png",
    "tipo": "addon",
    "rank": "A",
    "skill": 100,
    "tempo": "7 Dias",
    "recursos": [
      {
        "nome": "Oak Planks",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      },
      {
        "nome": "Owl Feather",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Owl_Feather.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Crystal Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif"
      }
    ]
  },
  {
    "id": "sandboard-gear-estilista",
    "nome": "Sandboard Gear",
    "imagem": "https://wiki.pokexgames.com/images/6/61/SandEstilista_male.png",
    "tipo": "addon",
    "rank": "A",
    "skill": 100,
    "tempo": "10 Dias",
    "recursos": [
      {
        "nome": "Squirtle Hull",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Streak Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/37/Streak_Tail.png"
      },
      {
        "nome": "Strange Antenna",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Strange_Antenna.png"
      },
      {
        "nome": "Ghost Skull",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png"
      },
      {
        "nome": "Sand Tail",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Sand_Tail.png"
      },
      {
        "nome": "Black Fins",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Black_Fin.png"
      },
      {
        "nome": "Wooper Horn",
        "quantidade": 340,
        "imagem": "https://wiki.pokexgames.com/images/8/8d/Wooper_Horn.png"
      },
      {
        "nome": "Gligar Claw",
        "quantidade": 555,
        "imagem": "https://wiki.pokexgames.com/images/f/f1/Gligar_Claw.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "snowboard-gear-estilista",
    "nome": "Snowboard Gear",
    "imagem": "https://wiki.pokexgames.com/images/3/33/SnowboardEstilista_male.png",
    "tipo": "addon",
    "rank": "A",
    "skill": 98,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "Ski Poles",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/8/8b/Layer0.png"
      },
      {
        "nome": "Snow Skis",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Layer1.png"
      },
      {
        "nome": "Goggles",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Layer3.png"
      },
      {
        "nome": "Seal Tail",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/7/73/Seal_Tail.png"
      },
      {
        "nome": "Strange Spike",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Strange_Spike.png"
      },
      {
        "nome": "Tusk",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/4/42/Tusk.png"
      },
      {
        "nome": "Ice Blocks",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/e/e2/Ice_Blocks.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "fashion-shoes-estilista",
    "nome": "Fashion Shoes",
    "imagem": "https://wiki.pokexgames.com/images/c/cf/Fashion-shoes.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 100,
    "tempo": "7 Dias",
    "recursos": [
      {
        "nome": "Massive Vines",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Massive_Vines.png"
      },
      {
        "nome": "Talon",
        "quantidade": 64,
        "imagem": "https://wiki.pokexgames.com/images/6/6c/Talon4.png"
      },
      {
        "nome": "Raikou's Legendary Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/fb/Raikou%27s_Legendary_Tail.png"
      },
      {
        "nome": "Suicune's Legendary Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Suicune%27s_Legendary_Tail.png"
      },
      {
        "nome": "Entei's Legendary Fur",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Entei%27s_Legendary_Fur.png"
      },
      {
        "nome": "Steelix Tail",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Steelix_Tail.png"
      },
      {
        "nome": "Kick Machine",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/0d/Kick_Machine.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Diamond",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Ten Thousand Dollars",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/100_Ten_Hundred_Dollars.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "fashion-heart-estilista",
    "nome": "Fashion Heart",
    "imagem": "https://wiki.pokexgames.com/images/7/76/Fashion-heart.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 100,
    "tempo": "7 Dias",
    "recursos": [
      {
        "nome": "Solid Rock Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Solid_Rock_Paw.png"
      },
      {
        "nome": "Palm Leaves",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png"
      },
      {
        "nome": "Strange Flower",
        "quantidade": 180,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/Strange_Flower.png"
      },
      {
        "nome": "Raikou's Legendary Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/fb/Raikou%27s_Legendary_Tail.png"
      },
      {
        "nome": "Suicune's Legendary Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Suicune%27s_Legendary_Tail.png"
      },
      {
        "nome": "Entei's Legendary Fur",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Entei%27s_Legendary_Fur.png"
      },
      {
        "nome": "Pelican Wing",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Pelican_Wing.png"
      },
      {
        "nome": "Small Crown",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Small_Crown.png"
      },
      {
        "nome": "Strange Rock",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Pawn",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Pawn.png"
      },
      {
        "nome": "Crystal Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif"
      },
      {
        "nome": "Diamond",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Ten Thousand Dollars",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/ec/100_Ten_Hundred_Dollars.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "fancy-chair-estilista",
    "nome": "Fancy Chair",
    "imagem": "https://wiki.pokexgames.com/images/4/42/Fancy_Chair.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 80,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Chair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/7/76/Chair.png"
      },
      {
        "nome": "Point of Light",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Point_of_Light.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "white-chair-estilista",
    "nome": "White Chair",
    "imagem": "https://wiki.pokexgames.com/images/1/11/White_chair.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 80,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Ice Orb",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "white-glass-table-estilista",
    "nome": "White Glass Table",
    "imagem": "https://wiki.pokexgames.com/images/4/41/White_Glass_Table.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Big Crystal",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      },
      {
        "nome": "Pure White Counter",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/c/c1/Pure_White_Balcony.png/30px-Pure_White_Balcony.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "pure-white-counter-estilista",
    "nome": "Pure White Counter",
    "imagem": "https://wiki.pokexgames.com/images/c/c1/Pure_White_Balcony.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 83,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Ice Orb",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Pinsir Horn",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/d/de/Pinsir_Horn.png"
      },
      {
        "nome": "White Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/5/5c/Meta_preta.png/30px-Meta_preta.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "neon-counter-estilista",
    "nome": "Neon Counter",
    "imagem": "https://wiki.pokexgames.com/images/9/95/Neon_balcony.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 86,
    "tempo": "1 Dia e 4 Horas",
    "recursos": [
      {
        "nome": "Pure White Counter",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/c/c1/Pure_White_Balcony.png/30px-Pure_White_Balcony.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "tron-chair-estilista",
    "nome": "Tron Chair",
    "imagem": "https://wiki.pokexgames.com/images/8/82/Tron_Chair.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 86,
    "tempo": "1 Dia e 1 Hora",
    "recursos": [
      {
        "nome": "Wooden Chair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/87/Wooden_Chair.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "tron-table-estilista",
    "nome": "Tron Table",
    "imagem": "https://wiki.pokexgames.com/images/8/81/Tron_table.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 88,
    "tempo": "1 Dia e 4 Horas",
    "recursos": [
      {
        "nome": "Pure White Counter",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/c/c1/Pure_White_Balcony.png/30px-Pure_White_Balcony.png"
      },
      {
        "nome": "Tech Ball",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "tron-pillar-estilista",
    "nome": "Tron Pillar",
    "imagem": "https://wiki.pokexgames.com/images/4/4a/Tron_Pillar.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 84,
    "tempo": "1 Dia e 4 Horas",
    "recursos": [
      {
        "nome": "Tech Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "red-cool-chair-estilista",
    "nome": "Red Cool Chair",
    "imagem": "https://wiki.pokexgames.com/images/f/f5/Red_Cool_Chair.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 87,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Tron Chair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Tron_Chair.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      }
    ]
  },
  {
    "id": "yellow-cool-chair-estilista",
    "nome": "Yellow Cool Chair",
    "imagem": "https://wiki.pokexgames.com/images/d/d8/Yellow_cool_chair.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 87,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Tron Chair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Tron_Chair.png"
      },
      {
        "nome": "Yellow Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Yellow_Dye.png"
      }
    ]
  },
  {
    "id": "blue-cool-chair-estilista",
    "nome": "Blue Cool Chair",
    "imagem": "https://wiki.pokexgames.com/images/a/a4/Blue_Cool_Chair.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 87,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Tron Chair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/82/Tron_Chair.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      }
    ]
  },
  {
    "id": "cool-glass-table-estilista",
    "nome": "Cool Glass Table",
    "imagem": "https://wiki.pokexgames.com/images/2/29/Cool_Glass_Table.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "White Glass Table",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/4/41/White_Glass_Table.png/30px-White_Glass_Table.png"
      },
      {
        "nome": "Fur Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Fur_Ball.png"
      },
      {
        "nome": "Big Crystal",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png"
      }
    ]
  },
  {
    "id": "modern-table-1-estilista",
    "nome": "Modern Table",
    "imagem": "https://wiki.pokexgames.com/images/0/03/Modern_Table1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 84,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Black Dye",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Planks",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "big-modern-table-estilista",
    "nome": "Big Modern Table",
    "imagem": "https://wiki.pokexgames.com/images/a/a4/Big_Modern_Table1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 88,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Grey Poké Ball Table",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/thumb/b/b4/Grey_Pok%C3%A9_Ball_Table.png/30px-Grey_Pok%C3%A9_Ball_Table.png"
      },
      {
        "nome": "Modern Table",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/72/Modern_Table.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "modern-leather-sofa-estilista",
    "nome": "Modern Leather Sofa",
    "imagem": "https://wiki.pokexgames.com/images/b/b1/Modern_Leather_Sofa1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia e 1 Hora",
    "recursos": [
      {
        "nome": "Black Leather Sofa",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/thumb/2/28/Black_Sofa.png/30px-Black_Sofa.png"
      },
      {
        "nome": "Fur Ball",
        "quantidade": 72,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Fur_Ball.png"
      },
      {
        "nome": "Planks",
        "quantidade": 48,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "builder-kit-estilista",
    "nome": "Builder Kit",
    "imagem": "https://wiki.pokexgames.com/images/b/b9/Build_Kit.png",
    "tipo": "acessorio",
    "rank": "A",
    "skill": 80,
    "tempo": "3 Dias e 3 Horas",
    "recursos": [
      {
        "nome": "Leather",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3d/Leather.png"
      },
      {
        "nome": "Stone Orb",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png"
      },
      {
        "nome": "Sandbag",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/5/52/SandbagMark.png"
      },
      {
        "nome": "Horn Drill",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png"
      },
      {
        "nome": "Strange Rock",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png"
      },
      {
        "nome": "Ancient Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "bunk-bed-estilista",
    "nome": "Bunk Bed",
    "imagem": "https://wiki.pokexgames.com/images/3/3e/Bunk_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 96,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Black/White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/BlackWhite_Bed.png"
      },
      {
        "nome": "Poké Ball Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e6/Pok%C3%A9_Ball_Bed.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "king-size-bed-estilista",
    "nome": "King Size Bed",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/King_Size_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 96,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "Black/White Bed",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/BlackWhite_Bed.png"
      },
      {
        "nome": "Poké Ball Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e6/Pok%C3%A9_Ball_Bed.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "aggron-bed-estilista",
    "nome": "Aggron Bed",
    "imagem": "https://wiki.pokexgames.com/images/1/1c/Aggron_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Orebound Tapestry",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Orebound_Tapestry.png"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 125,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "charizard-bed-estilista",
    "nome": "Charizard Bed",
    "imagem": "https://wiki.pokexgames.com/images/c/ce/Charizard_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Wingeon Tapestry",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Wingeon_Tapestry.png"
      },
      {
        "nome": "Volcanic Tapestry",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Volcanic_Tapestry.png"
      },
      {
        "nome": "Fire Tail",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png"
      },
      {
        "nome": "Dragon Tooth",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "gengar-bed-estilista",
    "nome": "Gengar Bed",
    "imagem": "https://wiki.pokexgames.com/images/0/0a/Gengar_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Malefic Tapestry",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Malefic_Tapestry.png"
      },
      {
        "nome": "Traces Of Ghost",
        "quantidade": 160,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "gyarados-bed-estilista",
    "nome": "Gyarados Bed",
    "imagem": "https://wiki.pokexgames.com/images/0/0f/Gyarados_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Seavell Tapestry",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Seavell_Tapestry.png"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "hitmonchan-bed-estilista",
    "nome": "Hitmonchan Bed",
    "imagem": "https://wiki.pokexgames.com/images/6/6d/Hitmonchan_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Gardestrike Tapestry",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/4/44/Gardestrike_Tapestry.png"
      },
      {
        "nome": "Punch Machine",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/2/26/Punch_Machine.png"
      },
      {
        "nome": "Martial Arts Scroll",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "snorlax-bed-estilista",
    "nome": "Snorlax Bed",
    "imagem": "https://wiki.pokexgames.com/images/4/45/Snorlax_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Flame Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Flame_Bed.png"
      },
      {
        "nome": "Psychic Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/46/Psychic_Bed.png"
      },
      {
        "nome": "Rock Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Rock_Bed.png"
      },
      {
        "nome": "Sea Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Sea_Bed.png"
      },
      {
        "nome": "Black/White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/BlackWhite_Bed.png"
      },
      {
        "nome": "Poké Ball Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e6/Pok%C3%A9_Ball_Bed.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "scizor-bed-estilista",
    "nome": "Scizor Bed",
    "imagem": "https://wiki.pokexgames.com/images/f/fa/Scizor_Bed1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 89,
    "tempo": "1 Dia e 12 Horas",
    "recursos": [
      {
        "nome": "White Bed",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/76/White_Bed.png"
      },
      {
        "nome": "Naturia Tapestry",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/9/93/Naturia_Tapestry.png"
      },
      {
        "nome": "Scizor Claw",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "pikachu-big-figure-estilista",
    "nome": "Pikachu Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/0/06/Pikafigure.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Electric Rat Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png"
      },
      {
        "nome": "Sheep Wool",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png"
      },
      {
        "nome": "Shock Topknot",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "electabuzz-big-figure-estilista",
    "nome": "Electabuzz Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/7/77/Buzzfigure.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Electric Tail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png"
      },
      {
        "nome": "Sheep Wool",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png"
      },
      {
        "nome": "Shock Topknot",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "magmar-big-figure-estilista",
    "nome": "Magmar Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/c/c6/Magmarfigure.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Pot of Lava",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/2/21/PotOfLava.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "jynx-big-figure-estilista",
    "nome": "Jynx Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/e/e3/Jynxfigure.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Ice Orb",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/IceOrb.png"
      },
      {
        "nome": "Ice Bra",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "infernape-big-figure-estilista",
    "nome": "Infernape Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/b/b3/Napefigure.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Fire Feather",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "scyther-big-figure-estilista",
    "nome": "Scyther Big Figure",
    "imagem": "https://wiki.pokexgames.com/images/4/40/Scyfigure.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Scythe",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/c/cd/Scythe.png"
      },
      {
        "nome": "Pot of Moss Bug",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png"
      },
      {
        "nome": "Planks",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/Planks.png"
      }
    ]
  },
  {
    "id": "pikachu-unpacked-costume-estilista",
    "nome": "Pikachu Unpacked Costume",
    "imagem": "https://wiki.pokexgames.com/images/8/80/Pikachu_unpacked_costume.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 96,
    "tempo": "14 Horas e 24 Minutos",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "Fur Ball",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Fur_Ball.png"
      },
      {
        "nome": "Mystic Star",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "kangaskhan-locker-estilista",
    "nome": "Kangaskhan Locker",
    "imagem": "https://wiki.pokexgames.com/images/b/bb/Kangaskhan-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Gardestrike Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f9/Gardestrike_Urn.png"
      },
      {
        "nome": "Gardestrike Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/4/44/Gardestrike_Tapestry.png"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "aggron-locker-estilista",
    "nome": "Aggron Locker",
    "imagem": "https://wiki.pokexgames.com/images/3/3a/Aggron-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Metal Hull",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "absol-locker-estilista",
    "nome": "Absol Locker",
    "imagem": "https://wiki.pokexgames.com/images/8/82/Absol-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Scary Smile",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/7e/Scary_Smile.png"
      },
      {
        "nome": "Malefic Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Malefic_Tapestry.png"
      },
      {
        "nome": "Dark Moon",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Dark_Moon.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "sceptile-locker-estilista",
    "nome": "Sceptile Locker",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Sceptile-addon.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Massive Vines",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Massive_Vines.png"
      },
      {
        "nome": "Naturia Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/93/Naturia_Tapestry.png"
      },
      {
        "nome": "Greens",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/5/54/Greens.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "rhydon-locker-estilista",
    "nome": "Rhydon Locker",
    "imagem": "https://wiki.pokexgames.com/images/2/27/Rhydon-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Solid Rock Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/aa/Solid_Rock_Paw.png"
      },
      {
        "nome": "Orebound Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Orebound_Tapestry.png"
      },
      {
        "nome": "Horn Drill",
        "quantidade": 350,
        "imagem": "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "gardevoir-locker-estilista",
    "nome": "Gardevoir Locker",
    "imagem": "https://wiki.pokexgames.com/images/6/6d/Gardevoir-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Psycraft Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d8/Psycraft_Urn.png"
      },
      {
        "nome": "Psycraft Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Psycraft_Tapestry.png"
      },
      {
        "nome": "Enigma Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "electivire-locker-estilista",
    "nome": "Electivire Locker",
    "imagem": "https://wiki.pokexgames.com/images/5/5e/Electivire-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Max Volt Paw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Max_Volt_Paw.png"
      },
      {
        "nome": "Raibolt Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/96/Raibolt_Tapestry.png"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "feraligatr-locker-estilista",
    "nome": "Feraligatr Locker",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Feraligatr-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Beautiful Scales",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/90/Beautiful_Scales.png"
      },
      {
        "nome": "Seavell Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Seavell_Tapestry.png"
      },
      {
        "nome": "Red Scale",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/1/19/Red_Scale.png"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "infernape-locker-estilista",
    "nome": "Infernape Locker",
    "imagem": "https://wiki.pokexgames.com/images/5/55/Infernape-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Blaze Topknot",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d1/Blaze_Topknot.png"
      },
      {
        "nome": "Volcanic Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Volcanic_Tapestry.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "dragonair-locker-estilista",
    "nome": "Dragonair Locker",
    "imagem": "https://wiki.pokexgames.com/images/1/1c/Dragonair-locker.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 91,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Locker",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/thumb/1/19/Locker.png/50px-Locker.png"
      },
      {
        "nome": "Wingeon Urn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/85/Wingeon_Urn.png"
      },
      {
        "nome": "Wingeon Tapestry",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Wingeon_Tapestry.png"
      },
      {
        "nome": "Crystal Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "black-tapestry-estilista",
    "nome": "Black Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/2/22/Black_Tapestry.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 85,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "Cloth",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/51/Cloth.png"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Ice Blocks",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/e/e2/Ice_Blocks.png"
      },
      {
        "nome": "Black Dye",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/4c/Black_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "blood-tapestry-estilista",
    "nome": "Blood Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/c/cc/Blood_Tapestry.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 92,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Tooth",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/7/78/Tooth.png"
      },
      {
        "nome": "Giant Bat Wing",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Giant_Bat_Wing.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "aqua-tapestry-estilista",
    "nome": "Aqua Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/a/ac/Aqua_Tapestry.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 92,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Water Pendant",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/2/27/WaterPendant.png"
      },
      {
        "nome": "Gyarados Tail",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "heart-tapestry-estilista",
    "nome": "Heart Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Heart_Tapestry.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 92,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Comb",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/9/9b/Comb.png"
      },
      {
        "nome": "Topknot",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/2/29/Topknot.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "mewtwo-tapestry-estilista",
    "nome": "Mewtwo Tapestry",
    "imagem": "https://wiki.pokexgames.com/images/2/26/Mewtwo_Tapestry.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 100,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Silk",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Silk.PNG"
      },
      {
        "nome": "White Tapestry",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/90/White_Tapestry.png"
      },
      {
        "nome": "Future Orb",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png"
      },
      {
        "nome": "Psychic Spoon",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png"
      },
      {
        "nome": "Linearly Guided Hypnosis",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png"
      },
      {
        "nome": "Strange Antenna",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Strange_Antenna.png"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "thrift-store-voucher-estilista",
    "nome": "Thrift Store Voucher",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Thrift_Store_Voucher.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 95,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Punch Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/da/3mDejdt.png"
      },
      {
        "nome": "Darkness Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5d/HrnVNwK.png"
      },
      {
        "nome": "Cocoon Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Cocoon_stone.gif"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Ice Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Ice-stone.gif"
      },
      {
        "nome": "Venom Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Venom-stone.gif"
      },
      {
        "nome": "Rock Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif"
      },
      {
        "nome": "Enigma Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Leaf Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif"
      },
      {
        "nome": "Water Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Refined Fashion Point",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/69/Refined_Fashion_Point.png"
      }
    ]
  },
  {
    "id": "thrift-store-estilista",
    "nome": "Thrift Store",
    "imagem": "https://wiki.pokexgames.com/images/8/8e/Thrift_Store1.png",
    "tipo": "movel",
    "rank": "A",
    "skill": 95,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "Punch Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/da/3mDejdt.png"
      },
      {
        "nome": "Darkness Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/5d/HrnVNwK.png"
      },
      {
        "nome": "Cocoon Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/28/Cocoon_stone.gif"
      },
      {
        "nome": "Thunder Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif"
      },
      {
        "nome": "Ice Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Ice-stone.gif"
      },
      {
        "nome": "Venom Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/ac/Venom-stone.gif"
      },
      {
        "nome": "Rock Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif"
      },
      {
        "nome": "Enigma Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif"
      },
      {
        "nome": "Heart Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif"
      },
      {
        "nome": "Leaf Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif"
      },
      {
        "nome": "Water Stone",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Oak Planks",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Oak_Planks.png"
      }
    ]
  },
  {
    "id": "cannon-mecha-estilista",
    "nome": "Cannon Mecha",
    "imagem": "https://wiki.pokexgames.com/images/9/94/CannonMecha.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 100,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Mecha",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Mecha-icone.png"
      },
      {
        "nome": "Blue Dye",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/c9/Blue_Dye.png"
      },
      {
        "nome": "Squirtle Hull",
        "quantidade": 400,
        "imagem": "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png"
      },
      {
        "nome": "Water Stone",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Water-stone.gif"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      }
    ]
  },
  {
    "id": "flame-mecha-estilista",
    "nome": "Flame Mecha",
    "imagem": "https://wiki.pokexgames.com/images/7/7d/FlameMecha.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 100,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Mecha",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Mecha-icone.png"
      },
      {
        "nome": "Red Dye",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/c/c1/Red_Dye.png"
      },
      {
        "nome": "Magma Foot",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png"
      },
      {
        "nome": "Fire Stone",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      }
    ]
  },
  {
    "id": "forest-mecha-estilista",
    "nome": "Forest Mecha",
    "imagem": "https://wiki.pokexgames.com/images/c/c1/ForestMecha.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 100,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Mecha",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Mecha-icone.png"
      },
      {
        "nome": "Green Dye",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Green_Dye.png"
      },
      {
        "nome": "Palm Leaves",
        "quantidade": 62,
        "imagem": "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png"
      },
      {
        "nome": "Leaf Stone",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      }
    ]
  },
  {
    "id": "nightmare-mecha-estilista",
    "nome": "Nightmare Mecha",
    "imagem": "https://wiki.pokexgames.com/images/0/07/NightmareMecha.png",
    "tipo": "outfit",
    "rank": "A",
    "skill": 100,
    "tempo": "2 Dias e 12 Horas",
    "recursos": [
      {
        "nome": "Mecha",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/8/86/Mecha-icone.png"
      },
      {
        "nome": "Pink Dye",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/6/6a/Pink_Dye.png"
      },
      {
        "nome": "Traces Of Ghost",
        "quantidade": 250,
        "imagem": "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png"
      },
      {
        "nome": "Darkness Stone",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/5d/HrnVNwK.png"
      },
      {
        "nome": "Metal Stone",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/b/b9/MetalStone.png"
      }
    ]
  },
  {
    "id": "workshop-s-estilista",
    "nome": "Workshop S",
    "imagem": "https://wiki.pokexgames.com/images/a/a9/Stylist_workshop_S.png",
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
    "id": "workshop-s-portatil-estilista",
    "nome": "Workshop S",
    "imagem": "https://wiki.pokexgames.com/images/2/26/Stylist_Workshop_S_-_Port.png",
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
    "id": "nightmare-xp-totem-estilista",
    "nome": "Nightmare XP Totem",
    "imagem": "https://wiki.pokexgames.com/images/9/98/Nightmare_XP_Totem.png",
    "tipo": "xp-banner",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Luchador Mask",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b8/Luchador_Mask.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "dark-fog-ball-capsule-estilista",
    "nome": "Dark Fog Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/5/5c/Dark_Fog_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 21,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Solid Head",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Brutal Fin",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png"
      }
    ]
  },
  {
    "id": "electric-spark-ball-capsule-estilista",
    "nome": "Electric Spark Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/8/88/Electric_Spark_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 66,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      },
      {
        "nome": "Dragon Slime",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Dragon_Slime.png"
      }
    ]
  },
  {
    "id": "virus-ball-capsule-estilista",
    "nome": "Virus Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/5/54/Virus_Ball_Capsule.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Virtual Tail",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Virtual_Tail.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Corrupted Pinsir Horn",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      }
    ]
  },
  {
    "id": "arcade-ball-capsule-estilista",
    "nome": "Arcade Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/d/d9/Arcade_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Gleam Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      }
    ]
  },
  {
    "id": "pixel-ball-capsule-estilista",
    "nome": "Pixel Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/f/fd/Pixel_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Lovely Topknot",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      },
      {
        "nome": "Continent Thorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 56,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      }
    ]
  },
  {
    "id": "emoji-ball-capsule-estilista",
    "nome": "Emoji Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/6/68/Emoji_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Mole Big Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      }
    ]
  },
  {
    "id": "blue-ball-capsule-estilista",
    "nome": "Blue Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/4/4c/Blue_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 36,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Brutal Fin",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Corrupted Cow Tail",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      }
    ]
  },
  {
    "id": "black-fog-ball-capsule-estilista",
    "nome": "Black Fog Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/0/02/Black_Fog_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      },
      {
        "nome": "Mount Big Horn",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Mount_Big_Horn.png"
      }
    ]
  },
  {
    "id": "green-pixel-ball-capsule-estilista",
    "nome": "Green Pixel Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/f/f4/Green_Pixel_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Continent Thorn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      }
    ]
  },
  {
    "id": "cyan-electric-spark-ball-capsule-estilista",
    "nome": "Cyan Electric Spark Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/8/82/Cyan_Electric_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Frosty Hand",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Frosty_Hand.png"
      },
      {
        "nome": "Blade Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      }
    ]
  },
  {
    "id": "white-electric-spark-ball-capsule-estilista",
    "nome": "White Electric Spark Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/2/25/White_Electric_Spark_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Gleam Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Centipede Armors",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png"
      }
    ]
  },
  {
    "id": "dark-blue-fog-ball-capsule-estilista",
    "nome": "Dark Blue Fog Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/b/bd/Dark_Blue_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Big Boss Hat",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/31/Big_Boss_Hat.png"
      },
      {
        "nome": "Corrupted Steelix Tail",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Mach Nail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      },
      {
        "nome": "Corrupted Lizard Tail",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      }
    ]
  },
  {
    "id": "pink-pixel-ball-capsule-estilista",
    "nome": "Pink Pixel Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/2/2c/Pink_Pixel_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 56,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Pig Ear",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Emperor Trident",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      }
    ]
  },
  {
    "id": "red-pixel-ball-capsule-estilista",
    "nome": "Red Pixel Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Red_Pixel_Ball_Capssule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Scizor Claw",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/0/03/Corrupted-Scizor-Claw.gif"
      },
      {
        "nome": "Red Spike",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      }
    ]
  },
  {
    "id": "orange-pixel-ball-capsule-estilista",
    "nome": "Orange Pixel Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/3/34/Orange_Pixel_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 56,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Flame Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      }
    ]
  },
  {
    "id": "green-fog-ball-capsule-estilista",
    "nome": "Green Fog Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/1/1c/Green_Fog_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 56,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Blade Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      }
    ]
  },
  {
    "id": "red-fog-ball-capsule-estilista",
    "nome": "Red Fog Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/f/fd/Red_Fog_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Pig Ear",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Red Spike",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      }
    ]
  },
  {
    "id": "pink-fog-ball-capsule-estilista",
    "nome": "Pink Fog Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/8/89/Pink_Fog_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      }
    ]
  },
  {
    "id": "orange-fog-ball-capsule-estilista",
    "nome": "Orange Fog Ball Capsule",
    "imagem": "https://wiki.pokexgames.com/images/0/02/Orange_Fog_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Corrupted Feather",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 33,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      }
    ]
  },
  {
    "id": "red-electric-spark-capsule-estilista",
    "nome": "Red Electric Spark Capsule",
    "imagem": "https://wiki.pokexgames.com/images/2/21/Red_Electric_Spark_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 57,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "purple-electric-spark-capsule-estilista",
    "nome": "Purple Electric Spark Capsule",
    "imagem": "https://wiki.pokexgames.com/images/b/b7/Purple_Electric_Spark_Ball_Capsule.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 110,
    "tempo": "10 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 600,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      }
    ]
  },
  {
    "id": "poke-ball-cam-estilista",
    "nome": "Poké Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/5/5a/Pok%C3%A9_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Compressed Nightmare Gem",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      }
    ]
  },
  {
    "id": "blue-ball-cam-estilista",
    "nome": "Blue Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/8/83/Blue_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Brutal Fin",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 21,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 21,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      }
    ]
  },
  {
    "id": "pink-ball-cam-estilista",
    "nome": "Pink Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/8/81/Pink_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 36,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "park-ball-cam-estilista",
    "nome": "Park Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/0/0e/Park_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 33,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "cyan-ball-cam-estilista",
    "nome": "Cyan Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/c/ca/Cyan_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Frosty Tail",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/f/f2/Frosty_Tail.png"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 28,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      }
    ]
  },
  {
    "id": "fast-ball-cam-estilista",
    "nome": "Fast Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/f/f4/Fast_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 45,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 33,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "master-ball-cam-estilista",
    "nome": "Master Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/1/1d/Master_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 33,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      }
    ]
  },
  {
    "id": "lure-ball-cam-estilista",
    "nome": "Lure Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/8/8d/Lure_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      }
    ]
  },
  {
    "id": "premier-ball-cam-estilista",
    "nome": "Premier Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/4/49/Premier_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "great-ball-cam-estilista",
    "nome": "Great Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/7/74/Great_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      }
    ]
  },
  {
    "id": "ultra-ball-cam-estilista",
    "nome": "Ultra Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/4/4f/Ultra_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 27,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "heavy-ball-cam-estilista",
    "nome": "Heavy Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/e/e7/Heavy_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 21,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      }
    ]
  },
  {
    "id": "team-rocket-ball-cam-estilista",
    "nome": "Team Rocket Ball Cam",
    "imagem": "https://wiki.pokexgames.com/images/a/ac/Team_Rocket_Ball_Cam.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "6 Horas",
    "recursos": [
      {
        "nome": "Purpleheart Log",
        "quantidade": 360,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 33,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "technological-capsule-estilista",
    "nome": "Technological Capsule",
    "imagem": "https://wiki.pokexgames.com/images/e/e4/Technological_Capsule.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 120,
    "tempo": "5 Dias",
    "recursos": [
      {
        "nome": "3.000 Purpleheart Log",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/fe/Purpleheart_Log.png"
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
        "nome": "Giant Hamburgers",
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
        "nome": "Dog Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/4/47/Dog_Tail.png"
      },
      {
        "nome": "Twin Stings",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Twin_Stings.png"
      },
      {
        "nome": "Mecha Reactor",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/45/Mecha_Reactor.png"
      }
    ]
  },
  {
    "id": "designer-workshop-estilista",
    "nome": "Designer Workshop",
    "imagem": "https://wiki.pokexgames.com/images/6/65/Designer_Workshop.png",
    "tipo": "workshop",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Nightmare Style Point",
        "quantidade": 900,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "White Hair",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      }
    ]
  },
  {
    "id": "superior-juggernaut-elixir-estilista",
    "nome": "Superior Juggernaut Elixir",
    "imagem": "https://wiki.pokexgames.com/images/4/48/Superior_Juggernaut%27s_Elixir.png",
    "tipo": "elixir",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Nightmare Style Point",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      }
    ]
  },
  {
    "id": "critical-catch-charm-tier-1-estilista",
    "nome": "Critical Catch Charm (Tier 1)",
    "imagem": "https://wiki.pokexgames.com/images/8/83/Critical_Catch_Charm_%28Tier_1%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 105,
    "tempo": "12 Horas",
    "recursos": [
      {
        "nome": "Nightmare Style Point",
        "quantidade": 1500,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 22,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Star Remains",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b1/Star_Remains.png"
      }
    ]
  },
  {
    "id": "critical-catch-upgrade-tier-2-estilista",
    "nome": "Critical Catch Upgrade (Tier 2)",
    "imagem": "https://wiki.pokexgames.com/images/5/5d/Critical_Catch_Upgrade_%28Tier_2%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 110,
    "tempo": "1 Dia",
    "recursos": [
      {
        "nome": "9.000 Nightmare Style Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Flame Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Turtle Shell",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5e/Turtle_Shell.png"
      },
      {
        "nome": "Dragon Remains",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/79/Dragon_Remains.png"
      }
    ]
  },
  {
    "id": "critical-catch-upgrade-tier-3-estilista",
    "nome": "Critical Catch Upgrade (Tier 3)",
    "imagem": "https://wiki.pokexgames.com/images/8/83/Critical_Catch_Upgrade_%28Tier_3%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 115,
    "tempo": "2 Dias",
    "recursos": [
      {
        "nome": "15.000 Nightmare Style Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Royal Tail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Catfish Whiskers",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Catfish_Whiskers.png"
      },
      {
        "nome": "Gleam Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Golden Nuggets",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/d/d0/Golden_Nuggets.png"
      },
      {
        "nome": "Violet Luchador Mask",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Violet_Luchador_Mask.png"
      }
    ]
  },
  {
    "id": "critical-catch-upgrade-tier-4-estilista",
    "nome": "Critical Catch Upgrade (Tier 4)",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/Critical_Catch_Upgrade_%28Tier_4%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 117,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "21.000 Nightmare Style Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Big Eagle Feather",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/7/76/Big_Eagle_Feather.png"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Red Spike",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Compressed Nightmare Gem",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Eel Remains",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/79/Eel_Remains.png"
      },
      {
        "nome": "Traces of Voodoo Doll",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/c5/Traces_of_Voodoo_doll.png"
      },
      {
        "nome": "Virtual Head",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/04/Virtual_Head.png"
      },
      {
        "nome": "Magnet Remains",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Magnet_Remains.png"
      }
    ]
  },
  {
    "id": "critical-catch-upgrade-tier-5-estilista",
    "nome": "Critical Catch Upgrade (Tier 5)",
    "imagem": "https://wiki.pokexgames.com/images/8/8a/Critical_Catch_Upgrade_%28Tier_5%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 119,
    "tempo": "6 Dias",
    "recursos": [
      {
        "nome": "30.000 Nightmare Style Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Big Ice Ball",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Big_Ice_Ball.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Brutal Fin",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Twin Stings",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/2/24/Twin_Stings.png"
      },
      {
        "nome": "Dog Collar",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/c5/Dog_Collar.png"
      },
      {
        "nome": "Magnet Remains",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/7/7d/Magnet_Remains.png"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Blade Horn",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      },
      {
        "nome": "Giant Tusk",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      },
      {
        "nome": "Golden Nuggets",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/d/d0/Golden_Nuggets.png"
      }
    ]
  },
  {
    "id": "critical-catch-upgrade-tier-6-estilista",
    "nome": "Critical Catch Upgrade (Tier 6)",
    "imagem": "https://wiki.pokexgames.com/images/c/c0/Critical_Catch_Upgrade_%28Tier_6%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 120,
    "tempo": "8 Dias",
    "recursos": [
      {
        "nome": "36.000 Nightmare Style Point",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c4/Nightmare_Style_Point.gif"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      },
      {
        "nome": "Corrupted Pinsir Horn",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      },
      {
        "nome": "Green Hair",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Continent Thorn",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      },
      {
        "nome": "Frosty Hand",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Frosty_Hand.png"
      },
      {
        "nome": "Bear Feet",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/ef/Bear_Feet.png"
      },
      {
        "nome": "Giant Dragon Pearl",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Giant_Dragon_Pearl.gif"
      },
      {
        "nome": "Dog Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/4/47/Dog_Tail.png"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      }
    ]
  },
  {
    "id": "decorator-workshop-estilista",
    "nome": "Decorator Workshop",
    "imagem": "https://wiki.pokexgames.com/images/1/1c/Decorator_Workshop.png",
    "tipo": "workshop",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      }
    ]
  },
  {
    "id": "premier-ball-upgrade-estilista",
    "nome": "Premier Ball Upgrade",
    "imagem": "https://wiki.pokexgames.com/images/a/a8/Premier_Ball_Upgrade.png",
    "tipo": "material",
    "rank": "S",
    "skill": 120,
    "tempo": "20 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Virtual Tail",
        "quantidade": 130,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Virtual_Tail.png"
      },
      {
        "nome": "Dragon Goo",
        "quantidade": 172,
        "imagem": "https://wiki.pokexgames.com/images/d/dc/Dragon_Goo.png"
      },
      {
        "nome": "Lovely Topknot",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Catfish Whiskers",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Catfish_Whiskers.png"
      },
      {
        "nome": "Giant Tusk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png"
      },
      {
        "nome": "Bear Feet",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/ef/Bear_Feet.png"
      }
    ]
  },
  {
    "id": "legendary-beasts-lockers-recipe-estilista",
    "nome": "Legendary Beasts Lockers Recipe",
    "imagem": "https://wiki.pokexgames.com/images/d/d0/Legendary_Beasts_Lockers_Recipe.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "10 Dias",
    "recursos": [
      {
        "nome": "1.000 Drawing Clipboard",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Virtual Tail",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Virtual_Tail.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Royal Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Brutal Fin",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png"
      }
    ]
  },
  {
    "id": "simple-bed-estilista",
    "nome": "Simple Bed",
    "imagem": "https://wiki.pokexgames.com/images/b/b1/Simple_Bed.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "3 Dias",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Slice of Apple",
        "quantidade": 185,
        "imagem": "https://wiki.pokexgames.com/images/0/0d/Slice_of_Apple.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 120,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Solid Head",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      }
    ]
  },
  {
    "id": "charmander-toolkit-estilista",
    "nome": "Charmander Toolkit",
    "imagem": "https://wiki.pokexgames.com/images/2/21/Charmander_Toolkit.png",
    "tipo": "material",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "squirtle-toolkit-estilista",
    "nome": "Squirtle Toolkit",
    "imagem": "https://wiki.pokexgames.com/images/e/e8/Squirtle_Toolkit.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "bulbasaur-toolkit-estilista",
    "nome": "Bulbasaur Toolkit",
    "imagem": "https://wiki.pokexgames.com/images/0/0d/Bulbasaur_Toolkit.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 100,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "brick-wallpaper-estilista",
    "nome": "Brick Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/4/42/Brick_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      }
    ]
  },
  {
    "id": "black-wallpaper-estilista",
    "nome": "Black Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/6/6d/Black_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "dark-wallpaper-estilista",
    "nome": "Dark Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/d/d2/Dark_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      }
    ]
  },
  {
    "id": "gray-wallpaper-estilista",
    "nome": "Gray Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/d/d8/Gray_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "pink-wallpaper-estilista",
    "nome": "Pink Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/c/c6/Pink_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 26,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "concrete-wallpaper-estilista",
    "nome": "Concrete Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/3/30/Concrete_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      }
    ]
  },
  {
    "id": "blue-wallpaper-estilista",
    "nome": "Blue Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/f/f7/Blue_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      }
    ]
  },
  {
    "id": "checkered-wallpaper-estilista",
    "nome": "Checkered Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/e/e9/Checkered_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 22,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      }
    ]
  },
  {
    "id": "red-wallpaper-estilista",
    "nome": "Red Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/b/b3/Red_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "cyan-wallpaper-estilista",
    "nome": "Cyan Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/6/67/Cyan_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      }
    ]
  },
  {
    "id": "blue-checkered-wallpaper-estilista",
    "nome": "Blue Checkered Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/d/df/Blue_Checkered_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      }
    ]
  },
  {
    "id": "green-wallpaper-estilista",
    "nome": "Green Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/d/d9/Green_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Green Hair",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "purple-wallpaper-estilista",
    "nome": "Purple Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Purple_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 7,
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
    "id": "green-checkered-wallpaper-estilista",
    "nome": "Green Checkered Wallpaper",
    "imagem": "https://wiki.pokexgames.com/images/0/08/Green_Checkered_Wallpaper.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      }
    ]
  },
  {
    "id": "nightmare-builder-kit-estilista",
    "nome": "Nightmare Builder Kit",
    "imagem": "https://wiki.pokexgames.com/images/b/ba/Nightmare_Builder_Kit.gif",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 115,
    "tempo": "4 Dias",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Corrupted Lizard Tail",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      },
      {
        "nome": "Corrupted Steelix Tail",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      },
      {
        "nome": "Big Mount Horn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Mount_Big_Horn.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      }
    ]
  },
  {
    "id": "red-luxurious-display-table-estilista",
    "nome": "Red Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/d/db/Luxurious_Red_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      },
      {
        "nome": "Pig Ear",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Corrupted Scizor Claw",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/0/03/Corrupted-Scizor-Claw.gif"
      }
    ]
  },
  {
    "id": "orange-luxurious-display-table-estilista",
    "nome": "Orange Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/8/86/Luxurious_Orange_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 35,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Royal Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Corrupted Cow Tail",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      }
    ]
  },
  {
    "id": "green-luxurious-display-table-estilista",
    "nome": "Green Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/1/12/Luxurious_Green_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Frosty Hand",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Frosty_Hand.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      },
      {
        "nome": "Big Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Mount_Big_Horn.png"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      }
    ]
  },
  {
    "id": "purple-luxurious-display-table-estilista",
    "nome": "Purple Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/c/c8/Luxurious_Purple_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Mach Nail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 16,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      }
    ]
  },
  {
    "id": "yellow-luxurious-display-table-estilista",
    "nome": "Yellow Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/2/2a/Luxurious_Yellow_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "blue-luxurious-display-table-estilista",
    "nome": "Blue Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/7/75/Luxurious_Blue_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Giant Tusk",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 32,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      }
    ]
  },
  {
    "id": "dark-blue-luxurious-display-table-estilista",
    "nome": "Dark Blue Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/2/2a/Luxurious_Dark_Blue_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      }
    ]
  },
  {
    "id": "black-luxurious-display-table-estilista",
    "nome": "Black Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/6/63/Luxurious_Black_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      }
    ]
  },
  {
    "id": "brown-luxurious-display-table-estilista",
    "nome": "Brown Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/2/23/Luxurious_Brown_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 36,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "pink-luxurious-display-table-estilista",
    "nome": "Pink Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/6/62/Luxurious_Pink_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      }
    ]
  },
  {
    "id": "light-green-luxurious-display-table-estilista",
    "nome": "Light Green Luxurious Display Table",
    "imagem": "https://wiki.pokexgames.com/images/4/4d/Luxurious_Light_Green_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "5 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Compressed Nightmare Gem",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      }
    ]
  },
  {
    "id": "mystical-tailoring-machine-estilista",
    "nome": "Mystical Tailoring Machine",
    "imagem": "https://wiki.pokexgames.com/images/a/aa/Mystical_Tailoring_Machine.png",
    "tipo": "maquina",
    "rank": "S",
    "skill": 108,
    "tempo": "7 Dias",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Emperor Trident",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Flame Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      },
      {
        "nome": "Gleam Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 72,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 28,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 68,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 38,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "White Hair",
        "quantidade": 38,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "green-egg-chair-estilista",
    "nome": "Green Egg Chair",
    "imagem": "https://wiki.pokexgames.com/images/2/25/Green_Egg_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      }
    ]
  },
  {
    "id": "pink-egg-chair-estilista",
    "nome": "Pink Egg Chair",
    "imagem": "https://wiki.pokexgames.com/images/9/97/Pink_Egg_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      }
    ]
  },
  {
    "id": "red-egg-chair-estilista",
    "nome": "Red Egg Chair",
    "imagem": "https://wiki.pokexgames.com/images/e/e7/Red_Egg_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      }
    ]
  },
  {
    "id": "gray-egg-chair-estilista",
    "nome": "Gray Egg Chair",
    "imagem": "https://wiki.pokexgames.com/images/a/a7/Gray_Egg_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "White Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      }
    ]
  },
  {
    "id": "blue-egg-chair-estilista",
    "nome": "Blue Egg Chair",
    "imagem": "https://wiki.pokexgames.com/images/7/7d/Blue_Egg_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "3 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "red-bench-estilista",
    "nome": "Red Bench",
    "imagem": "https://wiki.pokexgames.com/images/6/60/Red_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      }
    ]
  },
  {
    "id": "blue-bench-estilista",
    "nome": "Blue Bench",
    "imagem": "https://wiki.pokexgames.com/images/1/1f/Blue_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "yellow-bench-estilista",
    "nome": "Yellow Bench",
    "imagem": "https://wiki.pokexgames.com/images/e/e6/Yellow_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      }
    ]
  },
  {
    "id": "green-bench-estilista",
    "nome": "Green Bench",
    "imagem": "https://wiki.pokexgames.com/images/0/06/Green_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Green Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      }
    ]
  },
  {
    "id": "purple-bench-estilista",
    "nome": "Purple Bench",
    "imagem": "https://wiki.pokexgames.com/images/d/d9/Purple_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "pink-bench-estilista",
    "nome": "Pink Bench",
    "imagem": "https://wiki.pokexgames.com/images/e/e8/Pink_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      }
    ]
  },
  {
    "id": "cyan-bench-estilista",
    "nome": "Cyan Bench",
    "imagem": "https://wiki.pokexgames.com/images/f/fe/Cyan_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      }
    ]
  },
  {
    "id": "black-bench-estilista",
    "nome": "Black Bench",
    "imagem": "https://wiki.pokexgames.com/images/e/e8/Black_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "gray-bench-estilista",
    "nome": "Gray Bench",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Gray_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "White Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      }
    ]
  },
  {
    "id": "orange-bench-estilista",
    "nome": "Orange Bench",
    "imagem": "https://wiki.pokexgames.com/images/2/20/Orange_Bench.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "2 Horas",
    "recursos": [
      {
        "nome": "Drawing Clipboard",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      }
    ]
  },
  {
    "id": "white-cool-sofa-estilista",
    "nome": "White Cool Sofa",
    "imagem": "https://wiki.pokexgames.com/images/5/5a/White_Cool_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "yellow-cool-sofa-estilista",
    "nome": "Yellow Cool Sofa",
    "imagem": "https://wiki.pokexgames.com/images/c/c9/Yellow_Cool_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "blue-cool-sofa-estilista",
    "nome": "Blue Cool Sofa",
    "imagem": "https://wiki.pokexgames.com/images/2/27/Blue_Cool_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      }
    ]
  },
  {
    "id": "purple-cool-sofa-estilista",
    "nome": "Purple Cool Sofa",
    "imagem": "https://wiki.pokexgames.com/images/6/6c/Purple_Cool_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      }
    ]
  },
  {
    "id": "cyan-cool-sofa-estilista",
    "nome": "Cyan Cool Sofa",
    "imagem": "https://wiki.pokexgames.com/images/1/1a/Cyan_Cool_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      }
    ]
  },
  {
    "id": "yellow-sofa-estilista",
    "nome": "Yellow Sofa",
    "imagem": "https://wiki.pokexgames.com/images/3/3c/Yellow_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      }
    ]
  },
  {
    "id": "blue-sofa-estilista",
    "nome": "Blue Sofa",
    "imagem": "https://wiki.pokexgames.com/images/0/00/Blue_Sofa_RankS.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "white-sofa-estilista",
    "nome": "White Sofa",
    "imagem": "https://wiki.pokexgames.com/images/3/32/White_Sofa_RankS.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      }
    ]
  },
  {
    "id": "black-sofa-estilista",
    "nome": "Black Sofa",
    "imagem": "https://wiki.pokexgames.com/images/4/4d/Black_Sofa_RankS.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "pink-sofa-estilista",
    "nome": "Pink Sofa",
    "imagem": "https://wiki.pokexgames.com/images/7/7b/Pink_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      }
    ]
  },
  {
    "id": "purple-sofa-estilista",
    "nome": "Purple Sofa",
    "imagem": "https://wiki.pokexgames.com/images/2/25/Purple_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "green-sofa-estilista",
    "nome": "Green Sofa",
    "imagem": "https://wiki.pokexgames.com/images/9/93/Green_Sofa_RankS.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      }
    ]
  },
  {
    "id": "red-sofa-estilista",
    "nome": "Red Sofa",
    "imagem": "https://wiki.pokexgames.com/images/1/14/Red_Sofa.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mount Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      }
    ]
  },
  {
    "id": "red-mewtwo-throne-estilista",
    "nome": "Red Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/9/94/Red_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Scizor Claw",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/0/03/Corrupted-Scizor-Claw.gif"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      },
      {
        "nome": "Red Spike",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Flame Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png"
      }
    ]
  },
  {
    "id": "blue-mewtwo-throne-estilista",
    "nome": "Blue Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/c/c8/Blue_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Virtual Tail",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/e/e3/Virtual_Tail.png"
      },
      {
        "nome": "Mach Nail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Mole Big Hair",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Blade Horn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      }
    ]
  },
  {
    "id": "white-mewtwo-throne-estilista",
    "nome": "White Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/4/40/White_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 64,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Lovely Topknot",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Frosty Tail",
        "quantidade": 21,
        "imagem": "https://wiki.pokexgames.com/images/f/f2/Frosty_Tail.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "dark-green-mewtwo-throne-estilista",
    "nome": "Dark Green Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/3/3f/Dark_Green_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 85,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Frosty Hand",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/5/5c/Frosty_Hand.png"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      },
      {
        "nome": "Corrupted Lizard Tail",
        "quantidade": 65,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      },
      {
        "nome": "Green Hair",
        "quantidade": 65,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Electric Fish Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png"
      }
    ]
  },
  {
    "id": "pink-mewtwo-throne-estilista",
    "nome": "Pink Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/9/98/Pink_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Pig Ear",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Corrupted Pinsir Horn",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      },
      {
        "nome": "Centipede Armors",
        "quantidade": 65,
        "imagem": "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png"
      }
    ]
  },
  {
    "id": "black-mewtwo-throne-estilista",
    "nome": "Black Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/7/72/Black_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Centipede Armors",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png"
      },
      {
        "nome": "Big Mount Horn",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Mount_Big_Horn.png"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 55,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      }
    ]
  },
  {
    "id": "green-mewtwo-throne-estilista",
    "nome": "Green Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/3/3c/Green_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 70,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 65,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      }
    ]
  },
  {
    "id": "orange-mewtwo-throne-estilista",
    "nome": "Orange Mewtwo Throne",
    "imagem": "https://wiki.pokexgames.com/images/0/0a/Orange_Mewtwo_Throne.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 300,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 90,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Royal Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Mole Big Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      }
    ]
  },
  {
    "id": "microwave-oven-estilista",
    "nome": "Microwave Oven",
    "imagem": "https://wiki.pokexgames.com/images/e/eb/Microwave2.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "3 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 28,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      }
    ]
  },
  {
    "id": "glass-console-table-estilista",
    "nome": "Glass Console Table",
    "imagem": "https://wiki.pokexgames.com/images/8/8e/Glass_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "2 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "black-armchair-estilista",
    "nome": "Black Armchair",
    "imagem": "https://wiki.pokexgames.com/images/8/88/Black_Armchair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 101,
    "tempo": "2 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "marble-counter-estilista",
    "nome": "Marble Counter",
    "imagem": "https://wiki.pokexgames.com/images/5/5e/Marble_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 107,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "custom-countertop-estilista",
    "nome": "Custom Countertop",
    "imagem": "https://wiki.pokexgames.com/images/0/01/Custom_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Green Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "blue-custom-countertop-estilista",
    "nome": "Blue Custom Countertop",
    "imagem": "https://wiki.pokexgames.com/images/5/5c/Blue_Custom_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Land Shark Horn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "red-modern-countertop-estilista",
    "nome": "Red Modern Countertop",
    "imagem": "https://wiki.pokexgames.com/images/b/bf/Red_Modern_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      }
    ]
  },
  {
    "id": "purple-modern-countertop-estilista",
    "nome": "Purple Modern Countertop",
    "imagem": "https://wiki.pokexgames.com/images/1/13/Purple_Modern_Balcony.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 105,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "large-red-modern-stove-estilista",
    "nome": "Large Red Modern Stove",
    "imagem": "https://wiki.pokexgames.com/images/9/94/Large_Red_Modern_Stove.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Emperor Trident",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      }
    ]
  },
  {
    "id": "modern-stove-estilista",
    "nome": "Modern Stove",
    "imagem": "https://wiki.pokexgames.com/images/2/24/Modern_Stove2.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Emperor Trident",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Corrupted Steelix Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      }
    ]
  },
  {
    "id": "large-custom-stove-estilista",
    "nome": "Large Custom Stove",
    "imagem": "https://wiki.pokexgames.com/images/6/66/Large_Custom_Stove.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 112,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Corrupted Cow Tail",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      }
    ]
  },
  {
    "id": "large-stove-estilista",
    "nome": "Large Stove",
    "imagem": "https://wiki.pokexgames.com/images/9/92/Large_Stove.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 112,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      },
      {
        "nome": "Red Spike",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      },
      {
        "nome": "Royal Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      }
    ]
  },
  {
    "id": "custom-stove-estilista",
    "nome": "Custom Stove",
    "imagem": "https://wiki.pokexgames.com/images/d/d1/Custom_Stove.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      },
      {
        "nome": "Mole Big Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Corrupted Pinsir Horn",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      }
    ]
  },
  {
    "id": "blue-custom-stove-estilista",
    "nome": "Blue Custom Stove",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Blue_Custom_Stove.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "3Corrupted Gem Star",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      }
    ]
  },
  {
    "id": "red-modern-stove-estilista",
    "nome": "Red Modern Stove",
    "imagem": "https://wiki.pokexgames.com/images/0/0f/Red_Modern_Stove.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      }
    ]
  },
  {
    "id": "purple-modern-stove-estilista",
    "nome": "Purple Modern Stove",
    "imagem": "https://wiki.pokexgames.com/images/e/eb/Purple_Modern_Stove.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 108,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 7,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      }
    ]
  },
  {
    "id": "magikarp-aquarium-estilista",
    "nome": "Magikarp Aquarium",
    "imagem": "https://wiki.pokexgames.com/images/8/86/Magikarp_Aquarium.gif",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      }
    ]
  },
  {
    "id": "shiny-magikarp-aquarium-estilista",
    "nome": "Shiny Magikarp Aquarium",
    "imagem": "https://wiki.pokexgames.com/images/a/a6/Shiny_Magikarp_Aquarium.gif",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 12,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 26,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      }
    ]
  },
  {
    "id": "leaf-pillow-estilista",
    "nome": "Leaf Pillow",
    "imagem": "https://wiki.pokexgames.com/images/6/6c/Leaf_Pillow.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      }
    ]
  },
  {
    "id": "yellow-pillow-estilista",
    "nome": "Yellow Pillow",
    "imagem": "https://wiki.pokexgames.com/images/2/2e/Yellow_Pillow.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "stone-pillow-estilista",
    "nome": "Stone Pillow",
    "imagem": "https://wiki.pokexgames.com/images/7/70/Stone_Pillow.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      }
    ]
  },
  {
    "id": "poke-ball-pillow-estilista",
    "nome": "Poké Ball Pillow",
    "imagem": "https://wiki.pokexgames.com/images/4/4b/Pok%C3%A9_Ball_Pillow.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "White Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "cloud-pillow-estilista",
    "nome": "Cloud Pillow",
    "imagem": "https://wiki.pokexgames.com/images/1/17/Cloud_Pillow.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "red-poke-ball-pillow-estilista",
    "nome": "Red Poké Ball Pillow",
    "imagem": "https://wiki.pokexgames.com/images/8/87/Red_Pok%C3%A9_Ball_Pillow.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "1Curly Pig Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      }
    ]
  },
  {
    "id": "white-poke-ball-pillow-estilista",
    "nome": "White Poké Ball Pillow",
    "imagem": "https://wiki.pokexgames.com/images/9/98/White_Pok%C3%A9_Ball_Pillow.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "1 hora",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "snorlax-armchair-estilista",
    "nome": "Snorlax Armchair",
    "imagem": "https://wiki.pokexgames.com/images/5/5e/Snorlax_Armchair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 106,
    "tempo": "18 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "ditto-armchair-estilista",
    "nome": "Ditto Armchair",
    "imagem": "https://wiki.pokexgames.com/images/e/e8/Ditto_Armchair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 106,
    "tempo": "18 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      },
      {
        "nome": "Pig Ear",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      },
      {
        "nome": "Bagworm Pink Leaves",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png"
      },
      {
        "nome": "Mole Big Hair",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Corrupted Pinsir Horn",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      }
    ]
  },
  {
    "id": "shiny-ditto-armchair-estilista",
    "nome": "Shiny Ditto Armchair",
    "imagem": "https://wiki.pokexgames.com/images/7/75/Shiny_Ditto_Armchair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 106,
    "tempo": "18 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 9,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Blade Horn",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png"
      }
    ]
  },
  {
    "id": "red-poke-chest-estilista",
    "nome": "Red Poké Chest",
    "imagem": "https://wiki.pokexgames.com/images/b/b0/Red_Pok%C3%A9_Chest.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      }
    ]
  },
  {
    "id": "yellow-poke-chest-estilista",
    "nome": "Yellow Poké Chest",
    "imagem": "https://wiki.pokexgames.com/images/7/7e/Yellow_Pok%C3%A9_Chest.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "green-poke-chest-estilista",
    "nome": "Green Poké Chest",
    "imagem": "https://wiki.pokexgames.com/images/b/b1/Green_Pok%C3%A9_Chest.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      }
    ]
  },
  {
    "id": "black-poke-chest-estilista",
    "nome": "Black Poké Chest",
    "imagem": "https://wiki.pokexgames.com/images/2/2b/Black_Pok%C3%A9_Chest.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      }
    ]
  },
  {
    "id": "blue-poke-chest-estilista",
    "nome": "Blue Poké Chest",
    "imagem": "https://wiki.pokexgames.com/images/b/bb/Blue_Pok%C3%A9_Chest.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      }
    ]
  },
  {
    "id": "classic-pillar-estilista",
    "nome": "Classic Pillar",
    "imagem": "https://wiki.pokexgames.com/images/c/c0/Classic_Pillar.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "8 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Steelix Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      }
    ]
  },
  {
    "id": "marble-classic-pillar-estilista",
    "nome": "Marble Classic Pillar",
    "imagem": "https://wiki.pokexgames.com/images/d/d2/Marble_Classic_Pillar.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "8 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Sand Pouch",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png"
      },
      {
        "nome": "Corrupted Cow Tail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif"
      },
      {
        "nome": "Corrupted Pinsir Horn",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      }
    ]
  },
  {
    "id": "golden-classic-pillar-estilista",
    "nome": "Golden Classic Pillar",
    "imagem": "https://wiki.pokexgames.com/images/a/a5/Golden_Classic_Pillar.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "8 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      }
    ]
  },
  {
    "id": "stars-carpet-estilista",
    "nome": "Stars Carpet",
    "imagem": "https://wiki.pokexgames.com/images/e/e9/Stars_Carpet.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 19,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Vines",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      },
      {
        "nome": "Pig Ear",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png"
      }
    ]
  },
  {
    "id": "poke-ball-carpet-estilista",
    "nome": "Poké Ball Carpet",
    "imagem": "https://wiki.pokexgames.com/images/8/80/Pok%C3%A9_Ball_Carpet.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 24,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 42,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Corrupted Scizor Claw",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/0/03/Corrupted-Scizor-Claw.gif"
      },
      {
        "nome": "Lovely Topknot",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      }
    ]
  },
  {
    "id": "cerulean-carpet-estilista",
    "nome": "Cerulean Carpet",
    "imagem": "https://wiki.pokexgames.com/images/1/16/Cerulean_Carpet.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "1 dia",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 75,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Corrupted Streak Tail",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Brutal Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png"
      }
    ]
  },
  {
    "id": "closet-estilista",
    "nome": "Closet",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/Closet.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "3 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Razor Claw",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "black-wooden-closet-estilista",
    "nome": "Black Wooden Closet",
    "imagem": "https://wiki.pokexgames.com/images/f/f9/Black_Wooden_Closet.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "3 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 13,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      }
    ]
  },
  {
    "id": "wooden-closet-estilista",
    "nome": "Wooden Closet",
    "imagem": "https://wiki.pokexgames.com/images/2/2f/Wooden_Closet.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "3 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Hair",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      }
    ]
  },
  {
    "id": "wardrobe-estilista",
    "nome": "Wardrobe",
    "imagem": "https://wiki.pokexgames.com/images/1/15/Wardrobe.png",
    "tipo": "outfit",
    "rank": "S",
    "skill": 115,
    "tempo": "3 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 14,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "White Hair",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      }
    ]
  },
  {
    "id": "cyan-wardrobe-estilista",
    "nome": "Cyan Wardrobe",
    "imagem": "https://wiki.pokexgames.com/images/d/d1/Cyan_Wardrobe.png",
    "tipo": "outfit",
    "rank": "S",
    "skill": 115,
    "tempo": "3 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "White Hair",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f7/White_Hair.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      }
    ]
  },
  {
    "id": "blue-wardrobe-estilista",
    "nome": "Blue Wardrobe",
    "imagem": "https://wiki.pokexgames.com/images/b/bd/Blue_Wardrobe.png",
    "tipo": "outfit",
    "rank": "S",
    "skill": 115,
    "tempo": "3 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Curly Pig Tail",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png"
      }
    ]
  },
  {
    "id": "beige-office-chair-estilista",
    "nome": "Beige Office Chair",
    "imagem": "https://wiki.pokexgames.com/images/3/38/Beige_Office_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "2 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 62,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 56,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Mole Big Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png"
      },
      {
        "nome": "Corrupted Gem Star",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      }
    ]
  },
  {
    "id": "orange-office-chair-estilista",
    "nome": "Orange Office Chair",
    "imagem": "https://wiki.pokexgames.com/images/3/39/Orange_Office_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "2 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 56,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Corrupted Feather",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 31,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 23,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 18,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      }
    ]
  },
  {
    "id": "black-office-chair-estilista",
    "nome": "Black Office Chair",
    "imagem": "https://wiki.pokexgames.com/images/5/51/Black_Office_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "2 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 60,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Corrupted Lizard Tail",
        "quantidade": 30,
        "imagem": "https://wiki.pokexgames.com/images/5/5b/Corrupted-Lizard-Tail.gif"
      },
      {
        "nome": "Yellow Eyebrows",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Big Mount Horn",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Mount_Big_Horn.png"
      }
    ]
  },
  {
    "id": "gaming-computer-estilista",
    "nome": "Gaming Computer",
    "imagem": "https://wiki.pokexgames.com/images/f/ff/Gaming_Computer.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 102,
    "tempo": "5 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      }
    ]
  },
  {
    "id": "large-table-estilista",
    "nome": "Large Table",
    "imagem": "https://wiki.pokexgames.com/images/b/b2/Large_Table.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "2 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Corrupted Dragon Tooth",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif"
      }
    ]
  },
  {
    "id": "slim-table-estilista",
    "nome": "Slim Table",
    "imagem": "https://wiki.pokexgames.com/images/a/ae/Slim_Table.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "2 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Small Bird Beak",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      }
    ]
  },
  {
    "id": "modern-table-2-estilista",
    "nome": "Modern Table",
    "imagem": "https://wiki.pokexgames.com/images/a/ac/Modern_Table2.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 115,
    "tempo": "4 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Ice Piece",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif"
      },
      {
        "nome": "Corrupted Scizor Claw",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/0/03/Corrupted-Scizor-Claw.gif"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 11,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 8,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      }
    ]
  },
  {
    "id": "blue-chair-estilista",
    "nome": "Blue Chair",
    "imagem": "https://wiki.pokexgames.com/images/1/10/Blue_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "brown-chair-estilista",
    "nome": "Brown Chair",
    "imagem": "https://wiki.pokexgames.com/images/d/d3/Brown_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      }
    ]
  },
  {
    "id": "red-chair-estilista",
    "nome": "Red Chair",
    "imagem": "https://wiki.pokexgames.com/images/d/d1/Red_Chair.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Fire Monkey Hair",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png"
      }
    ]
  },
  {
    "id": "sink-estilista",
    "nome": "Sink",
    "imagem": "https://wiki.pokexgames.com/images/6/66/Sink.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 110,
    "tempo": "10 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 50,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Champion Belt",
        "quantidade": 17,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 28,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      },
      {
        "nome": "Cave Nail",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png"
      }
    ]
  },
  {
    "id": "yellow-healing-machine-estilista",
    "nome": "Yellow Healing Machine",
    "imagem": "https://wiki.pokexgames.com/images/d/d6/Yellow_Healing_Machine.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 117,
    "tempo": "7 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 280,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Catfish Tail",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png"
      },
      {
        "nome": "Mach Nails",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Solid Head",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      },
      {
        "nome": "Gear Nose",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png"
      }
    ]
  },
  {
    "id": "green-healing-machine-estilista",
    "nome": "Green Healing Machine",
    "imagem": "https://wiki.pokexgames.com/images/2/2f/Green_Healing_Machine.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 117,
    "tempo": "7 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 280,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Green Hair",
        "quantidade": 87,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 200,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Lovely Topknot",
        "quantidade": 87,
        "imagem": "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      }
    ]
  },
  {
    "id": "blue-healing-machine-estilista",
    "nome": "Blue Healing Machine",
    "imagem": "https://wiki.pokexgames.com/images/0/04/Blue_Healing_Machine.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 117,
    "tempo": "7 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 500,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      },
      {
        "nome": "Dragon Wings",
        "quantidade": 80,
        "imagem": "https://wiki.pokexgames.com/images/f/fa/Dragon_Wings.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Remains Of Gears",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png"
      },
      {
        "nome": "Royal Tail",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/a/a0/Royal_Tail.png"
      }
    ]
  },
  {
    "id": "unpacked-kecleon-s-shop-stage-1-estilista",
    "nome": "Unpacked Kecleon's Shop - Stage 1",
    "imagem": "https://wiki.pokexgames.com/images/1/19/Kecleon%27s_Shop_-_Stage_1.png",
    "tipo": "acessorio",
    "rank": "S",
    "skill": 120,
    "tempo": "6 dias",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 1000,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Big Ice Ball",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/7/75/Big_Ice_Ball.png"
      },
      {
        "nome": "Corrupted Pinsir Horn",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif"
      },
      {
        "nome": "Brown Ear",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png"
      },
      {
        "nome": "Black Lucky Charm",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png"
      },
      {
        "nome": "Dragon Wings",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/f/fa/Dragon_Wings.png"
      },
      {
        "nome": "Corrupted Tree Branch",
        "quantidade": 150,
        "imagem": "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif"
      },
      {
        "nome": "Bear Arm",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png"
      },
      {
        "nome": "Green Hair",
        "quantidade": 100,
        "imagem": "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png"
      },
      {
        "nome": "Bagworm Stone",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png"
      },
      {
        "nome": "Traces Of Voodoo Doll",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/c5/Traces_of_Voodoo_doll.png"
      },
      {
        "nome": "Eel Remains",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/79/Eel_Remains.png"
      },
      {
        "nome": "Giant Dragon Pearl",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/98/Giant_Dragon_Pearl.gif"
      },
      {
        "nome": "Sentry Remains",
        "quantidade": 40,
        "imagem": "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png"
      }
    ]
  },
  {
    "id": "kecleon-s-contract-stage-2-estilista",
    "nome": "Kecleon's Contract (Stage 2)",
    "imagem": "https://wiki.pokexgames.com/images/5/5b/Kecleon%27s_Contract_%28Stage_2%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 120,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Ice Orb",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      }
    ]
  },
  {
    "id": "kecleon-s-contract-stage-3-estilista",
    "nome": "Kecleon's Contract (Stage 3)",
    "imagem": "https://wiki.pokexgames.com/images/9/9e/Kecleon%27s_Contract_%28Stage_3%29.png",
    "tipo": "material",
    "rank": "S",
    "skill": 120,
    "tempo": "8 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 20,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Diamonds",
        "quantidade": 25,
        "imagem": "https://wiki.pokexgames.com/images/e/ea/Diamond.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      }
    ]
  },
  {
    "id": "tentacool-lamp-estilista",
    "nome": "Tentacool Lamp",
    "imagem": "https://wiki.pokexgames.com/images/e/ea/Tentacool_Lamp.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 103,
    "tempo": "4 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Ice Crystal",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png"
      }
    ]
  },
  {
    "id": "shiny-tentacool-lamp-estilista",
    "nome": "Shiny Tentacool Lamp",
    "imagem": "https://wiki.pokexgames.com/images/9/9b/Shiny_Tentacool_Lamp.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 107,
    "tempo": "6 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Toxic Gosme",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png"
      },
      {
        "nome": "Corrupted Pot Of Moss Bug",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      }
    ]
  },
  {
    "id": "lamp-1-estilista",
    "nome": "Lamp",
    "imagem": "https://wiki.pokexgames.com/images/3/37/Lamp.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "2 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Savage Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      }
    ]
  },
  {
    "id": "lamp-2-estilista",
    "nome": "Lamp",
    "imagem": "https://wiki.pokexgames.com/images/9/92/Lamp_2.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 100,
    "tempo": "2 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Corrupted Magnet",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 5,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Elefish Fin",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png"
      }
    ]
  },
  {
    "id": "mimikyu-lamp-estilista",
    "nome": "Mimikyu Lamp",
    "imagem": "https://wiki.pokexgames.com/images/8/8d/Mimikyu_Lamp.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 106,
    "tempo": "16 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Mole Hair",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png"
      },
      {
        "nome": "Psychic Mustache",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png"
      },
      {
        "nome": "Corrupted Doll Star",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif"
      },
      {
        "nome": "Corrupted Miss Traces",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/5/5f/Corrupted-Miss-Traces.gif"
      }
    ]
  },
  {
    "id": "bulbasaur-lamp-estilista",
    "nome": "Bulbasaur Lamp",
    "imagem": "https://wiki.pokexgames.com/images/9/90/Bulbasaur_Lamp.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 106,
    "tempo": "16 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Petite Leaves",
        "quantidade": 10,
        "imagem": "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png"
      },
      {
        "nome": "Bagworm Green Leaves",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png"
      },
      {
        "nome": "Frosty Tail",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/f/f2/Frosty_Tail.png"
      },
      {
        "nome": "Corrupted Poisonous Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif"
      }
    ]
  },
  {
    "id": "squirtle-lamp-estilista",
    "nome": "Squirtle Lamp",
    "imagem": "https://wiki.pokexgames.com/images/d/d5/Squirtle_Lamp.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 106,
    "tempo": "16 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Whiskers Fin",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png"
      },
      {
        "nome": "Corrupted Black Hull",
        "quantidade": 2,
        "imagem": "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif"
      },
      {
        "nome": "Solid Head",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/7/74/Solid_Head.png"
      }
    ]
  },
  {
    "id": "charmander-lamp-estilista",
    "nome": "Charmander Lamp",
    "imagem": "https://wiki.pokexgames.com/images/2/23/Charmander_Lamp.png",
    "tipo": "movel",
    "rank": "S",
    "skill": 106,
    "tempo": "16 horas",
    "recursos": [
      {
        "nome": "Drawing Clipboards",
        "quantidade": 15,
        "imagem": "https://wiki.pokexgames.com/images/3/36/Drawing_Clipboard.png"
      },
      {
        "nome": "Alolan Electric Rat Tail",
        "quantidade": 1,
        "imagem": "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png"
      },
      {
        "nome": "Corrupted Pot Of Lava",
        "quantidade": 6,
        "imagem": "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif"
      },
      {
        "nome": "Black Wool Ball",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png"
      },
      {
        "nome": "Royal Mane",
        "quantidade": 4,
        "imagem": "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png"
      },
      {
        "nome": "Red Spike",
        "quantidade": 3,
        "imagem": "https://wiki.pokexgames.com/images/0/02/Red_Spike.png"
      }
    ]
  }
];
