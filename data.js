// PXG Professor Craft Calculator - Dados extraídos da Wiki oficial
// Fonte: https://wiki.pokexgames.com/index.php/Craft_Profiss%C3%B5es_-_Professor
// isBerrie=true => aplica regra de multiplicador 2 (média) e 2.5 (sorte)

const CRAFTS = [
  // ===== RANK E =====
  {
    id: "small-potion",
    nome: "Small Potion",
    imagem: "https://wiki.pokexgames.com/images/3/3c/Small_Potion.png",
    tipo: "poção", rank: "E", skill: 0, isBerrie: false,
    recursos: [
      { nome: "Bug Gosme", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/e/e8/Bug_Gosme.png" },
      { nome: "Water Gem", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/7/75/Watergem.png" },
      { nome: "Pure Grass", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "minor-seed-bag",
    nome: "Minor Seed Bag",
    imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png",
    tipo: "bolsa", rank: "E", skill: 10, isBerrie: false,
    recursos: [
      { nome: "Seed", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" }
    ]
  },
  {
    id: "green-gem",
    nome: "Green Gem",
    imagem: "https://wiki.pokexgames.com/images/f/fe/Green_Gem.png",
    tipo: "gema", rank: "E", skill: 2, isBerrie: false,
    recursos: [
      { nome: "Water Gem", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/7/75/Watergem.png" },
      { nome: "Pure Grass", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "leaves",
    nome: "Leaves",
    imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png",
    tipo: "material", rank: "E", skill: 12, isBerrie: false,
    recursos: [
      { nome: "Pure Grass", quantidade: 42, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "seed",
    nome: "Seed",
    imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png",
    tipo: "material", rank: "E", skill: 10, isBerrie: false,
    recursos: [
      { nome: "Pure Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "diamond-dust",
    nome: "Diamond Dust",
    imagem: "https://wiki.pokexgames.com/images/a/a3/Diamond-dust.gif",
    tipo: "material", rank: "E", skill: 2, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },
  {
    id: "beautiful-flower",
    nome: "Beautiful Flower",
    imagem: "https://wiki.pokexgames.com/images/4/42/Beautiful_Flower.png",
    tipo: "flor", rank: "E", skill: 6, isBerrie: false,
    recursos: [
      { nome: "Bulb", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/b/b3/Bulb.png" },
      { nome: "Leaves", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Pure Grass", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "banana",
    nome: "Banana",
    imagem: "https://wiki.pokexgames.com/images/6/69/Banana.png",
    tipo: "comida", rank: "E", skill: 2, isBerrie: false,
    recursos: [
      { nome: "Band Aid", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/a/a3/BandAid.png" },
      { nome: "Leaves", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Pure Grass", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "pecha-seed",
    nome: "Pecha Seed",
    imagem: "https://wiki.pokexgames.com/images/f/ff/Pecha_Seed.png",
    tipo: "semente", rank: "E", skill: 10, isBerrie: true,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Bottle of Poison", quantidade: 400, imagem: "https://wiki.pokexgames.com/images/b/b1/BottleOfPoison.png" },
      { nome: "Pure Grass", quantidade: 400, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "rawst-seed",
    nome: "Rawst Seed",
    imagem: "https://wiki.pokexgames.com/images/3/3b/Rawst_Seed.png",
    tipo: "semente", rank: "E", skill: 10, isBerrie: true,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Essence of Fire", quantidade: 400, imagem: "https://wiki.pokexgames.com/images/e/e5/EssenceofFire.png" },
      { nome: "Pure Grass", quantidade: 400, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "school-chair",
    nome: "School Chair",
    imagem: "https://wiki.pokexgames.com/images/4/42/School_Chair.png",
    tipo: "móvel", rank: "E", skill: 12, isBerrie: false,
    recursos: [
      { nome: "Wooden Chair", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/8/87/Wooden_Chair.png" },
      { nome: "Straw", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/5/55/Straw.png" }
    ]
  },
  {
    id: "empty-vase",
    nome: "Empty Vase",
    imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png",
    tipo: "decoração", rank: "E", skill: 10, isBerrie: false,
    recursos: [
      { nome: "Earth Ball", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/8/8d/Earth_Ball.png" },
      { nome: "Stone Orb", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png" }
    ]
  },
  {
    id: "exotic-flower",
    nome: "Exotic Flower",
    imagem: "https://wiki.pokexgames.com/images/1/1e/Exotic_Flower.png",
    tipo: "flor", rank: "E", skill: 0, isBerrie: false,
    recursos: [
      { nome: "Seed", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Pure Grass", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "indoor-plant-e",
    nome: "Indoor Plant",
    imagem: "https://wiki.pokexgames.com/images/3/33/Indoor_Plant.png",
    tipo: "planta", rank: "E", skill: 6, isBerrie: false,
    recursos: [
      { nome: "Leaves", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Pure Grass", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "classic-plant",
    nome: "Classic Plant",
    imagem: "https://wiki.pokexgames.com/images/d/d9/Classic_Plant.png",
    tipo: "planta", rank: "E", skill: 14, isBerrie: false,
    recursos: [
      { nome: "Empty Vase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png" },
      { nome: "Leaves", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Pure Grass", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "workshop-d",
    nome: "Workshop D",
    imagem: "https://wiki.pokexgames.com/images/7/79/Workshop_D_Professor.png",
    tipo: "workshop", rank: "E", skill: 20, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },
  {
    id: "workshop-d-portatil",
    nome: "Workshop D (Portátil)",
    imagem: "https://wiki.pokexgames.com/images/1/1a/Workshop_D_Professor_%28Port%C3%A1til%29.png",
    tipo: "workshop", rank: "E", skill: 20, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },

  // ===== RANK D =====
  {
    id: "condensed-grass",
    nome: "Condensed Grass",
    imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png",
    tipo: "material", rank: "D", skill: 20, isBerrie: false,
    recursos: [
      { nome: "Pure Grass", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "nature-energy",
    nome: "Nature Energy",
    imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png",
    tipo: "energia", rank: "D", skill: 20, isBerrie: false,
    recursos: [
      { nome: "Pure Grass", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "great-potion",
    nome: "Great Potion",
    imagem: "https://wiki.pokexgames.com/images/4/4b/Great_Poiton.png",
    tipo: "poção", rank: "D", skill: 20, isBerrie: false,
    recursos: [
      { nome: "Water Gem", quantidade: 9, imagem: "https://wiki.pokexgames.com/images/7/75/Watergem.png" },
      { nome: "Bottle of Poison", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/b/b1/BottleOfPoison.png" },
      { nome: "Pure Grass", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "medicine",
    nome: "Medicine",
    imagem: "https://wiki.pokexgames.com/images/2/27/Medicine.png",
    tipo: "medicamento", rank: "D", skill: 22, isBerrie: false,
    unidadesPorReceita: 5,
    recursos: [
      { nome: "Water Gem", quantidade: 9, imagem: "https://wiki.pokexgames.com/images/7/75/Watergem.png" },
      { nome: "Rubber Ball", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/8/81/Rubber_Ball.png" },
      { nome: "Pure Grass", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "honey-pot",
    nome: "Honey Pot",
    imagem: "https://wiki.pokexgames.com/images/4/46/Honey_Pot.png",
    tipo: "item", rank: "D", skill: 25, isBerrie: false,
    recursos: [
      { nome: "Pot Of Moss Bug", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png" },
      { nome: "Pure Grass", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "cheri-seed",
    nome: "Cheri Seed",
    imagem: "https://wiki.pokexgames.com/images/f/f4/Cheri_Seed.png",
    tipo: "semente", rank: "D", skill: 30, isBerrie: true,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Electric Box", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "nomel-seed",
    nome: "Nomel Seed",
    imagem: "https://wiki.pokexgames.com/images/f/f6/Nomel_Seed.png",
    tipo: "semente", rank: "D", skill: 30, isBerrie: true,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Bone", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/2c/Bone.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "chesto-seed",
    nome: "Chesto Seed",
    imagem: "https://wiki.pokexgames.com/images/e/e6/Chesto_Seed.png",
    tipo: "semente", rank: "D", skill: 30, isBerrie: true,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Traces of Ghost", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "persim-seed",
    nome: "Persim Seed",
    imagem: "https://wiki.pokexgames.com/images/1/1a/Persim_Seed.png",
    tipo: "semente", rank: "D", skill: 30, isBerrie: true,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Future Orb", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "papers",
    nome: "Papers",
    imagem: "https://wiki.pokexgames.com/images/1/13/Papers.png",
    tipo: "material", rank: "D", skill: 26, isBerrie: false,
    recursos: [
      { nome: "Plant Tail", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/9/92/Plant_Tail.png" },
      { nome: "Pure Grass", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "scissors",
    nome: "Scissors",
    imagem: "https://wiki.pokexgames.com/images/9/92/Scissors.png",
    tipo: "ferramenta", rank: "D", skill: 22, isBerrie: false,
    recursos: [
      { nome: "Piece of Steel", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/c/c1/PieceOfSteel.png" },
      { nome: "Pure Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "school-desk",
    nome: "School Desk",
    imagem: "https://wiki.pokexgames.com/images/5/5c/School_Desk1.png",
    tipo: "móvel", rank: "D", skill: 32, isBerrie: false,
    recursos: [
      { nome: "Strong Wooden Table", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/eb/Strong_Wooden_Table.png" },
      { nome: "Jungle Counter", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/a/a6/Jungle_Balcony.png" }
    ]
  },
  {
    id: "blood-herb",
    nome: "Blood Herb",
    imagem: "https://wiki.pokexgames.com/images/d/de/Blood_Herb.png",
    tipo: "erva", rank: "D", skill: 26, isBerrie: false,
    recursos: [
      { nome: "Leaves", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Seed", quantidade: 26, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Pure Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "glacial-herb",
    nome: "Glacial Herb",
    imagem: "https://wiki.pokexgames.com/images/7/75/Glacial_Herb.png",
    tipo: "erva", rank: "D", skill: 26, isBerrie: false,
    recursos: [
      { nome: "Leaves", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Seed", quantidade: 260, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Pure Grass", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "venom-herb",
    nome: "Venom Herb",
    imagem: "https://wiki.pokexgames.com/images/c/c6/Venom_Herb.png",
    tipo: "erva", rank: "D", skill: 26, isBerrie: false,
    recursos: [
      { nome: "Leaves", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Seed", quantidade: 260, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Pure Grass", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "nature-herb",
    nome: "Nature Herb",
    imagem: "https://wiki.pokexgames.com/images/d/d8/Nature_Herb.png",
    tipo: "erva", rank: "D", skill: 26, isBerrie: false,
    recursos: [
      { nome: "Leaves", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Seed", quantidade: 260, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Pure Grass", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "honey-herb",
    nome: "Honey Herb",
    imagem: "https://wiki.pokexgames.com/images/e/e0/Honey_Herb.png",
    tipo: "erva", rank: "D", skill: 26, isBerrie: false,
    recursos: [
      { nome: "Leaves", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Seed", quantidade: 260, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Pure Grass", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "snow-herb",
    nome: "Snow Herb",
    imagem: "https://wiki.pokexgames.com/images/e/ee/Snow_Herb.png",
    tipo: "erva", rank: "D", skill: 26, isBerrie: false,
    recursos: [
      { nome: "Leaves", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Seed", quantidade: 260, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Pure Grass", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "exotic-plant-d",
    nome: "Exotic Plant",
    imagem: "https://wiki.pokexgames.com/images/c/c6/Exotic_Plant.png",
    tipo: "planta", rank: "D", skill: 32, isBerrie: false,
    recursos: [
      { nome: "Empty Vase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png" },
      { nome: "Exotic Flower", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/1/1e/Exotic_Flower.png" },
      { nome: "Pure Grass", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "pink-rose",
    nome: "Pink Rose",
    imagem: "https://wiki.pokexgames.com/images/2/2a/Pink_Rose.png",
    tipo: "flor", rank: "D", skill: 24, isBerrie: false,
    recursos: [
      { nome: "Seed", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Ghost Essence", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/d/dd/GhostEssence.png" },
      { nome: "Pure Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "red-rose",
    nome: "Red Rose",
    imagem: "https://wiki.pokexgames.com/images/d/d5/Red_Rose.png",
    tipo: "flor", rank: "D", skill: 24, isBerrie: false,
    recursos: [
      { nome: "Seed", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/2/2e/Seed.png" },
      { nome: "Essence of Fire", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/e/e5/EssenceofFire.png" },
      { nome: "Pure Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/bc/Pure_Grass.png" }
    ]
  },
  {
    id: "sandslash-bush",
    nome: "Sandslash Bush",
    imagem: "https://wiki.pokexgames.com/images/e/e9/Sandslash_Bush.png",
    tipo: "arbusto", rank: "D", skill: 29, isBerrie: false,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Armadillo Claw", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/f/f6/Armadillo_Claw.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "primeape-bush",
    nome: "Primeape Bush",
    imagem: "https://wiki.pokexgames.com/images/a/a9/Primeape_Bush.png",
    tipo: "arbusto", rank: "D", skill: 29, isBerrie: false,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Iron Bracelet", quantidade: 11, imagem: "https://wiki.pokexgames.com/images/4/40/Iron_Bracelet.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "nidoking-bush",
    nome: "Nidoking Bush",
    imagem: "https://wiki.pokexgames.com/images/b/b0/Nidoking_Bush.png",
    tipo: "arbusto", rank: "D", skill: 29, isBerrie: false,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Male Ear", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/8/84/Male_Ear.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "golem-bush",
    nome: "Golem Bush",
    imagem: "https://wiki.pokexgames.com/images/c/ca/Golem_Bush.png",
    tipo: "arbusto", rank: "D", skill: 29, isBerrie: false,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Strange Rock", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "flareon-bush",
    nome: "Flareon Bush",
    imagem: "https://wiki.pokexgames.com/images/9/92/Flareon_Bush.png",
    tipo: "arbusto", rank: "D", skill: 29, isBerrie: false,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Fire Tail", quantidade: 9, imagem: "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "chansey-bush",
    nome: "Chansey Bush",
    imagem: "https://wiki.pokexgames.com/images/8/87/Chansey_Bush.png",
    tipo: "arbusto", rank: "D", skill: 29, isBerrie: false,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Pokémon Egg", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/b/bf/Pokemon_Egg.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "red-student-monitor",
    nome: "Red Student Monitor",
    imagem: "https://wiki.pokexgames.com/images/9/9c/Red_Student_Monitor.png",
    tipo: "item", rank: "D", skill: 40, isBerrie: false,
    recursos: [
      { nome: "Red Scale", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/1/19/Red_Scale.png" },
      { nome: "Steel Wing", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/e/e5/Steel_Wing.png" },
      { nome: "Nature Energy", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "pokedex-chip-2",
    nome: "Pokedex CHIP 2.0",
    imagem: "https://wiki.pokexgames.com/images/5/5d/Pok%C3%A9dex-chip-2.0.png",
    tipo: "item", rank: "D", skill: 38, isBerrie: false,
    recursos: [
      { nome: "Magnet", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/6/6d/Magnet1.png" },
      { nome: "Screw", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/5/59/Screw.png" },
      { nome: "Nature Energy", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "workshop-c",
    nome: "Workshop C",
    imagem: "https://wiki.pokexgames.com/images/d/db/Workshop_C_Professor.png",
    tipo: "workshop", rank: "D", skill: 40, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },
  {
    id: "workshop-c-portatil",
    nome: "Workshop C (Portátil)",
    imagem: "https://wiki.pokexgames.com/images/f/f6/Workshop_C_Professor_%28Port%C3%A1til%29.png",
    tipo: "workshop", rank: "D", skill: 40, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },

  // ===== RANK C =====
  {
    id: "ultra-potion",
    nome: "Ultra Potion",
    imagem: "https://wiki.pokexgames.com/images/9/9e/Ultra_potion.png",
    tipo: "poção", rank: "C", skill: 40, isBerrie: false,
    recursos: [
      { nome: "Water Gem", quantidade: 250, imagem: "https://wiki.pokexgames.com/images/7/75/Watergem.png" },
      { nome: "Enchanted Gem", quantidade: 250, imagem: "https://wiki.pokexgames.com/images/4/4c/EnchantedGem.png" },
      { nome: "Water Pendant", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/2/27/WaterPendant.png" },
      { nome: "Condensed Grass", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" },
      { nome: "Red Scale", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/1/19/Red_Scale.png" }
    ]
  },
  {
    id: "major-seed-bag",
    nome: "Major Seed Bag",
    imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png",
    tipo: "bolsa", rank: "C", skill: 40, isBerrie: false,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 18, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Leaves", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Bag of Pollen", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/b/bc/BagOfPollem.png" }
    ]
  },
  {
    id: "old-beard",
    nome: "Old Beard",
    imagem: "https://wiki.pokexgames.com/images/0/0a/Old_Beard.png",
    tipo: "item", rank: "C", skill: 44, isBerrie: false,
    recursos: [
      { nome: "Plant Foot", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/28/Plant_Foot.png" },
      { nome: "Leaves", quantidade: 70, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Condensed Grass", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "charla-flower",
    nome: "Charla Flower",
    imagem: "https://wiki.pokexgames.com/images/4/42/Beautiful_Flower.png",
    tipo: "flor", rank: "C", skill: 42, isBerrie: false,
    recursos: [
      { nome: "Fire Tail", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/2/22/Fire_Tail.png" },
      { nome: "Rawst Seed", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/3b/Rawst_Seed.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "aspear-seed",
    nome: "Aspear Seed",
    imagem: "https://wiki.pokexgames.com/images/4/47/Berrie_18.png",
    tipo: "semente", rank: "C", skill: 50, isBerrie: true,
    recursos: [
      { nome: "Minor Seed Bag", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Ice Orb", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/f/f6/IceOrb.png" },
      { nome: "Condensed Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "pokedex-1st-gen",
    nome: "Pokedex (1st Gen)",
    imagem: "https://wiki.pokexgames.com/images/4/49/Pok%C3%A9dex_%281st_Gen%29.png",
    tipo: "item", rank: "C", skill: 48, isBerrie: false,
    recursos: [
      { nome: "Fox Tail", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/7/71/Fox_Tail.png" },
      { nome: "Strange Flower", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/e/ec/Strange_Flower.png" },
      { nome: "Giant Ruby", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/f/fe/Giant_Ruby.png" },
      { nome: "Onix Tail", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/7/78/Onix_Tail.png" },
      { nome: "Nature Energy", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "pokedex-2nd-gen",
    nome: "Pokedex (2nd Gen)",
    imagem: "https://wiki.pokexgames.com/images/0/06/Pok%C3%A9dex_%282nd_Gen%29.png",
    tipo: "item", rank: "C", skill: 48, isBerrie: false,
    recursos: [
      { nome: "Squirrel Tail", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/6/60/Squirrel_Tail.png" },
      { nome: "Miss Trace", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png" },
      { nome: "Streak Tail", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/3/37/Streak_Tail.png" },
      { nome: "Nature Energy", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "document",
    nome: "Document",
    imagem: "https://wiki.pokexgames.com/images/5/5e/Document.png",
    tipo: "material", rank: "C", skill: 42, isBerrie: false,
    recursos: [
      { nome: "Greens", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/5/54/Greens.png" },
      { nome: "Condensed Grass", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "home-picture",
    nome: "Home Picture",
    imagem: "https://wiki.pokexgames.com/images/2/2a/Home_Picture.png",
    tipo: "decoração", rank: "C", skill: 44, isBerrie: false,
    recursos: [
      { nome: "Blue Vines", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/9/96/Blue_Vines.png" },
      { nome: "Insect Claw", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png" },
      { nome: "Condensed Grass", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "school-dresser",
    nome: "School Dresser",
    imagem: "https://wiki.pokexgames.com/images/d/dc/School_Dresser.png",
    tipo: "móvel", rank: "C", skill: 46, isBerrie: false,
    recursos: [
      { nome: "Wooden Pokeball Table", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/9/9e/Wooden_Pok%C3%A9_Ball_Table.png" },
      { nome: "Colored Feather", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png" }
    ]
  },
  {
    id: "cerulean-flowers",
    nome: "Cerulean Flowers",
    imagem: "https://wiki.pokexgames.com/images/e/e6/Cerulean_Flowers.png",
    tipo: "flor", rank: "C", skill: 52, isBerrie: false,
    recursos: [
      { nome: "Empty Vase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png" },
      { nome: "Minor Seed Bag", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Squirtle Hull", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png" },
      { nome: "Condensed Grass", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "bonsai-tree",
    nome: "Bonsai Tree",
    imagem: "https://wiki.pokexgames.com/images/b/b4/Bonsai_Tree.png",
    tipo: "planta", rank: "C", skill: 48, isBerrie: false,
    recursos: [
      { nome: "Empty Vase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png" },
      { nome: "Minor Seed Bag", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/2/25/Minor_Seed_Bag.png" },
      { nome: "Scissors", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/9/92/Scissors.png" },
      { nome: "Condensed Grass", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "bonsai-exotic-tree-c",
    nome: "Bonsai Exotic Tree",
    imagem: "https://wiki.pokexgames.com/images/f/f0/Bonsai_Exotic_Tree.png",
    tipo: "planta", rank: "C", skill: 54, isBerrie: false,
    recursos: [
      { nome: "Bonsai Tree", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/b/b4/Bonsai_Tree.png" },
      { nome: "Male Ear", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/8/84/Male_Ear.png" },
      { nome: "Condensed Grass", quantidade: 16, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "venusaur-bush",
    nome: "Venusaur Bush",
    imagem: "https://wiki.pokexgames.com/images/c/c6/Venusaur_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Bulb", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/b3/Bulb.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "charizard-bush",
    nome: "Charizard Bush",
    imagem: "https://wiki.pokexgames.com/images/c/c4/Charizard_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Dragon Tooth", quantidade: 9, imagem: "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "blastoise-bush",
    nome: "Blastoise Bush",
    imagem: "https://wiki.pokexgames.com/images/9/94/Blastoise_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Squirtle Hull", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/9/99/Squirtle_Hull.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "swellow-bush",
    nome: "Swellow Bush",
    imagem: "https://wiki.pokexgames.com/images/3/3f/Swellow_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Crimson Feather", quantidade: 44, imagem: "https://wiki.pokexgames.com/images/d/de/Crimson_Feather.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "scyther-bush",
    nome: "Scyther Bush",
    imagem: "https://wiki.pokexgames.com/images/2/2d/Scyther_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Scythe", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/2f/Scythe1.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "raichu-bush",
    nome: "Raichu Bush",
    imagem: "https://wiki.pokexgames.com/images/f/fc/Raichu_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Electric Rat Tail", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "pidgeot-bush",
    nome: "Pidgeot Bush",
    imagem: "https://wiki.pokexgames.com/images/4/49/Pidgeot_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Colored Feather", quantidade: 31, imagem: "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "machamp-bush",
    nome: "Machamp Bush",
    imagem: "https://wiki.pokexgames.com/images/4/40/Machamp_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Belt of Champion", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "lucario-bush",
    nome: "Lucario Bush",
    imagem: "https://wiki.pokexgames.com/images/1/1b/Lucario_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Samurai Hair", quantidade: 52, imagem: "https://wiki.pokexgames.com/images/f/ff/Samurai_Hair.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "jynx-bush",
    nome: "Jynx Bush",
    imagem: "https://wiki.pokexgames.com/images/9/96/Jynx_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Ice Bra", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "gengar-bush",
    nome: "Gengar Bush",
    imagem: "https://wiki.pokexgames.com/images/4/42/Gengar_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Traces of Ghost", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/3/3c/Traces_Of_Ghost.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "alakazam-bush",
    nome: "Alakazam Bush",
    imagem: "https://wiki.pokexgames.com/images/d/d5/Alakazam_Bush.png",
    tipo: "arbusto", rank: "C", skill: 51, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Psychic Spoon", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png" },
      { nome: "Condensed Grass", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "pokedex-chip-3",
    nome: "Pokedex CHIP 3.0",
    imagem: "https://wiki.pokexgames.com/images/5/53/Pok%C3%A9dex-chip-3.0.png",
    tipo: "item", rank: "C", skill: 57, isBerrie: false,
    recursos: [
      { nome: "Pokedex CHIP 2.0", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/5d/Pok%C3%A9dex-chip-2.0.png" },
      { nome: "Smartphone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/3d/Smartphone.png" },
      { nome: "Steelix Tail", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/5/5c/Steelix_Tail.png" },
      { nome: "Nature Energy", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "workshop-b",
    nome: "Workshop B",
    imagem: "https://wiki.pokexgames.com/images/8/86/Workshop_B_Professor.png",
    tipo: "workshop", rank: "C", skill: 60, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },
  {
    id: "workshop-b-portatil",
    nome: "Workshop B (Portátil)",
    imagem: "https://wiki.pokexgames.com/images/c/c6/Workshop_B_Professor_%28Port%C3%A1til%29.png",
    tipo: "workshop", rank: "C", skill: 60, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },

  // ===== RANK B =====
  {
    id: "hyper-potion",
    nome: "Hyper Potion",
    imagem: "https://wiki.pokexgames.com/images/8/88/Hyper_Poiton.png",
    tipo: "poção", rank: "B", skill: 60, isBerrie: false,
    recursos: [
      { nome: "Water Gem", quantidade: 250, imagem: "https://wiki.pokexgames.com/images/c/c0/Water_gem.png" },
      { nome: "Essence of Fire", quantidade: 250, imagem: "https://wiki.pokexgames.com/images/9/94/Essence_of_fire.png" },
      { nome: "Pot of Lava", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/2/21/PotOfLava.png" },
      { nome: "Condensed Grass", quantidade: 13, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "revive",
    nome: "Revive",
    imagem: "https://wiki.pokexgames.com/images/1/13/Revive.png",
    tipo: "item", rank: "B", skill: 62, isBerrie: false,
    recursos: [
      { nome: "Great Petal", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/8/86/Great_Petal.png" },
      { nome: "Future Orb", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png" },
      { nome: "Pecha Seed", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/f/ff/Pecha_Seed.png" },
      { nome: "Rawst Seed", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/3/3b/Rawst_Seed.png" },
      { nome: "Condensed Grass", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "chilan-seed",
    nome: "Chilan Seed",
    imagem: "https://wiki.pokexgames.com/images/3/3f/Chilan_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Cow Tail", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/6/60/Cow_Tail.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "babiri-seed",
    nome: "Babiri Seed",
    imagem: "https://wiki.pokexgames.com/images/e/e7/Babiri_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Talon", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/6c/Talon4.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "colbur-seed",
    nome: "Colbur Seed",
    imagem: "https://wiki.pokexgames.com/images/8/8c/Colbur_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Hyena Tail", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/2/2b/Hyena_tail.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "roseli-seed",
    nome: "Roseli Seed",
    imagem: "https://wiki.pokexgames.com/images/d/d3/Roseli_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Cure Flower", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/a/ac/Cure_Flower.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "haban-seed",
    nome: "Haban Seed",
    imagem: "https://wiki.pokexgames.com/images/b/b3/Haban_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Dragon Tail", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "kasib-seed",
    nome: "Kasib Seed",
    imagem: "https://wiki.pokexgames.com/images/8/80/Kasib_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Miss Trace", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/0/0e/Miss_Trace.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "charti-seed",
    nome: "Charti Seed",
    imagem: "https://wiki.pokexgames.com/images/1/11/Charti_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Basalt Rock", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/4/42/Basalt_Rock.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "tanga-seed",
    nome: "Tanga Seed",
    imagem: "https://wiki.pokexgames.com/images/f/f0/Tanga_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Scythe", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/2f/Scythe1.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "payapa-seed",
    nome: "Payapa Seed",
    imagem: "https://wiki.pokexgames.com/images/e/e4/Payapa_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Strange Wing", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/9/9b/Strange_Wing.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "coba-seed",
    nome: "Coba Seed",
    imagem: "https://wiki.pokexgames.com/images/2/27/Coba_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Colored Feather", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "shuca-seed",
    nome: "Shuca Seed",
    imagem: "https://wiki.pokexgames.com/images/e/e3/Shuca_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Armadillo Claw", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/f/f6/Armadillo_Claw.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "kebia-seed",
    nome: "Kebia Seed",
    imagem: "https://wiki.pokexgames.com/images/0/03/Kebia_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Small Tail", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/2/2c/Small_Tail.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "chople-seed",
    nome: "Chople Seed",
    imagem: "https://wiki.pokexgames.com/images/b/b4/Chople_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Belt of Champion", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "yache-seed",
    nome: "Yache Seed",
    imagem: "https://wiki.pokexgames.com/images/f/f1/Yache_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Gift Bags", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/5/5a/Gift_Bag.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "rindo-seed",
    nome: "Rindo Seed",
    imagem: "https://wiki.pokexgames.com/images/9/9a/Rindo_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Greens", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/5/54/Greens.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "wacan-seed",
    nome: "Wacan Seed",
    imagem: "https://wiki.pokexgames.com/images/9/90/Wacan_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Sheep Wool", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "passho-seed",
    nome: "Passho Seed",
    imagem: "https://wiki.pokexgames.com/images/5/58/Passho_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Strange Thing", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "occa-seed",
    nome: "Occa Seed",
    imagem: "https://wiki.pokexgames.com/images/9/9f/Occa_Seed.png",
    tipo: "semente", rank: "B", skill: 70, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Strange Bone", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/a/af/Strange_Bone.png" },
      { nome: "Condensed Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "pokedex-3rd-gen",
    nome: "Pokedex (3rd Gen)",
    imagem: "https://wiki.pokexgames.com/images/8/80/Pokedex_%283rd_Gen%29.png",
    tipo: "item", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Sharp Leaves", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/9/9e/Sharp_Leaves.png" },
      { nome: "Eruption Ears", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/f/f0/Eruption_Ears.png" },
      { nome: "Mediling", quantidade: 35, imagem: "https://wiki.pokexgames.com/images/7/75/Mediling.png" },
      { nome: "Doll Star", quantidade: 35, imagem: "https://wiki.pokexgames.com/images/1/19/Doll_Star.png" },
      { nome: "Nature Energy", quantidade: 120, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "pokedex-4th-gen",
    nome: "Pokedex (4th Gen)",
    imagem: "https://wiki.pokexgames.com/images/1/1d/Pokedex_%284th_Gen%29.png",
    tipo: "item", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Tech Ball", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png" },
      { nome: "Ghost Skull", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/c/c0/Ghost_Skull.png" },
      { nome: "Nature Energy", quantidade: 120, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "blank-book",
    nome: "Blank Book",
    imagem: "https://wiki.pokexgames.com/images/4/4e/Blank_Book.png",
    tipo: "material", rank: "B", skill: 64, isBerrie: false,
    recursos: [
      { nome: "Document", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/5e/Document.png" },
      { nome: "Home Picture", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/2a/Home_Picture.png" },
      { nome: "Big Seed", quantidade: 16, imagem: "https://wiki.pokexgames.com/images/d/d8/Big_Seed.png" },
      { nome: "Condensed Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "lesson-board",
    nome: "Lesson Board",
    imagem: "https://wiki.pokexgames.com/images/6/6c/Lesson_Board.png",
    tipo: "decoração", rank: "B", skill: 67, isBerrie: false,
    recursos: [
      { nome: "Document", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/5e/Document.png" },
      { nome: "Farfetch'D Stick", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/0f/Farfetch%27d_Stick.png" },
      { nome: "Strange Thing", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/7/7f/Strange_Thing.png" },
      { nome: "Martial Arts Scroll", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png" },
      { nome: "Condensed Grass", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "wall-plate",
    nome: "Wall Plate",
    imagem: "https://wiki.pokexgames.com/images/f/f4/Wall_Plate.png",
    tipo: "decoração", rank: "B", skill: 64, isBerrie: false,
    recursos: [
      { nome: "Document", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/5e/Document.png" },
      { nome: "Farfetch'D Stick", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/0f/Farfetch%27d_Stick.png" },
      { nome: "Owl Feather", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/c/c9/Owl_Feather.png" },
      { nome: "Condensed Grass", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "wall-bookcase",
    nome: "Wall Bookcase",
    imagem: "https://wiki.pokexgames.com/images/1/11/Wall_Bookcase.png",
    tipo: "móvel", rank: "B", skill: 66, isBerrie: false,
    recursos: [
      { nome: "Blank Book", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4e/Blank_Book.png" },
      { nome: "Insect Claw", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png" },
      { nome: "Condensed Grass", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "bookcase-b",
    nome: "Bookcase",
    imagem: "https://wiki.pokexgames.com/images/5/52/Bookcase.png",
    tipo: "móvel", rank: "B", skill: 71, isBerrie: false,
    recursos: [
      { nome: "Blank Book", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4e/Blank_Book.png" },
      { nome: "Wooden Stand", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/60/Wooden_Stand.png" }
    ]
  },
  {
    id: "desk",
    nome: "Desk",
    imagem: "https://wiki.pokexgames.com/images/a/a5/Desk1.png",
    tipo: "móvel", rank: "B", skill: 77, isBerrie: false,
    recursos: [
      { nome: "Bookcase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/thumb/5/52/Bookcase.png/50px-Bookcase.png" },
      { nome: "Classic Bookcase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/thumb/4/4a/Classic_Bookcase.png/50px-Classic_Bookcase.png" }
    ]
  },
  {
    id: "shamouti-plant",
    nome: "Shamouti Plant",
    imagem: "https://wiki.pokexgames.com/images/7/77/Shamouti_Plant.png",
    tipo: "planta", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Empty Vase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png" },
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Bull Tail", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/1/1c/Bull_Tail.png" },
      { nome: "Greens", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/5/54/Greens.png" },
      { nome: "Condensed Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "shamouti-big-plant",
    nome: "Shamouti Big Plant",
    imagem: "https://wiki.pokexgames.com/images/2/2b/Shamouti_Big_Plant.png",
    tipo: "planta", rank: "B", skill: 75, isBerrie: false,
    recursos: [
      { nome: "Empty Vase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png" },
      { nome: "Shamouti Plant", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/thumb/7/77/Shamouti_Plant.png/40px-Shamouti_Plant.png" },
      { nome: "Owl Feather", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/c/c9/Owl_Feather.png" },
      { nome: "Strange Flower", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/e/ec/Strange_Flower.png" },
      { nome: "Great Petal", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/8/86/Great_Petal.png" },
      { nome: "Condensed Grass", quantidade: 120, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "steelix-bush",
    nome: "Steelix Bush",
    imagem: "https://wiki.pokexgames.com/images/d/d5/Steelix_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Steelix Tail", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/5/5c/Steelix_Tail.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "scizor-bush",
    nome: "Scizor Bush",
    imagem: "https://wiki.pokexgames.com/images/e/ef/Scizor_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Scizor Claw", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "magmar-bush",
    nome: "Magmar Bush",
    imagem: "https://wiki.pokexgames.com/images/b/bb/Magmar_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Magma Foot", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "electabuzz-bush",
    nome: "Electabuzz Bush",
    imagem: "https://wiki.pokexgames.com/images/1/1a/Electabuzz_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Electric Tail", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "lapras-bush",
    nome: "Lapras Bush",
    imagem: "https://wiki.pokexgames.com/images/b/b6/Lapras_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Ski Poles", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/8/8b/Layer0.png" },
      { nome: "Snow Skis", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/4/48/Layer1.png" },
      { nome: "Goggles", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/3/3b/Layer3.png" },
      { nome: "Giant Fin", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/6/62/Giant_Fin.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "heracross-bush",
    nome: "Heracross Bush",
    imagem: "https://wiki.pokexgames.com/images/6/6f/Heracross_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Insect Claw", quantidade: 83, imagem: "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "gyarados-bush",
    nome: "Gyarados Bush",
    imagem: "https://wiki.pokexgames.com/images/f/f7/Gyarados_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Gyarados Tail", quantidade: 18, imagem: "https://wiki.pokexgames.com/images/e/e3/Gyarados_Tail.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "dragonite-bush",
    nome: "Dragonite Bush",
    imagem: "https://wiki.pokexgames.com/images/8/88/Dragonite_Bush.png",
    tipo: "arbusto", rank: "B", skill: 68, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Dragon Tail", quantidade: 33, imagem: "https://wiki.pokexgames.com/images/8/88/Dragon_Tail.png" },
      { nome: "Condensed Grass", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "mega-scizor-bush",
    nome: "Mega Scizor Bush",
    imagem: "https://wiki.pokexgames.com/images/d/dd/Mega_Scizor_Bush.png",
    tipo: "arbusto", rank: "B", skill: 77, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Scizor Claw", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/0/05/Scizor_Claw.png" },
      { nome: "Cocoon Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/28/Cocoon_stone.gif" },
      { nome: "Condensed Grass", quantidade: 220, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "mega-lucario-bush",
    nome: "Mega Lucario Bush",
    imagem: "https://wiki.pokexgames.com/images/f/fd/Mega_Lucario_Bush.png",
    tipo: "arbusto", rank: "B", skill: 77, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Martial Arts Scroll", quantidade: 88, imagem: "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png" },
      { nome: "Punch Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/da/3mDejdt.png" },
      { nome: "Condensed Grass", quantidade: 220, imagem: "https://wiki.pokexgames.com/images/c/ce/Condensed_Grass.png" }
    ]
  },
  {
    id: "tron-student-monitor",
    nome: "Tron Student Monitor",
    imagem: "https://wiki.pokexgames.com/images/c/ce/Tron_Student_Monitor.png",
    tipo: "item", rank: "B", skill: 78, isBerrie: false,
    recursos: [
      { nome: "Tech Ball", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png" },
      { nome: "Steel Wing", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/e/e5/Steel_Wing.png" },
      { nome: "Nature Energy", quantidade: 400, imagem: "https://wiki.pokexgames.com/images/b/bc/Nature_Energy.png" }
    ]
  },
  {
    id: "workshop-a",
    nome: "Workshop A",
    imagem: "https://wiki.pokexgames.com/images/f/fd/Workshop_A_Professor.png",
    tipo: "workshop", rank: "B", skill: 80, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },
  {
    id: "workshop-a-portatil",
    nome: "Workshop A (Portátil)",
    imagem: "https://wiki.pokexgames.com/images/1/12/Workshop_A_Professor_%28Port%C3%A1til%29.png",
    tipo: "workshop", rank: "B", skill: 80, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },

  // ===== RANK A =====
  {
    id: "condensed-strong-grass",
    nome: "Condensed Strong Grass",
    imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png",
    tipo: "item", rank: "A", skill: 80, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "strong-nature-energy",
    nome: "Strong Nature Energy",
    imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png",
    tipo: "item", rank: "A", skill: 80, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "pure-strong-grass",
    nome: "Pure Strong Grass (100x)",
    imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "High Tech CHIP", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/a/a2/Hightechchip.png" }
    ]
  },
  {
    id: "ultimate-potion",
    nome: "Ultimate Potion (100x)",
    imagem: "https://wiki.pokexgames.com/images/8/84/Ultimate_Potion.png",
    tipo: "poção", rank: "A", skill: 80, isBerrie: false,
    recursos: [
      { nome: "Psychic Spoon", quantidade: 17, imagem: "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png" },
      { nome: "Future Orb", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png" },
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "restore-potion",
    nome: "Restore Potion (100x)",
    imagem: "https://wiki.pokexgames.com/images/8/81/Restore_Potion.png",
    tipo: "poção", rank: "A", skill: 80, isBerrie: false,
    recursos: [
      { nome: "Snake Tail", quantidade: 13, imagem: "https://wiki.pokexgames.com/images/6/6c/Snake_Tail.png" },
      { nome: "Seahorse Tail", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/9/92/Seahorse_Tail.png" },
      { nome: "Crimson Feather", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/d/de/Crimson_Feather.png" },
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "max-revive",
    nome: "Max Revive (100x)",
    imagem: "https://wiki.pokexgames.com/images/6/69/Max_revive.png",
    tipo: "poção", rank: "A", skill: 80, isBerrie: false,
    recursos: [
      { nome: "Earth Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/0f/Earth-stone.gif" },
      { nome: "Water Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/8/80/Water-stone.gif" },
      { nome: "Condensed Strong Grass", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" },
      { nome: "Pure Strong Grass", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "strong-green-gem",
    nome: "Strong Green Gem (10x)",
    imagem: "https://wiki.pokexgames.com/images/1/18/Strong_Green_Gem.png",
    tipo: "gema", rank: "A", skill: 82, isBerrie: false,
    recursos: [
      { nome: "Glacial Herb", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/7/75/Glacial_Herb.png" },
      { nome: "Nature Herb", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/d/d8/Nature_Herb.png" },
      { nome: "Water Pendant", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/2/27/WaterPendant.png" },
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "segway",
    nome: "Segway",
    imagem: "https://wiki.pokexgames.com/images/1/15/Segway.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Metal Hull", quantidade: 250, imagem: "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png" },
      { nome: "Metal Stone", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/b/b9/MetalStone.png" },
      { nome: "Topaz", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/6/6d/Topaz1.png" },
      { nome: "Fire Horse Foot", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/3/38/Fire_Horse_Foot.png" },
      { nome: "Strange Spike", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/2/2b/Strange_Spike.png" },
      { nome: "Sheep Wool", quantidade: 250, imagem: "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png" },
      { nome: "Giant Fin", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/6/62/Giant_Fin.png" },
      { nome: "Snake Tail", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/6/6c/Snake_Tail.png" },
      { nome: "Condensed Strong Grass", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "soul-source",
    nome: "Soul Source",
    imagem: "https://wiki.pokexgames.com/images/1/1c/Soul_Source.png",
    tipo: "item", rank: "A", skill: 93, isBerrie: false,
    recursos: [
      { nome: "Green Piece of Coral", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/a/a2/Green_Piece_Of_Coral.png" },
      { nome: "Pink Small Tail", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/05/Pink_Small_Tail.png" },
      { nome: "Blue Gem Star", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/5/5c/Blue_Gem_Star.png" },
      { nome: "Blue Fish Fin", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/5/52/Blue_Fish_Fin.png" },
      { nome: "Big Crystal", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png" },
      { nome: "Mystic Star", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png" },
      { nome: "Condensed Strong Grass", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "lum-seed",
    nome: "Lum Seed",
    imagem: "https://wiki.pokexgames.com/images/4/43/Lum_Seed.png",
    tipo: "semente", rank: "A", skill: 90, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Medicine", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/2/27/Medicine.png" },
      { nome: "Pure Strong Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "sitrus-seed",
    nome: "Sitrus Seed",
    imagem: "https://wiki.pokexgames.com/images/d/d2/Sitrus_Seed.png",
    tipo: "semente", rank: "A", skill: 90, isBerrie: true,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Mushroom", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/8/8c/Mushroom.png" },
      { nome: "Pure Strong Grass", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" }
    ]
  },
  {
    id: "pokedex-5th-gen",
    nome: "Pokedex (5th Gen)",
    imagem: "https://wiki.pokexgames.com/images/9/9a/Pok%C3%A9dex_%285th_Gen%29.png",
    tipo: "item", rank: "A", skill: 91, isBerrie: false,
    recursos: [
      { nome: "Pokedex (1st Gen)", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/49/Pok%C3%A9dex_%281st_Gen%29.png" },
      { nome: "Pokedex (3rd Gen)", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/8/80/Pokedex_%283rd_Gen%29.png" },
      { nome: "Strong Nature Energy", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "pokedex-6th-gen",
    nome: "Pokedex (6th Gen)",
    imagem: "https://wiki.pokexgames.com/images/7/79/Pok%C3%A9dex_%286th_Gen%29.png",
    tipo: "item", rank: "A", skill: 91, isBerrie: false,
    recursos: [
      { nome: "Pokedex (2nd Gen)", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/06/Pok%C3%A9dex_%282nd_Gen%29.png" },
      { nome: "Pokedex (4th Gen)", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/1/1d/Pokedex_%284th_Gen%29.png" },
      { nome: "Strong Nature Energy", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "classic-lesson-board",
    nome: "Classic Lesson Board",
    imagem: "https://wiki.pokexgames.com/images/4/4c/Classic_Lesson_Board.png",
    tipo: "móvel", rank: "A", skill: 87, isBerrie: false,
    recursos: [
      { nome: "Old Beard", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/0/0a/Old_Beard.png" },
      { nome: "Water Plant", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/8/89/Water_Plant.png" },
      { nome: "Lesson Board", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/6c/Lesson_Board.png" },
      { nome: "Condensed Strong Grass", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "classic-wall-bookcase",
    nome: "Classic Wall Bookcase",
    imagem: "https://wiki.pokexgames.com/images/7/77/Classic_Wall_Bookcase.png",
    tipo: "móvel", rank: "A", skill: 86, isBerrie: false,
    recursos: [
      { nome: "Scythe", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/2/2f/Scythe1.png" },
      { nome: "Sharp Leaves", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/9/9e/Sharp_Leaves.png" },
      { nome: "Wall Bookcase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/1/11/Wall_Bookcase.png" },
      { nome: "Condensed Strong Grass", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "writer-desk",
    nome: "Writer Desk",
    imagem: "https://wiki.pokexgames.com/images/b/b5/Writer_Desk1.png",
    tipo: "móvel", rank: "A", skill: 90, isBerrie: false,
    recursos: [
      { nome: "Bookcase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/52/Bookcase.png" },
      { nome: "Blank Book", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4e/Blank_Book.png" },
      { nome: "Classic Bookcase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4a/Classic_Bookcase.png" },
      { nome: "Rustic Counter", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/59/Rustic_Balcony.png" },
      { nome: "Wooden Stand", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/60/Wooden_Stand.png" },
      { nome: "Classic Furniture", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/7/72/Classic_Furniture.png" },
      { nome: "Classic Dresser", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/38/Classic_Dresser.png" },
      { nome: "Ancient Stone", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif" }
    ]
  },
  {
    id: "blue-poke-ball-holder",
    nome: "Blue Poke Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/6/65/Blue_Poke_Ball_Holder.png",
    tipo: "decoração", rank: "A", skill: 91, isBerrie: false,
    recursos: [
      { nome: "Blue Microscope", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/ec/Blue_Microscope.png" },
      { nome: "Blue Globe", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d3/Blue_Globe.png" },
      { nome: "Tech Ball", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/f/f4/Tech_Ball.png" },
      { nome: "Strong Nature Energy", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "red-poke-ball-holder-a",
    nome: "Red Poke Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/7/7f/Red_Poke_Ball_Holder.png",
    tipo: "decoração", rank: "A", skill: 91, isBerrie: false,
    recursos: [
      { nome: "Red Microscope", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/7/7c/Red_Microscope.png" },
      { nome: "Red Globe", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/5d/Red_Globe.png" },
      { nome: "Mini Wings", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/c/c4/Mini_Wings.png" },
      { nome: "Strong Nature Energy", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "green-poke-ball-holder",
    nome: "Green Poke Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/d/df/Green_Poke_Ball_Holder.png",
    tipo: "decoração", rank: "A", skill: 91, isBerrie: false,
    recursos: [
      { nome: "Green Microscope", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/9/9c/Green_Microscope.png" },
      { nome: "Green Globe", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/1/1d/Green_Globe.png" },
      { nome: "Palm Leaves", quantidade: 62, imagem: "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png" },
      { nome: "Strong Nature Energy", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "classic-poke-ball-holder",
    nome: "Classic Poke Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/5/55/Classic_Poke_Ball_Holder.png",
    tipo: "decoração", rank: "A", skill: 93, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" },
      { nome: "Mystic Star", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png" },
      { nome: "Boost Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/01/Boost1.png" },
      { nome: "Slow Tail", quantidade: 45, imagem: "https://wiki.pokexgames.com/images/7/7e/Slow_Tail.png" },
      { nome: "Strong Nature Energy", quantidade: 24, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "japanese-bonsai",
    nome: "Japanese Bonsai",
    imagem: "https://wiki.pokexgames.com/images/1/1a/Japanese_Bonsai.png",
    tipo: "planta", rank: "A", skill: 82, isBerrie: false,
    recursos: [
      { nome: "Empty Vase", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/4f/Empty_Vase.png" },
      { nome: "Palm Leaves", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png" },
      { nome: "Sand Tail", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/3/3e/Sand_Tail.png" },
      { nome: "Water Plant", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/8/89/Water_Plant.png" },
      { nome: "Mystic Flower", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/e/e5/Mystic_Flower.png" },
      { nome: "Condensed Strong Grass", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "suicune-bush",
    nome: "Suicune Bush",
    imagem: "https://wiki.pokexgames.com/images/d/d0/Suicune_Bush.png",
    tipo: "arbusto", rank: "A", skill: 85, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Strange Spike", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/2/2b/Strange_Spike.png" },
      { nome: "Seal Tail", quantidade: 160, imagem: "https://wiki.pokexgames.com/images/7/73/Seal_Tail.png" },
      { nome: "Condensed Strong Grass", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "raikou-bush",
    nome: "Raikou Bush",
    imagem: "https://wiki.pokexgames.com/images/d/d3/Raikou_Bush.png",
    tipo: "arbusto", rank: "A", skill: 85, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Sheep Wool", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png" },
      { nome: "Shock Topknot", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png" },
      { nome: "Condensed Strong Grass", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "entei-bush",
    nome: "Entei Bush",
    imagem: "https://wiki.pokexgames.com/images/0/02/Entei_Bush.png",
    tipo: "arbusto", rank: "A", skill: 85, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Fire Feather", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png" },
      { nome: "Nu Ball", quantidade: 240, imagem: "https://wiki.pokexgames.com/images/9/9c/Nu_Ball.png" },
      { nome: "Condensed Strong Grass", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "mewtwo-bush",
    nome: "Mewtwo Bush",
    imagem: "https://wiki.pokexgames.com/images/5/5d/Mewtwo_Bush.png",
    tipo: "arbusto", rank: "A", skill: 95, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 24, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Dark Moon", quantidade: 36, imagem: "https://wiki.pokexgames.com/images/f/f6/Dark_Moon.png" },
      { nome: "Linearly Guided Hypnosis", quantidade: 120, imagem: "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png" },
      { nome: "Condensed Strong Grass", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "mew-bush",
    nome: "Mew Bush",
    imagem: "https://wiki.pokexgames.com/images/c/c4/Mew_Bush.png",
    tipo: "arbusto", rank: "A", skill: 95, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 24, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Springs", quantidade: 500, imagem: "https://wiki.pokexgames.com/images/c/cf/Springs.png" },
      { nome: "Psychic Spoon", quantidade: 238, imagem: "https://wiki.pokexgames.com/images/2/28/Psychic_Spoon.png" },
      { nome: "Condensed Strong Grass", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "zapdos-bush",
    nome: "Zapdos Bush",
    imagem: "https://wiki.pokexgames.com/images/1/12/Zapdos_Bush.png",
    tipo: "arbusto", rank: "A", skill: 85, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Strange Wing", quantidade: 130, imagem: "https://wiki.pokexgames.com/images/9/9b/Strange_Wing.png" },
      { nome: "Electric Tail", quantidade: 24, imagem: "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png" },
      { nome: "Condensed Strong Grass", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "arceus-bush",
    nome: "Arceus Bush",
    imagem: "https://wiki.pokexgames.com/images/a/ac/Arceus_Bush.png",
    tipo: "arbusto", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Major Seed Bag", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/d/d4/Major_Seed_Bag.png" },
      { nome: "Linearly Guided Hypnosis", quantidade: 145, imagem: "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png" },
      { nome: "Springs", quantidade: 600, imagem: "https://wiki.pokexgames.com/images/c/cf/Springs.png" },
      { nome: "Condensed Strong Grass", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/3/33/Condensed_Strong_Grass.png" }
    ]
  },
  {
    id: "yellow-alchemy-lab",
    nome: "Yellow Alchemy Lab",
    imagem: "https://wiki.pokexgames.com/images/d/d9/Yellow_Alchemy_Lab.png",
    tipo: "máquina", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Glass", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/1/15/Glass.png" },
      { nome: "Boost Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/01/Boost1.png" },
      { nome: "Electric Rat Tail", quantidade: 150, imagem: "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png" },
      { nome: "Strong Nature Energy", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "cyan-alchemy-lab",
    nome: "Cyan Alchemy Lab",
    imagem: "https://wiki.pokexgames.com/images/b/bf/Cyan_Alchemy_Lab.png",
    tipo: "máquina", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Glass", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/1/15/Glass.png" },
      { nome: "Crystal Stone", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif" },
      { nome: "Zap", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/4/4f/Zap1.png" },
      { nome: "Strong Nature Energy", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "purple-alchemy-lab",
    nome: "Purple Alchemy Lab",
    imagem: "https://wiki.pokexgames.com/images/6/6d/Purple_Alchemy_Lab.png",
    tipo: "máquina", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Glass", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/1/15/Glass.png" },
      { nome: "Ancient Stone", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif" },
      { nome: "Crimson Feather", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/d/de/Crimson_Feather.png" },
      { nome: "Strong Nature Energy", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "red-alchemy-lab",
    nome: "Red Alchemy Lab",
    imagem: "https://wiki.pokexgames.com/images/b/b4/Red_Alchemy_Lab.png",
    tipo: "máquina", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Glass", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/1/15/Glass.png" },
      { nome: "Boost Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/01/Boost1.png" },
      { nome: "Lobster Claw", quantidade: 150, imagem: "https://wiki.pokexgames.com/images/9/9e/Lobster_Claw.png" },
      { nome: "Strong Nature Energy", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "white-student-monitor",
    nome: "White Student Monitor",
    imagem: "https://wiki.pokexgames.com/images/b/bc/White_Student_Monitor.png",
    tipo: "item", rank: "A", skill: 92, isBerrie: false,
    recursos: [
      { nome: "Steel Wing", quantidade: 400, imagem: "https://wiki.pokexgames.com/images/e/e5/Steel_Wing.png" },
      { nome: "Giant Piece of Fur", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/a/a8/Giant_Piece_Of_Fur.png" },
      { nome: "Cloud", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/d/d2/Cloud.png" },
      { nome: "Strong Nature Energy", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "volcanic-chemical",
    nome: "Volcanic Chemical",
    imagem: "https://wiki.pokexgames.com/images/0/02/Volcanic_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Pot of Lava", quantidade: 35, imagem: "https://wiki.pokexgames.com/images/2/21/PotOfLava.png" },
      { nome: "Fire Feather", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/f/f3/Fire_Feather.png" },
      { nome: "Strange Bone", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/a/af/Strange_Bone.png" },
      { nome: "Compressed Fire", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/5/56/CompressedFire.gif" },
      { nome: "Magma Foot", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/1/11/Magma_Foot.png" }
    ]
  },
  {
    id: "seavell-chemical",
    nome: "Seavell Chemical",
    imagem: "https://wiki.pokexgames.com/images/3/39/Seavell_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Water Pendant", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/2/27/WaterPendant.png" },
      { nome: "Water Plant", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/8/89/Water_Plant.png" },
      { nome: "Gift Bags", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/5/5a/Gift_Bag.png" },
      { nome: "Ice Blocks", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/e/e2/Ice_Blocks.png" },
      { nome: "Ice Bra", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/3e/Ice_Bra.png" }
    ]
  },
  {
    id: "naturia-chemical",
    nome: "Naturia Chemical",
    imagem: "https://wiki.pokexgames.com/images/d/d8/Naturia_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Leaves", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/f/f1/Leaves.png" },
      { nome: "Palm Leaves", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/66/Palm_Leaves.png" },
      { nome: "Pot of Moss Bug", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/0/05/PotOfMossBug.png" },
      { nome: "Insect Claw", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/3f/Insect_Claw.png" },
      { nome: "Greens", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/5/54/Greens.png" },
      { nome: "Scythe", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/2f/Scythe1.png" }
    ]
  },
  {
    id: "raibolt-chemical",
    nome: "Raibolt Chemical",
    imagem: "https://wiki.pokexgames.com/images/6/6b/Raibolt_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Electric Box", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/6/6c/ElectricBox.png" },
      { nome: "Shock Topknot", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/6/6e/Shock_Topknot.png" },
      { nome: "Electric Rat Tail", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/d/d9/Electric_Rat_Tail.png" },
      { nome: "Sheep Wool", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/f/fe/Sheep_Wool.png" },
      { nome: "Electric Tail", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/1/15/Electric_Tail.png" }
    ]
  },
  {
    id: "psycraft-chemical",
    nome: "Psycraft Chemical",
    imagem: "https://wiki.pokexgames.com/images/a/af/Psycraft_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Future Orb", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/8/86/FutureooOrb.png" },
      { nome: "Linearly Guided Hypnosis", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/2/2d/Linearly_Guided_Hypnose.png" },
      { nome: "Mediling", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/7/75/Mediling.png" },
      { nome: "Strange Wing", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/9/9b/Strange_Wing.png" }
    ]
  },
  {
    id: "malefic-chemical",
    nome: "Malefic Chemical",
    imagem: "https://wiki.pokexgames.com/images/6/6b/Malefic_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Venom Flute", quantidade: 23, imagem: "https://wiki.pokexgames.com/images/9/92/Venom_Flute.png" },
      { nome: "Big Crystal", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/c/c4/Big_Crystal.png" },
      { nome: "Poisonous Tail", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/8/82/Poisonous_Tail.png" }
    ]
  },
  {
    id: "gardestrike-chemical",
    nome: "Gardestrike Chemical",
    imagem: "https://wiki.pokexgames.com/images/a/ab/Gardestrike_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Martial Arts Scroll", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/d/d8/Martial_Arts_Scroll.png" },
      { nome: "Cow Tail", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/6/60/Cow_Tail.png" },
      { nome: "Eruption Ears", quantidade: 14, imagem: "https://wiki.pokexgames.com/images/f/f0/Eruption_Ears.png" },
      { nome: "Belt of Champion", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/2e/Belt_Of_Champion.png" },
      { nome: "Cute Ball", quantidade: 14, imagem: "https://wiki.pokexgames.com/images/6/68/Cute_Ball.png" }
    ]
  },
  {
    id: "orebound-chemical",
    nome: "Orebound Chemical",
    imagem: "https://wiki.pokexgames.com/images/9/9b/Orebound_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Stone Orb", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/a/a1/StoneOrb.png" },
      { nome: "Horn Drill", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/d/d2/Horn_Drill.png" },
      { nome: "Strange Rock", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/3/3b/Strange_Rock.png" },
      { nome: "Gligar Claw", quantidade: 22, imagem: "https://wiki.pokexgames.com/images/f/f1/Gligar_Claw.png" }
    ]
  },
  {
    id: "wingeon-chemical",
    nome: "Wingeon Chemical",
    imagem: "https://wiki.pokexgames.com/images/8/88/Wingeon_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Feather", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/7/7f/FeatherMark.png" },
      { nome: "Colored Feather", quantidade: 13, imagem: "https://wiki.pokexgames.com/images/2/27/Colored_Feather.png" },
      { nome: "Owl Feather", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/c/c9/Owl_Feather.png" },
      { nome: "Piece of Blimp", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/2/2c/Piece_Of_Blimp.png" },
      { nome: "Dragon Tooth", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/9/9f/DragonTooth.png" }
    ]
  },
  {
    id: "ironhard-chemical",
    nome: "Ironhard Chemical",
    imagem: "https://wiki.pokexgames.com/images/5/50/Ironhard_Chemical2.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Pure Strong Grass", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/63/Pure_Strong_Grass.png" },
      { nome: "Metal Hull", quantidade: 16, imagem: "https://wiki.pokexgames.com/images/c/c7/Metal_Hull.png" },
      { nome: "Compressed Steel", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/2/25/CompressedSteel.png" },
      { nome: "Steel Wing", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/e/e5/Steel_Wing.png" }
    ]
  },
  {
    id: "mecha-chip",
    nome: "Mecha Chip",
    imagem: "https://wiki.pokexgames.com/images/3/35/Mecha_Chip.png",
    tipo: "chip", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Metal Jaw", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/f/f7/Metal_Jaw.png" },
      { nome: "Bone Shield", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/a/af/Bone_Shield.png" },
      { nome: "Pawn", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/f/f4/Pawn.png" },
      { nome: "Gem Star", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/e/eb/Gem_Star.png" },
      { nome: "Metal Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/b/b9/MetalStone.png" },
      { nome: "Strong Nature Energy", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/5/5f/Strong_Nature_Energy.png" }
    ]
  },
  {
    id: "mecha",
    nome: "Mecha",
    imagem: "https://wiki.pokexgames.com/images/1/19/Mecha.png",
    tipo: "item", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Mecha Chip", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/35/Mecha_Chip.png" },
      { nome: "Mecha Right Arm", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/a/ab/Mecha_Right_Arm.png" },
      { nome: "Mecha Chest", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/9/9d/Mecha_Chest.png" },
      { nome: "Mecha Left Arm", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/a/aa/Mecha_Left_Arm.png" },
      { nome: "Power Source", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/f/fc/Power_Source.gif" }
    ]
  },
  {
    id: "workshop-s",
    nome: "Workshop S",
    imagem: "https://wiki.pokexgames.com/images/5/58/Professor_workshop_S.png",
    tipo: "workshop", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },
  {
    id: "workshop-s-portatil",
    nome: "Workshop S (Portátil)",
    imagem: "https://wiki.pokexgames.com/images/1/13/Professor_Workshop_S_-_Port.png",
    tipo: "workshop", rank: "A", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Diamond", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" }
    ]
  },

  // ===== RANK S =====
  {
    id: "small-nightmare-spray",
    nome: "Small Nightmare Spray",
    imagem: "https://wiki.pokexgames.com/images/thumb/5/5c/Small_Nightmare_Spray.webp/17px-Small_Nightmare_Spray.webp.png",
    tipo: "poção", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 90, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Sand Pouch", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png" },
      { nome: "Slice of Apple", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/0/0d/Slice_of_Apple.png" }
    ]
  },
  {
    id: "small-nightmare-potion",
    nome: "Small Nightmare Potion",
    imagem: "https://wiki.pokexgames.com/images/thumb/c/cd/Small_Nightmare_Potion.webp/24px-Small_Nightmare_Potion.webp.png",
    tipo: "poção", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Doll Star", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif" },
      { nome: "Centipede Armor", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png" },
      { nome: "Corrupted Streak Tail", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif" }
    ]
  },
  {
    id: "medium-nightmare-spray",
    nome: "Medium Nightmare Spray",
    imagem: "https://wiki.pokexgames.com/images/thumb/0/02/Medium_Nightmare_Spray.webp/16px-Medium_Nightmare_Spray.webp.png",
    tipo: "poção", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Royal Mane", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png" },
      { nome: "Blue Ghost Candle", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/6/61/Blue_Ghost_Candle.png" }
    ]
  },
  {
    id: "medium-nightmare-potion",
    nome: "Medium Nightmare Potion",
    imagem: "https://wiki.pokexgames.com/images/thumb/c/c9/Medium_Nightmare_Potion.webp/23px-Medium_Nightmare_Potion.webp.png",
    tipo: "poção", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 135, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Ice Crystal", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png" },
      { nome: "Savage Fin", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png" },
      { nome: "Corrupted Ice Orb", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif" },
      { nome: "Petite Leaves", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png" }
    ]
  },
  {
    id: "ultimate-nightmare-spray",
    nome: "Ultimate Nightmare Spray",
    imagem: "https://wiki.pokexgames.com/images/thumb/5/5b/Ultimate_Nightmare_Spray.webp/16px-Ultimate_Nightmare_Spray.webp.png",
    tipo: "poção", rank: "S", skill: 103, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 135, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Ice Crystal", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png" },
      { nome: "Centipede Armor", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png" }
    ]
  },
  {
    id: "ultimate-nightmare-potion",
    nome: "Ultimate Nightmare Potion",
    imagem: "https://wiki.pokexgames.com/images/thumb/c/ce/Ultimate_Nightmare_Potion.webp/22px-Ultimate_Nightmare_Potion.webp.png",
    tipo: "poção", rank: "S", skill: 103, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Pot of Lava", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif" },
      { nome: "Fire Monkey Hair", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png" },
      { nome: "Small Eagle Feather", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/e/e7/Small_Eagle_Feather.png" },
      { nome: "Corrupted Magnet", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif" }
    ]
  },
  {
    id: "nightmare-revive",
    nome: "Nightmare Revive",
    imagem: "https://wiki.pokexgames.com/images/5/50/Nightmare_Revive.png",
    tipo: "poção", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 24, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Magnet", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif" },
      { nome: "Petite Leaves", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png" }
    ]
  },
  {
    id: "nightmare-shield-elixir",
    nome: "Nightmare Shield Elixir",
    imagem: "https://wiki.pokexgames.com/images/a/a7/Shield_Nightmare_Potion.png",
    tipo: "poção", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 72, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Small Bird Beak", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png" },
      { nome: "Ice Crystal", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png" },
      { nome: "Black Wool Ball", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png" },
      { nome: "Corrupted Pot Of Moss Bug", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif" }
    ]
  },
  {
    id: "big-nightmare-shield-elixir",
    nome: "Big Nightmare Shield Elixir",
    imagem: "https://wiki.pokexgames.com/images/9/90/Big_Shield_Nightmare_Potion.gif",
    tipo: "poção", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Small Bird Beak", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png" },
      { nome: "Ice Crystal", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png" },
      { nome: "Corrupted Pot Of Moss Bug", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif" },
      { nome: "Black Wool Ball", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png" }
    ]
  },
  {
    id: "pure-energized-boost-stone",
    nome: "Pure Energized Boost Stone",
    imagem: "https://wiki.pokexgames.com/images/7/7f/Pure_Energized_Boost_Stone.png",
    tipo: "pedra", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Crystal Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif" },
      { nome: "Metal Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/b/b9/MetalStone.png" },
      { nome: "Ancient Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif" }
    ]
  },
  {
    id: "energized-boost-stone",
    nome: "Energized Boost Stone",
    imagem: "https://wiki.pokexgames.com/images/2/28/Energized_Boost_Stone.png",
    tipo: "pedra", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Fire Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif" },
      { nome: "Cocoon Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/28/Cocoon_stone.gif" },
      { nome: "Darkness Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/5d/HrnVNwK.png" },
      { nome: "Earth Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/0f/Earth-stone.gif" },
      { nome: "Enigma Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/0a/Enigma-stone.gif" },
      { nome: "Feather Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/5/5c/Feather1.png" },
      { nome: "Heart Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/3e/Heart-stone.gif" },
      { nome: "Ice Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/3/34/Ice-stone.gif" },
      { nome: "Leaf Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/c/c8/Leaf-stone.gif" },
      { nome: "Punch Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/da/3mDejdt.png" },
      { nome: "Rock Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/dc/Rock-stone.gif" },
      { nome: "Thunder Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif" },
      { nome: "Venom Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/a/ac/Venom-stone.gif" },
      { nome: "Water Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/8/80/Water-stone.gif" }
    ]
  },
  {
    id: "boost-stone",
    nome: "Boost Stone",
    imagem: "https://wiki.pokexgames.com/images/0/01/Boost1.png",
    tipo: "pedra", rank: "S", skill: 110, isBerrie: false,
    unidadesPorReceita: 3,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 800, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Pure Energized Boost Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/7/7f/Pure_Energized_Boost_Stone.png" },
      { nome: "Energized Boost Stone", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/28/Energized_Boost_Stone.png" }
    ]
  },
  {
    id: "red-poke-ball-holder-s",
    nome: "Red Poké Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/a/a9/Red_Pok%C3%A9_Ball_Holder.png",
    tipo: "decoração", rank: "S", skill: 110, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 3000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Empty Nightmare Ball", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png" },
      { nome: "Royal Mane", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png" },
      { nome: "Remains Of Gears", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/6/6b/Remains_Of_Gears.png" },
      { nome: "Flame Tail", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png" },
      { nome: "Virtual Head", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/04/Virtual_Head.png" },
      { nome: "Blade Horn", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png" }
    ]
  },
  {
    id: "futurist-poke-ball-holder",
    nome: "Futurist Poké Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/9/95/Futurist_Pok%C3%A9_Ball_Holder.png",
    tipo: "decoração", rank: "S", skill: 113, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 9000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Empty Nightmare Ball", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png" },
      { nome: "Curly Pig Tail", quantidade: 32, imagem: "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png" },
      { nome: "Corrupted Poisonous Tail", quantidade: 32, imagem: "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif" },
      { nome: "Electric Fish Tail", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/6/6b/Electric_Fish_Tail.png" },
      { nome: "Emperor Trident", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/c/c3/Emperor_Trident.png" },
      { nome: "Continent Thorn", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png" },
      { nome: "Giant Tusk", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png" }
    ]
  },
  {
    id: "steel-poke-ball-holder",
    nome: "Steel Poké Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/0/09/Steel-Pok%C3%A9-Ball-Holder.gif",
    tipo: "decoração", rank: "S", skill: 113, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 9000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Empty Nightmare Ball", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png" },
      { nome: "Lovely Topknot", quantidade: 65, imagem: "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png" },
      { nome: "Savage Fin", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png" },
      { nome: "Sand Pouch", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png" },
      { nome: "Corrupted Champion Belt", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif" },
      { nome: "Bagworm Stone", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/39/Bagworm_Stone.png" },
      { nome: "Giant Tusk", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/a/a2/Giant_Tusk.png" }
    ]
  },
  {
    id: "virtual-poke-ball-holder",
    nome: "Virtual Poké Ball Holder",
    imagem: "https://wiki.pokexgames.com/images/b/b8/Virtual-Pok%C3%A9-Ball-Holder.gif",
    tipo: "decoração", rank: "S", skill: 115, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 15000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Empty Nightmare Ball", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/e/e3/Nightmare_Ball.png" },
      { nome: "Corrupted Poisonous Tail", quantidade: 62, imagem: "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif" },
      { nome: "Solid Head", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/7/74/Solid_Head.png" },
      { nome: "Gear Nose", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png" },
      { nome: "Corrupted Ice Orb", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif" },
      { nome: "White Hair", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/f/f7/White_Hair.png" },
      { nome: "Brown Ear", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png" },
      { nome: "Gleam Tail", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/4/4b/Gleam_Tail.png" }
    ]
  },
  {
    id: "nightmare-seed-bag",
    nome: "Nightmare Seed Bag",
    imagem: "https://wiki.pokexgames.com/images/6/6a/Nightmare-Seed-Bag.gif",
    tipo: "bolsa", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Red Crushed Leaf", quantidade: 54, imagem: "https://wiki.pokexgames.com/images/0/09/Red_Crushed_Leaf.png" },
      { nome: "Yellow Crushed Leaf", quantidade: 54, imagem: "https://wiki.pokexgames.com/images/5/53/Yellow_Crushed_Leaf.png" },
      { nome: "Green Crushed Leaf", quantidade: 54, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" }
    ]
  },
  {
    id: "kee-seed",
    nome: "Kee Seed",
    imagem: "https://wiki.pokexgames.com/images/2/27/Kee_Seed.png",
    tipo: "semente", rank: "S", skill: 100, isBerrie: true,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 36, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Nightmare Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/6a/Nightmare-Seed-Bag.gif" },
      { nome: "Mole Hair", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png" }
    ]
  },
  {
    id: "salac-seed",
    nome: "Salac Seed",
    imagem: "https://wiki.pokexgames.com/images/4/4b/Salac_Seed.png",
    tipo: "semente", rank: "S", skill: 105, isBerrie: true,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 36, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Nightmare Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/6a/Nightmare-Seed-Bag.gif" },
      { nome: "Corrupted Magnet", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif" }
    ]
  },
  {
    id: "red-sitrus-seed",
    nome: "Red Sitrus Seed",
    imagem: "https://wiki.pokexgames.com/images/8/8e/Red_Sitrus_Seed.png",
    tipo: "semente", rank: "S", skill: 110, isBerrie: true,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 36, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Nightmare Seed Bag", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/6a/Nightmare-Seed-Bag.gif" },
      { nome: "Corrupted Champion Belt", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif" }
    ]
  },
  {
    id: "ganlon-seed",
    nome: "Ganlon Seed",
    imagem: "https://wiki.pokexgames.com/images/2/25/Ganlon_Seed.png",
    tipo: "semente", rank: "S", skill: 103, isBerrie: true,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 180, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Nightmare Seed Bag", quantidade: 6, imagem: "https://wiki.pokexgames.com/images/6/6a/Nightmare-Seed-Bag.gif" },
      { nome: "Corrupted Streak Tail", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif" },
      { nome: "Corrupted Ice Piece", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/c/cb/Corrupted-Ice-Piece.gif" },
      { nome: "Fire Monkey Hair", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png" }
    ]
  },
  {
    id: "futurist-cactus",
    nome: "Futurist Cactus",
    imagem: "https://wiki.pokexgames.com/images/3/33/Futurist_Cactus.png",
    tipo: "planta", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 145, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Bagworm Green Leaves", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png" },
      { nome: "Land Shark Horn", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png" },
      { nome: "Savage Fin", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png" }
    ]
  },
  {
    id: "futurist-small-bush",
    nome: "Futurist Small Bush",
    imagem: "https://wiki.pokexgames.com/images/b/b9/Futurist_Small_Bush.png",
    tipo: "planta", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 145, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Vines", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/b/be/Corrupted-Vines.gif" },
      { nome: "Whiskers Fin", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png" },
      { nome: "Mole Hair", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png" }
    ]
  },
  {
    id: "futurist-plant",
    nome: "Futurist Plant",
    imagem: "https://wiki.pokexgames.com/images/8/8d/Futurist_Plant.png",
    tipo: "planta", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 300, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Green Hair", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png" },
      { nome: "Corrupted Pot Of Moss Bug", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif" },
      { nome: "Black Lucky Charm", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png" },
      { nome: "Corrupted Ice Orb", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif" }
    ]
  },
  {
    id: "indoor-plant-s",
    nome: "Indoor Plant",
    imagem: "https://wiki.pokexgames.com/images/a/a0/Indoor_Plant_RankS.png",
    tipo: "planta", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 300, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Petite Leaves", quantidade: 8, imagem: "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png" },
      { nome: "Corrupted Dragon Tooth", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif" },
      { nome: "Small Bird Beak", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/3/33/Small_Bird_Beak.png" },
      { nome: "Crystal Shard", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/1/19/Crystal_Shard.png" }
    ]
  },
  {
    id: "bonsai-exotic-tree-s",
    nome: "Bonsai Exotic Tree",
    imagem: "https://wiki.pokexgames.com/images/0/00/Bonsai_Exotic_Tree_RankS.png",
    tipo: "planta", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 300, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Magnet", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif" },
      { nome: "Bagworm Green Leaves", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png" },
      { nome: "Corrupted Pot Of Moss Bug", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif" },
      { nome: "Curly Pig Tail", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/1/17/Curly_Pig_Tail.png" }
    ]
  },
  {
    id: "exotic-plant-s",
    nome: "Exotic Plant",
    imagem: "https://wiki.pokexgames.com/images/4/4e/Exotic_Plant_RankS.png",
    tipo: "planta", rank: "S", skill: 107, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 450, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Dragon Tooth", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/5/52/Corrupted-Dragon-Tooth.gif" },
      { nome: "Ice Crystal", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/c/ca/Ice_Crystal.png" },
      { nome: "Corrupted Doll Star", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif" },
      { nome: "Corrupted Magnet", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/0/09/Corrupted-Magnet.gif" },
      { nome: "Bagworm Pink Leaves", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png" }
    ]
  },
  {
    id: "bonsai-plant",
    nome: "Bonsai Plant",
    imagem: "https://wiki.pokexgames.com/images/5/5f/Bonsai_Plant.png",
    tipo: "planta", rank: "S", skill: 107, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 450, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Sand Pouch", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png" },
      { nome: "Elefish Fin", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/1/1f/Elefish_Fin.png" },
      { nome: "Compressed Nightmare Gems", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png" },
      { nome: "Corrupted Scizor Claw", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/03/Corrupted-Scizor-Claw.gif" }
    ]
  },
  {
    id: "flowers",
    nome: "Flowers",
    imagem: "https://wiki.pokexgames.com/images/b/b5/Flowers_RankS.png",
    tipo: "planta", rank: "S", skill: 107, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 450, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Tree Branch", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif" },
      { nome: "Green Hair", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/2c/Green_Hair.png" },
      { nome: "Red Spike", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/02/Red_Spike.png" },
      { nome: "White Hair", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/f/f7/White_Hair.png" }
    ]
  },
  {
    id: "oddish-futurist-plant",
    nome: "Oddish Futurist Plant",
    imagem: "https://wiki.pokexgames.com/images/2/2e/Oddish_Futurist_Plant.png",
    tipo: "arbusto", rank: "S", skill: 107, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 450, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Pot Of Moss Bug", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif" },
      { nome: "Savage Fin", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/9/9e/Savage_Fin.png" },
      { nome: "Land Shark Horn", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png" },
      { nome: "Catfish Whiskers", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/9/92/Catfish_Whiskers.png" }
    ]
  },
  {
    id: "oddish-plant",
    nome: "Oddish Plant",
    imagem: "https://wiki.pokexgames.com/images/8/8a/Oddish_Plant.png",
    tipo: "arbusto", rank: "S", skill: 107, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 450, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Corrupted Pinsir Horn", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/9/9d/Corrupted-Pinsir-Horn.gif" },
      { nome: "Corrupted Black Hull", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/6/62/Corrupted-Black-Hull.gif" },
      { nome: "Fire Monkey Hair", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png" },
      { nome: "Bear Arm", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/4/48/Bear_Arm.png" }
    ]
  },
  {
    id: "bulba-plant",
    nome: "Bulba Plant",
    imagem: "https://wiki.pokexgames.com/images/b/b2/Bulba_Plant.png",
    tipo: "arbusto", rank: "S", skill: 108, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 900, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Petite Leaves", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png" },
      { nome: "Brown Ear", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/9/91/Dark_Ear_Shiftry_NW.png" },
      { nome: "Centipede Armor", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png" },
      { nome: "Strange Fur", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/c/c4/Strange_Fur.png" }
    ]
  },
  {
    id: "plume-plant",
    nome: "Plume Plant",
    imagem: "https://wiki.pokexgames.com/images/d/dc/Plume_Plant.png",
    tipo: "arbusto", rank: "S", skill: 109, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 1500, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Black Lucky Charm", quantidade: 11, imagem: "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png" },
      { nome: "Centipede Armor", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png" },
      { nome: "Corrupted Pot Of Moss Bug", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/b/b7/Corrupted_Pot_Of_Moss_Bug.gif" },
      { nome: "Pig Ear", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png" },
      { nome: "Oddish Plant", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/8/8a/Oddish_Plant.png" }
    ]
  },
  {
    id: "saur-plant",
    nome: "Saur Plant",
    imagem: "https://wiki.pokexgames.com/images/e/e1/Saur_Plant.png",
    tipo: "arbusto", rank: "S", skill: 110, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 3000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Centipede Armor", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/31/Centipede_Armor.png" },
      { nome: "Dragon Wings", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/f/fa/Dragon_Wings.png" },
      { nome: "Yellow Eyebrows", quantidade: 12, imagem: "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png" },
      { nome: "Bagworm Pink Leaves", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/8/80/Bagworm_Pink_Leaves.png" },
      { nome: "Bulba Plant", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/b/b2/Bulba_Plant.png" }
    ]
  },
  {
    id: "bell-plant",
    nome: "Bell Plant",
    imagem: "https://wiki.pokexgames.com/images/4/4d/Bell_Plant.png",
    tipo: "planta", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 300, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Bagworm Green Leaves", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/e/e0/Bagworm_Green_Leaves.png" },
      { nome: "Psychic Mustache", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/21/Psychic_Mustache.png" },
      { nome: "Pig Ear", quantidade: 4, imagem: "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png" },
      { nome: "Corrupted Champion Belt", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif" }
    ]
  },
  {
    id: "pokedex-chip-4",
    nome: "Pokédex CHIP 4.0",
    imagem: "https://wiki.pokexgames.com/images/c/c9/Pok%C3%A9dex_CHIP_4.0.png",
    tipo: "chip", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 6000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Whiskers Fin", quantidade: 85, imagem: "https://wiki.pokexgames.com/images/2/23/Whiskers_Fin.png" },
      { nome: "Mole Hair", quantidade: 85, imagem: "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png" },
      { nome: "Black Wool Ball", quantidade: 85, imagem: "https://wiki.pokexgames.com/images/0/06/Black_Wool_Ball.png" },
      { nome: "Corrupted Ice Orb", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif" },
      { nome: "Compressed Nightmare Gems", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png" },
      { nome: "Cave Nail", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/a/af/Cave_Nail.png" },
      { nome: "Traces Of Voodoo Doll", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/c/c5/Traces_of_Voodoo_doll.png" }
    ]
  },
  {
    id: "yellow-boost-machine",
    nome: "Yellow Boost Machine",
    imagem: "https://wiki.pokexgames.com/images/f/fb/Yellow_Boost_Machine.png",
    tipo: "máquina", rank: "S", skill: 120, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 30000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Thunder Stone", quantidade: 300, imagem: "https://wiki.pokexgames.com/images/d/d3/Thunder-stone.gif" },
      { nome: "Raibolt Essence", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/6/68/RaiboltEssence.png" },
      { nome: "Alolan Electric Rat Tail", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/9/92/Alolan_Electric_Rat_Tail.png" },
      { nome: "Razor Claw", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png" },
      { nome: "Mystic Star", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/0/07/GUc8LUi.png" },
      { nome: "Catfish Tail", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/1/13/Catfish_Tail.png" },
      { nome: "Diamond", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" },
      { nome: "Sentry Remains", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png" }
    ]
  },
  {
    id: "red-boost-machine",
    nome: "Red Boost Machine",
    imagem: "https://wiki.pokexgames.com/images/f/fe/Red_Boost_Machine.png",
    tipo: "máquina", rank: "S", skill: 120, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 30000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Fire Stone", quantidade: 300, imagem: "https://wiki.pokexgames.com/images/9/9a/Fire-stone.gif" },
      { nome: "Black Lucky Charm", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png" },
      { nome: "Fire Monkey Hair", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png" },
      { nome: "Sand Pouch", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/b/bf/Sand_Pouch.png" },
      { nome: "Corrupted Ice Orb", quantidade: 150, imagem: "https://wiki.pokexgames.com/images/3/3f/Corrupted-Ice-Orb.gif" },
      { nome: "Volcanic Essence", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/d/da/VolcanicEssence.png" },
      { nome: "Corrupted Poisonous Tail", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/a/ab/Corrupted-Poisonous-Tail.gif" },
      { nome: "Crystal Stone", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/d/d4/Crystal-stone.gif" },
      { nome: "Diamond", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" },
      { nome: "Sentry Remains", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png" }
    ]
  },
  {
    id: "cyan-boost-machine",
    nome: "Cyan Boost Machine",
    imagem: "https://wiki.pokexgames.com/images/0/0a/Cyan_Boost_Machine.png",
    tipo: "máquina", rank: "S", skill: 120, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 30000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Water Stone", quantidade: 300, imagem: "https://wiki.pokexgames.com/images/8/80/Water-stone.gif" },
      { nome: "Seavell Essence", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/5/50/SeavellEssence.png" },
      { nome: "Land Shark Horn", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/a/a8/Land_Shark_Horn.png" },
      { nome: "Fire Monkey Hair", quantidade: 200, imagem: "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png" },
      { nome: "Ancient Stone", quantidade: 30, imagem: "https://wiki.pokexgames.com/images/3/32/Ancient-stone.gif" },
      { nome: "Mach Nail", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/2/2b/Mach_Nail.png" },
      { nome: "Mount Horn", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/3/34/Mount_Horn.png" },
      { nome: "Diamond", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" },
      { nome: "Sentry Remains", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png" }
    ]
  },
  {
    id: "neutron-bomb",
    nome: "Neutron Bomb",
    imagem: "https://wiki.pokexgames.com/images/3/36/Neutron-bomb1.gif",
    tipo: "artefato", rank: "S", skill: 120, isBerrie: false,
    recursos: [
      { nome: "Darkrai Essence", quantidade: 15000, imagem: "https://wiki.pokexgames.com/images/0/01/Darkrai-Essence.gif" },
      { nome: "Ancient Charmander Idol", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/5/57/Ancient_Charmander_Idol.png" },
      { nome: "Ancient Claydol Idol", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/f/f9/Ancient_Claydol_Idol.png" },
      { nome: "Ancient Dragalge Idol", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/c/c9/Ancient_Dragalge_Idol.png" },
      { nome: "Ancient Dragonite Idol", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/c/c2/Anciente_Dragonite_Idol.png" },
      { nome: "Ancient Vespiquen Idol", quantidade: 7, imagem: "https://wiki.pokexgames.com/images/5/5f/Ancient_Vespiquen_Idol.png" },
      { nome: "Giant Koban", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/05/Giant_Koban.png" },
      { nome: "Giant Hamburger", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/07/Giant_Hamburguer.png" },
      { nome: "Big Rock Tail", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/9/9a/Big_Rock_Tail.png" },
      { nome: "Big Red Feather", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/e/e5/Big_Red_Feather.png" },
      { nome: "Golden Nuggets", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/d/d0/Golden_Nuggets.png" },
      { nome: "Violet Luchador Mask", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/6/6b/Violet_Luchador_Mask.png" },
      { nome: "Mecha Reactor", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/4/45/Mecha_Reactor.png" }
    ]
  },
  {
    id: "kamikaze-elixir",
    nome: "Kamikaze Elixir",
    imagem: "https://wiki.pokexgames.com/images/5/5c/Kamikaze_Elixir.png",
    tipo: "elixir", rank: "S", skill: 103, isBerrie: false,
    recursos: [
      { nome: "Dew Becker", quantidade: 240, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" },
      { nome: "Red Crushed Leaf", quantidade: 750, imagem: "https://wiki.pokexgames.com/images/0/09/Red_Crushed_Leaf.png" },
      { nome: "Green Crushed Leaf", quantidade: 750, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" },
      { nome: "Yellow Crushed Leaf", quantidade: 750, imagem: "https://wiki.pokexgames.com/images/5/53/Yellow_Crushed_Leaf.png" }
    ]
  },
  {
    id: "iron-wall-elixir",
    nome: "Iron Wall Elixir",
    imagem: "https://wiki.pokexgames.com/images/9/95/Iron_Wall_Elixir.png",
    tipo: "elixir", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Dew Becker", quantidade: 240, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" },
      { nome: "Red Crushed Leaf", quantidade: 750, imagem: "https://wiki.pokexgames.com/images/0/09/Red_Crushed_Leaf.png" },
      { nome: "Green Crushed Leaf", quantidade: 750, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" },
      { nome: "Yellow Crushed Leaf", quantidade: 750, imagem: "https://wiki.pokexgames.com/images/5/53/Yellow_Crushed_Leaf.png" }
    ]
  },
  {
    id: "salvation-elixir",
    nome: "Salvation Elixir",
    imagem: "https://wiki.pokexgames.com/images/8/8d/Salvation_Elixir.png",
    tipo: "elixir", rank: "S", skill: 107, isBerrie: false,
    recursos: [
      { nome: "Dew Becker", quantidade: 135, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" },
      { nome: "Red Crushed Leaf", quantidade: 420, imagem: "https://wiki.pokexgames.com/images/0/09/Red_Crushed_Leaf.png" },
      { nome: "Yellow Crushed Leaf", quantidade: 420, imagem: "https://wiki.pokexgames.com/images/5/53/Yellow_Crushed_Leaf.png" },
      { nome: "Green Crushed Leaf", quantidade: 420, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" }
    ]
  },
  {
    id: "hot-nightmare-potion",
    nome: "Hot Nightmare Potion",
    imagem: "https://wiki.pokexgames.com/images/9/9a/Hot_Nightmare_Potion.png",
    tipo: "poção", rank: "S", skill: 102, isBerrie: false,
    recursos: [
      { nome: "Red Crushed Leaf", quantidade: 353, imagem: "https://wiki.pokexgames.com/images/0/09/Red_Crushed_Leaf.png" },
      { nome: "Yellow Crushed Leaf", quantidade: 353, imagem: "https://wiki.pokexgames.com/images/5/53/Yellow_Crushed_Leaf.png" },
      { nome: "Green Crushed Leaf", quantidade: 353, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" },
      { nome: "Dew Becker", quantidade: 113, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" }
    ]
  },
  {
    id: "black-nightmare-potion",
    nome: "Black Nightmare Potion",
    imagem: "https://wiki.pokexgames.com/images/5/5a/Black_Nightmare_Potion.png",
    tipo: "poção", rank: "S", skill: 101, isBerrie: false,
    recursos: [
      { nome: "Red Crushed Leaf", quantidade: 1030, imagem: "https://wiki.pokexgames.com/images/0/09/Red_Crushed_Leaf.png" },
      { nome: "Yellow Crushed Leaf", quantidade: 1030, imagem: "https://wiki.pokexgames.com/images/5/53/Yellow_Crushed_Leaf.png" },
      { nome: "Green Crushed Leaf", quantidade: 1030, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" },
      { nome: "Dew Becker", quantidade: 330, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" }
    ]
  },
  {
    id: "superior-nightmare-revive",
    nome: "Superior Nightmare Revive",
    imagem: "https://wiki.pokexgames.com/images/5/52/Superior_Nightmare_Revive.png",
    tipo: "poção", rank: "S", skill: 110, isBerrie: false,
    recursos: [
      { nome: "Dew Becker", quantidade: 24, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" },
      { nome: "Red Crushed Leaf", quantidade: 75, imagem: "https://wiki.pokexgames.com/images/0/09/Red_Crushed_Leaf.png" },
      { nome: "Yellow Crushed Leaf", quantidade: 75, imagem: "https://wiki.pokexgames.com/images/5/53/Yellow_Crushed_Leaf.png" },
      { nome: "Green Crushed Leaf", quantidade: 75, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" }
    ]
  },
  {
    id: "fertilizer",
    nome: "Fertilizer",
    imagem: "https://wiki.pokexgames.com/images/2/25/Fertilizer.png",
    tipo: "item", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Green Crushed Leaf", quantidade: 140, imagem: "https://wiki.pokexgames.com/images/8/80/Green_Crushed_Leaf.png" },
      { nome: "Dew Becker", quantidade: 15, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" }
    ]
  },
  {
    id: "cell-culture-tubes",
    nome: "Cell Culture Tubes",
    imagem: "https://wiki.pokexgames.com/images/9/9a/Cell_Culture_Tubes.png",
    tipo: "item", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Dew Becker", quantidade: 600, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" },
      { nome: "Corrupted Streak Tail", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/2/2f/Corrupted-Streak-Tail.gif" },
      { nome: "Red Spike", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/0/02/Red_Spike.png" },
      { nome: "Toxic Gosme", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png" }
    ]
  },
  {
    id: "philosophers-stone",
    nome: "Philosopher's Stone",
    imagem: "https://wiki.pokexgames.com/images/b/b9/Philosopher%27s_Stone.png",
    tipo: "artefato", rank: "S", skill: 120, isBerrie: false,
    recursos: [
      { nome: "Dew Becker", quantidade: 36000, imagem: "https://wiki.pokexgames.com/images/d/d7/Dew_Becker.png" },
      { nome: "Diamond", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" },
      { nome: "Black Darkrai Essence", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/7/75/Black-Darkrai-Essence.gif" },
      { nome: "Fire Monkey Hair", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/7/7f/Fire_Monkey_Hair.png" },
      { nome: "Corrupted Feather", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif" },
      { nome: "Petite Leaves", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/e/e4/Petite_Leaves.png" },
      { nome: "Corrupted Pot of Lava", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/5/5a/Corrupted-Pot-of-Lava.gif" },
      { nome: "Red Spike", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/0/02/Red_Spike.png" },
      { nome: "Pig Ear", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/a/a5/Pig_Ear.png" },
      { nome: "Big Eagle Feather", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/7/76/Big_Eagle_Feather.png" },
      { nome: "Solid Head", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/7/74/Solid_Head.png" },
      { nome: "Compressed Nightmare Gems", quantidade: 10, imagem: "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png" },
      { nome: "Royal Mane", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/2/20/Royal_Mane.png" },
      { nome: "Flame Tail", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/0/02/Flame_Tail.png" },
      { nome: "Turtle Shell", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/5/5e/Turtle_Shell.png" },
      { nome: "Sentry Remains", quantidade: 40, imagem: "https://wiki.pokexgames.com/images/d/d3/Sentry_Remains.png" },
      { nome: "Red Star Piece", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/d/d4/Red-Star-Piece.gif" }
    ]
  },
  {
    id: "pink-star-piece",
    nome: "Pink Star Piece",
    imagem: "https://wiki.pokexgames.com/images/b/bc/Pink-Star-Piece.gif",
    tipo: "pedra", rank: "S", skill: 120, isBerrie: false,
    recursos: [
      { nome: "Red Darkrai Essence", quantidade: 24, imagem: "https://wiki.pokexgames.com/images/6/60/Red_Darkrai_Essence.gif" },
      { nome: "Star Dust", quantidade: 150, imagem: "https://wiki.pokexgames.com/images/4/41/Star_Dust.png" },
      { nome: "Boost Stone", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/0/01/Boost1.png" }
    ]
  },
  {
    id: "white-high-tech-student-monitor",
    nome: "White High-tech Student Monitor",
    imagem: "https://wiki.pokexgames.com/images/8/81/White_High-tech_Student_Monitor.png",
    tipo: "decoração", rank: "S", skill: 100, isBerrie: false,
    recursos: [
      { nome: "Study Notes", quantidade: 1200, imagem: "https://wiki.pokexgames.com/images/e/e4/Study_Notes.png" },
      { nome: "Diamond", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" },
      { nome: "Corrupted Champion Belt", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/6/6b/Corrupted-Belt-of-Champion.gif" },
      { nome: "Toxic Gosme", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/c/ca/Toxic_Gosme.png" },
      { nome: "Dragon Goo", quantidade: 90, imagem: "https://wiki.pokexgames.com/images/d/dc/Dragon_Goo.png" },
      { nome: "Gear Nose", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/6/63/Gear_Nose.png" },
      { nome: "Virtual Head", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/0/04/Virtual_Head.png" },
      { nome: "Big Boss Hat", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/3/31/Big_Boss_Hat.png" }
    ]
  },
  {
    id: "black-white-high-tech-student-monitor",
    nome: "Black & White High-tech Student Monitor",
    imagem: "https://wiki.pokexgames.com/images/e/e1/Black_%26_White_High-tech_Student_Monitor.png",
    tipo: "decoração", rank: "S", skill: 105, isBerrie: false,
    recursos: [
      { nome: "Study Notes", quantidade: 1200, imagem: "https://wiki.pokexgames.com/images/e/e4/Study_Notes.png" },
      { nome: "Diamond", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/e/ea/Diamond.png" },
      { nome: "Black Lucky Charm", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png" },
      { nome: "Corrupted Feather", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif" },
      { nome: "Compressed Nightmare Gems", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/7/70/Compressed_Nightmare_Gems.png" },
      { nome: "Mole Big Hair", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/e/e7/Mole_Big_Hair.png" },
      { nome: "Brutal Fin", quantidade: 5, imagem: "https://wiki.pokexgames.com/images/8/8f/Brutal_Fin.png" },
      { nome: "Blade Horn", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/e/e9/Blade_Horn.png" },
      { nome: "Dog Tail", quantidade: 3, imagem: "https://wiki.pokexgames.com/images/4/47/Dog_Tail.png" }
    ]
  },
  {
    id: "blank-trainer-student-card",
    nome: "Blank Trainer Student Card",
    imagem: "https://wiki.pokexgames.com/images/4/45/Blank_Trainer_Student_Card.png",
    tipo: "item", rank: "S", skill: 117, isBerrie: false,
    recursos: [
      { nome: "Study Notes", quantidade: 900, imagem: "https://wiki.pokexgames.com/images/e/e4/Study_Notes.png" },
      { nome: "Corrupted Cow Tail", quantidade: 80, imagem: "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif" },
      { nome: "Yellow Eyebrows", quantidade: 70, imagem: "https://wiki.pokexgames.com/images/a/a3/Yellow_Eyebrows.png" },
      { nome: "Corrupted Gem Star", quantidade: 70, imagem: "https://wiki.pokexgames.com/images/2/2d/Corrupted-Gem-Star.gif" },
      { nome: "Lovely Topknot", quantidade: 60, imagem: "https://wiki.pokexgames.com/images/e/e9/Lovely_Topknot.png" },
      { nome: "Corrupted Steelix Tail", quantidade: 20, imagem: "https://wiki.pokexgames.com/images/7/71/Corrupted-Steelix-Tail.gif" },
      { nome: "Catfish Whiskers", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/9/92/Catfish_Whiskers.png" },
      { nome: "Razor Claw", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/f/f6/Razor_Claw.png" },
      { nome: "Bear Feet", quantidade: 1, imagem: "https://wiki.pokexgames.com/images/e/ef/Bear_Feet.png" }
    ]
  },
  {
    id: "bookcase-s",
    nome: "Bookcase",
    imagem: "https://wiki.pokexgames.com/images/0/0b/Bookcase_Academico.png",
    tipo: "móvel", rank: "S", skill: 118, isBerrie: false,
    recursos: [
      { nome: "Study Notes", quantidade: 1500, imagem: "https://wiki.pokexgames.com/images/e/e4/Study_Notes.png" },
      { nome: "Black Lucky Charm", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/b/b0/Black_Lucky_Charm.png" },
      { nome: "Corrupted Feather", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/5/5f/Corrupted-Feather.gif" },
      { nome: "Corrupted Doll Star", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/f/f6/Corrupted-Doll-Star.gif" },
      { nome: "Corrupted Tree Branch", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/2/27/Corrupted-Tree-Branch.gif" },
      { nome: "Brown Ear", quantidade: 100, imagem: "https://wiki.pokexgames.com/images/5/53/Brown_Ear.png" },
      { nome: "Corrupted Cow Tail", quantidade: 50, imagem: "https://wiki.pokexgames.com/images/b/b2/Corrupted-Cow-Tail.gif" },
      { nome: "Mole Hair", quantidade: 25, imagem: "https://wiki.pokexgames.com/images/f/f3/Mole_Hair.png" },
      { nome: "Continent Thorn", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/1/17/Continent_Thorn.png" },
      { nome: "Beetle Horn", quantidade: 2, imagem: "https://wiki.pokexgames.com/images/a/a7/Beetle_Horn.png" }
    ]
  },
];

if (typeof window !== "undefined") window.CRAFTS = CRAFTS;
