const delay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

export const getPosts = async () => {
  await delay(300);
  const posts = JSON.parse(localStorage.getItem('cs_posts') || '[]');
  const users = JSON.parse(localStorage.getItem('cs_users') || '[]');
  // populate user
  const populated = posts.map((p) => ({ ...p, user: users.find((u) => u._id === p.userId) }));
  return populated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const createPost = async ({ caption, image }) => {
  await delay(300);
  const token = localStorage.getItem('cs_token') || '';
  const userId = token.split('-').pop() || 'u1';
  const posts = JSON.parse(localStorage.getItem('cs_posts') || '[]');
  const id = `p${Date.now()}`;
  const post = { _id: id, userId, caption, image: image || '', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  posts.unshift(post);
  localStorage.setItem('cs_posts', JSON.stringify(posts));
  return post;
};

export const updatePost = async (id, payload) => {
  await delay(300);
  const posts = JSON.parse(localStorage.getItem('cs_posts') || '[]');
  const idx = posts.findIndex((p) => p._id === id);
  if (idx === -1) throw new Error('Post not found');
  posts[idx] = { ...posts[idx], ...payload, updatedAt: new Date().toISOString() };
  localStorage.setItem('cs_posts', JSON.stringify(posts));
  return posts[idx];
};

export const deletePost = async (id) => {
  await delay(200);
  let posts = JSON.parse(localStorage.getItem('cs_posts') || '[]');
  posts = posts.filter((p) => p._id !== id);
  localStorage.setItem('cs_posts', JSON.stringify(posts));
  return true;
};

export default { getPosts, createPost, updatePost, deletePost };
