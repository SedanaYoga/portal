import styles from './WorkCard.module.scss'
import Image from 'next/image'
import { forwardRef } from 'react'

const WorkCard = forwardRef(({ work, onClick, href }, ref) => {
  return (
    <a className={styles.workCard} ref={ref} onClick={onClick} href={href}>
      <div className={styles.workCardHeader}>
        <Image
          layout='fill'
          src={work.demo[0]}
          alt={work.title}
          priority
          className={styles.workCardHeaderImage}
        />
      </div>
      <div className={styles.workCardInfo}>
        <div className={styles.workCardInfoImage}>
          <Image layout='fill' src={work.logo} alt='logo' />
        </div>
        <div className={styles.workCardInfoText}>
          <h1>{work.title}</h1>
          <p>{work.quote}</p>
        </div>
      </div>
    </a>
  )
})

export default WorkCard

WorkCard.displayName = 'WorkCard'
