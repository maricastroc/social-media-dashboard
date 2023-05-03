import styles from './Minorcard.module.css'

interface MinorcardProps {
  title: string
  number: string
  src: string
  up: boolean
  data: string
}

export function Minorcard(props: MinorcardProps) {
  return (
    <div className={styles.minorcard}>
      <div className={styles.likes_number}>
        <h2>{props.title}</h2>
        <h1>{props.number}</h1>
      </div>
      <div className={styles.social_data}>
        <img src={props.src} alt="Logo Social Media"></img>
        <div className={props.up ? styles.up : styles.down}>
          <img src="./images/icon-up.svg" alt="Followers Data" />
          <span>{props.data}</span>
        </div>
      </div>
    </div>
  )
}
