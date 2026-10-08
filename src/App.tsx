import Contact from "./components/Content/Contact";
import Education from "./components/Content/Education";
import ProjectSection from "./components/Content/ProjectSection";
import SkillShows from "./components/Content/SkillShows";
import DetailFooter from "./components/Footer/DetailFooter";
import Headerbody from "./components/Header/Headerbody";

export function App() {
  return (
    <>
      <Headerbody />
      <ProjectSection />
      <SkillShows />
      <Education />
      <Contact />
      <DetailFooter />
    </>
  );
}

export default App;
