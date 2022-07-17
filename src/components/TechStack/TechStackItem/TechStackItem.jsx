import styles from './TechStackItem.module.scss'
import MultiInput from '../../MultiInput/MultiInput'
import { capitalizeFirst } from '../../../helper/text.helper'
import { useState } from 'react'

const TechStackItem = ({ onChange, stack }) => {
  const [values, setValues] = useState([])

  const changeHandler = (obj) => {
    setValues({ ...values, [obj.name]: obj.value })
    onChange({ ...values, [obj.name]: obj.value })
  }

  return (
    <div className={styles.adminFormTechStackItem}>
      <h2>{`Pick ${capitalizeFirst(stack)} Stack: `}</h2>
      <MultiInput
        input={stack}
        onChange={changeHandler}
        objProps={[
          { type: 'text', title: 'name' },
          { type: 'text', title: 'link' },
          { type: 'text', title: 'imgUrl' },
        ]}
      />
    </div>
  )
}

export default TechStackItem
