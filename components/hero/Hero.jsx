import styles from './Hero.module.scss'

function Hero() {
  return (   
            
    <div className={styles.hero_wrapper}>
    <div className={styles.text}>
        <h1>SF</h1>
        <h2>SANTORO FEDERICA</h2>
        <h4>TAILOR MADE FOR BUTIQUE UNIQUE</h4>
        
    </div>
    <div className={styles.background_color}></div>    
    <div className={styles.background_img}></div>   
    </div>    

  );
}

export {Hero};