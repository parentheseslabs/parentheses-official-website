
import dynamic from "next/dynamic";
import HomeHero from "@/components/homepage/HomeHero";
import Sale from "@/components/sale";

const Review = dynamic(()=>import('@/components/homepage/Review'))
const Steps =dynamic(()=>import("@/components/homepage/Steps"))
const TechStack = dynamic(()=>import("@/components/homepage/TechStack"));
const EngagementModel = dynamic(() => import('@/components/homepage/EngagementModel'));
const FAQ = dynamic(() => import('@/components/subservice/FAQ'));
const NewsLetter = dynamic(() => import('@/components/homepage/NewsLetter'));
const CaseStudiesCarousel = dynamic(() => import('@/components/subservice/CaseStudiesCarousel'));
const BlogSection = dynamic(() => import('@/components/homepage/BlogSection'));
const FeaturedServices = dynamic(() => import('@/components/homepage/FeaturedServices'));
const OurProcess = dynamic(() => import('@/components/homepage/OurProcess'));

const faq = [
  {
    question: "What is your name?",
    answer: "Bhupendra Yogi"
  },
  {
    question: "What is your name?",
    answer: "Bhupendra Yogi"
  },
  {
    question: "What is your name?",
    answer: "Bhupendra Yogi"
  },
  {
    question: "What is your name?",
    answer: "Bhupendra Yogi"
  },
  {
    question: "What is your name?",
    answer: "Bhupendra Yogi"
  },
]
export default function Home() {
  
  return (
    <main className=" bg-white font-sfpd-regular min-h-screen animate-fade">
      <Sale bg="blue" />
      <HomeHero />
      <Review />
      <Steps />
      <FeaturedServices />
      <OurProcess />
      <TechStack />
      <EngagementModel />
      <CaseStudiesCarousel />
      <BlogSection />
      <NewsLetter />
      <FAQ allProp={faq} />
    </main>
  );
}
