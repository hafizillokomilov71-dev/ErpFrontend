import {
  Hero,
  PopularCourses,
  Features,
  Teachers,
  Testimonials,
  Faq,
  Cta,
} from "../components/home";

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Hero />
      <PopularCourses />
      <Features />
      <Teachers />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  );
};

export default Home;
