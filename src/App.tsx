import { Majorcard } from './components/Majorcard'

import './global.css'
import styles from './App.module.css'
import { Minorcard } from './components/Minorcard'
import { Header } from './components/Header'
import { useState } from 'react'

const majorcards = [
  {
    id: 1,
    media: 'facebook',
    src: './src/images/icon-facebook.svg',
    username: '@maricastroc',
    followers: '1987',
    follow_type: 'followers',
    variant: 'blue-border',
    up: true,
    data: 12,
  },
  {
    id: 2,
    media: 'twitter',
    src: './src/images/icon-twitter.svg',
    username: '@marianacastrorc',
    followers: '1044',
    follow_type: 'followers',
    variant: 'blue-border',
    up: true,
    data: 99,
  },
  {
    id: 3,
    media: 'instagram',
    src: './src/images/icon-instagram.svg',
    username: '@maricastroc',
    followers: '11K',
    follow_type: 'followers',
    variant: 'orange-gradient-border',
    up: true,
    data: 1099,
  },
  {
    id: 4,
    media: 'youtube',
    src: './src/images/icon-youtube.svg',
    username: '@marianacastro7360',
    followers: '8239',
    follow_type: 'subscribers',
    variant: 'red-border',
    up: false,
    data: 144,
  },
]

const minorcards = [
  {
    id: 1,
    title: 'Page Views',
    number: '87',
    src: './src/images/icon-facebook.svg',
    up: true,
    data: '3%',
  },
  {
    id: 2,
    title: 'Likes',
    number: '52',
    src: './src/images/icon-facebook.svg',
    up: false,
    data: '2%',
  },
  {
    id: 3,
    title: 'Likes',
    number: '5462',
    src: './src/images/icon-instagram.svg',
    up: true,
    data: '2257%',
  },
  {
    id: 4,
    title: 'Profile Views',
    number: '52K',
    src: './src/images/icon-instagram.svg',
    up: true,
    data: '1375%',
  },
  {
    id: 5,
    title: 'Retweets',
    number: '117',
    src: './src/images/icon-twitter.svg',
    up: true,
    data: '303%',
  },
  {
    id: 6,
    title: 'Likes',
    number: '507',
    src: './src/images/icon-twitter.svg',
    up: true,
    data: '553%',
  },
  {
    id: 7,
    title: 'Retweets',
    number: '107',
    src: './src/images/icon-youtube.svg',
    up: false,
    data: '19%',
  },
  {
    id: 8,
    title: 'Likes',
    number: '1407',
    src: './src/images/icon-youtube.svg',
    up: false,
    data: '12%',
  },
]

export function App() {
  const [theme, setTheme] = useState('dark')

  function handleSetTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className={theme === 'dark' ? styles.dark_theme : styles.light_theme}>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_content}>
          <Header onChange={handleSetTheme} />
          <main>
            <div className={styles.major_content}>
              {majorcards.map((card) => {
                return (
                  <Majorcard
                    key={card.id}
                    media={card.media}
                    src={card.src}
                    username={card.username}
                    followers={card.followers}
                    follow_type={card.follow_type}
                    variant={card.variant}
                    up={card.up}
                    data={card.data}
                  />
                )
              })}
            </div>
            <h1 className={styles.overview}>Overview - Today</h1>
            <div className={styles.minor_content}>
              {minorcards.map((card) => {
                return (
                  <Minorcard
                    key={card.id}
                    title={card.title}
                    number={card.number}
                    src={card.src}
                    up={card.up}
                    data={card.data}
                  />
                )
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
