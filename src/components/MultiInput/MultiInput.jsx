import { useEffect, useState } from 'react'
import styles from './MultiInput.module.scss'
import Input from '../Input/Input'
import { produce } from 'immer'
import { generate } from 'shortid'

const MultiInput = ({ input, onChange, objProps, mandatory }) => {
  const [values, setValues] = useState(
    mandatory
      ? [
          {
            ...Object.assign(...objProps.map((prop) => ({ [prop]: '' }))),
            id: generate(),
          },
        ]
      : [],
  )

  const changeHandler = (e, index, prop) => {
    let value
    if (e.target.files) {
      value = e.target.files[0]
    } else {
      value = e.target.value
    }
    setValues((prev) =>
      produce(prev, (v) => {
        v[index][prop.title] = value
      }),
    )
  }

  const deleteHandler = (val) => {
    setValues((prev) => prev.filter((p) => p.id !== val.id))
  }

  const addCollectionHandler = () => {
    setValues((prev) => [
      ...prev,
      {
        ...Object.assign(...objProps.map((prop) => ({ [prop]: '' }))),
        id: generate(),
      },
    ])
  }

  useEffect(() => {
    // For Multi Input but single property
    if (onChange) {
      if (objProps.length === 1) {
        const convertToStrArr = values.map(
          ({ id, ...restProp }) => Object.values(restProp)[1],
        )
        onChange({ name: input, value: convertToStrArr })
      } else {
        onChange({ name: input, value: values })
      }
    }
  }, [values])

  return (
    <div className={styles.multiInput}>
      {values.map((val, index) => (
        <div key={val.id} className={styles.multiInputCollection}>
          <div className={styles.multiInputCollectionForm}>
            {objProps.map((prop, propIdx) => (
              <Input
                key={propIdx}
                inputValue={val[prop.title]}
                type={prop.type}
                onChange={(e) => changeHandler(e, index, prop)}
              >
                {val?.file?.name ? val.file.name : `${prop.title} - ${index}`}
              </Input>
            ))}
          </div>

          <button
            type='button'
            onClick={() => deleteHandler(val)}
            className={styles.multiInputCollectionClose}
          >
            X
          </button>
        </div>
      ))}

      <button type='button' onClick={addCollectionHandler}>
        Add {input}
      </button>
    </div>
  )
}

export default MultiInput
