import LayoutDefault from '../layout/index';
import { Hero } from '../components/hero/Hero';
import {Video} from '../components/video/index';
import {Map} from '../components/map/index';
import {Calendar} from '../components/calendar/index';
import styles from './../styles/VirtualShowroom.module.scss'



export default function VirtualShowRoom() {
  return (
  
      <LayoutDefault>        
        <div className={styles.bgVideo}>
        <h2>OUR VIRTUAL SHOWROOM</h2>
        <Video src={'/virtualShowroom.mp4'}/>
        </div>
        <div className={styles.bgMap}>
        <h2>WHERE WE ARE <img src="https://img.icons8.com/officel/22/000000/place-marker--v1.png"/></h2>
        <Map src={"https://www.google.com/maps/d/u/0/embed?mid=1NukkJCY_zetuCmKTseE1TOYgQmR3Pgn3&ehbc=2E312F"}/>
        </div>
        <div className={styles.bgCalendar}>
        <p>Need more info?<br />Do you want take an appointment?<br />Write us!</p>
        <Calendar/>
        </div>
        
        {/*<iframe className={styles.iframe} src="https://www.google.com/maps/d/u/0/embed?mid=1NukkJCY_zetuCmKTseE1TOYgQmR3Pgn3&ehbc=2E312F" width="640" height="auto"></iframe>*/}
       
      </LayoutDefault>
    
  );
}

{/* 
<iframe src="https://www.google.com/maps/d/embed?mid=1NukkJCY_zetuCmKTseE1TOYgQmR3Pgn3&ehbc=2E312F" width="360" height="740"></iframe>
https://www.google.com/maps/d/edit?mid=1NukkJCY_zetuCmKTseE1TOYgQmR3Pgn3&usp=sharing*/}
