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
      <header>
        <img src={props.src} alt="Logo Social Media" />
        <p>{props.username}</p>
      </header>
      <main>
        <h1>{props.followers}</h1>
        <p>{props.follow_type}</p>
      </main>
      <footer className={props.up ? styles.up : styles.down}>
        <img src="./src/images/icon-up.svg" alt="Followers Data" />
        <span>{props.data} Today</span>
      </footer>
    </div>
  )
}
