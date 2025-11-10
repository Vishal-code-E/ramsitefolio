export interface HashnodeTag {
  id: string;
  name: string;
  slug: string;
}

export interface HashnodeCoverImage {
  url: string;
  attribution?: string;
}

export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage?: HashnodeCoverImage;
  readTimeInMinutes: number;
  tags: HashnodeTag[];
}

export interface HashnodePublication {
  id: string;
  title: string;
  posts: {
    edges: Array<{
      node: HashnodePost;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      endCursor?: string;
    };
  };
}

export interface HashnodeApiResponse {
  data: {
    publication: HashnodePublication;
  };
  errors?: Array<{
    message: string;
    extensions?: {
      code: string;
    };
  }>;
}

export interface HashnodeFetchOptions {
  first?: number;
  after?: string;
}

export interface BlogWidgetProps {
  className?: string;
  showTags?: boolean;
  maxPosts?: number;
}

export interface BlogPostCardProps {
  post: HashnodePost;
  onClick?: () => void;
}