
import { Container } from "./components/container";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start bg-white dark:bg-neutral-900 transition-colors">
      <Container className="min-h-screen px-4 sm:px-6 md:pt-20 md:pb-10 md:px-12">
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
}
