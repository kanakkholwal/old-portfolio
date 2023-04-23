import Head from 'next/head'
import Header from 'components/Header'
import Education from 'components/sections/education'
import Projects from 'components/sections/projects'
import Works from 'components/sections/works'
import Skills from 'components/sections/skills'
import styled from 'styled-components'

const Section = styled.section`
width:clamp(100px,calc(100% - 0.5rem),1400px);
margin-inline: auto;
margin-top: 2rem;
display:flex;
align-items:stretch;
justify-content: flex-start;
flex-wrap: wrap;
padding-block: 1rem;
padding-inline: .75rem;
background:#fbfbfb;
position:relative;
z-index:3;
border-radius:8px;
`;
const SectionInfo = styled.div`
flex:0 1 20rem;
h2{
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
line-height: 110%;
svg{
margin-right:1rem;
padding:10px;
border-radius:12px;
color:#6878AC;
background:#D9DEEE;
}
}
`;
const SectionContent = styled.div`
flex: 1 1 auto;
padding:0.5rem 1rem
`;



export default function Home() {



  const siteData = {
    "@context": "http://schema.org/",
    "@type": "WebSite",
    "name": "Kanak Kholwal",
    "alternateName": "Kanak Kholwal's Portfolio",
    "url": "https://kanakkholwal.eu.org"
  }
  const data = {
    imageSrc: "https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100",
    title: "Kanak Kholwal",
    description: "As a Full Stack Developer with over 2 years of experience, I have a strong command over JavaScript, NodeJs, and various popular frameworks such as React and NextJs. I have expertise in developing dynamic and responsive websites, utilizing REST APIs, and optimizing website performance. With my technical skills in databases like MongoDB and Firebase, I have worked on various projects such as developing web tools for SEO and image conversion, a college result website with integrated features, and a web UI component library. Through my previous work, I have improved website UI and UX, boosted new user acquisition, and enhanced website speed through optimization techniques. I am constantly learning and adapting to new technologies, and I am eager to take on new challenges and opportunities in the field of web development.",
    resumeUrl: "https://www.overleaf.com/read/ytwvxdjrprps",
    social:
      [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/kanak-kholwal" },
        { name: "Github", url: "https://github.com/KKUPGRADER" },
        { name: "Instagram", url: "https://www.instagram.com/kanakkholwal" },
      ]

  }
  return (
    <>
      <Head>
        {/* COMMON TAGS */}

        <title> Kanak Kholwal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData) }}
        />


      </Head>

      <main>
        <Header {...data} />
        <Section >
          <SectionInfo>
            <h2>About Me</h2>
          </SectionInfo>
          <SectionContent>
            <p>{data.description}</p>

          </SectionContent>
        </Section>
        <Section >
          <SectionInfo>
            <h2>
              Experience</h2>
          </SectionInfo>
          <SectionContent>
            <Works
              workExperiences={[

                {
                  duration: "2022 - present",
                  orgName: "Textify AI",
                  role: "Frontend Web Developer",
                  description: `Developing the UI for user base and admin side`,
                  points: [
                    ` Designed and developed dynamic and responsive websites and Chrome extension using HTML, CSS, JavaScript,
                and ReactJs .`,
                    `Worked with REST APIs to retrieve and display data from databases. `,
                    `Improved website UI and UX and boosted new users by 180%. `,
                    ` Improved website performance and speed through optimization techniques by 120%. \n`]
                }
              ]}

            />

          </SectionContent>
        </Section>
        <Section >
          <SectionInfo>
            <h2>Education</h2>
          </SectionInfo>
          <SectionContent>
            <Education
              educationExperiences={[

                {
                  duration: "December 2021 - present",
                  orgName: "National Institute of Technology , Hamirpur",
                  degree: "B.Tech (Integrated M.Tech)",
                  description: ``
                }
              ]}

            />
          </SectionContent>
        </Section>
        <Section >
          <SectionInfo>
            <h2>Projects</h2>
          </SectionInfo>
          <SectionContent>
            <Projects
              projects={[
                {
                  category: "ExpressJs,ReactJs ,SASS ,Firebase",
                  title: "College Result Website",
                  description: "To display college results across all majors and years with extended functionalities.",
                  link: "https://nith-result.web.app/",
                  image: "/assets/images/result-site.webp",
                  theme: {
                    color: {
                      light: "#a07cc5",
                      dark: "#f4e9ff"
                    },
                    bg: {
                      light: "#f8f5fb",
                      dark: "#6658d3"
                    }
                  }
                },
                {
                  category: "SASS , VanillaJs",
                  title: "Web UI Component Library ",
                  description: "To develop an open-source web component library for quick development .",
                  link: "https://genesis-ui.netlify.app/",
                  image: "/assets/images/web-design.svg",
                  theme: {
                    color: {
                      light: "#3f78e0",
                      dark: "#0a0e13"
                    },
                    bg: {
                      light: "#f1f5fd",
                      dark: "#3f78e0"
                    }
                  }
                },

                {
                  category: "SASS , NextJs ,ReactJs",
                  title: "Web Tools(beta)",
                  description: "To develop web tools for websites for basic web development operations like SEO and image conversion,etc.",
                  link: "/tools",
                  image: "/assets/images/web-tools.svg",
                  theme: {
                    color: {
                      light: "rgb(0, 82, 73)",
                      dark: "rgb(0, 82, 73)"
                    },
                    bg: {
                      light: "#d4f3e1",
                      dark: "rgb(47 188 106)"
                    }
                  }
                }]}

            />
          </SectionContent>
        </Section>
        <Section 
  
          >
          <SectionInfo>
            <h2>Skills</h2>
          </SectionInfo>
          <SectionContent style={{ width: "100%" }}>
            <Skills />
          </SectionContent>
        </Section>



      </main>
    </>
  )
}
