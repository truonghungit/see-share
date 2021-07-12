/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import Sidebar from "./side-bar"
import useBlogConfig from "../hooks/use-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
import { visuallyHidden } from "../styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom";

type Props = {
  data: {
    allPost: any,
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
    banner: any
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[],
  tags: any,
  [key: string]: any
}

const Homepage = ({ posts, tags }: PostsProps) => {
  const { basePath, blogPath } = useBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <Flex
        sx={{
          flexWrap: 'wrap',
          pt: [3],
        }}>

        <aside
          sx={{
            display: ['none', 'none', 'none', 'block'],
            pr: [3],
            flexBasis: 'sidebar'
          }}>
          <Sidebar tags={tags} />
        </aside>
        <main
          sx={{
            flexGrow: 1,
            flexBasis: 0,
            maxWidth: '720px',
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
          }}>

          <header>
            <h2 sx={{ mt: 0, mb: 3 }}>Posts</h2>
          </header>
          <Listing posts={posts} />
        </main>
      </Flex>
    </Layout>
  )
}

export default function BlogCoreHomepage({ ...props }: Props) {
  const {
    data: { allPost },
  } = props

  return <Homepage posts={allPost.nodes} tags={allPost.group} {...props} />
}
