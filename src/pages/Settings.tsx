import styles from '../css/form-page.module.scss'

export default function Settings() {
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Profile Settings</h1>
            <form className={`${styles.form} ${styles.formModified}`}>

                <label htmlFor="profilePic" className={styles.srOnly}>Profile Picture URL</label>
                <input 
                    type="text" 
                    name="profilePic" 
                    id="profilePic" 
                    className={`${styles.input} ${styles.inputSmall}`} 
                    placeholder="URL of profile picture" 
                    required 
                />

                <label htmlFor="name" className={styles.srOnly}>Your Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className={styles.input} 
                    placeholder="Your Name" 
                    required 
                />

                <label htmlFor="bio" className={styles.srOnly}>Short Bio</label>
                <textarea 
                    name="bio" 
                    id="bio" 
                    rows={7} 
                    className={`${styles.input} ${styles.textareaSmall}`} 
                    placeholder="Short bio about you" 
                    required 
                ></textarea>

                <label htmlFor="email" className={styles.srOnly}>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className={styles.input} 
                    placeholder="Email" 
                    required 
                />

                <label htmlFor="password" className={styles.srOnly}>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className={styles.input} 
                    placeholder="Password" 
                    required 
                />

                <button 
                    type="submit" 
                    className={`${styles.button} ${styles.buttonWider}`}
                >
                    Update Settings
                </button>
            </form>
        </main>
    );
}
