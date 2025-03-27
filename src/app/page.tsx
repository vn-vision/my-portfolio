import Image from "next/image";
import AboutMe from "./(pages)/about/page";
import MyProjects from "./(pages)/projects/page";
import SayHi from "./(pages)/contact/page";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-y-auto p-10">
      <Navbar />
      <div className="flex flex-col gap-5 p-5 justify-evenly w-[90%] h-fit m-auto my-[10%] md:my-[5%]">
        {/* Left Section */}
        <div className="flex flex-col-reverse md:flex-row gap-10 p-5 w-[80%] m-auto ">
          <div className="flex flex-col gap-5 p-5 justify-evenly">
            <h2 className="bg-green-500 hover:bg-green-700 text-gray-800 font-bold py-2 px-4 w-fit h-auto rounded">
              Back-End Developer
            </h2>
            <p className="text-4xl mt-2">Talk is cheap. Show me the code</p>
            <p className="text-lg"><i> I build connections and b dreams to life.</i></p>
            <p className="text-green-500 text-xl mt-[10%]">LET'S CHAT!</p>
          </div>
          {/* Profile Image with Animated Horizontal Halo */}
          <div className="flex justify-center w-full">
            <div className="bg-gray-900 shadow-md shadow-orange-300 w-full md:w-[80%] aspect-square mt-auto rounded-full overflow-hidden relative flex items-center justify-center">
              {/* Profile Image */}
              <Image
                src="/images/menhanced.png"
                width={200}
                height={200}
                alt="Victor Ng'ang'a"
                className="transform rotate-325 ml-[-40%] mt-[40%] ring"
              />

              {/* Floating Skills - The Horizontal Aura */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-lg w-36 h-36 md:w-48 md:h-48 top-[-10%] left-[65%] translate-x-[-25%] flex justify-center gap-10 items-center rounded-full shadow-lg shadow-orange-400">
                {["React", "TypeScript", "Python", "C"].map((skill, index) => (
                  <div
                    key={skill}
                    className={`absolute animate-horizontal-${index} bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-lg  
          hover:scale-110 hover:shadow-blue-400 transition-transform`}
                  >
                    {skill}
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
      <AboutMe />
      <div className="w-[80%] h-[20%] flex items-center justify-evenly gap-5 p-5 my-[10%] md:my-[5%] m-auto ">
        <p className="text-7xl">C</p>
        <p className="text-7xl">Py</p>
        <p className="text-7xl">JS</p>
      </div>
      <MyProjects />
      <div className="h-fit w-[80%] flex flex-col justify-evenly gap-10 p-10 mx-auto my-[10%] md:my-[5%] ">
        <span className="flex justify-between items-center gap-5 w-full"><h1 className="text-2xl md:text-4xl" >Awards</h1><p className="w-[80%] text-sm md:text-lg">Awards make my projects even more valuable</p></span>
        <span className="flex justify-between w-full"><i className="text-green-300">2024</i>
          <ul className="flex flex-col gap-5 justify-evenly w-[80%]">
            <li>
              <h3 className="text-sm">ALX</h3>
              <p className="text-2xl">Back-End Developer</p>
            </li>
            <li>
              <h3 className="text-sm">ALX</h3>
              <p className="text-2xl">IOT/Robotics Developer</p>
            </li>
          </ul></span>
        <span className="flex justify-between w-full"><i className="text-green-300">2024</i>
          <ul className="flex flex-col gap-5 justify-evenly w-[80%]">
            <li>
              <h3 className="text-sm">KCAU</h3>
              <p className="text-2xl">Software Developer</p>
            </li>
            <li>
              <h3 className="text-sm">KCAU</h3>
              <p className="text-2xl">Innovator</p>
            </li>
          </ul></span>
      </div>
      <SayHi />
    </div>
  );
}
