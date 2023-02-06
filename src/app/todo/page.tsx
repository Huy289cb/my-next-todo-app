import { Poppins } from '@next/font/google'
import clsx from 'clsx'
import styles from './page.module.scss'

const poppins = Poppins({ weight: ["300" , "400" , "500" , "600" , "700" , "800" , "900" ], subsets: ['latin'] })

export default function Home() {
  return (
    <main className={clsx(poppins.className, styles.main)}>
      <h2>{"//TODO Add my todo template here..."}</h2>
    </main>
  )
}
