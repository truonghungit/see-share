/** @jsx jsx */
import * as React from "react"
import { Global } from "@emotion/react"
import { Box, Container, jsx } from "theme-ui"
import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        body: {
          margin: 0,
          paddingTop: '60px',
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <Seo />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Header />
    <Box>
      <Container sx={{ pt: [0, 0, 0], pb: [0] }}>
        <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  </React.Fragment>
)

export default Layout
