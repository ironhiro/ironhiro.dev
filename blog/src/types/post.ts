/** Plain, serializable view of a post: safe to pass into React components and islands. */
export interface PostSummary {
  id: string;
  title: string;
  description: string;
  /** ISO 8601 */
  pubDate: string;
  /** ISO 8601 */
  updatedDate?: string;
  tags: string[];
  draft: boolean;
  minutes: number;
}

export interface PostLink {
  id: string;
  title: string;
}

export interface TagCount {
  name: string;
  count: number;
}

export interface TocHeading {
  depth: number;
  slug: string;
  text: string;
}
