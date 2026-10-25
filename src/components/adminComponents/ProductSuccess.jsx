import { Link, useParams } from "react-router-dom"
import "./ProductSuccess.css"

export const ProductSuccess = () => {
  const { id } = useParams()

  return <section className="product-success">
    <div className="product-success-card">
      <h2>Producto cargado con exito</h2>
      <p className="product-success-id">ID del producto: {id}</p>
      <p>Puede cargar otro producto haciendo click en el boton.</p>
      <div className="product-success-actions">
        {/* <Link to="/admin/dashboard">Volver al panel</Link>
        <Link to="/admin/products/new">Cargar otro producto</Link> */}
        <Link className="product-success-link" to="/admin">Cargar otro producto</Link>
      </div>
    </div>
  </section>

}