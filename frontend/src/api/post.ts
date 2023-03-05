import type { PayloadCollection } from '../types';
import qs from 'qs';
import { Post } from '@payload/payload-types';
import { apiFetch } from '.';

export async function getPosts(
  query: any = null
): Promise<PayloadCollection<Post>> {
  const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true });
  console.log(stringifiedQuery);
  const data = await apiFetch(
    `${import.meta.env.PAYLOAD_API_URL}/posts${stringifiedQuery}`
  );
  return data;
}

type Res = {
  data: PayloadCollection<Post> | null;
  error: any;
};

export async function getPost(slug: string): Promise<Res> {
  try {
    const { data }: Res = await apiFetch(
      `${import.meta.env.PAYLOAD_API_URL}/posts/slug/${slug}`
    );
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
