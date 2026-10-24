import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById, getProducts } from "../../services/productsService";

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [itemDetail, setItemDetail] = useState(null);
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItemDetail(null)
    setLoading(true)
    setErrors(null)

    getProductById(id)
      .then(item => {setItemDetail(item)})
      .catch(error => setErrors(error.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="status-message">Cargando</p>
  if (errors) return <p className="status-message">{errors}</p>
  if (!itemDetail) return <p className="status-message">Producto no encontrado</p>

  return <>
    <section>
      <h1>Detalle del producto</h1>
      <div> <ItemDetail itemDetail={itemDetail} /> </div>
    </section>
  </>;
}