
import { Container } from "./components/container";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero";
import { FeaturesSectionDemo } from "./components/features";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import Footer from "./components/navbar/footer";
import { Announcement } from "./components/Announcement";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start bg-white dark:bg-neutral-900 transition-colors">
      <Container className="min-h-screen px-4 sm:px-6 md:pt-20 md:pb-10 md:px-12 ">
        <Navbar />
        <Announcement />
        <Hero />
        <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <div className='text-4xl max-w-4xl mb-6 font-bold text-spacing-wide text-center text-neutral-900 dark:text-neutral-100'>
        Built for modern AI apps
        </div>
        <div className='text-xl max-w-2xl text-center text-neutral-500 dark:text-neutral-400'>
        Complete toolkit for building and running production-ready AI agents.
        </div>
        </div>
        <FeaturesSectionDemo /> 
       <TextHoverEffect text="Modelence" duration={1} />
       <Footer />
      </Container>
    </div>
  );
}
