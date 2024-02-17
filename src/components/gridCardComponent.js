import React, {useEffect, useState} from 'react'
import ProductCard from './productCard';
import { useRouter } from 'next/navigation'

function GridCardComponent() {
    const [fruits, setFruits] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchFruits = async () => {
            try {
                //json-server initializated in the port 3001
                const response = await fetch('http://localhost:3001/fruits');
                const data = await response.json();
                setFruits(data)
            } catch (error) {
                console.error('Error al obtener frutas:', error);
            }
        };

        fetchFruits();
    }, [])

    const handleLogout = () => {
        router.push('/');
    };
    
    return (
        <div>
            <button className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogout}>Cerrar sesión</button>
            <h1 className="text-3xl font-bold mb-4 text-center">Tienda de frutas NTT</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {fruits && fruits.map((fruit) => (
                    <ProductCard
                        key={fruit.id}
                        imageUrl={fruit.imageUrl}
                        productName={fruit.name}
                        price={fruit.price}
                        amount={fruit.amount}
                    />
                ))}
            </div>
        </div>
    )
}

export default GridCardComponent;
