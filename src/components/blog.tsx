/** @jsx jsx */
import { jsx, Heading, Link as TLink, Flex } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Listing from "./listing"
import useBlogConfig from "../hooks/use-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import Seo from "./seo"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
  [key: string]: any
}

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useBlogConfig()

  return (
    <Layout>
      <Seo title="Blog" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          Blog
        </Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </TLink>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default function MinimalBlogCoreBlog({ ...props }: Props) {
  const {
    data: { allPost },
  } = props

  return <Blog posts={allPost.nodes} {...props} />
}

