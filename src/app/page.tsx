import styles from '@/app/styles/login.module.css'
import passwordGeneratorLogo from '@/app/assets/password-generator-logo.png'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'

export default function Home() {

  return (
    <div className={styles.loginMainContainer}>
      <div className={styles.loginLeftMainContainer}>
        <Image src={passwordGeneratorLogo} alt='Password generator logo' />
      </div>
      <div className={styles.loginRightMainContainer}>
        <h2>Login</h2>
        <h4>Entre na sua conta para gerar senhas e gereciar-las da maneira que desejar!</h4>
        <div className={styles.loginEmailAndPasswordContainer}>
          <TextField id="email-login" label="Email" variant="filled" margin='normal' />
          <TextField id="password-login" label="Password" variant="filled" />
        </div>
        <Button variant="contained" className={styles.loginSignInButton}>Sign in</Button>
        <p>Don&apos;t have an account yet? <Link>Create account here</Link></p>
      </div>
    </div>
  )
}
