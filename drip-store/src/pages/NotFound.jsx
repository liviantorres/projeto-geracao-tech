import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <>
        <h3>Esta página não existe</h3>
        <Link to='/'>Voltar</Link>

    </> );
}
 
export default NotFound;