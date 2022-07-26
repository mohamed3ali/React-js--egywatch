import React, { useContext } from 'react';
import "../component/products.css";
import { Link } from 'react-router-dom';
import { DataContext } from "./DataProvider"
function Productss() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    return (
        <header>
            <div className="products">
                {
                    products.map(product => (
                        <div className="card" key={product.id}>
                            <Link to={`/products/${product._id}`}>
                                <img src={product.images[0]} alt="product.images" className='msd' />
                            </Link>
                            <div className="box">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                                </h3>
                                <p>
                                    {product.description}{product.description} </p>
                                <h4>${product.price}</h4>
                                <button onClick={() => addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))

                }


            </div>
        </header>
    )
}
export default Productss