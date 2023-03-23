import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CreateWarband from './builder'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mordheim Warband Builder</title>
      </Head>
      <main className={styles.main}>
       <div> {/* <div className={styles.description}> */}
          <p>
            Welcome to the Mordheim Warband Builder!
          </p>
          <br></br>
          <div>{/* <div className={styles.center}> */}

              <Image
                src="/mordheim_logo.jpg"
                alt="Mordheim logo"
                // className={styles.vercelLogo}
                width={200}
                height={200}
                priority
              />
          </div>
          <div>
            <CreateWarband />
          </div>
        </div>
      </main>
    </>
  )
}
