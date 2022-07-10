import NormalLayout from '../../layouts/Normal/NormalLayout'
import styles from '../../styles/pages/Works.module.scss'

const Works = () => {
  return (
    <section className={styles.works}>
      <h1>Works Test</h1>
    </section>
  )
}

export default Works

Works.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
