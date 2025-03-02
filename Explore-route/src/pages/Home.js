import { Link, useNavigate } from 'react-router-dom';

function HomePage (){
    const navigate = useNavigate();

    function navigateToProducts(){
        navigate('/products');
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>Go to <Link to="/products">products page</Link>.</p>
            <button onClick={navigateToProducts}>Go to Products</button>
        </div>
    )
}
export default HomePage;