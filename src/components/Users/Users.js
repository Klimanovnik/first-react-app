import styles from './Users.module.css';
import defaultUserSmallPhoto from '../../assets/img/defaultUserSmallPhoto.png';
import Preloader from "../Common/Preloader/Preloader";

const Users = function (props) {
    return (
        <section className={styles.usersWrap}>
            <div className={styles.usersPagination}>
                {
                    Array(
                        Math.ceil(
                            props.pagination.usersTotalCount / props.pagination.countPerRequest
                        )
                    ).fill().map((e, i) => {
                        return (
                            <span
                                key={i + 1}
                                className={
                                    `${styles.usersPage} ${
                                        (props.pagination.currentPage === i + 1)
                                            ? styles.usersCurrentPage
                                            : ""
                                    }`
                                }
                                onClick={() => {
                                    props.onPageChanged(i + 1);
                                }}
                            >
                                    {i + 1}
                                </span>
                        );
                    })
                }
            </div>
            {
                props.isFetching
                    ? <Preloader/>
                    : <div>
                        {
                            props.users.map(user => {
                                return (
                                    <div key={user.id} className={styles.user}>
                                        <div>
                                            <img className={styles.userIcon}
                                                 src={
                                                     user.photos.small
                                                         ? user.photos.small
                                                         : defaultUserSmallPhoto
                                                 }
                                                 alt="No Image"
                                            />
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
                                                {user.name}
                                            </div>
                                            <div className={styles.status}>
                                                {user.status}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
            }
        </section>
    );
};

export default Users;