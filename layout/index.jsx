import Link from 'next/Link'
import styles from './index.module.scss'
import { useState } from 'react';

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
                        <li className={styles.go_to}><a href="#" onClick={handleMenù}> Go to...</a><img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/></li>
                            {isMenuVisible && (
                            <ul className={styles.link_menu}>
                                <li key="Home"><Link href='/'><a>Home</a></Link></li>
                                <li key="Collection"><Link href='/collection'><a>Collection</a></Link></li>
                                <li key="VirtualShowroom"><Link href='/virtualShowroom'><a>VirtualShowRoom</a></Link></li> 
                            </ul>)}                          
                    </ul>
            </div>
        </div>
        <main>{children}</main>
        <div className={styles.footer}></div>
        </>
    );
}


export default DefaultLayout;