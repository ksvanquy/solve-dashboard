// src/lib/api/user.ts
import axios from 'axios';

const BASE_URL = '/api/users';  // URL API cho users

// Lấy tất cả users
export const getAllUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Lấy user theo id
export const getUserById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Tạo user mới
export const createUser = async (data: { name: string; email: string }) => {
  const response = await axios.post(BASE_URL, data);
  return response.data;
};

// Cập nhật thông tin user
export const updateUser = async (id: string, data: { name: string; email: string }) => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data;
};

// Xoá user
export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
