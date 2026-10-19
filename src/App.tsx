import Contact from "./components/Content/Contact";
import ClientContacts from "./components/Content/ClientContacts";
import Education from "./components/Content/Education";
import ProjectSection from "./components/Content/ProjectSection";
import SkillShows from "./components/Content/SkillShows";
import DetailFooter from "./components/Footer/DetailFooter";
import Headerbody from "./components/Header/Headerbody";

export function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/DevClients") {
    return <ClientContacts />;
  }

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
