// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/hero";
import OutImpressiveStats from "../components/out-impressive-stats";
import CoursesCategories from "../components/courses-categories";
import ExploreCourses from "../components/explore-courses";
import Testimonial from "../components/testimonial";
import Events from "../components/events";
import { MoreValue } from "../components/more-value";
import StudentsFeedback from "../components/students-feedback";
import TrustedCompany from "../components/trusted-companies";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <MoreValue />
      <CoursesCategories />
      <ExploreCourses />
      <Testimonial />
      <Events />
      <StudentsFeedback />
      <TrustedCompany />
      <Footer />
    </>
  );
}
