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
            `https://social-network.samuraijs.com/api/1.0/follow/${id}`
        ).then(response => response.data);
    }

};