import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'
import Hero2 from '../components/hero'
import { FallInPlace } from '../components/fall-in-place'
import { Em, Br } from '../components/typography'
import { ButtonLink } from '../components/link'
import Image from 'next/image'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

import { Box, Flex, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import {
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Stack,
  Link,
  Button,
  ButtonGroup,
  useColorModeValue,
  chakra,
  Avatar,
  VisuallyHidden,
  Img,
  Grid,
  GridItem,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  useClipboard,
  IconButton,
  useTheme,
  Tag,
  Wrap,
  WrapItem,
  Icon,
  Center,
  Tooltip,
  AspectRatio,
  Badge,
  DarkMode,
  Card,
} from '@chakra-ui/react'

//
export default function HomePage() {

	return (
		<><>
			<Color colors={colors} />
      <Stack
              direction="column"
              alignItems="center"
              position="relative"
              zIndex="2"
            >
              <Hero2
                as={Stack}
                id="home"
                alignItems="center"
                textAlign="center"
                title={
                  <FallInPlace textAlign="center" initialInView>
                    Build intuitive apps that your customers will love
                  </FallInPlace>
                }
                description={
                  <FallInPlace
                    delay={0.4}
                    fontWeight="medium"
                    textAlign="center"
                    fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
                    initialInView
                  >
                    Saas UI is a <Em>React component library</Em> and{' '}
                    <Em>starterkit</Em>
                    <Br display={{ base: 'none', md: 'inline' }} /> that
                    doesn&apos;t get in your way and helps you{' '}
                    <Br display={{ base: 'none', md: 'inline' }} /> build
                    intuitive SaaS products with speed.
                  </FallInPlace>
                }
              >
                <FallInPlace delay={0.8} initialInView>
                  <HStack pt="12" pb="12" spacing="8" justifyContent="center">
                    <HStack>
Logo here                      <Text fontWeight="medium">React</Text>
                    </HStack>
                    Logo here                  </HStack>
                </FallInPlace>
                <FallInPlace delay={1} initialInView>
                  <ButtonGroup spacing={4} alignItems="center">
                    <ButtonLink colorScheme="primary" size="lg" href="/pricing">
                      Buy Pro
                    </ButtonLink>
                    <ButtonLink
                      size="lg"
                      href="/docs"
                      variant="outline"
                      _hover={{
                        bg: 'whiteAlpha.200',
                      }}
                      rightIcon={
                        <Icon
                          as={FiArrowRight}
                          sx={{
                            transitionProperty: 'common',
                            transitionDuration: 'normal',
                            '.chakra-button:hover &': {
                              transform: 'translate(5px)',
                            },
                          }}
                        />
                      }
                    >
                      Read documentation
                    </ButtonLink>
                  </ButtonGroup>
                </FallInPlace>
              </Hero2>
              <Box
                width="80vw"
                maxW="1100px"
                margin="0 auto"
                alignItems="center"
                position="relative"
                zIndex="2"
              >
                <FallInPlace
                  delay={1.4}
                  threshold={0.2}
                  onChange={(inView) => setAnimate(inView)}
                >
                  <AspectRatio ratio={1100 / 698}>
                    <Image
                      src="/screenshots/list.png"
                      // layout="fill"
                      width={1100}
                      height={698}
                      alt="Screenshot of a ListPage in Saas UI Pro"
                      quality="75"
                      priority
                    />
                  </AspectRatio>
                </FallInPlace>
              </Box>
            </Stack>

			<span className="span">
				<p>Design, test and manage your products better</p>
			</span>

			{/* <Looking /> */}
			<FeaturedProjects />
			<About />
			<Technical />
			{/* <Career /> */}
		</><> <style jsx>{`
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
			</></>
	);
}