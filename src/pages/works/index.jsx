import { useCallback, useEffect, useState } from 'react'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import styles from '../../styles/pages/Works.module.scss'
import { getWorksData } from '../../firebase/firebase.utils'

const Works = () => {
  const [works, setWorks] = useState([])
  const getWorks = useCallback(async () => {
    const works = await getWorksData()
    setWorks(works)
  }, works)

  useEffect(() => {
    getWorks()
  }, [getWorks])

  return (
    <section className={styles.works}>
      {works.map((work) => (
        <div key={work.id}>
          <h1>{work.title}</h1>
          <h3>{work.quote}</h3>
          <p>{work.brief}</p>
          {work.techStack.map((tech, index) => (
            <div key={index}>
              <h4>{tech.type}</h4>
              {tech.items.map((item, index) => (
                <div key={index}>
                  <a href={item.link}>{item.name}</a>
                </div>
              ))}
            </div>
          ))}
          <h3>Demo</h3>
          {work.demo.map((data, index) => (
            <div key={index}>
              <img src={data} alt={`demo-${index}`} width='300px' />
            </div>
          ))}
          <h3>What I've learnt</h3>
          <ul>
            {work.learnt.map((lesson, index) => (
              <li key={index}>
                <h5>{lesson.title}</h5>
                <p>{lesson.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Works

Works.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
