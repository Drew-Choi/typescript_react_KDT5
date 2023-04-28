import React from 'react'
import styles from '../styles/Section.module.scss'

export default function Section({color}:{color:string}) {
  return (
    <div className={styles.box}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum vitae exercitationem unde. Delectus ipsum aperiam minima eligendi earum harum, exercitationem repudiandae, fuga tempora nulla quasi facere cum necessitatibus sit.
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  )
}
