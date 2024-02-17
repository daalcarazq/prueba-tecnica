import React, {useState} from 'react';
import QuantitySelector from './quantitySelector';

function ProductCard({ imageUrl, productName, price, amount}) {
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [confirmationMessage, setConfirmationMessage] = useState('');
  
    const handleIncrease = () => {
        if (quantity < amount) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };
  
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
  
    const handleAddToCart = () => {
        setShowModal(true);
    };
  
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmAddToCart = () => {
        //en un entorno real se haría una petición al servidor para la modificación
        //en este caso para evitar estar modificando los datos de la bd no se hace la petición
        console.log(`Actualización de inventario para ${productName}: ${amount-quantity}`)
        setShowModal(false);
        setQuantity(1);
        setConfirmationMessage(`¡${quantity} ${productName}s agregado(s) al carrito!`);
        setTimeout(() => {
          setConfirmationMessage('');
        }, 3000);
    }

    return (
        <div className="max-w-48 rounded overflow-hidden shadow-lg">
            <div className="relative group">
                <img className="w-full h-40 w-40 transition-transform duration-300 transform group-hover:scale-105" src={imageUrl} alt={productName} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50">
                    <button className="bg-white text-gray-800 py-2 px-4 rounded" onClick={handleAddToCart}>Agregar al carrito</button>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{productName}</div>
                <p className="text-gray-700 text-base">Precio: ${price}</p>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Seleccionar cantidad</h2>
                        <QuantitySelector
                            quantity={quantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                        />
                        <div className="mt-4 flex justify-end">
                            <button className="bg-gray-200 px-4 py-2 rounded mr-2" onClick={handleCloseModal}>Cancelar</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleConfirmAddToCart}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            )}
            {confirmationMessage && (
                <div className="bg-green-200 text-green-800 px-4 py-2 mt-2 rounded">{confirmationMessage}</div>
            )}
        </div>
    );
}

export default ProductCard;