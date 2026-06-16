/* ============================================================
   PXG Joey Quest (DZ) — Data

   Fonte: https://wiki.pokexgames.com/index.php/Joey_Quest

   Estrutura:
     - rewardsByDifficulty: recompensa individual por dificuldade (Fácil/Médio/Difícil)
       cada item: { qty, name, image }
     - clans[]: cada clã com pokémons (image), dificuldades, recompensa do clã
     - finalReward: lista de recompensas ao completar TODOS os clãs

   Captura é compartilhada entre clãs: se Bisharp aparece em Psycraft,
   Malefic e Ironhard, marcar uma vez marca em todos os clãs.
   ============================================================ */

const IMG = {
  // Chaves/Elixires
  goldenKey:       "https://wiki.pokexgames.com/images/1/1f/GoldenKey.png",
  silverKey:       "https://wiki.pokexgames.com/images/4/4d/SilverKey.png",
  runningElixir:   "https://wiki.pokexgames.com/images/b/b6/Running_Elixir.png",
  healingElixir:   "https://wiki.pokexgames.com/images/e/e8/Healing_Elixir.png",
  attackElixir:    "https://wiki.pokexgames.com/images/e/ec/Attackelixir.png",
  bountyElixir:    "https://wiki.pokexgames.com/images/3/33/Bounty_Elixir.png",
  speedsterElixir: "https://wiki.pokexgames.com/images/0/04/Speedster%27s_Elixir.png",

  // Essências
  volcanicEssence:    "https://wiki.pokexgames.com/images/d/da/VolcanicEssence.png",
  seavellEssence:     "https://wiki.pokexgames.com/images/5/50/SeavellEssence.png",
  naturiaEssence:     "https://wiki.pokexgames.com/images/c/ca/NaturiaEssence.png",
  gardestrikeEssence: "https://wiki.pokexgames.com/images/c/c9/GardestrikeEssence.png",
  oreboundEssence:    "https://wiki.pokexgames.com/images/d/d0/OreboundEssence.png",
  raiboltEssence:     "https://wiki.pokexgames.com/images/6/68/RaiboltEssence.png",
  wingeonEssence:     "https://wiki.pokexgames.com/images/7/74/WingeonEssence.png",
  psycraftEssence:    "https://wiki.pokexgames.com/images/b/b7/PsycraftEssence.png",
  maleficEssence:     "https://wiki.pokexgames.com/images/d/d5/MaleficEssence.png",
  ironhardEssence:    "https://wiki.pokexgames.com/images/2/27/IronhardEssence.png",

  // Ovos
  flameEgg:      "https://wiki.pokexgames.com/images/2/25/Volcegg.png",
  waterfallEgg:  "https://wiki.pokexgames.com/images/2/29/Seaegg.png",
  sproutEgg:     "https://wiki.pokexgames.com/images/3/34/Naturiaegg.png",
  championEgg:   "https://wiki.pokexgames.com/images/d/d0/Gardeegg.png",
  sandEgg:       "https://wiki.pokexgames.com/images/7/7e/Oreegg.png",
  eletricianEgg: "https://wiki.pokexgames.com/images/f/fb/Raiboltegg.png",
  falconEgg:     "https://wiki.pokexgames.com/images/a/a9/Wingegg.png",
  brainEgg:      "https://wiki.pokexgames.com/images/3/39/Psyegg.png",
  spectreEgg:    "https://wiki.pokexgames.com/images/c/c4/Maleficegg.png",
  smitherEgg:    "https://wiki.pokexgames.com/images/c/c5/Ironegg.png",

  // Recompensa final
  masterBall:        "https://wiki.pokexgames.com/images/e/e2/Master-ball.png",
  fourLeafClover:    "https://wiki.pokexgames.com/images/e/e1/Four_Leaf_Clover.gif",
  catcher2Female:    "https://wiki.pokexgames.com/images/4/4c/Catcher2_female.png",
  catcher2Male:      "https://wiki.pokexgames.com/images/3/30/Catcher2_male.png",
  trofeuDeCatcher:   "https://wiki.pokexgames.com/images/0/01/Trofeu_de_Catcher.gif",
};

const CLAN_ICON = {
  volcanic:    "https://wiki.pokexgames.com/images/6/64/Volcanic1.png",
  seavell:     "https://wiki.pokexgames.com/images/5/5a/Seav.png",
  naturia:     "https://wiki.pokexgames.com/images/3/34/Natu1.png",
  gardestrike: "https://wiki.pokexgames.com/images/3/39/Gardestrike1.png",
  orebound:    "https://wiki.pokexgames.com/images/e/e2/Orebound1.png",
  raibolt:     "https://wiki.pokexgames.com/images/b/b4/Raibol1t.png",
  wingeon:     "https://wiki.pokexgames.com/images/0/0c/Wingeon1.png",
  psycraft:    "https://wiki.pokexgames.com/images/5/59/Psycraft1.png",
  malefic:     "https://wiki.pokexgames.com/images/5/56/Malefi1c.png",
  ironhard:    "https://wiki.pokexgames.com/images/9/9a/Ironhard1.png",
};

const POKE = {
  Darmanitan: "https://wiki.pokexgames.com/images/c/cd/555-Darmanitan.png",
  Darumaka:   "https://wiki.pokexgames.com/images/3/38/554-Darumaka.png",
  Heatmor:    "https://wiki.pokexgames.com/images/7/7f/631-Heatmor.png",
  Pelipper:   "https://wiki.pokexgames.com/images/c/ce/279-Pelipper.png",
  Wingull:    "https://wiki.pokexgames.com/images/b/b9/278-Wingull.png",
  Beartic:    "https://wiki.pokexgames.com/images/3/3e/614-Beartic.png",
  Cubchoo:    "https://wiki.pokexgames.com/images/b/bc/613-Cubchoo.png",
  Breloom:    "https://wiki.pokexgames.com/images/7/7c/286-Breloom.png",
  Shroomish:  "https://wiki.pokexgames.com/images/2/2b/285-Shroomish.png",
  Galvantula: "https://wiki.pokexgames.com/images/e/ec/596-Galvantula.png",
  Joltik:     "https://wiki.pokexgames.com/images/f/f7/595-Joltik.png",
  Ferrothorn: "https://wiki.pokexgames.com/images/f/f9/598-Ferrothorn.png",
  Ferroseed:  "https://wiki.pokexgames.com/images/8/86/597-Ferroseed.png",
  Crustle:    "https://wiki.pokexgames.com/images/4/4d/558-Crustle.png",
  Dwebble:    "https://wiki.pokexgames.com/images/7/7d/557-Dwebble.png",
  Ambipom:    "https://wiki.pokexgames.com/images/f/fc/424-Ambipom.png",
  Lickilicky: "https://wiki.pokexgames.com/images/5/58/463-Lickilicky.png",
  Gurdurr:    "https://wiki.pokexgames.com/images/9/9e/533-Gurdurr.png",
  Timburr:    "https://wiki.pokexgames.com/images/2/2b/532-Timburr.png",
  Probopass:  "https://wiki.pokexgames.com/images/e/e4/476-Probopass.png",
  Nosepass:   "https://wiki.pokexgames.com/images/4/4f/299-Nosepass.png",
  Hippowdon:  "https://wiki.pokexgames.com/images/8/83/450-Hippowdon.png",
  Hippopotas: "https://wiki.pokexgames.com/images/b/b2/449-Hippopotas.png",
  Excadrill:  "https://wiki.pokexgames.com/images/5/53/530-Excadrill.png",
  Drilbur:    "https://wiki.pokexgames.com/images/f/f6/529-Drillbur.png",
  Emolga:     "https://wiki.pokexgames.com/images/a/ab/587-Emolga.png",
  Haxorus:    "https://wiki.pokexgames.com/images/6/6e/612-Haxorus.png",
  Fraxure:    "https://wiki.pokexgames.com/images/6/66/611-Fraxure.png",
  Axew:       "https://wiki.pokexgames.com/images/4/4d/610-Axew.png",
  Bisharp:    "https://wiki.pokexgames.com/images/1/12/625-Bisharp.png",
  Pawniard:   "https://wiki.pokexgames.com/images/6/6c/624-Pawniard.png",
  Mightyena:  "https://wiki.pokexgames.com/images/5/57/262-Mightyena.png",
  Poochyena:  "https://wiki.pokexgames.com/images/7/73/261-Poochyena.png",
  Drapion:    "https://wiki.pokexgames.com/images/0/0b/452-Drapion.png",
  Skorupi:    "https://wiki.pokexgames.com/images/5/5d/451-Skorupi.png",
};

const JOEY_QUEST = {
  npc: "Joey",
  local: "Dimensional Zone",
  levelRequired: 80,
  wikiUrl: "https://wiki.pokexgames.com/index.php/Joey_Quest",

  rewardsByDifficulty: {
    facil: {
      label: "Fácil",
      items: [
        { qty: 2,  name: "Golden Key",     image: IMG.goldenKey },
        { qty: 4,  name: "Silver Key",     image: IMG.silverKey },
        { qty: 10, name: "Running Elixir", image: IMG.runningElixir },
        { qty: 3,  name: "Healing Elixir", image: IMG.healingElixir },
      ],
    },
    medio: {
      label: "Médio",
      items: [
        { qty: 3,  name: "Golden Key",     image: IMG.goldenKey },
        { qty: 4,  name: "Silver Key",     image: IMG.silverKey },
        { qty: 10, name: "Running Elixir", image: IMG.runningElixir },
        { qty: 3,  name: "Healing Elixir", image: IMG.healingElixir },
      ],
    },
    dificil: {
      label: "Difícil",
      items: [
        { qty: 6,  name: "Golden Key",         image: IMG.goldenKey },
        { qty: 6,  name: "Silver Key",         image: IMG.silverKey },
        { qty: 15, name: "Running Elixir",     image: IMG.runningElixir },
        { qty: 5,  name: "Healing Elixir",     image: IMG.healingElixir },
        { qty: 5,  name: "Attack Elixir",      image: IMG.attackElixir },
        { qty: 3,  name: "Bounty Elixir",      image: IMG.bountyElixir },
        { qty: 5,  name: "Speedster's Elixir", image: IMG.speedsterElixir },
      ],
    },
  },

  finalReward: [
    { name: "Master Ball",        image: IMG.masterBall,      desc: null },
    { name: "Four Leaf Clover",   image: IMG.fourLeafClover,  desc: "Item único, não transferível. Aumenta chance de captura fora do Poképark." },
    { name: "Outfit Catcher 2",   image: IMG.catcher2Male,    desc: "Adaptado ao gênero do personagem (versões masculina e feminina)." },
    { name: "Troféu de Catcher",  image: IMG.trofeuDeCatcher, desc: null },
  ],

  clans: [
    {
      id: "volcanic",
      name: "Volcanic",
      iconImage: CLAN_ICON.volcanic,
      reward: [
        { qty: 10,  name: "Golden Key",       image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",       image: IMG.silverKey },
        { qty: 100, name: "Volcanic Essence", image: IMG.volcanicEssence },
        { qty: 1,   name: "Flame Egg",        image: IMG.flameEgg },
      ],
      pokemons: [
        { name: "Darmanitan", difficulty: "dificil", image: POKE.Darmanitan },
        { name: "Darumaka",   difficulty: "facil",   image: POKE.Darumaka },
        { name: "Heatmor",    difficulty: "dificil", image: POKE.Heatmor },
      ],
    },
    {
      id: "seavell",
      name: "Seavell",
      iconImage: CLAN_ICON.seavell,
      reward: [
        { qty: 10,  name: "Golden Key",      image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",      image: IMG.silverKey },
        { qty: 100, name: "Seavell Essence", image: IMG.seavellEssence },
        { qty: 1,   name: "Waterfall Egg",   image: IMG.waterfallEgg },
      ],
      pokemons: [
        { name: "Pelipper", difficulty: "dificil", image: POKE.Pelipper },
        { name: "Wingull",  difficulty: "facil",   image: POKE.Wingull },
        { name: "Beartic",  difficulty: "dificil", image: POKE.Beartic },
        { name: "Cubchoo",  difficulty: "facil",   image: POKE.Cubchoo },
      ],
    },
    {
      id: "naturia",
      name: "Naturia",
      iconImage: CLAN_ICON.naturia,
      reward: [
        { qty: 10,  name: "Golden Key",      image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",      image: IMG.silverKey },
        { qty: 100, name: "Naturia Essence", image: IMG.naturiaEssence },
        { qty: 1,   name: "Sprout Egg",      image: IMG.sproutEgg },
      ],
      pokemons: [
        { name: "Breloom",    difficulty: "dificil", image: POKE.Breloom },
        { name: "Shroomish",  difficulty: "facil",   image: POKE.Shroomish },
        { name: "Galvantula", difficulty: "dificil", image: POKE.Galvantula },
        { name: "Joltik",     difficulty: "facil",   image: POKE.Joltik },
        { name: "Ferrothorn", difficulty: "dificil", image: POKE.Ferrothorn },
        { name: "Ferroseed",  difficulty: "facil",   image: POKE.Ferroseed },
        { name: "Crustle",    difficulty: "dificil", image: POKE.Crustle },
        { name: "Dwebble",    difficulty: "facil",   image: POKE.Dwebble },
      ],
    },
    {
      id: "gardestrike",
      name: "Gardestrike",
      iconImage: CLAN_ICON.gardestrike,
      reward: [
        { qty: 10,  name: "Golden Key",          image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",          image: IMG.silverKey },
        { qty: 100, name: "Gardestrike Essence", image: IMG.gardestrikeEssence },
        { qty: 1,   name: "Champion Egg",        image: IMG.championEgg },
      ],
      pokemons: [
        { name: "Ambipom",    difficulty: "dificil", image: POKE.Ambipom },
        { name: "Breloom",    difficulty: "dificil", image: POKE.Breloom },
        { name: "Lickilicky", difficulty: "dificil", image: POKE.Lickilicky },
        { name: "Gurdurr",    difficulty: "medio",   image: POKE.Gurdurr },
        { name: "Timburr",    difficulty: "facil",   image: POKE.Timburr },
      ],
    },
    {
      id: "orebound",
      name: "Orebound",
      iconImage: CLAN_ICON.orebound,
      reward: [
        { qty: 10,  name: "Golden Key",       image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",       image: IMG.silverKey },
        { qty: 100, name: "Orebound Essence", image: IMG.oreboundEssence },
        { qty: 1,   name: "Sand Egg",         image: IMG.sandEgg },
      ],
      pokemons: [
        { name: "Probopass",  difficulty: "dificil", image: POKE.Probopass },
        { name: "Nosepass",   difficulty: "facil",   image: POKE.Nosepass },
        { name: "Crustle",    difficulty: "dificil", image: POKE.Crustle },
        { name: "Dwebble",    difficulty: "facil",   image: POKE.Dwebble },
        { name: "Hippowdon",  difficulty: "dificil", image: POKE.Hippowdon },
        { name: "Hippopotas", difficulty: "facil",   image: POKE.Hippopotas },
        { name: "Excadrill",  difficulty: "dificil", image: POKE.Excadrill },
        { name: "Drilbur",    difficulty: "facil",   image: POKE.Drilbur },
      ],
    },
    {
      id: "raibolt",
      name: "Raibolt",
      iconImage: CLAN_ICON.raibolt,
      reward: [
        { qty: 10,  name: "Golden Key",      image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",      image: IMG.silverKey },
        { qty: 100, name: "Raibolt Essence", image: IMG.raiboltEssence },
        { qty: 1,   name: "Eletrician Egg",  image: IMG.eletricianEgg },
      ],
      pokemons: [
        { name: "Galvantula", difficulty: "dificil", image: POKE.Galvantula },
        { name: "Joltik",     difficulty: "facil",   image: POKE.Joltik },
        { name: "Emolga",     difficulty: "dificil", image: POKE.Emolga },
      ],
    },
    {
      id: "wingeon",
      name: "Wingeon",
      iconImage: CLAN_ICON.wingeon,
      reward: [
        { qty: 10,  name: "Golden Key",      image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",      image: IMG.silverKey },
        { qty: 100, name: "Wingeon Essence", image: IMG.wingeonEssence },
        { qty: 1,   name: "Falcon Egg",      image: IMG.falconEgg },
      ],
      pokemons: [
        { name: "Emolga",     difficulty: "dificil", image: POKE.Emolga },
        { name: "Pelipper",   difficulty: "dificil", image: POKE.Pelipper },
        { name: "Wingull",    difficulty: "facil",   image: POKE.Wingull },
        { name: "Haxorus",    difficulty: "dificil", image: POKE.Haxorus },
        { name: "Fraxure",    difficulty: "medio",   image: POKE.Fraxure },
        { name: "Axew",       difficulty: "facil",   image: POKE.Axew },
        { name: "Darmanitan", difficulty: "dificil", image: POKE.Darmanitan },
      ],
    },
    {
      id: "psycraft",
      name: "Psycraft",
      iconImage: CLAN_ICON.psycraft,
      reward: [
        { qty: 10,  name: "Golden Key",       image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",       image: IMG.silverKey },
        { qty: 100, name: "Psycraft Essence", image: IMG.psycraftEssence },
        { qty: 1,   name: "Brain Egg",        image: IMG.brainEgg },
      ],
      pokemons: [
        { name: "Bisharp",   difficulty: "dificil", image: POKE.Bisharp },
        { name: "Pawniard",  difficulty: "facil",   image: POKE.Pawniard },
        { name: "Mightyena", difficulty: "dificil", image: POKE.Mightyena },
        { name: "Poochyena", difficulty: "facil",   image: POKE.Poochyena },
        { name: "Drapion",   difficulty: "dificil", image: POKE.Drapion },
        { name: "Skorupi",   difficulty: "facil",   image: POKE.Skorupi },
      ],
    },
    {
      id: "malefic",
      name: "Malefic",
      iconImage: CLAN_ICON.malefic,
      reward: [
        { qty: 10,  name: "Golden Key",      image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",      image: IMG.silverKey },
        { qty: 100, name: "Malefic Essence", image: IMG.maleficEssence },
        { qty: 1,   name: "Spectre Egg",     image: IMG.spectreEgg },
      ],
      pokemons: [
        { name: "Bisharp",    difficulty: "dificil", image: POKE.Bisharp },
        { name: "Pawniard",   difficulty: "facil",   image: POKE.Pawniard },
        { name: "Ferrothorn", difficulty: "dificil", image: POKE.Ferrothorn },
        { name: "Ferroseed",  difficulty: "facil",   image: POKE.Ferroseed },
        { name: "Probopass",  difficulty: "dificil", image: POKE.Probopass },
      ],
    },
    {
      id: "ironhard",
      name: "Ironhard",
      iconImage: CLAN_ICON.ironhard,
      reward: [
        { qty: 10,  name: "Golden Key",       image: IMG.goldenKey },
        { qty: 10,  name: "Silver Key",       image: IMG.silverKey },
        { qty: 100, name: "Ironhard Essence", image: IMG.ironhardEssence },
        { qty: 1,   name: "Smither Egg",      image: IMG.smitherEgg },
      ],
      pokemons: [
        { name: "Probopass",  difficulty: "dificil", image: POKE.Probopass },
        { name: "Bisharp",    difficulty: "dificil", image: POKE.Bisharp },
        { name: "Pawniard",   difficulty: "facil",   image: POKE.Pawniard },
        { name: "Ferrothorn", difficulty: "dificil", image: POKE.Ferrothorn },
        { name: "Ferroseed",  difficulty: "facil",   image: POKE.Ferroseed },
      ],
    },
  ],
};
