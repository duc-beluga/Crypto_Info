import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Team = () => {
  const members = ["Noah Nguyen", "Awonke Mnotoza"];
  const linkedIn = [
    "https://www.linkedin.com/in/ducng416/",
    "https://www.linkedin.com/in/awonke-mnotoza-41a836221/",
  ];
  const github = [
    "https://github.com/duc-beluga",
    "https://github.com/Awonke11",
  ];

  return (
    <div className="bg-gradient-to-b from-[#F0DCB1] h-screen flex flex-col p-4">
      <Navbar />
      <div className="h-screen flex flex-col pr-4 justify-center items-center">
        <ul>
          {members.map((mem, ind) => (
            <li key={ind} className="p-2 font-semibold">
              <div className="flex flex-col ">
                <div className="flex justify-between w-64">
                  <p className="p-2 text-gray-700">{mem}</p>
                  <div className="flex justify-center items-center">
                    <Link to={linkedIn[ind]} className="p-2">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link to={github[ind]} className="p-2">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </div>
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
