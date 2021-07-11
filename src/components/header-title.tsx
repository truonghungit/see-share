/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, Image } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useBlogConfig from "../hooks/use-blog-config"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ display: 'flex', alignItems: 'baseline' }}>
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
        <span sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>ee & Share</span>
      </div>
    </Link>
  )
}

export default HeaderTitle
