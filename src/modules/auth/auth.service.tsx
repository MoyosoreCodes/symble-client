import axios from 'axios';

const AuthService = axios.create({
  baseURL: `${process.env.API_BASE}/${process.env.API_VERSION}`,
});

export const login = (data:any) =>
  AuthService.post(`/users/auth/`, data);

export const signup = (data:any) => AuthService.post('/users', data);

export const recover = (data:any) =>
  AuthService.post('/users/forgot-password', data);

export const updatePassword = (data:any) =>
  AuthService.post(`/users`, data);