import styles from './Theme.module.css'

interface ThemeProps {
  onClick: () => void
}

export function Theme(props: ThemeProps) {
  return (
    <div className={styles.theme}>
      <p>Dark Mode</p>
      <label className={styles.switch}>
        <input aria-label="switch_theme" type="checkbox"></input>
        <span className={styles.slider} onClick={props.onClick}></span>
      </label>
    </div>
  )
}
