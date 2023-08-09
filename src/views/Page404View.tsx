import { Link } from "react-router-dom"
import Container from "../layouts/Container"

const Page404View = () => {
  return (
    <Container>
      <div className="h-screen flex justify-center items-center flex-col">
        <span className="text-9xl text-custom-primary">404</span>
        <span className="text-3xl text-custom-primary">Pagina no encontrada</span>
        <Link className="px-8 py-2 bg-custom-secondary text-custom-primary hover:bg-custom-secondary-active transition-colors ease-in-out duration-200 rounded-lg mt-4" to="/">Volver</Link>
      </div>
    </Container>
  )
}

export default Page404View