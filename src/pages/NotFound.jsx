import { useRouteError, Link } from "react-router-dom"

const NotFound = () => {
   const error = useRouteError()
   console.log(error.status)
   return (
    <div>
        <h1>{error.status}</h1>
        <p>{error.statusText || error.error.message}</p>
        <Link to="/">Volver al Home</Link>
    </div>
   )
}

export default NotFound
