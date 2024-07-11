import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Pedir = () => {

    const id = useParams().id
    const url = `https://api-lanchonete.vercel.app/pedir/${id}`

    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    // Fetch do para fazer Pedido

    useEffect(() => {
        const getPedido = async () => {
            const api = await fetch(url)
            const data = await api.json()
            console.log(data)
            setProduct(data)
        }

        getPedido()
    }, [])

    // Function para fazer pedido na api

    const fazerPedido = () => {
        const postPedido = async () => {
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })
        }

        postPedido()
        alert('Pedido Realizado só Aguarde!')
        navigate('/')
    }
    return (
        <>
            <h3>Seção Pedir</h3>
            <p>Nome: {product.name}</p>
            <p>Preço: {product.price}</p>
            <button onClick={fazerPedido}>Pedir</button>
        </>
    )
}

export default Pedir