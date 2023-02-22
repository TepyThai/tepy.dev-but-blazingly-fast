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
