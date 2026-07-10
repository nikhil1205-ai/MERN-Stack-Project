// Mock data for ConnectSphere frontend
import { v4 as uuidv4 } from 'uuid';

const users = [
  {
    _id: 'u1',
    name: 'Alex Morgan',
    username: 'alexm',
    email: 'alex@example.com',
    bio: 'Designer • Traveler • Coffee enthusiast',
    profileImage: '',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'u2',
    name: 'Jamie Doe',
    username: 'jamie',
    email: 'jamie@example.com',
    bio: 'Frontend engineer. I love pixels.',
    profileImage: '',
    createdAt: new Date().toISOString(),
  },
];

const posts = [
  {
    _id: 'p1',
    userId: 'u1',
    caption: 'Sunset from the hills 🌄',
    image: '',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'p2',
    userId: 'u2',
    caption: 'Design systems make life easier ✨',
    image: '',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const notifications = [
  { id: uuidv4(), type: 'like', text: 'alexm liked your post', time: Date.now() - 3600 * 1000 },
  { id: uuidv4(), type: 'follow', text: 'jamie started following you', time: Date.now() - 7200 * 1000 },
];

export function seed() {
  if (!localStorage.getItem('cs_users')) {
    localStorage.setItem('cs_users', JSON.stringify(users));
  }
  if (!localStorage.getItem('cs_posts')) {
    localStorage.setItem('cs_posts', JSON.stringify(posts));
  }
  if (!localStorage.getItem('cs_notifications')) {
    localStorage.setItem('cs_notifications', JSON.stringify(notifications));
  }
}

export default { users, posts, notifications };
