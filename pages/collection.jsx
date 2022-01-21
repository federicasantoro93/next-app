import { useState, useEffect } from 'react';
import styles from "../styles/Collection.module.scss";

const weddingDress=[
    'https://images.pexels.com/photos/4618565/pexels-photo-4618565.jpeg?cs=srgb&dl=pexels-arthouse-studio-4618565.jpg&fm=jpg',
    'https://images.pexels.com/photos/4334412/pexels-photo-4334412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3532107/pexels-photo-3532107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
]



 function Collection () {

    const[photos, setPhotos] = useState([]);

    useEffect(() => {
        setPhotos(weddingDress);
    }, []);

    return(
        <>
            <div className={styles.photos_wrapper}>
                {photos.map((photo) => (
                    <img
                  src={photo}
                  alt={photo}
                  width="300"
                  />
                ))}
            </div>

    
       </>
    )
      
     
}
export default Collection;