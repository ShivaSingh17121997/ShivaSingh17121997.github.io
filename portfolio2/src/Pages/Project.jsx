import {
  Box,
  Center,
  Heading,
  Image,
  Grid,
  GridItem,
  Text,
  Flex,
  Link,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";
// import Doctor from "../images/doctor.png";
 import Student from "../images/student.png";
import gadget from "../images/gadget.png";
import Recipi from "../images/Recipi-fit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
const projectsArray = [
  {
    logo: Recipi,
    title: "Recipe Snap",
    github: "https://github.com/ErGopiVishwakarma/RecipeFit",
    live_Link: "https://recipefit.vercel.app/",
    description:
      "RecipeSnap is a delightful and interactive recipe website aims to inspire food enthusiasts by providing a user-friendly platform to explore, share, and discover a diverse range of mouthwatering recipes.",
    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        link: "https://redux.js.org",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  // {
    // logo: Doctor,
  //   title: "Healthcare Department",
  //   github:
  //     "https://github.com/ShivaSingh17121997/violent-hope-9407-",
  //   live_Link: "curious-liger-54058d.netlify.app/",
  //   description:
  //     "Camera lelo is a leading e-commerce website that specializes in providing high-quality photography and video equipment to professionals, enthusiasts, and hobbyists alike. The website offers a wide range of products, including cameras, lenses, tripods, lighting equipment, accessories, and more.",
  //   techStack: [
  //     {
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  //       link: "https://react.dev",
  //     },
  //     {
  //       image:
  //         "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
  //       link: "https://chakra-ui.com",
  //     },
  //     {
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  //       link: "https://redux.js.org",
  //     },
  //     {
  //       image:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //     },
  //   ],
  // },
  
  {
    logo: gadget,
    title: "Gadget 360",
    github: "https://github.com/ShivaSingh17121997/comfortable-desk-7514",
    live_Link: "https://64ed593dafb399042b1550e0--bright-malasada-d8835c.netlify.app/",
    description:
      "it is mobile comparing website where you can compare various mobile related comparisons, and eletronics item are present for comparison , it is built on javaScript , react, and CSS",

    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    logo: Student,
    title: "Student Help Desk",
    github: "https://github.com/ShivaSingh17121997/actual-shoes-7533-shiva",
    live_Link: "https://64edbbac8e967a42357e3021--effulgent-pegasus-2bd9ca.netlify.app/",
    description:
      " Welcome to the StudentHelpDesk Platform! This platform allows users to create, share, and study flashcards on various subjects. Whether you're a student looking to ace your exams or someone who enjoys learning new things, this platform is designed to help you achieve your goals.",
    techStack: [
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
];
export default function Projects() {
  return (
    <Box
      py={["0px", "60px", "80px"]}
      id="projects"
      width={"80%"}
      m={"auto"}
      position="relative"
    >
      <Box pb="30px">
        <Center fontSize={40} color="yellow" position="relative">
          <Text fontWeight={600}>Projects</Text>
        </Center>
      </Box>
      <Box>
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
          ]}
          gap={[0, 5, 10]}
        >
          {projectsArray.map(
            ({ logo, title, techStack, description, github, live_Link }) => {
              return (
                <GridItem
                  key={Math.random()}
                  overflow={"hidden"}
                  className="project-card"
                >
                  <Link href={live_Link} target="_blank">
                    <Image src={logo} w="100%" h="auto" objectFit={"cover"} />
                  </Link>
                  <Heading
                    fontSize={["18px", "20px", "22px", "25px"]}
                    className="project-title"
                    display={"inline-block"}
                    color="#B0BEC5"
                    borderBottom={"4px solid #B0BEC5"}
                    letterSpacing={1}
                    paddingTop={[2, 3, 4, 5]}
                  >
                    {title}
                  </Heading>
                  <Text
                    paddingTop={[2, 3, 4, 5]}
                    color="#B0BEC5"
                    className="project-description"
                    fontSize={["14px", "15px", "16px", "17px"]}
                    align="left"
                  >
                    {description}
                  </Text>
                  <Flex gap={2} className="project-tech-stack">
                    {techStack.map(({ image, link }) => {
                      return (
                        <Box
                          key={Math.random()}
                          py={2}
                          width={"40px"}
                          transition="transform 0.4s"
                        >
                          <Link href={link} target="_blank">
                            <Image width={"100%"} src={image} alt="image" />
                          </Link>
                        </Box>
                      );
                    })}
                  </Flex>
                  <Box>
                    <HStack pb={3}>
                      <Link
                        href={github}
                        target="_blank"
                        className="project-github-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          leftIcon={<FontAwesomeIcon icon={faGithub} />}
                        >
                          Github
                        </Button>
                      </Link>
                      <Link
                        href={live_Link}
                        target="_blank"
                        className="project-deployed-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          colorScheme="twitter"
                          leftIcon={<FontAwesomeIcon icon={faLifeRing} />}
                        >
                          Live
                        </Button>
                      </Link>
                    </HStack>
                  </Box>
                </GridItem>
              );
            }
          )}
        </Grid>
        <Box>{/** */}</Box>
      </Box>
    </Box>
  );
}
