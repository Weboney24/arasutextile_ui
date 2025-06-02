import axios from "axios";
import { adminToken } from "../helper/notification_helper";

const BASE_URL = import.meta.env.API_BASE_URL;
const UPLOAD_BASE_URL = import.meta.env.API_UPLOAD_BASE_URL;

console.log(BASE_URL, UPLOAD_BASE_URL);
const MAIL_HELPER = import.meta.env.API_MAIL_URL;

export const login = async (formData) => await axios.post(`${BASE_URL}/auth/login`, formData);

const custom_request = axios.create();

let searchData = (value) => {
  return value || null;
};

custom_request.interceptors.request.use((config) => {
  const token = localStorage.getItem(adminToken);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const checkLoginStatus = async () => await custom_request.get(`${BASE_URL}/auth/check_login`);

export const changePassword = async (oldPassword, newPassword) =>
  await custom_request.post(`${BASE_URL}/auth/change_password`, {
    oldPassword,
    newPassword,
  });

export const uploadImage = async (formData) => await custom_request.post(`${UPLOAD_BASE_URL}/upload_images`, formData);

// blogs
export const addblogs = async (formData) => {
  return await custom_request.post(`${BASE_URL}/blog/add_blog`, formData);
};
export const getblogs = async () => await custom_request.get(`${BASE_URL}/blog/get_all_blog/`);
export const getblogsId = async (id) => await custom_request.get(`${BASE_URL}/blog/get_blog/${id}`);

export const deleteblogs = async (id) => await custom_request.delete(`${BASE_URL}/blog/delete_blog/${id}`);
export const editblogs = async (formData, id) => await custom_request.put(`${BASE_URL}/blog/edit_blog/${id}`, formData);
