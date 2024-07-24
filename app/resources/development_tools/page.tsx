import React from 'react'
import CommonCard from '@/components/resourcespage/CommonCard';
import ToolsHero from '@/components/resourcespage/ToolsHero';

const technologies = [
  {
    name: "Hasura",
    website:"https://hasura.io/",
    description: "Hasura is an open-source engine that instantly generates a real-time GraphQL API and REST endpoints for your data, giving you the power to query and mutate your database with ease. It sits on top of your existing databases, such as PostgreSQL, and provides a flexible, powerful, and scalable data access layer.",
    usecase: [
      { case: "Instant GraphQL API", desc: "Generate a GraphQL API instantly for your existing databases." },
      { case: "Real-Time Applications", desc: "Create real-time applications with built-in subscriptions." },
      { case: "Backend for Frontend", desc: "Act as a backend for frontend applications, streamlining development." },
      { case: "Microservices Integration", desc: "Manage multiple microservices with a unified data access layer." },
      { case: "Authentication and Authorization", desc: "Implement role-based access control easily." }
    ],
    tags: ["GraphQL", "API", "Real-Time", "Microservices", "Database"],
    img: "/raster/hasura.svg"
  },
  {
    name: "Next.js",
    website:"https://nextjs.org/",
    description: "Next.js is a popular React framework that enables developers to build server-rendered or statically-exported React applications with ease. Developed by Vercel, it provides a range of powerful features like server-side rendering (SSR), static site generation (SSG), and API routes.",
    usecase: [
      { case: "Server-Side Rendering (SSR)", desc: "Improve SEO and performance for dynamic content." },
      { case: "Static Site Generation (SSG)", desc: "Generate static pages at build time for fast and efficient delivery." },
      { case: "Hybrid Applications", desc: "Combine SSR and SSG for optimal performance and flexibility." },
      { case: "API Routes", desc: "Create backend functionality directly within the Next.js application." },
      { case: "Automatic Code Splitting", desc: "Load only necessary code to optimize performance." },
      { case: "Optimized Performance", desc: "Utilize features like image optimization and prefetching." }
    ],
    tags: ["React", "SSR", "SSG", "Web Development", "Frontend"],
    img: "/raster/nextjs.svg"
  },
  {
    name: "React Native",
    website:"https://reactnative.dev/",
    description: "React Native is a framework for building native mobile applications using JavaScript and React. Developed by Facebook, it enables developers to create mobile apps for iOS and Android platforms with a single codebase.",
    usecase: [
      { case: "Cross-Platform Development", desc: "Write a single codebase for both iOS and Android." },
      { case: "Hot Reloading", desc: "Enhance productivity with immediate feedback on code changes." },
      { case: "Access to Native Modules", desc: "Integrate seamlessly with native device features." },
      { case: "Large Community and Ecosystem", desc: "Leverage a rich ecosystem of libraries and tools." },
      { case: "Consistent User Interface", desc: "Ensure a uniform design across both platforms." },
      { case: "Performance", desc: "Achieve near-native performance with compiled native code." }
    ],
    tags: ["Mobile Development", "Cross-Platform", "JavaScript", "React", "Native"],
    img: "/raster/reactnative.svg"
  }
];


const hero = {
  type: "Development",
  heading: "Handpicked Development tools from Parentheses Labs",
  desc: "A few most used and industry leading development tools which We use and recommend for your solution."
}

const page = () => {
  return (
    <main className=' flex flex-col gap-16'>
      <ToolsHero {...hero} />
      <section className='space-y-20 divide-y-[2px] px-[7%]'>
        {
          technologies.map((item, idx) => (
            <CommonCard key={idx} {...item} />
          ))
        }
      </section>
    </main>
  )
}

export default page