import Link from 'next/Link'
import styles from './index.module.scss'

function DefaultLayout({children}){

    return(
        <>       
        <div className={styles.nav}>
            <h1>SF</h1>
            <ul>               
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/collection'>
                    <a>Collection</a>
                    </Link>
                </li>                             
            </ul>
        </div>
        <main>{children}</main>
        <div className={styles.footer}></div>
        </>
    );
}


export default DefaultLayout;