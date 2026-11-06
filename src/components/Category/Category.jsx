import "./Category.css"

export const Category = ({ name }) => {
  return (
    <article className="category">
      <span>{name}</span>
    </article>
  )
}