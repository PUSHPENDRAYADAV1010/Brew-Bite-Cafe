/* =========================================================
   BREW & BITE — MENU + CUSTOMIZATION + CART
   ========================================================= */

const menu = [
  {
    id: 1,
    name: "Classic Cappuccino",
    category: "Drinks",
    price: 140,
    description: "Rich espresso with silky steamed milk and creamy foam.",
    image:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian", "Under 300 cal"],
    options: [
      {
        title: "Choose your size",
        type: "single",
        key: "size",
        choices: [
          { name: "Small", price: 0 },
          { name: "Medium", price: 30 },
          { name: "Large", price: 60 },
        ],
      },
      {
        title: "Choose your milk",
        type: "single",
        key: "milk",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Oat Milk", price: 20 },
          { name: "Almond Milk", price: 20 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Espresso Shot", price: 30 },
          { name: "Vanilla Syrup", price: 20 },
          { name: "Whipped Cream", price: 25 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Iced Oat Latte",
    category: "Drinks",
    price: 180,
    description: "Smooth espresso with creamy oat milk served over ice.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegan", "Dairy-Free", "Under 300 cal"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Large", price: 40 },
        ],
      },
      {
        title: "Milk",
        type: "single",
        key: "milk",
        choices: [
          { name: "Oat Milk", price: 0 },
          { name: "Almond Milk", price: 20 },
          { name: "Coconut Milk", price: 20 },
        ],
      },
      {
        title: "Flavor",
        type: "single",
        key: "flavor",
        choices: [
          { name: "Classic", price: 0 },
          { name: "Vanilla", price: 20 },
          { name: "Hazelnut", price: 20 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Espresso Shot", price: 30 },
          { name: "Cold Foam", price: 25 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    category: "Drinks",
    price: 190,
    description: "Espresso, steamed milk and delicious caramel drizzle.",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Small", price: 0 },
          { name: "Medium", price: 30 },
          { name: "Large", price: 60 },
        ],
      },
      {
        title: "Milk",
        type: "single",
        key: "milk",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Oat Milk", price: 20 },
          { name: "Almond Milk", price: 20 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Caramel", price: 20 },
          { name: "Extra Espresso", price: 30 },
          { name: "Whipped Cream", price: 25 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Americano",
    category: "Drinks",
    price: 110,
    description: "Bold espresso balanced with hot water.",
    image:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegan", "Dairy-Free", "Under 300 cal"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Small", price: 0 },
          { name: "Medium", price: 25 },
          { name: "Large", price: 45 },
        ],
      },
      {
        title: "Temperature",
        type: "single",
        key: "temperature",
        choices: [
          { name: "Hot", price: 0 },
          { name: "Iced", price: 10 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Espresso Shot", price: 30 },
          { name: "Vanilla Syrup", price: 20 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Mocha",
    category: "Drinks",
    price: 170,
    description: "Espresso blended with chocolate and steamed milk.",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Small", price: 0 },
          { name: "Medium", price: 30 },
          { name: "Large", price: 55 },
        ],
      },
      {
        title: "Milk",
        type: "single",
        key: "milk",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Oat Milk", price: 20 },
          { name: "Almond Milk", price: 20 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Chocolate", price: 20 },
          { name: "Whipped Cream", price: 25 },
          { name: "Chocolate Chips", price: 20 },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Cold Brew",
    category: "Drinks",
    price: 160,
    description: "Slow-steeped coffee with a smooth and refreshing finish.",
    image:
      "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegan", "Dairy-Free", "Under 300 cal"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Large", price: 40 },
        ],
      },
      {
        title: "Sweetness",
        type: "single",
        key: "sweetness",
        choices: [
          { name: "No Sugar", price: 0 },
          { name: "Less Sweet", price: 0 },
          { name: "Regular", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Vanilla Syrup", price: 20 },
          { name: "Caramel Syrup", price: 20 },
          { name: "Cold Foam", price: 25 },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Matcha Latte",
    category: "Drinks",
    price: 190,
    description: "Premium Japanese-style matcha with creamy milk.",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian", "Under 300 cal"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Large", price: 40 },
        ],
      },
      {
        title: "Milk",
        type: "single",
        key: "milk",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Oat Milk", price: 20 },
          { name: "Almond Milk", price: 20 },
        ],
      },
      {
        title: "Sweetness",
        type: "single",
        key: "sweetness",
        choices: [
          { name: "No Sugar", price: 0 },
          { name: "Less Sweet", price: 0 },
          { name: "Regular", price: 0 },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Hot Chocolate",
    category: "Drinks",
    price: 150,
    description: "Creamy hot chocolate topped with a rich cocoa finish.",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Small", price: 0 },
          { name: "Medium", price: 25 },
          { name: "Large", price: 45 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Whipped Cream", price: 25 },
          { name: "Marshmallows", price: 20 },
          { name: "Chocolate Drizzle", price: 20 },
        ],
      },
    ],
  },

  {
    id: 9,
    name: "Butter Croissant",
    category: "Pastries",
    price: 110,
    description: "Flaky, golden French-style butter croissant.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Room Temperature", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Butter", price: 15 },
          { name: "Strawberry Jam", price: 20 },
          { name: "Chocolate Dip", price: 25 },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Chocolate Muffin",
    category: "Pastries",
    price: 120,
    description: "Soft chocolate muffin packed with rich chocolate chips.",
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Room Temperature", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Chocolate Chips", price: 20 },
          { name: "Chocolate Sauce", price: 20 },
          { name: "Whipped Cream", price: 25 },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Blueberry Muffin",
    category: "Pastries",
    price: 125,
    description: "Soft vanilla muffin filled with juicy blueberries.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Room Temperature", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Blueberry Sauce", price: 20 },
          { name: "Cream Cheese", price: 25 },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Cinnamon Roll",
    category: "Pastries",
    price: 150,
    description: "Soft cinnamon roll finished with sweet cream glaze.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Room Temperature", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Glaze",
        type: "single",
        key: "glaze",
        choices: [
          { name: "Classic", price: 0 },
          { name: "Extra Glaze", price: 20 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Walnuts", price: 25 },
          { name: "Caramel Drizzle", price: 20 },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Banana Bread",
    category: "Pastries",
    price: 130,
    description: "Moist homemade banana bread with warm cinnamon aroma.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Room Temperature", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Toppings",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Peanut Butter", price: 25 },
          { name: "Honey", price: 15 },
          { name: "Walnuts", price: 25 },
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Almond Danish",
    category: "Pastries",
    price: 145,
    description: "Buttery Danish pastry topped with roasted almonds.",
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Room Temperature", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Almond Butter", price: 25 },
          { name: "Honey Drizzle", price: 15 },
        ],
      },
    ],
  },

  {
    id: 15,
    name: "Avocado Toast",
    category: "Meals",
    price: 220,
    description: "Sourdough toast topped with smashed avocado and herbs.",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegan", "Dairy-Free"],
    options: [
      {
        title: "Bread",
        type: "single",
        key: "bread",
        choices: [
          { name: "Sourdough", price: 0 },
          { name: "Multigrain", price: 10 },
          { name: "Whole Wheat", price: 10 },
        ],
      },
      {
        title: "Toppings",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Cherry Tomatoes", price: 20 },
          { name: "Olives", price: 20 },
          { name: "Chilli Flakes", price: 10 },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Chicken Sandwich",
    category: "Meals",
    price: 260,
    description: "Grilled chicken, lettuce, tomato and house sauce.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    tags: ["Under 300 cal"],
    options: [
      {
        title: "Bread",
        type: "single",
        key: "bread",
        choices: [
          { name: "Classic Bun", price: 0 },
          { name: "Multigrain Bun", price: 15 },
          { name: "Whole Wheat Bun", price: 15 },
        ],
      },
      {
        title: "Cheese",
        type: "single",
        key: "cheese",
        choices: [
          { name: "No Cheese", price: 0 },
          { name: "Cheddar", price: 25 },
          { name: "Mozzarella", price: 25 },
        ],
      },
      {
        title: "Sauce",
        type: "single",
        key: "sauce",
        choices: [
          { name: "House Sauce", price: 0 },
          { name: "Spicy Mayo", price: 15 },
          { name: "BBQ Sauce", price: 15 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Chicken", price: 60 },
          { name: "Extra Cheese", price: 25 },
          { name: "Jalapenos", price: 15 },
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Veggie Grilled Sandwich",
    category: "Meals",
    price: 210,
    description: "Grilled sandwich loaded with fresh vegetables and cheese.",
    image:
      "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Bread",
        type: "single",
        key: "bread",
        choices: [
          { name: "White", price: 0 },
          { name: "Multigrain", price: 15 },
          { name: "Whole Wheat", price: 15 },
        ],
      },
      {
        title: "Cheese",
        type: "single",
        key: "cheese",
        choices: [
          { name: "No Cheese", price: 0 },
          { name: "Cheddar", price: 25 },
          { name: "Mozzarella", price: 25 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Vegetables", price: 20 },
          { name: "Jalapenos", price: 15 },
          { name: "Olives", price: 20 },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Pasta Alfredo",
    category: "Meals",
    price: 280,
    description: "Creamy Alfredo pasta finished with herbs and parmesan.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Pasta",
        type: "single",
        key: "pasta",
        choices: [
          { name: "Penne", price: 0 },
          { name: "Spaghetti", price: 0 },
          { name: "Fusilli", price: 10 },
        ],
      },
      {
        title: "Add-ons",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Mushrooms", price: 30 },
          { name: "Extra Cheese", price: 30 },
          { name: "Broccoli", price: 25 },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Chicken Pasta",
    category: "Meals",
    price: 320,
    description: "Creamy pasta with grilled chicken and Italian herbs.",
    image:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=900&q=80",
    tags: [],
    options: [
      {
        title: "Pasta",
        type: "single",
        key: "pasta",
        choices: [
          { name: "Penne", price: 0 },
          { name: "Spaghetti", price: 0 },
          { name: "Fusilli", price: 10 },
        ],
      },
      {
        title: "Sauce",
        type: "single",
        key: "sauce",
        choices: [
          { name: "Alfredo", price: 0 },
          { name: "Arrabbiata", price: 0 },
          { name: "Pesto", price: 20 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Chicken", price: 60 },
          { name: "Extra Cheese", price: 30 },
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Paneer Wrap",
    category: "Meals",
    price: 240,
    description:
      "Grilled paneer, fresh vegetables and creamy sauce in a soft wrap.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Wrap",
        type: "single",
        key: "wrap",
        choices: [
          { name: "Classic", price: 0 },
          { name: "Multigrain", price: 15 },
        ],
      },
      {
        title: "Spice Level",
        type: "single",
        key: "spice",
        choices: [
          { name: "Mild", price: 0 },
          { name: "Medium", price: 0 },
          { name: "Spicy", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Paneer", price: 50 },
          { name: "Cheese", price: 25 },
          { name: "Jalapenos", price: 15 },
        ],
      },
    ],
  },
  {
    id: 21,
    name: "Breakfast Bowl",
    category: "Meals",
    price: 230,
    description:
      "Fresh vegetables, grains, eggs and herbs in a wholesome bowl.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    tags: ["Under 300 cal"],
    options: [
      {
        title: "Base",
        type: "single",
        key: "base",
        choices: [
          { name: "Brown Rice", price: 0 },
          { name: "Quinoa", price: 25 },
          { name: "Mixed Greens", price: 0 },
        ],
      },
      {
        title: "Protein",
        type: "single",
        key: "protein",
        choices: [
          { name: "No Egg", price: 0 },
          { name: "Boiled Egg", price: 25 },
          { name: "Scrambled Egg", price: 35 },
        ],
      },
      {
        title: "Toppings",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Avocado", price: 35 },
          { name: "Corn", price: 15 },
          { name: "Olives", price: 20 },
        ],
      },
    ],
  },

  {
    id: 22,
    name: "Chocolate Chip Cookie",
    category: "Snacks",
    price: 80,
    description: "Freshly baked cookie with generous chocolate chunks.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Room Temperature", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Chocolate", price: 15 },
          { name: "Caramel Drizzle", price: 15 },
        ],
      },
    ],
  },
  {
    id: 23,
    name: "French Fries",
    category: "Snacks",
    price: 120,
    description: "Crispy golden fries seasoned with our signature blend.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegan", "Dairy-Free"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Large", price: 40 },
        ],
      },
      {
        title: "Seasoning",
        type: "single",
        key: "seasoning",
        choices: [
          { name: "Classic Salt", price: 0 },
          { name: "Peri Peri", price: 10 },
          { name: "Cheese Seasoning", price: 15 },
        ],
      },
      {
        title: "Dips",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Ketchup", price: 0 },
          { name: "Mayo Dip", price: 15 },
          { name: "Cheese Dip", price: 25 },
        ],
      },
    ],
  },
  {
    id: 24,
    name: "Nachos",
    category: "Snacks",
    price: 170,
    description: "Crunchy nachos served with salsa and creamy dip.",
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Cheese",
        type: "single",
        key: "cheese",
        choices: [
          { name: "No Cheese", price: 0 },
          { name: "Cheese", price: 30 },
          { name: "Extra Cheese", price: 50 },
        ],
      },
      {
        title: "Dips",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Salsa", price: 15 },
          { name: "Guacamole", price: 35 },
          { name: "Sour Cream", price: 25 },
        ],
      },
    ],
  },
  {
    id: 25,
    name: "Garlic Bread",
    category: "Snacks",
    price: 150,
    description: "Toasted bread with garlic butter and Italian herbs.",
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian"],
    options: [
      {
        title: "Style",
        type: "single",
        key: "style",
        choices: [
          { name: "Classic", price: 0 },
          { name: "Cheesy", price: 30 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Garlic Butter", price: 15 },
          { name: "Chilli Flakes", price: 10 },
          { name: "Cheese Dip", price: 25 },
        ],
      },
    ],
  },
  {
    id: 26,
    name: "Fruit Yogurt Bowl",
    category: "Snacks",
    price: 180,
    description: "Creamy yogurt with fresh seasonal fruits and granola.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian", "Under 300 cal"],
    options: [
      {
        title: "Yogurt",
        type: "single",
        key: "yogurt",
        choices: [
          { name: "Classic Yogurt", price: 0 },
          { name: "Greek Yogurt", price: 30 },
        ],
      },
      {
        title: "Toppings",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Granola", price: 20 },
          { name: "Honey", price: 15 },
          { name: "Mixed Nuts", price: 25 },
        ],
      },
    ],
  },

  {
    id: 27,
    name: "Pumpkin Spice Latte",
    category: "Seasonal",
    price: 210,
    description: "Seasonal espresso drink with pumpkin spice and creamy foam.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian", "Seasonal"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Large", price: 40 },
        ],
      },
      {
        title: "Milk",
        type: "single",
        key: "milk",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Oat Milk", price: 20 },
          { name: "Almond Milk", price: 20 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Extra Pumpkin Spice", price: 15 },
          { name: "Whipped Cream", price: 25 },
          { name: "Caramel Drizzle", price: 20 },
        ],
      },
    ],
  },
  {
    id: 28,
    name: "Strawberry Cream Frappe",
    category: "Seasonal",
    price: 220,
    description: "Cold blended strawberry drink with creamy topping.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian", "Seasonal"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Large", price: 40 },
        ],
      },
      {
        title: "Sweetness",
        type: "single",
        key: "sweetness",
        choices: [
          { name: "Less Sweet", price: 0 },
          { name: "Regular", price: 0 },
          { name: "Extra Sweet", price: 10 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Whipped Cream", price: 25 },
          { name: "Strawberry Sauce", price: 20 },
          { name: "Fresh Strawberries", price: 30 },
        ],
      },
    ],
  },
  {
    id: 29,
    name: "Mango Iced Tea",
    category: "Seasonal",
    price: 150,
    description: "Refreshing iced tea blended with ripe mango flavor.",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegan", "Dairy-Free", "Seasonal", "Under 300 cal"],
    options: [
      {
        title: "Size",
        type: "single",
        key: "size",
        choices: [
          { name: "Regular", price: 0 },
          { name: "Large", price: 30 },
        ],
      },
      {
        title: "Sweetness",
        type: "single",
        key: "sweetness",
        choices: [
          { name: "No Sugar", price: 0 },
          { name: "Less Sweet", price: 0 },
          { name: "Regular", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Lemon Slice", price: 10 },
          { name: "Mango Jelly", price: 25 },
        ],
      },
    ],
  },
  {
    id: 30,
    name: "Winter Berry Cheesecake",
    category: "Seasonal",
    price: 240,
    description: "Creamy cheesecake topped with seasonal berry compote.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian", "Seasonal"],
    options: [
      {
        title: "Serving",
        type: "single",
        key: "serving",
        choices: [
          { name: "Chilled", price: 0 },
          { name: "Slightly Warm", price: 0 },
        ],
      },
      {
        title: "Toppings",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Berry Sauce", price: 20 },
          { name: "Fresh Berries", price: 30 },
          { name: "Whipped Cream", price: 25 },
        ],
      },
    ],
  },
  {
    id: 31,
    name: "Caramel Apple Pie",
    category: "Seasonal",
    price: 190,
    description: "Warm apple pie with cinnamon and caramel topping.",
    image:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegetarian", "Seasonal"],
    options: [
      {
        title: "Preparation",
        type: "single",
        key: "preparation",
        choices: [
          { name: "Cold", price: 0 },
          { name: "Warm", price: 0 },
        ],
      },
      {
        title: "Extras",
        type: "multiple",
        key: "extras",
        choices: [
          { name: "Caramel Sauce", price: 20 },
          { name: "Vanilla Ice Cream", price: 40 },
          { name: "Whipped Cream", price: 25 },
        ],
      },
    ],
  },
];

let activeCategory = "All";
let activeFilter = "All";
let searchTerm = "";
let currentProduct = null;
let currentSelections = {};
let currentQuantity = 1;
let cart = [];
let orderType = "Dine-in";

const $ = (selector) => document.querySelector(selector);

const menuGrid = $("#menuGrid");
const emptyState = $("#emptyState");
const productModal = $("#productModal");
const cartDrawer = $("#cartDrawer");

function money(value) {
  return `₹${Math.round(value)}`;
}

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
}

function getVisibleItems() {
  return menu.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;
    const filterMatch =
      activeFilter === "All" || item.tags.includes(activeFilter);

    const searchable = [
      item.name,
      item.category,
      item.description,
      ...item.tags,
      ...item.options.flatMap((group) => [
        group.title,
        ...group.choices.map((choice) => choice.name),
      ]),
    ]
      .join(" ")
      .toLowerCase();

    const searchMatch =
      !searchTerm || searchable.includes(searchTerm.toLowerCase());

    return categoryMatch && filterMatch && searchMatch;
  });
}

function renderMenu() {
  const items = getVisibleItems();

  menuGrid.innerHTML = items
    .map(
      (item) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${item.image}"
          alt="${escapeHTML(item.name)} — ${escapeHTML(item.description)}"
          loading="lazy"
          decoding="async"
          width="900"
          height="675"
        >
        <span class="product-category">${escapeHTML(item.category)}</span>
      </div>

      <div class="product-info">
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.description)}</p>

        <div class="tags">
          ${item.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
        </div>

        <div class="product-bottom">
          <strong class="product-price">${money(item.price)}</strong>
          <button
            class="customize-btn"
            type="button"
            onclick="openItem(${item.id})"
            aria-label="Customize ${escapeHTML(item.name)}"
          >
            Customize
          </button>
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  emptyState.hidden = items.length !== 0;
}

function setActiveButtons(selector, dataAttribute, value) {
  document.querySelectorAll(selector).forEach((button) => {
    button.classList.toggle("active", button.dataset[dataAttribute] === value);
  });
}

function showCategory(category) {
  activeCategory = category;
  setActiveButtons(".category-btn", "category", category);
  renderMenu();

  document.querySelector("#menu").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetFilters() {
  activeCategory = "All";
  activeFilter = "All";
  searchTerm = "";
  $("#searchInput").value = "";

  setActiveButtons(".category-btn", "category", "All");
  setActiveButtons(".filter-btn", "filter", "All");

  renderMenu();
}

function calculateCurrentPrice() {
  if (!currentProduct) return 0;

  let price = currentProduct.price;

  currentProduct.options.forEach((group) => {
    if (group.type === "single") {
      const selected = currentSelections[group.key];
      const choice = group.choices.find((item) => item.name === selected);
      if (choice) price += choice.price;
    }

    if (group.type === "multiple") {
      const selected = currentSelections[group.key] || [];
      selected.forEach((name) => {
        const choice = group.choices.find((item) => item.name === name);
        if (choice) price += choice.price;
      });
    }
  });

  return price;
}

function renderCustomizationOptions() {
  const container = $("#customizationOptions");

  container.innerHTML = currentProduct.options
    .map((group, groupIndex) => {
      if (group.type === "single") {
        const selected = currentSelections[group.key];

        return `
        <div class="option-group">
          <h3>${escapeHTML(group.title)}</h3>
          <div class="option-grid">
            ${group.choices
              .map(
                (choice, choiceIndex) => `
              <button
                type="button"
                class="option-btn ${selected === choice.name ? "selected" : ""}"
                onclick="selectSingleOption(${groupIndex}, ${choiceIndex})"
              >
                ${escapeHTML(choice.name)}${choice.price ? ` +₹${choice.price}` : ""}
              </button>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
      }

      const selected = currentSelections[group.key] || [];

      return `
      <div class="option-group">
        <h3>${escapeHTML(group.title)}</h3>

        ${group.choices
          .map(
            (choice, choiceIndex) => `
          <div class="check-option">
            <label>
              <input
                type="checkbox"
                ${selected.includes(choice.name) ? "checked" : ""}
                onchange="toggleMultipleOption(${groupIndex}, ${choiceIndex}, this.checked)"
              >
              <span>${escapeHTML(choice.name)}</span>
            </label>
            <span class="option-price">${choice.price ? `+₹${choice.price}` : "Included"}</span>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
    })
    .join("");
}

function updateLivePrice() {
  const unitPrice = calculateCurrentPrice();
  $("#modalPrice").textContent = Math.round(unitPrice);
  $("#livePrice").textContent = Math.round(unitPrice * currentQuantity);
}

function openItem(id) {
  currentProduct = menu.find((item) => item.id === id);

  if (!currentProduct) return;

  currentQuantity = 1;
  currentSelections = {};

  currentProduct.options.forEach((group) => {
    if (group.type === "single") {
      currentSelections[group.key] = group.choices[0].name;
    } else {
      currentSelections[group.key] = [];
    }
  });

  $("#modalCategory").textContent = currentProduct.category;
  $("#modalName").textContent = currentProduct.name;
  $("#modalDescription").textContent = currentProduct.description;
  $("#modalImage").src = currentProduct.image;
  $("#modalImage").alt =
    `${currentProduct.name} — ${currentProduct.description}`;
  $("#quantity").textContent = currentQuantity;
  $("#specialInstructions").value = "";

  renderCustomizationOptions();
  updateLivePrice();

  productModal.hidden = false;
  document.body.classList.add("modal-open");

  setTimeout(() => $("#modalCloseBtn").focus(), 0);
}

function selectSingleOption(groupIndex, choiceIndex) {
  const group = currentProduct.options[groupIndex];
  currentSelections[group.key] = group.choices[choiceIndex].name;

  renderCustomizationOptions();
  updateLivePrice();
}

function toggleMultipleOption(groupIndex, choiceIndex, checked) {
  const group = currentProduct.options[groupIndex];
  const selected = currentSelections[group.key] || [];
  const name = group.choices[choiceIndex].name;

  if (checked && !selected.includes(name)) {
    selected.push(name);
  }

  if (!checked) {
    currentSelections[group.key] = selected.filter((item) => item !== name);
  }

  updateLivePrice();
}

function changeQuantity(amount) {
  currentQuantity = Math.max(1, Math.min(20, currentQuantity + amount));
  $("#quantity").textContent = currentQuantity;
  updateLivePrice();
}

function closeProductModal() {
  productModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function addToCart() {
  if (!currentProduct) return;

  const unitPrice = calculateCurrentPrice();
  const instructions = $("#specialInstructions").value.trim();

  const cartItem = {
    cartId: `${currentProduct.id}-${Date.now()}`,
    productId: currentProduct.id,
    name: currentProduct.name,
    price: unitPrice,
    quantity: currentQuantity,
    selections: structuredClone(currentSelections),
    instructions,
  };

  cart.push(cartItem);
  updateCart();

  closeProductModal();
  openCart();

  showToast(`${currentProduct.name} added to cart`);
}
function showOrderSuccess(orderNumber, orderType, estimatedTime) {
    const oldModal = document.getElementById("orderSuccessModal");

    if (oldModal) {
        oldModal.remove();
    }

    const modal = document.createElement("div");
    modal.id = "orderSuccessModal";
    modal.className = "order-success-overlay";

    modal.innerHTML = `
        <div class="order-success-card">

            <button class="success-close" aria-label="Close">
                &times;
            </button>

            <div class="success-icon">
                ✓
            </div>

            <h2>Order Confirmed!</h2>

            <p class="success-thankyou">
                Thank you for ordering with us! ☕
            </p>

            <div class="order-details-box">

                <div class="order-detail">
                    <span>Order Number</span>
                    <strong>#${orderNumber}</strong>
                </div>

                <div class="order-detail">
                    <span>Order Type</span>
                    <strong>${orderType}</strong>
                </div>

                <div class="order-detail">
                    <span>Estimated Ready Time</span>
                    <strong>${estimatedTime}</strong>
                </div>

            </div>

            <p class="success-message">
                Your delicious order is being prepared with care.
                Please keep your order number handy for collection.
            </p>

            <p class="success-love">
                We hope you enjoy every sip & bite! ❤️
            </p>

            <p class="success-footer">
                Thank you for visiting us.<br>
                <strong>Visit again soon! ☕✨</strong>
            </p>

            <button class="success-continue">
                Continue Shopping
            </button>

        </div>
    `;

    document.body.appendChild(modal);

    document.body.style.overflow = "hidden";

    const closeModal = () => {
        modal.remove();
        document.body.style.overflow = "";
    };

    modal.querySelector(".success-close").addEventListener("click", closeModal);

    modal.querySelector(".success-continue").addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}
function getSelectionText(item) {
  const parts = [];

  Object.entries(item.selections).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length) {
      parts.push(value.join(", "));
    } else if (value) {
      parts.push(value);
    }
  });

  if (item.instructions) {
    parts.push(`Note: ${item.instructions}`);
  }

  return parts.join(" • ");
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = count;

  if (!cart.length) {
    $("#cartItems").innerHTML = `
      <div class="cart-empty">
        <div style="font-size:40px">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add something delicious from the menu.</p>
      </div>
    `;
  } else {
    $("#cartItems").innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <div class="cart-item-top">
          <h3>${escapeHTML(item.name)}</h3>
          <strong>${money(item.price * item.quantity)}</strong>
        </div>

        <p class="cart-meta">${escapeHTML(getSelectionText(item))}</p>

        <div class="cart-controls">
          <div class="mini-qty">
            <button type="button" onclick="changeCartQuantity('${item.cartId}', -1)" aria-label="Decrease ${escapeHTML(item.name)}">−</button>
            <span>${item.quantity}</span>
            <button type="button" onclick="changeCartQuantity('${item.cartId}', 1)" aria-label="Increase ${escapeHTML(item.name)}">+</button>
          </div>

          <button class="remove-btn" type="button" onclick="removeFromCart('${item.cartId}')">
            Remove
          </button>
        </div>
      </div>
    `,
      )
      .join("");
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  $("#subtotal").textContent = subtotal;
  $("#tax").textContent = tax;
  $("#total").textContent = total;
}

function changeCartQuantity(cartId, amount) {
  const item = cart.find((entry) => entry.cartId === cartId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(cartId);
    return;
  }

  item.quantity = Math.min(item.quantity, 20);
  updateCart();
}

function removeFromCart(cartId) {
  cart = cart.filter((item) => item.cartId !== cartId);
  updateCart();
}

function openCart() {
  cartDrawer.hidden = false;
}

function closeCart() {
  cartDrawer.hidden = true;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function scrollToMenu() {
  $("#menu").scrollIntoView({ behavior: "smooth" });
}

function placeOrder() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }

  // Generate order number
  const orderNumber = Math.floor(1000 + Math.random() * 9000);

  // Set estimated time according to order type
  let estimatedTime;

  if (orderType === "Dine-in") {
    estimatedTime = "15–20 minutes";
  } else if (orderType === "Takeout") {
    estimatedTime = "15–20 minutes";
  } else if (orderType === "Pickup") {
    estimatedTime = "20–25 minutes";
  } else {
    estimatedTime = "15–20 minutes";
  }

  // Close cart first
  closeCart();

  // Show beautiful confirmation modal
  showOrderSuccess(
    orderNumber,
    orderType,
    estimatedTime
  );

  // Clear cart
  cart = [];
  updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  updateCart();

  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      setActiveButtons(".category-btn", "category", activeCategory);
      renderMenu();
    });
  });

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      setActiveButtons(".filter-btn", "filter", activeFilter);
      renderMenu();
    });
  });

  $("#searchInput").addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderMenu();
  });

  $("#modalCloseBtn").addEventListener("click", closeProductModal);
  $("#cartOpenBtn").addEventListener("click", openCart);
  $("#cartCloseBtn").addEventListener("click", closeCart);
  $("#addCartBtn").addEventListener("click", addToCart);
  $("#checkoutBtn").addEventListener("click", placeOrder);

  document.querySelectorAll(".order-type-btn").forEach((button) => {
    button.addEventListener("click", () => {
      orderType = button.dataset.orderType;

      document.querySelectorAll(".order-type-btn").forEach((btn) => {
        btn.classList.toggle("active", btn === button);
      });
    });
  });

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) closeProductModal();
  });

  cartDrawer.addEventListener("click", (event) => {
    if (event.target === cartDrawer) closeCart();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProductModal();
      closeCart();
    }
  });
});
