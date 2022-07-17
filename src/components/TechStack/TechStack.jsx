import styles from './TechStack.module.scss'
import TechStackItem from './TechStackItem/TechStackItem'
import { useEffect, useState } from 'react'
import { produce } from 'immer'

const TechStack = ({ onChange }) => {
  const stacks = ['frontend', 'backend', 'database', 'tools']
  const [values, setValues] = useState(
    stacks.map((s) => {
      return { type: s }
    }),
  )

  const changeHandler = (obj, idx) => {
    if (Object.entries(obj)[0]) {
      const value = Object.values(obj)[0]
      console.log(value)
      setValues((prev) =>
        produce(prev, (v) => {
          v[idx].items = value
        }),
      )
    }
  }

  useEffect(() => {
    onChange(values)
  }, [values])

  return (
    <div className={styles.adminFormTechStack}>
      <h1 className={styles.adminFormTechStackTitle}>Tech Stack</h1>
      {stacks.map((stack, idx) => (
        <TechStackItem
          key={idx}
          onChange={(obj) => changeHandler(obj, idx)}
          stack={stack}
        />
      ))}
    </div>
  )
}

export default TechStack
