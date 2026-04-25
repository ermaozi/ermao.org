import type { CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

export function organizeBlogPosts(posts: BlogPost[]) {
    const sortedPosts = posts
        .filter((post) => post.data && post.data.pubDate)
        .sort((a, b) => {
            const pinnedA = a.data.pinned ? 1 : 0;
            const pinnedB = b.data.pinned ? 1 : 0;
            if (pinnedA !== pinnedB) {
                return pinnedB - pinnedA;
            }
            return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
        });

    const featuredPost = sortedPosts.find((post) => post.data.pinned);
    const regularPosts = featuredPost
        ? sortedPosts.filter((post) => post.id !== featuredPost.id)
        : sortedPosts;

    return {
        sortedPosts,
        featuredPost,
        regularPosts,
    };
}
