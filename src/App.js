import './App.css';
import { useState } from "react"
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3001/products"

function App() {
  const [products, setProducts] = useState([])
  const {data: items, httpConfig, loading, error} = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };
    
    httpConfig(product, "POST")
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      
      {error && <p style={{color: 'red'}}>{error}</p>}
      {loading && <p>Carregando dados...</p>}
      
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
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
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input 
              type="number" 
              value={price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value={loading ? "Aguarde" : "Criar"} disabled={loading} />
        </form>
      </div>
    </div>
  );
}

export default App;