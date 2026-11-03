import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export const PublicLayout = () => {

  return <>
    <Header />
    <main className="app-main background-primary">
      <Outlet />
    </main>
    <Footer />
  </>

}