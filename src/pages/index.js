import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NormalLayout from '../layouts/Normal/NormalLayout'
import Button from '../components/Button/Button'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sedana Yoga</title>
        <meta name='description' content='Sedana Yoga portfolio website' />
      </Head>
      <div className='container'>
        <main className={styles.main}>
          <section className={styles.about}>
            <div className={styles.aboutLeft}>
              <div className={styles.aboutLeftAvatar}>
                <Image
                  src='/images/avatar.png'
                  alt='profile-avatar'
                  layout='fill'
                />
              </div>
              <h2>Sedana Yoga</h2>
              <h3>Frontend Developer</h3>
            </div>
            <div className={styles.aboutRight}>
              <h1>
                <span>👋🏼</span> Hello
              </h1>
              <p className={styles.aboutRightSubText}>
                Here&rsquo;s who I am and my expertises
              </p>
              <div className={styles.aboutRightButtons}>
                <Link href='/works'>
                  <Button>Works</Button>
                </Link>
                <Link href='/resume'>
                  <Button type='secondary'>Resume</Button>
                </Link>
              </div>
              <p className={styles.aboutRightDesc}>
                A learner who&apos;s happy with visual things in tech, currently
                focussing on JavaScript Frontend Technology. Very confident with
                this stack:
              </p>
              <ul className={styles.aboutRightStack}>
                <li>
                  <Image
                    layout='fill'
                    src='/images/react-icon.svg'
                    alt='react-icon'
                  />
                </li>
                <li>
                  <Image
                    layout='fill'
                    src='/images/sass-icon.svg'
                    alt='sass-icon'
                  />
                </li>
                <li>
                  <Image
                    layout='fill'
                    src='/images/firebase-icon.svg'
                    alt='firebase-icon'
                  />
                </li>
                <li>
                  <Image
                    layout='fill'
                    src='/images/redux-icon.svg'
                    alt='redux-icon'
                  />
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <NormalLayout>{page}</NormalLayout>
}
