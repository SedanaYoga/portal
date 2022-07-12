import NormalLayout from '../../layouts/Normal/NormalLayout'
import Input from '../../components/Input/Input'
import styles from '../../styles/pages/Admin.module.scss'

const Admin = () => {
  return (
    <div className={styles.admin}>
      <h1 className={styles.adminTitle}>Works Form</h1>
      <form className={styles.adminForm}>
        <Input>Title</Input>
        <Input>Quote</Input>
      </form>
    </div>
  )
}

export default Admin

Admin.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
