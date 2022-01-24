import styles from './Map.module.scss'

function Map(props) {
  return (   
    <div className={styles.box}>      
    <div className={styles.mapWrapper}>
    <iframe className={styles.map} src={props.src} width="640" height="auto"></iframe>
       
    </div>
    </div>
  );
}

export {Map};
