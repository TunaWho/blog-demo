import Http from '@/utils/Http';

const http = new Http();

export async function postDetail(postId) {
  return await http.get(`/blogs/${postId}`);
}

export async function getPosts(params) {
  return await http.get('/blogs', {  sortBy: 'createdAt', ...params });
}
