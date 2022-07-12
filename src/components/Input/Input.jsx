import styles from './Input.module.scss'

const Input = ({ children, type }) => {
  return (
    <div className={styles.input}>
      <label>{children}</label>
      <input type={type} />
    </div>
  )
}

export default Input

Input.defaultProps = {
  type: 'text',
}
