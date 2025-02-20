import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import member1 from "../../assets/member1.jpg"
import member2 from "../../assets/member2.jpg"
import member3 from "../../assets/member3.jpg"

const teamMembers = [
  {
    name: "Hasibul Hasan",
    role: "Frontend Developer",
    image: member1,
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    image: member2,
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: member3,
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 w-11/12 mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Meet Our Team</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        A group of passionate individuals dedicated to making scholarship management seamless and efficient.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative bg-white shadow-xl rounded-lg  p-8 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 rounded-lg "></div>
            <div className="w-32 h-32 mx-auto mb-6 border-4 border-indigo-500 shadow-lg rounded-full overflow-hidden">
              <img src={member.image} alt={member.name} className="rounded-full w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-500 text-lg font-medium mb-4">{member.role}</p>
              <div className="flex justify-center gap-6 text-gray-600 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-transform transform hover:scale-110">
                  <FaLinkedin />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110">
                  <FaTwitter />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-900 transition-transform transform hover:scale-110">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
