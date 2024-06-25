import axiosInstance from './axiosInstance';

const USER_API_BASE_URL = "http://localhost:8080/users";

class UserService {

    getAllUsers() {
        return axiosInstance.get(USER_API_BASE_URL);
    }

    getUserById(userId) {
        return axiosInstance.get(`${USER_API_BASE_URL}/${userId}`);
    }

    createUser(user) {
        return axiosInstance.post(USER_API_BASE_URL, user);
    }

    updateUser(user, userId) {
        return axiosInstance.put(`${USER_API_BASE_URL}/${userId}`, user);
    }

    deleteUser(userId) {
        return axiosInstance.delete(`${USER_API_BASE_URL}/${userId}`);
    }
}

export default new UserService();
