import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const url = "https://api-lanchonete.vercel.app/"


  const [products, setProducts] = useState([])

  // Fetch dos Produtos...

  useEffect(() => {
    const getProducts = async () => {
      const api = await fetch(url)
      const data = await api.json()
      setProducts(data.products)
      console.log(data.products)
    }

    getProducts()
  }, [])

  return (
    <>
    <h2>Produtos</h2>
      {products.map((i) => (
        <h2 key={i.id}><Link to={`/pedir/${i.id}`}>{i.name} - {i.price}</Link></h2>
      ))}

      <Link to={'/verpedidos'}><button>Ver Todos os Pedidos</button></Link>
    </>
  )
}

export default Home