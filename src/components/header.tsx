/** @jsx jsx */
import { jsx, useColorMode, Flex, Container } from "theme-ui"
import useBlogConfig from "../hooks/use-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "./header-external-links"

const Header = ({ toggleSidenav }) => {
  const { navigation: nav } = useBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ variant: 'header' }}>
      <Container sx={{ height: "100%", py: [0], px: [0, 0, 3] }}>
        <Flex sx={{
          height: "100%",
          alignItems: `center`,
          justifyContent: `space-between`,
        }}>
          <Flex>
            <div sx={{
              display: ["flex", "flex", "none"],
              alignItems: `center`,
              mx: [2],
              px: [2]
            }} onClick={toggleSidenav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akkwdvu56n6uitoju09or70fbvc216ej">
                <title id="akkwdvu56n6uitoju09or70fbvc216ej">Navigation menu</title>
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
              </svg>
            </div>
            <HeaderTitle />
          </Flex>
          <div sx={{ mx: [2, 2, 0]}}>
            <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
          </div>
        </Flex>
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
      </Container>
    </header>
  )
}

export default Header
