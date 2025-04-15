// src/utils/usersApi.ts
import axios from 'axios';
import { CreateUserDto } from '../types/CreateUserDto';
import { UpdateUserDto } from '../types/UpdateUserDto';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Root URL of your backend API
});

export const usersApi = {
  async getAllUsers() {
    const response = await api.get('/users'); // Append /users here
    return response.data;
  },

  async getUserById(id: number) {
    const response = await api.get(`/users/${id}`); // Append /users/:id here
    return response.data;
  },

  async createUser(dto: CreateUserDto) {
    const response = await api.post('/users', dto); // Append /users here
    return response.data;
  },

  async updateUser(id: number, dto: UpdateUserDto) {
    const response = await api.patch(`/users/${id}`, dto); // Append /users/:id here
    return response.data;
  },

  async deleteUser(id: number) {
    const response = await api.delete(`/users/${id}`); // Append /users/:id here
    return response.data;
  },
};