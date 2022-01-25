import styles from './Calendar.module.scss'
import { InlineWidget } from "react-calendly";

function Calendar() {
  return (   
    <div className={styles.box}>       
        <div className={styles.calendarWrapper}>
            <InlineWidget url="https://calendly.com/federica-santoro-1993/30min" className={styles.calendar} />
        </div> 
    </div>    
  );
}

export {Calendar};