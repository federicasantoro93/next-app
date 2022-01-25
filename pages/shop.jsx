
import { useEffect } from 'react/cjs/react.development';
import LayoutDefault from './../layout/index';
import styles from './../styles/Shop.module.scss'
import { useState } from 'react';



export default function Shop() {

    const[photoData, setPhotoData] = useState([]);
    
    useEffect(() => {
        getPhotoData();
        
    },[]);
    
    
    




  return (
  
      <LayoutDefault>
        <div className={styles.container}>
        <h1>Shop</h1>
        </div>

        <div className={styles.photoWrapper}>
            {
                photoData.map((pic) =>(
                    <div className={styles.photoList} key={pic.id}>
                        <img
                            src={pic.src.portrait}
                            width={400}
                            height={600}
                            layout='responsive'
                            alt={pic.url}/>
                        <h3>{pic.photographer}</h3>
                    </div>   
                ))
            }
        </div>
      </LayoutDefault>
    
  );
}