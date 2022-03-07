import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import LayoutDefault from './../layout/index';
import styles from './../styles/Shop.module.scss'
import { useState, useEffect } from 'react';
// import { photoData } from '../photoData';
import axios from 'axios';

export default function Shop({ product }) {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([])

    const getAllProducts = async() => {
        const { data: products } = await axios.get('http://localhost:3000/products')
        setProducts(products)
    }

    useEffect(() => {
        getAllProducts()
    },[])

     return (
  
      <LayoutDefault>
        <div className={styles.container}>
        <h1>Shop</h1>
        </div>

        {/*Map of photoData 
        <div className={styles.photoWrapper}>
            {
                photoData.map((pic) =>(
                    <div className={styles.photoList} key={pic.id}>
                        <img
                            src={pic.image}
                            width={400}
                            height={600}
                            layout='responsive'
                            alt={pic.name}/>
                        <h3>{pic.name}</h3>
                    </div>   
                ))
            }
        </div>
        */}

        {/*API*/}

        <div >
            <ul className={styles.productsWrapper}>
                {               
                    products.map((product) =>(
                        <li className={styles.productCard} key={product.id}>
                            <div style=
                            {{ backgroundImage: `url(${product.image})`,
                             backgroundPosition: 'center',
                             backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }} ></div>
                           { /*<img
                                src={product.image}
                                width={200}
                                height={300}
                                layout='responsive'
                                alt={product.description}/>*/}
                            <h3>{product.name}</h3>
                            <h3>€{product.price}</h3>   
                            <button
                                onClick={() => dispatch(addToCart(product))}
                                className={styles.button}
                            >
                                Add to Cart
                            </button>
                        </li> 
                    ))
                }
            </ul>   
        </div>
        
    </LayoutDefault>
    
  );
}