import { useCallback, useEffect, useState } from 'react'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import WorkCard from '../../components/WorkCard/WorkCard'
import Link from 'next/link'
import styles from '../../styles/pages/Works.module.scss'
import { getWorksData } from '../../firebase/firebase.utils'

const Works = () => {
  const [works, setWorks] = useState([])
  const getWorks = useCallback(async () => {
    const works = await getWorksData()
    setWorks(works)
  }, [])

  useEffect(() => {
    getWorks()
  }, [getWorks])

  return (
    <section className={styles.works}>
      <h1 className={styles.worksTitle}>My Works</h1>
      <div className={styles.worksGrid}>
        {works.map((work) => (
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
