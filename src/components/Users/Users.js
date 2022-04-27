import React from "react";
import styles from './Users.module.css';
import axios from "axios";
import defaultUserSmallPhoto from '../../assets/img/defaultUserSmallPhoto.png';

class Users extends React.Component {

    constructor(props)  {
        super(props);

        if (this.props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <section className={styles.usersWrap}>
                {
                    this.props.users.map(user => {
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
                                            this.props.toggleFollow(user.id);
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
            </section>
        );
    }
}

export default Users;