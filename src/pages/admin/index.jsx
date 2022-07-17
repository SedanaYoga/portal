import Head from 'next/head'
import Image from 'next/image'
import NormalLayout from '../../layouts/Normal/NormalLayout'
import Input from '../../components/Input/Input'
import MultiInput from '../../components/MultiInput/MultiInput'
import TechStack from '../../components/TechStack/TechStack'
import styles from '../../styles/pages/Admin.module.scss'
import { useState } from 'react'

const Admin = () => {
  const [values, setValues] = useState({})

  const changeHandler = (e) => {
    // For Multi Input
    if (e.name && e.value) {
      setValues({ ...values, [e.name]: e.value })
    } else {
      const name = e.target.name
      let value
      // For files
      if (e.target.files) {
        value = e.target.files[0]
        // For text
      } else {
        value = e.target.value
      }
      setValues({ ...values, [name]: value })
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <div>
      <Head>
        <title>Admin Page</title>
      </Head>
      <div className={styles.admin}>
        <h1 className={styles.adminTitle}>Works Form</h1>
        <form onSubmit={submitHandler} className={styles.adminForm}>
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
          <MultiInput
            input='learnt'
            onChange={changeHandler}
            objProps={[
              { type: 'text', title: 'title' },
              { type: 'textarea', title: 'description' },
            ]}
            mandatory
          />
          <MultiInput
            input='relatedLinks'
            onChange={changeHandler}
            objProps={[
              { type: 'text', title: 'name' },
              { type: 'text', title: 'link' },
            ]}
            mandatory
          />
          <MultiInput
            input='features'
            onChange={changeHandler}
            objProps={[{ type: 'text', title: 'feature' }]}
            mandatory
          />
          <MultiInput
            input='demo'
            onChange={changeHandler}
            objProps={[
              { type: 'file', title: 'file' },
              { type: 'text', title: 'description' },
            ]}
            mandatory
          />
          <MultiInput
            input='spaceForImprovement'
            onChange={changeHandler}
            objProps={[{ type: 'text', title: 'text' }]}
            mandatory
          />
          <TechStack
            onChange={(values) => {
              setValues((prev) => ({ ...prev, techStack: values }))
            }}
          />
          <button type='submit'>Create Works</button>
        </form>
      </div>
    </div>
  )
}

export default Admin

Admin.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
