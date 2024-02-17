import React, {useEffect, useState} from 'react'
import ProductCard from './productCard';

function GridCardComponent() {

    const [fruits, setFruits] = useState([]);

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
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-center">Tienda de frutas NTT</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {fruits && fruits.map((fruit) => (
                    <ProductCard
                        key={fruit.id}
                        imageUrl={fruit.imageUrl}
                        productName={fruit.name}
                        price={fruit.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default GridCardComponent;
