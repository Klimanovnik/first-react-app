import styles from './Users.module.css';
import defaultUserPhoto from '../../assets/img/defaultUserPhoto.png';
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                        <NavLink to={"/users/" + user.id} className={styles.userLink}>
                                            <img className={styles.userIcon}
                                                 src={
                                                     user.photos.small
                                                         ? user.photos.small
                                                         : defaultUserPhoto
                                                 }
                                                 alt="No Image"
                                            />
                                            <div className={styles.userDescription}>
                                                <div className={styles.id}>
                                                    {user.id}
                                                </div>
                                                <div className={styles.fullName}>
                                                    {user.name}
                                                </div>
                                                <div className={styles.status}>
                                                    {user.status}
                                                </div>
                                            </div>
                                        </NavLink>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                const requestType = user.followed ? "delete" : "post";

                                                const requestOptions = {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "c00d2ff4-69c2-49cb-bfec-cd6ef83bd398"
                                                    }
                                                };

                                                let optionsForDelete = {};
                                                let optionsForPost = {};

                                                if (requestType === "delete") {
                                                    optionsForDelete = {
                                                        ...requestOptions
                                                    };
                                                } else {
                                                    optionsForPost = {
                                                        ...requestOptions
                                                    };
                                                }

                                                axios
                                                    [requestType](`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                    {
                                                        ...optionsForDelete
                                                    },
                                                    {
                                                        ...optionsForPost
                                                    }
                                                )
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.toggleFollow(user.id);
                                                        }
                                                    });
                                            }}
                                            className={styles.userButton}
                                            disabled={!props.isAuth}
                                        >
                                            {user.followed ? "Отписаться" : "Подписаться"}
                                        </button>
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