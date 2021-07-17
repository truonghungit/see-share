/** @jsx jsx */
import * as React from "react"
import { jsx, Link as TLink, Card, Heading, Text, Flex, Image, Box } from "theme-ui"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    banner: any
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showBanner?: boolean
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true, showBanner = false }: BlogListItemProps) => (
  <Card>
    {
      showBanner && post.banner?.childImageSharp &&
      <div sx={{ margin: '-1rem -1rem 0 -1rem', mb: 3, maxHeight: '290px', overflow: 'hidden' }}>
        <TLink as={Link} href={post.slug}>
          <Image src={post.banner.childImageSharp.original.src} />
        </TLink>
      </div>
    }
    <TLink as={Link} href={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      <Heading
        variant="headline"
        as="h3"
      >
        {post.title}
      </Heading>
    </TLink>
    <TLink href={post.slug} sx={{ color: `text` }}>
      <Box sx={{ mt: 3 }}>{post.description}</Box>
    </TLink>
    <Box sx={{ mt: 3 }}>
      {post.tags && showTags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </Box>
    <Flex sx={{
      mt: 3,
      justifyContent: "space-between"
    }}>
      <time>{post.date}</time>
      <Box>
        {post.timeToRead && <span>{post.timeToRead} min read</span>}
      </Box>
    </Flex>
  </Card>
)

export default BlogListItem
