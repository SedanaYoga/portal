import NormalLayout from '../../layouts/Normal/NormalLayout'
import Input from '../../components/Input/Input'
import styles from '../../styles/pages/Admin.module.scss'
import { useState } from 'react'

const Admin = () => {
  const [values, setValues] = useState({})

  const changeHandler = ({ value, name }) => {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className={styles.admin}>
      <h1 className={styles.adminTitle}>Works Form</h1>
      <form className={styles.adminForm}>
        <Input onChange={changeHandler} name='title'>
          Title
        </Input>
        <Input onChange={changeHandler} name='quote'>
          Quote
        </Input>
        <Input onChange={changeHandler} name='brief'>
          Brief
        </Input>
      </form>
    </div>
  )
}

export default Admin

Admin.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
