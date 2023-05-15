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
			<span className="block h-auto grow-0 max-h-[164px] text-[rgba(22,11,54,1)] text-[64px] mt-[69px] border-solid border-0 max-sm:text-[rgba(22,11,54,1)] max-sm:ml-[-50px] max-sm:text-[30px] max-sm:mt-0">
      <p>Design, test and manage your products better</p>
    </span>
			{/* <Looking /> */}
			<FeaturedProjects />
			<About />
			<Technical />
			{/* <Career /> */}
		</>
	);
}