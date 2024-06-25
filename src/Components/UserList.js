import React, { useState, useEffect } from 'react';
import axiosInstance from '../Services/axiosInstance';
import UserService from '../Services/UserService';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await UserService.getAllUsers();
                setUsers(response.data);
            } catch (error) {
                setError('Error fetching users');
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.username}<br />
                        <strong>Email:</strong> {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
