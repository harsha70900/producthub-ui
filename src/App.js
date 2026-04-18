
import { useState, useEffect } from "react";
// import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.category.toLowerCase().includes(search.toLowerCase())
);
  useEffect(() => {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <div
  style={{
    background: "#1e293b",
    color: "white",
    padding: "15px 20px",
    borderRadius: "10px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
  }}
>
  <h2>ProductHub</h2>
  <span>Explore Products</span>
</div>

      <input
  type="text"
  placeholder="Search product..."
  onChange={(e) => setSearch(e.target.value)}
  className="search"
/>
      <div style={{ marginBottom: "20px" }}>
  <button onClick={() => setSearch("")}>All</button>
<button onClick={() => setSearch("Fruits")}>Fruits</button>
<button onClick={() => setSearch("Grains")}>Grains</button>
</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((item) => (
          <div key={item.id} className="card">
  
                <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <h3 style={{ margin: "10px 0" }}>{item.name}</h3>
                  <p style={{ fontWeight: "bold" }}>₹{item.price}</p>
                  <p style={{ color: "gray" }}>{item.category}</p>
            </div>
    ))}
       {filteredProducts.length === 0 && (
    <p>No products found</p>
  )}
  </div>
    </div>
  );
}
export default App;
