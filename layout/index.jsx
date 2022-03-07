import Link from 'next/Link'
import styles from './index.module.scss'
import { useState } from 'react';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DefaultLayout({children}){

    const [isMenuVisible, setMenuVisible] = useState(false);  
    {/*<div className='todo-list__item' style={(item.complete) ? styles.complete : {}} />} */}  
    
    const handleMenù = (event) => {
        {isMenuVisible == false ? setMenuVisible(true) : setMenuVisible(false)}
               
    };

    return(
        <>       
        <div className={styles.header}>
            <h1>SF</h1>            
            <div className={styles.drop_down_menù}>               
                    <ul>
                        <li className={styles.go_to}><a href="#" onClick={handleMenù}>Go to... <FontAwesomeIcon className={styles.icon} icon={faBars} /></a></li>
                            {isMenuVisible && (
                            <ul className={styles.link_menu}>
                                <li key="Home"><Link href='/'><a>Home</a></Link></li>
                                <li key="Collection"><Link href='/collection'><a> Collection</a></Link></li>
                                <li key="VirtualShowroom"><Link href='/virtualShowroom'><a>VirtualShowRoom</a></Link></li>
                                <li key="Shop"><Link href='/shop'><a>Shop</a></Link></li> 
                                <li key="Cart"><Link href='/cart'><a>Cart</a></Link></li> 

                            </ul>)}                          
                    </ul>
            </div>
        </div>
        <main>{children}</main>
        <div className={styles.footer}>
        <p>Copyright Federica Santoro{' '}</p>
        <p>{new Date().getFullYear()}</p>
        </div>
        </>
    );
}


export default DefaultLayout;