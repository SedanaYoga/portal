import NormalLayout from '../../layouts/Normal/NormalLayout'
import WorkCard from '../../components/WorkCard/WorkCard'
import styles from '../../styles/pages/Works.module.scss'
import worksData from '../works.js'
import Link from 'next/link'

const Works = () => {
  return (
    <section className={styles.works}>
      <h1 className={styles.worksTitle}>My Works</h1>
      <div className={styles.worksGrid}>
        {worksData.map((work) => (
          <Link key={work.id} href={`/`}>
            <WorkCard work={work} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Works

Works.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
