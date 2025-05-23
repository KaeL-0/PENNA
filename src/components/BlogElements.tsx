import styles from '../css/homepage.module.scss';
import blogs from '../data/blog.ts';

export default function BlogElements(){

        const blogElements = blogs.map((blogItem, index) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const daySuffixes = [
            'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
            'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
            'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
            'st'
        ];    

        const date: Date = blogItem.postDate;
        const monthName = months[date.getMonth()];
        const day = date.getDate() + daySuffixes[date.getDate() - 1];

        return (
            <section key={index} className={styles.blogPost}>
                <div className={styles.blogpostInfo}>
                    <div className={styles.blogpostInfoContainer}>
                        <div className={styles.imgFrame}>
                            <img src={blogItem.userProfileImageUrl} alt={`${blogItem.username}'s profile`} />
                        </div>
                        <div className={styles.blogpostNameDate}>
                            <span className={styles.blogpostUsername}>{blogItem.username}</span>
                            <span className={styles.blogpostDate}>{`${monthName} ${day}`}</span>
                        </div>  
                    </div>
                    <button className={styles.favorites}>{blogItem.favorites}</button>
                </div>
                <h2>{blogItem.title}</h2>
                <p>{blogItem.about}</p>
                <span>Read more...</span>
                {index !== (blogs.length - 1) && <hr />}
            </section>
        );
    });

    return (
        <>
            {blogElements}
        </>
        
    )
}