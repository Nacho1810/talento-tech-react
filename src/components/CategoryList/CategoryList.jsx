import { Link } from "react-router-dom"
import { Category } from "../Category/Category"
import "./CategoryList.css"

export const CategoryList = ({ categories}) => {
  return <div className="category-list">
    <Link className="category-link" to="/">Todas</Link>
    {categories
      .map((name) => (
        <Link className="category-link" to={`/category/${name}`} key={name}>
          <Category name={name} />
        </Link>)
      )
    }
  </div>
}