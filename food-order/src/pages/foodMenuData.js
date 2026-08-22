export const foods = [
  {
    id: 1,
    name: "Nasi Goreng",
    price: 25000,
    desc: "Nasi goreng spesial dengan telur dan ayam panggang.",
    category: "Makanan Utama",
    color: "#fef3c7",
  },
  {
    id: 2,
    name: "Mie Ayam",
    price: 20000,
    desc: "Mie dengan ayam, pangsit, dan sawi segar.",
    category: "Makanan Utama",
    color: "#dbeafe",
  },
  {
    id: 3,
    name: "Bakso",
    price: 22000,
    desc: "Bakso kenyal dengan kuah gurih dan bawang goreng.",
    category: "Makanan Utama",
    color: "#dcfce7",
  },
  {
    id: 4,
    name: "Sate Ayam",
    price: 30000,
    desc: "Sate ayam bumbu khas dengan lontong dan sambal.",
    category: "Makanan Utama",
    color: "#fee2e2",
  },
  {
    id: 5,
    name: "Es Teh",
    price: 5000,
    desc: "Minuman dingin yang menyegarkan untuk menemani santapan.",
    category: "Minuman",
    color: "#e0f2fe",
  },
  {
    id: 6,
    name: "Es Jeruk",
    price: 7000,
    desc: "Jeruk segar dan manis dengan tingkat keasaman yang pas.",
    category: "Minuman",
    color: "#fef9c3",
  },
  {
    id: 7,
    name: "Ayam Geprek",
    price: 28000,
    desc: "Ayam goreng renyah dengan sambal geprek pedas dan nasi hangat.",
    category: "Makanan Utama",
    color: "#fed7aa",
  },
  {
    id: 8,
    name: "Pecel Lele",
    price: 26000,
    desc: "Lele goreng renyah dengan sambal tomat dan lalapan segar.",
    category: "Makanan Utama",
    color: "#bbf7d0",
  },
  {
    id: 9,
    name: "Cappuccino",
    price: 18000,
    desc: "Kopi kental dengan busa lembut cocok untuk santai.",
    category: "Minuman",
    color: "#e9d5ff",
  },
  {
    id: 10,
    name: "Lemon Tea",
    price: 12000,
    desc: "Minuman teh dengan rasa lemon segar dan menyegarkan.",
    category: "Minuman",
    color: "#d1fae5",
  },
  {
    id: 11,
    name: "Kentang Goreng",
    price: 15000,
    desc: "Kentang goreng renyah dengan saus sambal dan mayones.",
    category: "Snack",
    color: "#fde68a",
  },
  {
    id: 12,
    name: "Brownis Cokelat",
    price: 14000,
    desc: "Brownis lembut dan manis dengan rasa cokelat yang nikmat.",
    category: "Dessert",
    color: "#f5d0fe",
  },
];

export const categories = [
  "Semua Kategori",
  "Makanan Utama",
  "Minuman",
  "Snack",
  "Dessert",
];

export const sortOptions = [
  { value: "nama", label: "Nama A-Z" },
  { value: "harga-terendah", label: "Harga: Terendah" },
  { value: "harga-termahal", label: "Harga: Tertinggi" },
];

export const getFilteredFoods = ({ searchTerm = "", category = "Semua Kategori", sortBy = "nama" }) => {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  let filteredFoods = foods.filter((food) => {
    const matchesCategory = category === "Semua Kategori" || food.category === category;
    const matchesSearch =
      !normalizedSearch ||
      food.name.toLowerCase().includes(normalizedSearch) ||
      food.desc.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  filteredFoods = [...filteredFoods].sort((a, b) => {
    switch (sortBy) {
      case "harga-terendah":
        return a.price - b.price;
      case "harga-termahal":
        return b.price - a.price;
      case "nama":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return filteredFoods;
};
