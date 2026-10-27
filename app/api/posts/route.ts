import { NextResponse } from 'next/server';

const HASHNODE_API_URL = 'https://gql.hashnode.com';
const BLOG_HOST = 'agenticaiavataq.hashnode.dev';

const QUERY = `
  query GetPublicationPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      id
      title
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            url
            publishedAt
            coverImage {
              url
            }
            readTimeInMinutes
            tags {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const first = parseInt(searchParams.get('first') ?? '6', 10);

  try {
    const res = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; NextJS/15)',
      },
      body: JSON.stringify({ query: QUERY, variables: { host: BLOG_HOST, first } }),
      next: { revalidate: 3600 },
    });

    const contentType = res.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      throw new Error('Hashnode API returned non-JSON response');
    }

    const json = await res.json();

    if (json.errors?.length) {
      throw new Error(json.errors[0].message);
    }

    const posts = json.data?.publication?.posts?.edges?.map(
      (e: { node: unknown }) => e.node
    ) ?? [];

    return NextResponse.json({ posts });
  } catch (err) {
    console.error('[/api/posts] fetch failed:', err);
    return NextResponse.json({ posts: [], error: 'Failed to fetch posts' }, { status: 200 });
  }
}
