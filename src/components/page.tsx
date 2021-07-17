/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import Seo from "./seo"

type Props = {
  data: {
    page: any
    [key: string]: any
  }
  [key: string]: any
};

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
};

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <Seo title={page.title} description={page.excerpt} />
    <section sx={{ my: 5, variant: `layout.content` }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
);

export default function MinimalBlogCorePage({ ...props }: Props) {
  return <Page {...props} />
}
