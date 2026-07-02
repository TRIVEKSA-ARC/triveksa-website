import Hero from "./Hero/Hero";
import Search from "./Search/Search";
import Categories from "./Categories/Categories";
import Featured from "./Featured/Featured";
import Articles from "./Articles/Articles";
import Guides from "./Guides/Guides";
import CaseStudies from "./CaseStudies/CaseStudies";
import Downloads from "./Downloads/Downloads";
import ResourceHub from "./ResourceHub/ResourceHub";
import CTA from "./CTA/CTA";

export default function ResourcesPage() {
  return (
    <>
      <Hero />
      <Search />
      <Categories />
      <Featured />
      <Articles />
      <Guides />
      <CaseStudies />
      <Downloads />
      <ResourceHub />
      <CTA />
    </>
  );
}