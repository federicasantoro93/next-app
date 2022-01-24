import LayoutDefault from '../layout/index';
import { Hero } from '../components/hero/Hero';
import {Video} from '../components/video/index'
import styles from './../styles/VirtualShowroom.module.scss'


export default function VirtualShowRoom() {
  return (
  
      <LayoutDefault>        
        <div className={styles.bgVideo}>
        <Video src={'/virtualShowroom.mp4'}/>
        </div>
       
        
        
        {/*<iframe className={styles.iframe} src="https://www.google.com/maps/d/u/0/embed?mid=1NukkJCY_zetuCmKTseE1TOYgQmR3Pgn3&ehbc=2E312F" width="640" height="auto"></iframe>*/}
       
      </LayoutDefault>
    
  );
}

{/* 
<iframe src="https://www.google.com/maps/d/embed?mid=1NukkJCY_zetuCmKTseE1TOYgQmR3Pgn3&ehbc=2E312F" width="360" height="740"></iframe>
https://www.google.com/maps/d/edit?mid=1NukkJCY_zetuCmKTseE1TOYgQmR3Pgn3&usp=sharing*/}
