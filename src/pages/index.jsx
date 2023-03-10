import Head from 'next/head'
import Header from 'components/Header'
import Education from 'components/sections/education'
import Works from 'components/sections/works'
import Skills from 'components/sections/skills'

export default function Home() {

  const siteData = {
    "@context": "http://schema.org/",
    "@type": "WebSite",
    "name": "Kanak Kholwal",
    "alternateName": "Kanak Kholwal's Portfolio",
    "url": "https://kanakkholwal.eu.org/"
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
        {/* <NavBar /> */}
        <Header
          imageSrc="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100"
          title="Kanak Kholwal"
          description="As a Full Stack Developer with over 2 years of experience, I have a strong command over JavaScript, NodeJs, and various popular frameworks such as React and NextJs. I have expertise in developing dynamic and responsive websites, utilizing REST APIs, and optimizing website performance. With my technical skills in databases like MongoDB and Firebase, I have worked on various projects such as developing web tools for SEO and image conversion, a college result website with integrated features, and a web UI component library. Through my previous work, I have improved website UI and UX, boosted new user acquisition, and enhanced website speed through optimization techniques. I am constantly learning and adapting to new technologies, and I am eager to take on new challenges and opportunities in the field of web development."
          resumeUrl="https://www.overleaf.com/read/ytwvxdjrprps"
          social={
            [
              { name: "Instagram", url: "https://www.instagram.com/kanakkholwal/" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/kanak-kholwal/" },
              { name: "Github", url: "https://github.com/KKUPGRADER" },
            ]
          }
        />
        <Education
          educationExperiences={[

            {
              duration: "2022 - present",
              orgName: "National Institute of Technology , Hamirpur",
              degree: "B.Tech (Integrated M.Tech)",
              description: ``
            }
          ]}

        />
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

        <Skills />
      </main>
    </>
  )
}
