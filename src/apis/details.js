import axios from "axios";

const backendURL = "https://portfolio-backend-6zuq.vercel.app";

const getDetails = async () => {
  try {
    const response = await axios.get(`${backendURL}/details/get-details`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getSkills = async () => {
  try {
    const response = await axios.get(`${backendURL}/skills/get-skills`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getProjects = async () => {
  try {
    const response = await axios.get(`${backendURL}/project/get-projects`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};


export { getDetails, getSkills, getProjects };
