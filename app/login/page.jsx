import Head from 'next/head'
import Image from 'next/image'
import styles from './style.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login - Your App Name</title>
        <meta name="description" content="Login to Your App Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Please log in to access your account.
        </p>

        <form className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>
      </main>
    </div>
  )
}
