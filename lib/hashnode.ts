import { HashnodeApiResponse, HashnodePost, HashnodeFetchOptions } from '../types/hashnode';

const HASHNODE_API_URL = 'https://gql.hashnode.com';
const BLOG_HOST = 'agenticaiavataq.hashnode.dev';

const GET_PUBLICATION_POSTS = `
  query GetPublicationPosts($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      id
      title
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            brief
            url
            publishedAt
            coverImage {
              url
              attribution
            }
            readTimeInMinutes
            tags {
              id
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export async function fetchHashnodePosts(options: HashnodeFetchOptions = {}): Promise<HashnodePost[]> {
  const { first = 5, after } = options;

  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_PUBLICATION_POSTS,
        variables: {
          host: BLOG_HOST,
          first,
          after,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: HashnodeApiResponse = await response.json();

    if (data.errors && data.errors.length > 0) {
      throw new Error(`GraphQL error: ${data.errors[0].message}`);
    }

    if (!data.data?.publication) {
      throw new Error('No publication found');
    }

    return data.data.publication.posts.edges.map(edge => edge.node);
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch posts');
  }
}

export function formatPublishedDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getReadTimeText(minutes: number): string {
  if (minutes < 1) return '< 1 min read';
  return `${Math.round(minutes)} min read`;
}

export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}