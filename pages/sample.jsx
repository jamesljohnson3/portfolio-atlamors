import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<>
      <span className="span">
        <p>Design, test and manage your products better</p>
      </span>
      <style jsx>{`
        .span {
          display: block;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
          height: auto;
          flex-grow: 0;
          max-height: 164px;
          color: rgba(22, 11, 54, 1);
          font-family: "Play", sans-serif;
          font-size: 64px;
          margin-top: 69px;
          border-style: solid;
          border-width: 0px;
          text-shadow: 1px 1px 0 rgba(233, 0, 255, 0.17);
        }
        @media (max-width: 640px) {
          .span {
            color: rgba(22, 11, 54, 1);
            margin-left: -50px;
            font-size: 30px;
            margin-top: 0;
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.17);
          }
        }
      `}</style>
    </>
			{/* <Looking /> */}
			<FeaturedProjects />
			<About />
			<Technical />
			{/* <Career /> */}
		</>
	);
}