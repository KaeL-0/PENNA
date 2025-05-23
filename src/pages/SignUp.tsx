import styles from '../css/form-page.module.scss'
import { NavLink } from 'react-router-dom';

export default function SignIn() {
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Sign up</h1>
            <NavLink to='/login' className={styles.link}>Have an account?</NavLink>

            <form className={styles.form}>
                <label htmlFor="username" className={styles.srOnly}>Username</label>
                <input type='text' name='username' id='username' className={styles.input} placeholder='Username' required></input>

                <label htmlFor="email" className={styles.srOnly}>Email</label>
                <input type='email' name='email' id='email' className={styles.input} placeholder='Email' required></input>

                <label htmlFor="password" className={styles.srOnly}>Password</label>
                <input type='password' name='password' id='password' className={styles.input} placeholder='Password' required></input>

                <button type='submit' className={styles.button}>Sign up</button>
            </form>
        </main>
    )
}