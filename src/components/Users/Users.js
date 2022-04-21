import styles from './Users.module.css';

function Users(props) {
    return (
        <section className={styles.usersWrap}>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={styles.user}>
                            <div>
                                <img src={user.icon} alt="No Image"/>
                                <button
                                    type="button"
                                    onClick={() => {
                                        props.toggleFollow(user.id);
                                    }}
                                >
                                    {user.followed ? "Отписаться" : "Подписаться"}
                                </button>
                            </div>
                            <div className={styles.userDescription}>
                                <div className={styles.fullName}>
                                    {user.userDescription.fullName}
                                </div>
                                <div className={styles.status}>
                                    {user.userDescription.status}
                                </div>
                                <div className={styles.country}>
                                    {user.userDescription.location.country}
                                </div>
                                <div className={styles.city}>
                                    {user.userDescription.location.city}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default Users;