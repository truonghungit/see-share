/** @jsx jsx */
import { jsx, useColorMode, Flex, Container } from "theme-ui"
import useBlogConfig from "../hooks/use-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "./header-external-links"

const Header = () => {
  const { navigation: nav } = useBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ variant: 'header' }}>
      <Container sx={{ height: "100%", pt: [0, 0, 0], pb: [0, 0, 0] }}>
        <Flex sx={{
          height: "100%",
          alignItems: `center`,
          justifyContent: `space-between`,
        }}>
          <HeaderTitle />
          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </Flex>
      </Container>
      {/* <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <HeaderExternalLinks />
      </div> */}
    </header>
  )
}

export default Header
