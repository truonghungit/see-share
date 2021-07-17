/** @jsx jsx */
import { jsx, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import replaceSlashes from "../utils/replaceSlashes"
import useBlogConfig from "../hooks/use-blog-config"

type SidebarProps = {
  tags: {
    fieldValue: string
    totalCount: number
  }[]
}

const Sidebar = ({ isSticky }) => {
  const { tagsPath, basePath } = useBlogConfig();

  return (
    <div sx={{ position: isSticky ? 'sticky' : 'unset', top: 'calc(60px + 1rem)' }}>
      <nav>
        <TLink
          as={Link}
          sx={{ variant: `sideNav` }}
          href={replaceSlashes(`/${basePath}`)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24" aria-hidden="true" class="crayons-icon crayons-icon--default">
            <g>
              <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
              <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
              <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
              <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
              <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
              <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
              <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
              <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
            </g>
          </svg>
          <span sx={{ ml: 2 }}>Home</span>
        </TLink>
        <TLink
          as={Link}
          sx={{ variant: `tags.item`, display: 'flex', alignItems: 'center' }}
          href={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
              <g>
                <path fill="#FFD983" d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"></path>
                <path fill="#D99E82" d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"></path>
                <path fill="#C1694F" d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"></path>
              </g>
            </svg>
          </span>
          <span sx={{ ml: 2 }}>Tags</span>
        </TLink>
        <TLink
          as={Link}
          sx={{ variant: `tags.item`, display: 'flex', alignItems: 'center' }}
          href={replaceSlashes(`/${basePath}/about`)}
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
              <g>
                <path fill="#FFAC33" d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"></path>
                <path fill="#BE1931" d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"></path>
                <path fill="#BE1931" d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"></path>
              </g>
            </svg>
          </span>
          <span sx={{ ml: 2 }}>About</span>
        </TLink>
      </nav>
      {/* <nav>
        <header sx={{ p: [2] }}>
          <h3 sx={{ mb: 0 }}>Tags</h3>
        </header>
        <div>
          {tags.map((tag) => (
            <TLink
              as={Link}
              sx={{ variant: `tags.item` }}
              href={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(tag.fieldValue)}`)}
            >
              <span>#{tag.fieldValue}</span>
            </TLink>
          ))}
        </div>
      </nav> */}
    </div>
  )
}

export default Sidebar;
