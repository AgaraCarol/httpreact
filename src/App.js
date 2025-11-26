<<<<<<< HEAD
import './App.css';
import {useState, useEffect } from "react"

// 4- custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3001/products"
=======

import './App.css';


import {useState, useEffect } from "react"

const url = "http://localhost:3000/products/"
>>>>>>> 185c657ca58f3d930aad169313d098ec7ef6a5d4

function App() {
const [products, setProducts] = useState([])

<<<<<<< HEAD
// 4 - custom
  const {data : items, httpConfig, loading, error }  =useFetch(url)


const [name, setName] = useState("")
const [price, setPrice] = useState("")


// // //1 * resgatando dados
// // useEffect(() => {
// //   async function fetchData() {  
// //       const res = await fetch(url)
// //       const data = await res.json();
// //       setProducts(data)
// //     }
// //     fetchData()  

// },[]);

  // 2- add de produto
const handleSubmit = async (e) => {
  e.preventDefault()

  const product = {
    name,
    price,
  };
  
  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(product),
  // });

  // // 3 - carregamento dinâmico
  // const addedProduct = await res.json();
  
  // setProducts((prevProducts) => [...prevProducts, addedProduct]);


  // 5- refatorando post 
  httpConfig(product, "POST")
  setName("");
  setPrice("");
};

// 8 - desafio 6 
const handleRemove = (id) => {
  httpConfig(id, "DELETE");
};
=======
//1 * resgatando dados
useEffect(() => {
  async function facthData() {
      const res = await fetch (url)
      const data = await res.json ();
      setProducts(data)
    }
    fetchData()

},[]);

console.log(products);
>>>>>>> 185c657ca58f3d930aad169313d098ec7ef6a5d4

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
<<<<<<< HEAD
      {/* Exibir erro */}
      {error && <p style={{color: 'red'}}>{error}</p>}

      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
           <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
            type="text" 
            value={name} 
            name="name" 
            onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input 
            type="number" 
            value={price} 
            name="price" 
            onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7 - state de loading no post */}
          <input type="submit" value={loading ? "Aguarde" : "Criar"} disabled={loading} />
        </form>
      </div>
=======
>>>>>>> 185c657ca58f3d930aad169313d098ec7ef6a5d4
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 185c657ca58f3d930aad169313d098ec7ef6a5d4
