import "./Item.css"

export const Item = ( {name, price, description, image, children} ) => {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={name} />
      <h3>{name}</h3>
      <p className="card-description">{description}</p>
      <p className="div-price">${price}</p>
      {children}
    </article>
  )
}