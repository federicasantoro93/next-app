import Link from 'next'
import styles from './index.module.scss'

function DefaultLayout(){

    return(
        <>
        <div className={styles.nav}>
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
        {/*<main>{children}</main>*/}
        <div className={styles.footer}></div>
        </>
    );
}


export default DefaultLayout;