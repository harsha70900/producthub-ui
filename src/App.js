// import { useState } from "react";
// import products from "./data";

// function App() {
//   const [search, setSearch] = useState("");

//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>ProductHub</h1>

//       <input
//         type="text"
//         placeholder="Search product..."
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filteredProducts.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>Price: ₹{item.price}</p>
//           <p>Category: {item.category}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import products from "./data";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>ProductHub</h1>

      <input
        type="text"
        placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px",
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((item) => (
          <div key={item.id} className="card">
  
  <img
    src={item.image}
    alt={item.name}
    style={{ width: "100%", 
      height: "150px",
      objectFit: "cover",
      borderRadius: "10px" }}
  />

  <h3>{item.name}</h3>
  <p>₹{item.price}</p>
  <p>{item.category}</p>
</div>
        ))}
      </div>
    </div>
  );
}

export default App;
