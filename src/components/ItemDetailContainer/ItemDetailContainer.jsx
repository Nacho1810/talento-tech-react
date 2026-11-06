import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById, getProducts } from "../../services/productsService";
import { useCart } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  const { addItem } = useCart()

  const { id } = useParams()
  const [itemDetail, setItemDetail] = useState(null);
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setItemDetail(null)
    setLoading(true)
    setErrors(null)
    setQuantity(1)

    getProductById(id)
      .then(item => { setItemDetail(item) })
      .catch(error => setErrors(error.message))
      .finally(() => setLoading(false))
  }, [id])

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Para que haya menos lógica en el itemDetail y invocar dos funciones a la vez
  const addToCart = () => {
    addItem(itemDetail, quantity)
    setQuantity(1)
  }

  if (loading) return <p className="status-message">Cargando</p>
  if (errors) return <p className="status-message">{errors}</p>
  if (!itemDetail) return <p className="status-message">Producto no encontrado</p>

  return <>
    <section>
      <h1>Detalle del producto</h1>
      <div> <ItemDetail itemDetail={itemDetail} quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} addToCart={addToCart} /> </div>
    </section>
  </>;
}