/** @jsx jsx */
import { jsx } from "theme-ui"
import HomeLayout from "./home-layout"
import Listing from "./listing"

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

  return (
    <HomeLayout>
      <header>
        <h2 sx={{ mt: 0, mb: 3 }}>Posts</h2>
      </header>
      <Listing posts={posts} />
    </HomeLayout>
  );
}

export default ({ ...props }: Props) => {
  const {
    data: { allPost },
  } = props

  return <Homepage posts={allPost.nodes} tags={allPost.group} {...props} />
}
