const storeProducts = [
  // 🍎 የምግብ እቃዎች (Foods) - 10 እቃዎች
  { id: 1, name: "ፓስታ (Pasta)", price: 100, oldPrice: 110, category: "food", image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281298?w=300" },
  { id: 2, name: "ማካሮኒ (Macaroni)", price: 85, oldPrice: 100, category: "food", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300" },
  { id: 3, name: "ፉርኖ ዱቄት (Flour) 1kg", price: 95, oldPrice: 120, category: "food", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300" },
  { id: 4, name: "የምግብ ዘይት (Cooking Oil) 1L", price: 250, oldPrice: 280, category: "food", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300" },
  { id: 5, name: "ነጭ ሽንኩርት ቅመም", price: 80, oldPrice: 100, category: "food", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300" },
  { id: 6, name: "ስኳር (Sugar) 1kg", price: 110, oldPrice: 130, category: "food", image: "https://images.unsplash.com/photo-1581441363689-1f3c3c3dbff4?w=300" },
  { id: 7, name: "የበርበሬ ዱቄት", price: 180, oldPrice: 210, category: "food", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300" },
  { id: 8, name: "ሩዝ (Rice) 1kg", price: 140, oldPrice: 160, category: "food", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300" },
  { id: 9, name: "ጨው (Salt)", price: 40, oldPrice: 50, category: "food", image: "https://images.unsplash.com/photo-1518112390430-19c0f769bc65?w=300" },
  { id: 10, name: "ምስር ጥራጥሬ", price: 130, oldPrice: 150, category: "food", image: "https://images.unsplash.com/photo-1515942661994-bbf6377f290d?w=300" },

  // 💄 ኮስሞቲክስ እቃዎች (Cosmetics) - 10 እቃዎች
  { id: 11, name: "የፊት ክሬም (Face Cream)", price: 350, oldPrice: 400, category: "cosmetics", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300" },
  { id: 12, name: "የሰውነት ሎሽን (Body Lotion)", price: 400, oldPrice: 450, category: "cosmetics", image: "https://images.unsplash.com/photo-1608248597359-f538356f913d?w=300" },
  { id: 13, name: "ሻምፖ (Shampoo)", price: 250, oldPrice: 300, category: "cosmetics", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=300" },
  { id: 14, name: "የጥፍር ቀለም (Nail Polish)", price: 150, oldPrice: 180, category: "cosmetics", image: "https://images.unsplash.com/photo-1632345031435-8777f6b9be8b?w=300" },
  { id: 15, name: "ሊፕስቲክ (Lipstick)", price: 200, oldPrice: 240, category: "cosmetics", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300" },
  { id: 16, name: "ሳሙና (Beauty Soap)", price: 90, oldPrice: 110, category: "cosmetics", image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=300" },
  { id: 17, name: "የፀጉር ዘይት (Hair Oil)", price: 320, oldPrice: 370, category: "cosmetics", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=300" },
  { id: 18, name: "ሽቶ (Perfume Spray)", price: 550, oldPrice: 650, category: "cosmetics", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300" },
  { id: 19, name: "የፊት ማጽጃ (Face Wash)", price: 280, oldPrice: 330, category: "cosmetics", image: "https://images.unsplash.com/photo-1556228726-95c20b8dc6f9?w=300" },
  { id: 20, name: "የጥርስ ብሩሽ እና πάστα", price: 170, oldPrice: 200, category: "cosmetics", image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300" },

  // 🧹 የቤት ውስጥ ማጽጃዎች (Household) - 10 እቃዎች
  { id: 21, name: "ፈሳሽ ሳሙና (Detergent Liquid)", price: 180, oldPrice: 220, category: "household", image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300" },
  { id: 22, name: "የወለል ማጽጃ (Floor Cleaner)", price: 220, oldPrice: 260, category: "household", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300" },
  { id: 23, name: "የሰሃን ማጠቢያ ዱቄት", price: 120, oldPrice: 150, category: "household", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300" },
  { id: 24, name: "የልብስ ማጠቢያ ዱቄት (Omo) 1kg", price: 300, oldPrice: 350, category: "household", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300" },
  { id: 25, name: "የሽንት ቤት ማጽጃ (Harpic)", price: 240, oldPrice: 290, category: "household", image: "https://images.unsplash.com/photo-1584820927498-cfe5111fd8bf?w=300" },
  { id: 26, name: "የእቃ ማጠቢያ ስፖንጅ (Sponge)", price: 50, oldPrice: 70, category: "household", image: "https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?w=300" },
  { id: 27, name: "የቆሻሻ ከረጢት (Trash Bags)", price: 100, oldPrice: 130, category: "household", image: "https://images.unsplash.com/photo-1611284464311-6677f52504b2?w=300" },
  { id: 28, name: "የበረሮ መርዝ ስፕሬይ", price: 350, oldPrice: 400, category: "household", image: "https://images.unsplash.com/photo-1635830618290-7d653f55bfd6?w=300" },
  { id: 29, name: "የብርጭቆ ማጽጃ (Glass Cleaner)", price: 210, oldPrice: 250, category: "household", image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300" },
  { id: 30, name: "የአየር ማቀዝቀዣ (Air Freshener)", price: 270, oldPrice: 320, category: "household", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300" }
];
