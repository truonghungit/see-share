/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogListItem from "./blog-list-item"

type ListingProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    banner: any
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  className?: string
  showTags?: boolean
}

const Listing = ({ posts, showTags = true }: ListingProps) => (
  <section sx={{ mb: [5, 6, 7] }}>
    {posts.map((post, index) => (
      <div sx={{ mb: 3 }}>
        <BlogListItem key={post.slug} post={post} showTags={showTags} showBanner={index === 0} />
      </div>
    ))}
  </section>
)

export default Listing
