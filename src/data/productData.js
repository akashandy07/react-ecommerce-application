const productData = [
  // ================= SHIRTS (1–30) =================
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Men Cotton Shirt ${i + 1}`,
    price: 1299 + (i % 5) * 100,
    category: "shirt",
    description:
      "Premium cotton shirt with breathable fabric. Suitable for casual and daily wear.",
    image: "/images/shirt.jpeg",
  })),

  // ================= PANTS (31–55) =================
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 31,
    name: `Men Slim Fit Pant ${i + 1}`,
    price: 1799 + (i % 5) * 150,
    category: "pant",
    description:
      "Stylish slim-fit pant made with stretchable fabric for comfort and durability.",
    image: "/images/pant.jpeg",
  })),

  // ================= JACKETS (56–80) =================
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 56,
    name: `Men Winter Jacket ${i + 1}`,
    price: 2499 + (i % 5) * 300,
    category: "jacket",
    description:
      "Warm and lightweight jacket designed for winter protection and modern style.",
    image: "/images/jacket.jpeg",
  })),
];

export default productData;
