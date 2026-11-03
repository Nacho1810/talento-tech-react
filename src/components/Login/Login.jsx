import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { useAuth } from "../../context/AuthContext"

export const Login = () => {

  const { login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(formData.email, formData.password)
      navigate("/admin", { replace: true })
    } catch (error) {
      console.error("Error al iniciar sesión: ", error)
      alert("Error al iniciar sesión")
    }
  }

  return <section className="login-page">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <label htmlFor="login-email">Email</label>
      <input id="login-email" type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
      <label htmlFor="login-password">Password</label>
      <input id="login-password" type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
      <button type="submit">Ingresar</button>
    </form>
  </section>
}