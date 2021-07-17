/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Layout from "./layout"
import Sidebar from "./side-bar"

type HomeLayoutProps = { children: React.ReactNode }

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const asideStyles = {
    display: ['none', 'none', 'block'],
    pr: [3],
    flexBasis: ['240px', '240px', '210px', '240px'],
    flexShrink: 0,
    transition: "all 300ms"
  };

  const mainStyles = {
    flexGrow: 1,
    flexBasis: 0,
    margin: 'auto',
    px: [2, 3, 0]
  }

  return (
    <Layout>
      <Flex
        sx={{
          flexWrap: 'wrap',
          pt: [3],
        }}>
        <aside sx={asideStyles}>
          <Sidebar isSticky={true}/>
        </aside>
        <main sx={mainStyles}>
          {children}
        </main>
      </Flex>
    </Layout>
  )
}

export default HomeLayout;
