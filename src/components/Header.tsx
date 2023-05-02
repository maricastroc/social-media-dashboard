import { Theme } from './Theme'
import styles from './Header.module.css'

interface HeaderProps {
  onChange: () => void
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_title}>
          <h1>Social Media Dashboard</h1>
          <p>Total followers: 23,004</p>
        </div>
        <span className={styles.separator}></span>
        <Theme onClick={props.onChange} />
      </div>
    </header>
  )
}
