import { useState } from "react";
import "./index.css";
import profileImg from "../../assets/profileIcon.jpg";
import resume from "../../assets/Resume.pdf";

function ProfileDetails() {
  const [details] = useState({
    profileImage: profileImg,
    title: "Hey ! , I'm Rama Lingeswara Rao. A Full-Stack developer based in Hyderabad, Telangana.",
    description:
      "With a year of hands-on experience in software development, I specialize in the FULL-Stack. I combine creativity with technical skills to solve problems and build effective apps.",
    resume: resume,
  });

  return (
    <div className="profile-details">
      <div className="profile-details-container">
        <div className="profile-image">
          <img src={details.profileImage} alt="profile" />
        </div>
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <div className="profile-buttons">
          <a href={details.resume} download="Resume.pdf">
            <div className="btn-2 btn">Download CV</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
