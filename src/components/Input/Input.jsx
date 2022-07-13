import { useState } from 'react'
import styles from './Input.module.scss'

const Input = ({ children, type, onChange, required, name }) => {
  const [value, setValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  const changeHandler = (e) => {
    const { value, name } = e.target
    setValue(value)
    if (onChange) onChange({ value, name })
    if (value && value !== '') {
      setIsFocus(true)
    } else {
      setIsFocus(false)
    }
  }

  return (
    <div className={styles.input}>
      <input
        type={type}
        onChange={changeHandler}
        value={value}
        name={name}
        required={required}
      />
      <label htmlFor={name} className={isFocus ? styles.active : ''}>
        {children}
      </label>
    </div>
  )
}

export default Input

Input.defaultProps = {
  type: 'text',
  required: true,
}
