import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
];

function ProductsPage(){
    return (
        <div>
            <h1>Products Page</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={`products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsPage;