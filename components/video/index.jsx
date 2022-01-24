import styles from './Video.module.scss'

function Video(props) {
  return (   
    <div className={styles.box}>      
    <div className={styles.videoWrapper}>
      <video controls loop className={styles.video}>
        <source src={props.src} type='video/mp4' width="360" height="auto" />
      </video>  
    </div>
    </div>
  );
}

export {Video};

/*src='/virtualShowroom.mp4'*/