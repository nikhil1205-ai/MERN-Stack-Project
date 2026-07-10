import { seed } from '../mocks/mockData';

seed();

const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms));

export const login = async (email, password) => {
  await delay(600);
  const users = JSON.parse(localStorage.getItem('cs_users') || '[]');
  const user = users.find((u) => u.email === email || u.username === email);
  if (!user) throw new Error('Invalid credentials');
  const token = `mock-token-${user._id}`;
  localStorage.setItem('cs_token', token);
  return { token, user };
};

export const register = async ({ name, username, email, password }) => {
  await delay(800);
  const users = JSON.parse(localStorage.getItem('cs_users') || '[]');
  if (users.some((u) => u.email === email || u.username === username)) {
    throw new Error('User already exists');
  }
  const id = `u${Date.now()}`;
  const user = { _id: id, name, username, email, bio: '', profileImage: '', createdAt: new Date().toISOString() };
  users.unshift(user);
  localStorage.setItem('cs_users', JSON.stringify(users));
  const token = `mock-token-${id}`;
  localStorage.setItem('cs_token', token);
  return { token, user };
};

export const getProfile = async () => {
  await delay(400);
  const token = localStorage.getItem('cs_token');
  if (!token) throw new Error('Not authenticated');
  const id = token.split('-').pop();
  const users = JSON.parse(localStorage.getItem('cs_users') || '[]');
  return users.find((u) => u._id === id) || null;
};

export const updateProfile = async (payload) => {
  await delay(400);
  const token = localStorage.getItem('cs_token');
  if (!token) throw new Error('Not authenticated');
  const id = token.split('-').pop();
  const users = JSON.parse(localStorage.getItem('cs_users') || '[]');
  const idx = users.findIndex((u) => u._id === id);
  if (idx === -1) throw new Error('User not found');
  users[idx] = { ...users[idx], ...payload };
  localStorage.setItem('cs_users', JSON.stringify(users));
  return users[idx];
};

export const logout = async () => {
  localStorage.removeItem('cs_token');
  return true;
};

export const deleteAccount = async () => {
  await delay(400);
  const token = localStorage.getItem('cs_token');
  if (!token) throw new Error('Not authenticated');
  const id = token.split('-').pop();
  const users = JSON.parse(localStorage.getItem('cs_users') || '[]');
  const filtered = users.filter((u) => u._id !== id);
  localStorage.setItem('cs_users', JSON.stringify(filtered));
  localStorage.removeItem('cs_token');
  return true;
};

export default { login, register, getProfile, updateProfile, logout, deleteAccount };
