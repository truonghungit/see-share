/** @jsx jsx */
import * as React from "react"
import { } from "theme-ui"
import { Link } from "gatsby"
import { jsx, Heading, Box, Card, Image, Link as TLink, Badge } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import Seo from "./seo"
import useBlogConfig from "../hooks/use-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import getTagColor from "../utils/getTagColor"

type Props = {
  data: {
    post: any
    [key: string]: any
  }
  [key: string]: any
}

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

type TagsProps = {
  tags: {
    name: string
    slug: string
  }[]
}

const ItemTags = ({ tags }: TagsProps) => {
  const { tagsPath, basePath } = useBlogConfig()

  return (
    <React.Fragment>
      {tags.map((tag, i) => {
        const tagColor = getTagColor(tag);
        console.log('tagColor', tagColor);
        return (
          <React.Fragment key={tag.slug}>
            {!!i && `   `}
            <TLink as={Link} href={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}>
              <Badge sx={{ p: '0.25rem', borderRadius: '4px', ...tagColor }}>#{tag.name}</Badge>
            </TLink>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <Seo
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <Box sx={{ pt: [0, 0, 3] }}>
      <Card sx={{
        borderTopLeftRadius: [0, 0, 'default'],
        borderTopRightRadius: [0, 0, 'default']
      }}>
        <article>
          {
            post.banner?.childImageSharp &&
            <div sx={{ margin: '-1rem -1rem 0 -1rem', mb: 3, maxHeight: '290px', overflow: 'hidden' }}>
              <Image src={post.banner.childImageSharp.resize.src} />
            </div>
          }
          <Box sx={{ px: [0, 4] }}>
            <Heading as="h1" variant="styles.h1">
              {post.title}
            </Heading>

            <Box sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
              {post.tags && (
                <React.Fragment>
                  <ItemTags tags={post.tags} />
                </React.Fragment>
              )}
            </Box>
            <Box sx={{ color: `secondary`, mt: 3, fontSize: [1, 1, 2] }}>
              <time>{post.date} </time>
              {post.timeToRead && <span>     - {post.timeToRead} min read</span>}
            </Box>
            <section
              sx={{
                mb: 5,
                ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
                variant: `layout.content`,
              }}
            >
              <MDXRenderer>{post.body}</MDXRenderer>
            </section>
          </Box>
        </article>
      </Card>
    </Box>
  </Layout>
)

export default function MinimalBlogCorePost({ ...props }: Props) {
  return <Post {...props} />
}
