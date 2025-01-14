import ProfileDetails from "../ProfileDetials/ProfileDetails";
import Projects from "../Projects/Projects";
import Experience from "../ExperienceWith/Experience";

function Homepage() {
  return (
    <div className="homepage">
      <ProfileDetails />
      <Experience />
      <Projects />
    </div>
  );
}

export default Homepage;
