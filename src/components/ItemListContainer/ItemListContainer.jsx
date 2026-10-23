import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(true);

  const { category } = useParams()


  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar productos")
        }
        return res.json()
      })
      .then((data) => {
        if (category) {
          const filterByCategoryProducts = data.filter(prod => prod.category === category)
          setProducts(filterByCategoryProducts);
        } else {
          setProducts(data)
        }
      })
      .catch(error => setErrors(error.message))
      .finally(() => setLoading(false))
  }, [category])

  if (loading) return <p className="status-message">Cargando</p>
  if (errors) return <p className="status-message">{errors}</p>

  return <section className="products-page">
    <h1>Productos</h1>
    {/*prop_llamada_products = array_llamado_products */}
    <ItemList products={products} />

  </section>;
}
