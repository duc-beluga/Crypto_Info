import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Team = () => {
  const members = ["Noah Nguyen", "Awonke Mnotoza"];
  const linkedIn = ["https://www.linkedin.com/", "https://www.linkedin.com/"];
  const github = ["https://github.com/", "https://github.com/"];

  return (
    <div className="bg-gradient-to-b from-[#F0DCB1] h-screen flex flex-col pr-4">
      <Navbar />
      <div className="bg-gradient-to-b from-[#F0DCB1] h-screen flex flex-col pr-4 justify-center items-center">
        <ul>
          {members.map((mem, ind) => (
            <li key={ind} className="p-2 font-semibold">
              <div className="flex flex-col">
                <div className="flex">
                  <p className="p-2">{mem}</p>
                  <Link to={linkedIn[ind]} className="p-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link to={github[ind]} className="p-2">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
