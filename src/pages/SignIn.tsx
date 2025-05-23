import styles from '../css/form-page.module.scss'
import { NavLink } from 'react-router-dom';

export default function SignIn() {
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Sign in</h1>
            <NavLink to='/register' className={styles.link}>Need an account?</NavLink>

            <form className={styles.form}>
                <label htmlFor="email" className={styles.srOnly}>Email</label>
                <input type='email' name='email' id='email' className={styles.input} placeholder='Email' required></input>

                <label htmlFor="password" className={styles.srOnly}>Password</label>
                <input type='password' name='password' id='password' className={styles.input} placeholder='Password' required></input>

                <button type='submit' className={styles.button}>Sign in</button>
            </form>
        </main>
    )
}