/** @jsx jsx */
import * as React from "react"
import { Global } from "@emotion/react"
import { Box, Container, jsx } from "theme-ui"
import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"
import Sidebar from "./side-bar"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const [isSidenavOpen, setIsSidenavOpen] = React.useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  }

  const global = (
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
  );

  console.log(isSidenavOpen);

  return (
    <React.Fragment>
      {global}
      <Seo />
      <SkipNavLink>Skip to content</SkipNavLink>
      <Header toggleSidenav={toggleSidenav} />
      <div
        onClick={toggleSidenav}
        sx={{
          display: isSidenavOpen ? "block" : "none",
          background: "#000",
          opacity: 0.5,
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 90,
        }}>Backdrop</div>
      <div sx={{
        transform: `translateX(${isSidenavOpen ? "0" : "-240px"})`,
        transition: "all 0.3s",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        height: "100%",
        backgroundColor: "#fff",
        zIndex: 99,
        width: "240px",
        borderRight: "1px solid rgba(0,0,0,.12)",
      }}>
        <div sx={{
          height: '60px',
          px: [2],
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(8, 9, 10, .1)',
        }}
        >
          <svg height="36" viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,0 50,17.5 60,0" fill="#ee2f7c" />
            <polygon points="40,0 30,17.5 50,17.5" fill="#e11667" />
            <polygon points="20,0 30,17.5 40,0" fill="#a5282e" />
            <polygon points="20,0 10,17.5 30,17.5" fill="#c1d852" />
            <polygon points="10,17.5 20,35 30,17.5" fill="#b8d432" />
            <polygon points="30,17.5 20,35 40,35" fill="#a2bd2d" />
            <polygon points="20,37.5 30,52.5 40,37.5" fill="#3bb047" />
            <polygon points="40,37.5 30,52.5 50,52.5" fill="#116393" />
            <polygon points="30,52.5 40,70 50,52.5" fill="#116393" />
            <polygon points="30,52.5 20,70 40,70" fill="#0cabe3" />
            <polygon points="10,52.5 20,70 30,52.5" fill="#acd5f1" />
            <polygon points="10,52.5 0,70 20,70" fill="#d5e8f7" />

          </svg>
          <div onClick={toggleSidenav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
            </svg>
          </div>
        </div>
        <Sidebar isSticky={false} />
      </div>
      <Box>
        <Container sx={{ pt: [0, 0, 0], pb: [0], px: [0, 0, 3] }}>
          <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
            {children}
          </Box>
          <Footer />
        </Container>
      </Box>
    </React.Fragment >
  )
}

export default Layout
