import { useState, useRef, useEffect } from 'react'
import styles from './Input.module.scss'

const Input = ({ children, inputValue, type, onChange, required, name }) => {
  const [value, setValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const hiddenFileInput = useRef(null)

  const changeHandler = (e) => {
    // Change File Input
    if (type === 'file') {
      if (onChange) onChange(e)
    } else {
      const { value } = e.target
      setValue(value)
      if (onChange) onChange(e)
      if (value && value !== '') {
        setIsFocus(true)
      } else {
        setIsFocus(false)
      }
    }
  }

  const fileClickHandle = () => {
    hiddenFileInput.current.click()
  }

  useEffect(() => {
    if (inputValue) {
      setValue(inputValue)
      setIsFocus(true)
    }
  }, [inputValue])

  return (
    <div className={styles.input}>
      {type === 'textarea' ? (
        <textarea
          onChange={changeHandler}
          value={value}
          name={name}
          required={required}
          className={styles.textarea}
        ></textarea>
      ) : type === 'file' ? (
        <input
          type='file'
          onChange={changeHandler}
          accept='/image/*'
          name={name}
          required={required}
          style={{ display: 'none' }}
          ref={hiddenFileInput}
        />
      ) : (
        <input
          type={type}
          onChange={changeHandler}
          value={value}
          name={name}
          required={required}
        />
      )}

      {type !== 'file' && (
        <label htmlFor={name} className={isFocus ? styles.active : ''}>
          {children}
        </label>
      )}

      {type === 'file' && (
        <button type='button' onClick={fileClickHandle}>
          {children}
        </button>
      )}
    </div>
  )
}

export default Input

Input.defaultProps = {
  type: 'text',
  required: true,
}
