const storeProducts = [
  // 🍎 የምግብ እቃዎች (Foods) - 10 እቃዎች
  { id: 1, name: "ፓስታ (Pasta)", price: 90, oldPrice: 110, category: "food", image: "images.jfif" },
  { id: 2, name: "ማካሮኒ (Macaroni)", price: 85, oldPrice: 100, category: "food", image: "images.jfif" },
  { id: 3, name: "ፉርኖ ዱቄት (Flour) 1kg", price: 95, oldPrice: 120, category: "food", image: "images.jfif" },
  { id: 4, name: "የምግብ ዘይት (Cooking Oil) 1L", price: 250, oldPrice: 280, category: "food", image: "images.jfif" },
  { id: 5, name: "ነጭ ሽንኩርት ቅመም", price: 80, oldPrice: 100, category: "food", image: "images.jfif" },
  { id: 6, name: "ስኳር (Sugar) 1kg", price: 110, oldPrice: 130, category: "food", image: "images.jfif" },
  { id: 7, name: "የበርበሬ ዱቄት", price: 180, oldPrice: 210, category: "food", image: "images.jfif" },
  { id: 8, name: "ሩዝ (Rice) 1kg", price: 140, oldPrice: 160, category: "food", image: "images.jfif" },
  { id: 9, name: "ጨው (Salt)", price: 40, oldPrice: 50, category: "food", image: "images.jfif" },
  { id: 10, name: "ምስር ጥራጥሬ", price: 130, oldPrice: 150, category: "food", image: "images.jfif" },

  // 💄 ኮስሞቲክስ እቃዎች (Cosmetics) - 10 እቃዎች
  { id: 11, name: "የፊት ክሬም (Face Cream)", price: 350, oldPrice: 400, category: "cosmetics", image: "images.jfif" },
  { id: 12, name: "የሰውነት ሎሽን (Body Lotion)", price: 400, oldPrice: 450, category: "cosmetics", image: "images.jfif" },
  { id: 13, name: "ሻምፖ (Shampoo)", price: 250, oldPrice: 300, category: "cosmetics", image: "images.jfif" },
  { id: 14, name: "የጥፍር ቀለም (Nail Polish)", price: 150, oldPrice: 180, category: "cosmetics", image: "images.jfif" },
  { id: 15, name: "ሊፕስቲክ (Lipstick)", price: 200, oldPrice: 240, category: "cosmetics", image: "images.jfif" },
  { id: 16, name: "ሳሙና (Beauty Soap)", price: 90, oldPrice: 110, category: "cosmetics", image: "images.jfif" },
  { id: 17, name: "የፀጉር ዘይት (Hair Oil)", price: 320, oldPrice: 370, category: "cosmetics", image: "images.jfif" },
  { id: 18, name: "ሽቶ (Perfume Spray)", price: 550, oldPrice: 650, category: "cosmetics", image: "images.jfif" },
  { id: 19, name: "የፊት ማጽጃ (Face Wash)", price: 280, oldPrice: 330, category: "cosmetics", image: "images.jfif" },
  { id: 20, name: "የጥርስ ብሩሽ እና πάστα", price: 170, oldPrice: 200, category: "cosmetics", image: "images.jfif" },

  // 🧹 የቤት ውስጥ ማጽጃዎች (Household) - 10 እቃዎች
  { id: 21, name: "ፈሳሽ ሳሙና (Detergent Liquid)", price: 180, oldPrice: 220, category: "household", image: "images.jfif" },
  { id: 22, name: "የወለል ማጽጃ (Floor Cleaner)", price: 220, oldPrice: 260, category: "household", image: "images.jfif" },
  { id: 23, name: "የሰሃን ማጠቢያ ዱቄት", price: 120, oldPrice: 150, category: "household", image: "images.jfif" },
  { id: 24, name: "የልብስ ማጠቢያ ዱቄት (Omo) 1kg", price: 300, oldPrice: 350, category: "household", image: "images.jfif" },
  { id: 25, name: "የሽንት ቤት ማጽጃ (Harpic)", price: 240, oldPrice: 290, category: "household", image: "images.jfif" },
  { id: 26, name: "የእቃ ማጠቢያ ስፖንጅ (Sponge)", price: 50, oldPrice: 70, category: "household", image: "images.jfif" },
  { id: 27, name: "የ σκፈራ ቆሻሻ ከረጢት (Trash Bags)", price: 100, oldPrice: 130, category: "household", image: "images.jfif" },
  { id: 28, name: "የበረሮ መርዝ ስፕሬይ", price: 350, oldPrice: 400, category: "household", image: "images.jfif" },
  { id: 29, name: "የብርጭቆ ማጽጃ (Glass Cleaner)", price: 210, oldPrice: 250, category: "household", image: "images.jfif" },
  { id: 30, name: "የአየር ማቀዝቀዣ (Air Freshener)", price: 270, oldPrice: 320, category: "household", image: "images.jfif" }
];
