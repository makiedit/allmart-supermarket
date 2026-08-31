// 1. የ Firebase Realtime Database URL አድራሻህ
const DATABASE_URL = "https://allmart-shop-c5301-default-rtdb.firebaseio.com";

// 2. እቃዎችን ከ Firebase አምጥቶ በዌብሳይቱ ላይ የሚያሳይ Function
async function fetchProducts() {
  const productContainer = document.getElementById("product-list"); // እቃዎች የሚቀመጡበት ቦታ ID

  if (!productContainer) return;

  try {
    const response = await fetch(`${DATABASE_URL}/.json`);
    const data = await response.json();

    productContainer.innerHTML = ""; // ነባሪውን ይዘት ማጽጃ

    if (!data) {
      productContainer.innerHTML = "<p>ምንም እቃ አልተገኘም።</p>";
      return;
    }

    // ከ Firebase የሚመጡ እቃዎችን ዝርዝር ማዘጋጀት
    const products = Array.isArray(data) ? data : Object.values(data);

    products.forEach((product) => {
      if (!product) return;

      // ፎቶ ካልተገኘ ነባሪ ምስል እንዲጠቀም ማድረግ (Fallback Image)
      const imageSrc =
        product.image && product.image.trim() !== ""
          ? product.image
          : "https://via.placeholder.com/150";

      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
        <img src="${imageSrc}" alt="${product.name || "እቃ"}" onerror="this.src='https://via.placeholder.com/150'">
        <h3>${product.name || "ስም የለውም"}</h3>
        <p class="category">${product.category || "ካቴጎሪ የለውም"}</p>
        <p class="price">${product.price || 0} ብር</p>
      `;

      productContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    productContainer.innerHTML = "<p>እቃዎችን መጫን አልተቻለም።</p>";
  }
}

// ገጹ ሲከፈት ኮዱ እንዲሰራ ማድረግ
document.addEventListener("DOMContentLoaded", fetchProducts);
