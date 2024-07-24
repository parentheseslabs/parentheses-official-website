import CommonCard from '@/components/resourcespage/CommonCard';
import ToolsHero from '@/components/resourcespage/ToolsHero';
import React from 'react'

const creativetools = [
  {
    name: "Figma",
    website:"https://www.figma.com/",
    description: "Figma is a web-based design tool that enables teams to collaborate on UI/UX design in real-time. It offers powerful design features and a collaborative environment, making it ideal for designing interfaces and prototyping user experiences.",
    usecase: [
      { case: "Real-Time Collaboration", desc: "Allow multiple team members to work on the same design file simultaneously." },
      { case: "Prototyping", desc: "Create interactive prototypes to simulate user flows and interactions." },
      { case: "Design Systems", desc: "Build and maintain consistent design systems with shared components and styles." },
      { case: "Cross-Platform Design", desc: "Design interfaces that work across web, mobile, and desktop platforms." },
      { case: "Developer Handoff", desc: "Generate CSS and code snippets to facilitate smooth handoffs to developers." }
    ],
    tags: ["UI/UX", "Design", "Prototyping", "Collaboration", "Web-Based"],
    img: "/raster/figma.png"
  },
  {
    name: "Spline",
    website:"https://spline.design/",
    description: "Spline is a 3D design tool that allows designers to create interactive 3D graphics and animations directly in the browser. It is designed to make 3D design more accessible and intuitive, enabling the creation of complex scenes without extensive 3D modeling experience.",
    usecase: [
      { case: "3D Modeling", desc: "Create and edit 3D models with intuitive tools and controls." },
      { case: "Interactive Experiences", desc: "Design interactive 3D scenes that respond to user inputs." },
      { case: "Animations", desc: "Animate 3D objects to bring designs to life with motion." },
      { case: "Web Integration", desc: "Embed 3D scenes directly into websites and web applications." },
      { case: "Real-Time Collaboration", desc: "Collaborate with team members on 3D designs in real-time." }
    ],
    tags: ["3D Design", "Modeling", "Animation", "Interactive", "Web-Based"],
    img: "/raster/spline.png"
  },
  {
    name: "Canva",
    website:"https://www.canva.com/en_in/",
    description: "Canva is a graphic design platform that allows users to create a variety of visual content with ease. It offers a wide range of templates, tools, and resources for creating everything from social media graphics to presentations and marketing materials.",
    usecase: [
      { case: "Social Media Graphics", desc: "Create engaging visuals for social media posts and ads." },
      { case: "Presentations", desc: "Design professional presentations with customizable templates." },
      { case: "Marketing Materials", desc: "Produce flyers, brochures, and other marketing collateral." },
      { case: "Custom Templates", desc: "Utilize and modify templates for quick and easy design." },
      { case: "Collaborative Editing", desc: "Work with team members to edit and improve designs in real-time." }
    ],
    tags: ["Graphic Design", "Templates", "Social Media", "Marketing", "Collaborative"],
    img: "/raster/canva.png"
  }]

const creativeToolsPageInfo = {
  type: "Creative",
  heading: "Top Creative Tools from Parentheses Labs",
  desc: "Explore our selection of cutting-edge creative tools that are essential for designing and bringing your ideas to life."
};


const page = () => {
  return (
    <main className=' flex flex-col gap-16'>
      <ToolsHero {...creativeToolsPageInfo} />
      <section className='space-y-20 divide-y-[2px] px-[7%]'>
        {
          creativetools.map((item, idx) => (
            <CommonCard key={idx} {...item} />
          ))
        }
      </section>
    </main>
  )
}

export default page