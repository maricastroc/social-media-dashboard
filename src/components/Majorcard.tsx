import styles from './Majorcard.module.css'

interface MajorcardProps {
  src: string
  username: string
  media: string
  followers: string
  follow_type: string
  variant: string
  up: boolean
  data: number
}

export function Majorcard(props: MajorcardProps) {
  return (
    <div className={styles.majorcard}>
      <div className={styles[props.variant]}></div>
      <div className={styles.username_section}>
        <img src={props.src} alt="Logo Social Media" />
        <p>{props.username}</p>
      </div>
      <div className={styles.followers_section}>
        <h1>{props.followers}</h1>
        <p>{props.follow_type}</p>
      </div>
      <div className={props.up ? styles.up : styles.down}>
        <img src="./images/icon-up.svg" alt="Followers Data" />
        <span>{props.data} Today</span>
      </div>
    </div>
  )
}
