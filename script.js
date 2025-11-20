
const categories = ["Mobiles", "Laptops", "Computer", "TV", "Refrigerator", "Washing Machine", "Water Purifier", "Home Inverter", "Sound Bar", "Wireless headphone", "Microwave"];

const products = [
  {name:"Motorola Edge 60 Pro", desc:"5 star rated phone in India and best smartphone under 30000.", rating:4.3, reviews:"2917 reviews", price:"₹27,999", image:"/images/Motorola.jpg", flipkart:"#", amazon:"#", category:"Mobiles"},
  {name:"Lenovo V15 AMD Ryzen 5 Quad Core", desc:"Best Thin and Light Laptop under 50000", rating:4.1, reviews:"154 reviews", price:"₹37,990", image:"/images/Lenovo.jpg", flipkart:"#", amazon:"#", category:"Laptops"},
  {name:"Lenovo All in one N100", desc:"best all-in-one desktop in India", rating:4.7, reviews:"1 reviews", price:"₹32690", image:"/images/All-in-one desktop.jpg", flipkart:"#", amazon:"#", category:"Computer"},
  {name:"Panasonic 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV", desc:"Best smart tv under 50000 .", rating:4.3, reviews:"56 reviews", price:"₹28550", image:"/images/SmartTV.jpg", flipkart:"#", amazon:"#", category:"TV"},
  {name:"Samsung 236 L Frost Free Double Door 3 Star Convertible Refrigerator ", desc:"Best Refrigerator under 30000.", rating:4.4, reviews:"2153 reviews", price:"₹25490", image:"/images/Refrigerator.jpg", flipkart:"#", amazon:"#", category:"Refrigerator"},
  {name:"Samsung Washing Machine 8kg", desc:"Fully Automatic Top Load Washing Machine under 30000.", rating:4.3, reviews:"6680 reviews", price:"₹19490", image:"/images/Samsung.jpg", flipkart:"#", amazon:"#", category:"Washing Machine"},
  {name:"Aquaguard Delight NXT Aquasaver", desc:"Best rated water Purifier.", rating:4.3, reviews:"12,540 reviews", price:"₹9497", image:"/images/WaterPurifier.jpg", flipkart:"#", amazon:"#", category:"Water Purifier"},
  {name:"LUMINOUS 60 Months Warranty Tubular Inverter Battery", desc:"Best reliable inverter brand for home", rating:4.4, reviews:"1581 reviews", price:"₹20925", image:"/images/Home_Inverter.jpg", flipkart:"#", amazon:"#", category:"Home Inverter"},
  {name:"MOTOROLA AmphisoundX 200 W Bluetooth Soundbar", desc:"Best rated sound bar", rating:4.3, reviews:"1,102 reviews", price:"₹5499", image:"/images/Soundbar.jpg", flipkart:"#", amazon:"#", category:"Sound Bar"},
  {name:"Bose New QuietComfort Ultra Headphones", desc:"Best brand for wireless headphones", rating:4.3, reviews:"17 reviews", price:"₹35,900", image:"/images/Wireless_headphones.jpg", flipkart:"#", amazon:"#", category:"Wireless headphone"},
  {name:"Samsung 28 L Grill Microwave Oven", desc:"Best oven company", rating:4.3, reviews:"1056 reviews", price:"₹12490", image:"/images/Microwave.jpg", flipkart:"#", amazon:"#", category:"Microwave"}
];

function loadCategories() {
  const catDiv = document.getElementById("categories");
  categories.forEach(c => {
    const el = document.createElement("div");
    el.className = "cat";
    el.textContent = c;
    el.onclick = () => { document.getElementById('search').value = c; filterProducts(); };
    catDiv.appendChild(el);
  });
}

function loadProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h2>${p.name}</h2>
        <p>${p.desc}</p>
        <div>⭐⭐⭐⭐⭐</div>
        <div style="color:gray;font-size:14px">${p.reviews}</div>
        <div style="color:green;font-weight:bold;">${p.price}</div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <a href="${p.amazon}" target="_blank"><img src="/images/amazon-logo.png" height="30"></a>
          <a href="${p.flipkart}" target="_blank"><img src="/images/flipkart-logo.png" height="30"></a>
        </div>
      </div>`;
  });
}

function filterProducts() {
  const q = document.getElementById("search").value.toLowerCase();
  loadProducts(products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
}

loadCategories();
loadProducts(products);
