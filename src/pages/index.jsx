import Head from 'next/head'
// import NavBar from 'components/Navbar'
import Header from 'components/Header'
import Education from 'components/sections/education'
import Works from 'components/sections/works'
import Skills from 'components/sections/skills'

export default function Home() {
  return (
    <>
      <Head>
        {/* COMMON TAGS */}
        <meta charSet="utf-8" />
        <title> Kanak Kholwal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Search Engine */}
        <meta name="description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m very passionate about the work that I do." />
        <meta name="image" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />
        {/* Schema.org for Google */}
        <meta itemProp="name" content=" Kanak Kholwal" />
        <meta itemProp="description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m very passionate about the work that I do." />
        <meta itemProp="image" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />

        {/* Open Graph general (Facebook, Pinterest & LinkedIn) */}
        <meta property="og:title" content=" Kanak Kholwal" />
        <meta property="og:description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m ...." />
        <meta property="og:image" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />
        <meta property="og:url" content="https://www.kanakkholwal.eu.org/" />
        <meta property="og:site_name" content="Kanak Kholwal 's Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Meta Tag Generator Tool" />
        <meta property="twitter:description" content="Hello! I'm Kanak, a FullStack Web Developer based in India. I’m very passionate about the work that I do." />
        <meta property="twitter:image:src" content="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100" />
        <meta property="twitter:site" content="@kanakkholwal" />
        <meta property="twitter:creator" content="@kanakkholwal" />


        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>

      <main>
        {/* <NavBar /> */}
        <Header
          imageSrc="https://kkupgrader.eu.org/assets/images/me.png?w=640&q=100"
          title="Kanak Kholwal"
          description="As a Full Stack Developer with over 2 years of experience, I have a strong command over JavaScript, NodeJs, and various popular frameworks such as React and NextJs. I have expertise in developing dynamic and responsive websites, utilizing REST APIs, and optimizing website performance. With my technical skills in databases like MongoDB and Firebase, I have worked on various projects such as developing web tools for SEO and image conversion, a college result website with integrated features, and a web UI component library. Through my previous work, I have improved website UI and UX, boosted new user acquisition, and enhanced website speed through optimization techniques. I am constantly learning and adapting to new technologies, and I am eager to take on new challenges and opportunities in the field of web development."
          resumeUrl="https://docs.google.com/document/d/1GS8lGC6HObmk774S3j5UKG2MOqOV8NF3/edit?usp=sharing&ouid=109800121336149113874&rtpof=true&sd=true"
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
