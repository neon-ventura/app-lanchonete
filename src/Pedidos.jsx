import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Pedidos = () => {
    const url = "https://api-lanchonete.vercel.app/"

    const [requests, setRequests] = useState([])

    // Fetch para mostrar pedidos
    useEffect(() => {
        const getRequests = async () => {
            const api = await fetch(url)
            const data = await api.json()
            console.log(data.requests)
            setRequests(data.requests)
        }

        getRequests()
    }, [])

    return (
        <>
            <h2>Pedidos</h2>
            {requests.map((i) => (
                <h2>Nome: {i.name} - {i.price}</h2>
            ))}
            <Link to={'/'}><button>Voltar</button></Link>
        </>
    )
}

export default Pedidos