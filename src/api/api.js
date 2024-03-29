import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "c00d2ff4-69c2-49cb-bfec-cd6ef83bd398"
    }
});

export const usersAPI = {

    getUsers(countPerRequest = 5, currentPage = 1) {
        return axiosInstance.get(
            `users?count=${countPerRequest}&page=${currentPage}`
        ).then(response => response.data);
    },

    getUser(userIdForRequest) {
        return axiosInstance.get(
            `profile/${userIdForRequest}`
        ).then(response => response.data);
    },

    followAndUnfollow(id, isFollow) {
        return axiosInstance[isFollow ? "delete" : "post"](
            `follow/${id}`
        ).then(response => response.data);
    },

    getUserStatus(userIdForRequest) {
        return axiosInstance.get(
            `/profile/status/${userIdForRequest}`
        ).then(response => response.data);
    }

};

export const authAPI = {

    checkAuth() {
        return axiosInstance.get(
            `auth/me`
        ).then(response => response.data);
    },

    login(email, password, rememberMe = false) {
        return axiosInstance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data);
    },

    logout() {
        return axiosInstance.delete(`auth/login`).then(response => response.data);
    }

};

export const myProfileAPI = {

    putMyStatus(status) {
        return axiosInstance.put(
            `/profile/status`,
            {status}
        ).then(response => response.data);
    }

};
