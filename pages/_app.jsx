// Core packages
import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"

// Utils
import SetGridGap from '../components/utils/set.grid.util'

// Structure
import Layout from '../components/layout/layout'

import { builder } from '@builder.io/react'

builder.init('a480daf8d0e34c12bcc3f48f0079ed71')


// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "../node_modules/the-new-css-reset/css/reset.css"

// Fontsource local font import (https://github.com/fontsource/fontsource)
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

// Devicon import (https://github.com/devicons/devicon)
import '../node_modules/devicon/devicon.min.css'

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/scrollbar.css';

/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */


export default function MyApp({ Component, pageProps }) {
	return (
		<>
		<LazyMotion features={domAnimation}>
			<Layout>
				<Component {...pageProps} />
				<SetGridGap />
				<Analytics />
			</Layout>
		</LazyMotion>
		</>
	)
}