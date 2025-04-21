import Image from "next/image";
import AboutMe from "./(pages)/about/page";
import MyProjects from "./(pages)/projects/page";
import SayHi from "./(pages)/contact/page";
import Navbar from "./components/Navbar";
import { FaPython, FaReact, FaNodeJs, FaCuttlefish, FaJs } from 'react-icons/fa';
import { SiDjango, SiTypescript, SiRedux } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col w-full lg:w-[80%] m-auto min-h-screen overflow-y-auto p-3 scroll-smooth">
      <Navbar />
      <div className="flex flex-col gap-5 justify-evenly w-full h-fit m-auto my-[10%] md:my-[5%] lg:w-[80%]">
        {/* Left Section */}
        <div className="flex flex-col-reverse md:flex-row gap-10 w-full m-auto ">
          <div className="flex flex-col gap-5 justify-evenly">
            <h2 className="bg-green-500 hover:bg-green-700 text-gray-800 font-bold py-2 px-4 w-full h-auto rounded">
              Backend-Focused Fullstack Dev | Django, Node, JS/TS, MySQL, C, Py
            </h2>
            <p className="text-lg mt-2"><span className="font-bold text-2xl">Secret Ops: </span> Real-World Problems.<br></br><span className="font-bold text-2xl">Mission:</span> Code &rsquo;Em Out.</p>
            <p className="text-lg"><i className="font-bold">Codename: S.C.A.L.E. </i><br></br><i> (Strategic Coder Adapting Life&rsquo;s Edge-cases)</i></p>
            <a href="https://github.com/vn-vision"className="text-green-500 text-xl mt-[10%] animate-bounce">[Start Briefing ↓]</a>
          </div>

          {/* Profile Image with Animated Horizontal Halo */}
          <div className="flex justify-center w-full">
            <div className="bg-gray-900 shadow-md shadow-orange-300 w-full md:w-[80%] aspect-square mt-auto rounded-full overflow-hidden relative flex items-center justify-center">
              <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] left-[-20%] top-[20%]">
                <Image
                  src="/images/menhanced.png"
                  fill
                  alt="Victor Ng'ang'a"
                  className="object-cover rounded-full shadow-md"
                />
              </div>

              {/* Floating Skills - The Horizontal Aura */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-lg w-36 h-36 md:w-48 md:h-48 top-[10%] left-[80%] translate-x-[-25%] flex justify-center gap-10 items-center rounded-full shadow-lg shadow-orange-400">
                {[{'title':'redux', 'icon': <SiRedux />},
                {'title':'Django', 'icon':<SiDjango />},
                {'title':'React', 'icon':<FaReact />},
                {'title':'NodeJs', 'icon':<FaNodeJs/>}].map((skill, index) => (
                  <div
                    key={skill.title}
                    className={`absolute animate-horizontal-${index} bg-green-400 text-gray-800 p-2 rounded-full text-md md:text-lg shadow-lg shadow-orange-200 hover:scale-110 hover:shadow-blue-400 transition-transform`}
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full mt-auto">
          <p><i className="text-xl">3</i> Years Experience</p>
          <p><i className="text-xl">165</i> Projects completed</p>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <AboutMe  />
      </div>

      {/* Tech Stack Section with Tooltips */}
      <div className="w-full h-[20%] flex items-center justify-evenly gap-5 my-[10%] md:my-[5%] m-auto ">
        {[{ Icon: FaCuttlefish, name: 'C Language' }, { Icon: FaPython, name: 'Python' }, { Icon: FaJs, name: 'JavaScript' },  { Icon: SiTypescript, name: 'TypeScript' }].map(({ Icon, name }, index) => (
          <div key={index} className="relative group text-center">
            <Icon className="text-7xl" />
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">{name}</span>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div id="projects">
        <MyProjects />
      </div>

      {/* Awards Section Enhanced */}
      <div className="h-fit w-full lg:w-[80%] flex flex-col justify-evenly gap-10 mx-auto my-[10%] md:my-[5%] ">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">🏆 Awards & Recognition</h1>
          <p className="text-md text-gray-300">Acknowledging Excellence in Dev, IoT & Innovation</p>
        </div>

        {[{
          year: '2024',
          org: 'ALX',
          roles: ['Back-End Developer', 'IOT/Robotics Developer'],
          logo: '/images/alx.png'
        }, {
          year: '2024',
          org: 'KCAU',
          roles: ['Software Developer', 'Innovator: Chancellors Recognition'],
          logo: '/images/kcau.svg'
        }].map(({ year, org, roles, logo }, idx) => (
          <div key={idx} className="flex justify-between w-full items-start">
            <i className="text-green-300 text-xl font-bold">{year}</i>
            <ul className="flex flex-col gap-3 justify-evenly w-[80%]">
              {roles.map((role, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Image src={logo} alt={org} width={30} height={30} />
                  <div>
                    <h3 className="text-sm text-green-400">{org}</h3>
                    <p className="text-xl md:text-2xl font-semibold text-white">{role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div id="contact">
        <SayHi />
      </div>
    </div>
  );
}
