import Head from 'next/head'
import Image from 'next/image'
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
    <div>
      <Head>
        <title>Admin Page</title>
      </Head>
      <div className={styles.admin}>
        <h1 className={styles.adminTitle}>Works Form</h1>
        <form className={styles.adminForm}>
          <Input onChange={changeHandler} name='title'>
            Title
          </Input>
          <Input onChange={changeHandler} name='quote'>
            Quote
          </Input>
          <Input onChange={changeHandler} name='brief' type='textarea'>
            Brief
          </Input>
          <Input onChange={changeHandler} name='logo' type='file'>
            Click me to upload a logo
          </Input>
          {values.logo && (
            <Image
              alt='Logo Image'
              src={URL.createObjectURL(values.logo)}
              width='100px'
              height='100px'
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default Admin

Admin.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
