import React from "react";
import styles from './Users.module.css';
import axios from "axios";
import defaultUserSmallPhoto from '../../assets/img/defaultUserSmallPhoto.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //alert("Paste Users");

        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.countPerRequest}&page=${this.props.pagination.currentPage}`)
                .then(response => {
                    //this.props.setUsersTotalCount(response.data.totalCount);
                    this.props.setUsers(response.data.items);
                });
        }
    }

    componentDidUpdate() {
        //alert("Update Users");
    }

    onPageChanged = (newPage) => {
        this.props.setCurrentPage(newPage);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.countPerRequest}&page=${newPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return (
            <section className={styles.usersWrap}>
                <div className={styles.usersPagination}>
                    {
                        Array(
                            Math.ceil(
                                this.props.pagination.usersTotalCount / this.props.pagination.countPerRequest
                            )
                        ).fill().map((e, i) => {
                            return (
                                <span
                                    key={i + 1}
                                    className={
                                        `${styles.usersPage} ${
                                            (this.props.pagination.currentPage === i + 1)
                                                ? styles.usersCurrentPage
                                                : ""
                                        }`
                                    }
                                    onClick={() => {
                                        this.onPageChanged(i + 1);
                                    }}
                                >
                                    {i + 1}
                                </span>
                            );
                        })
                    }
                </div>
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