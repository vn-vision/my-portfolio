import Image from "next/image";
import AboutMe from "./(pages)/about/page";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-y-auto">
      <div className="flex flex-col-reverse md:flex-row gap-8 p-5 justify-center items-start w-[80%] h-screen mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-5 p-5 justify-evenly">
          <h2 className="bg-green-500 hover:bg-green-700 text-gray-800 font-bold py-2 px-4 w-fit h-auto rounded">
            Back-End Developer
          </h2>
          <p className="text-4xl mt-2">Talk is cheap. Show me the code</p>
          <p className="text-lg"><i> I build connections and bring dreams to life.</i></p>
          <p className="text-green-500 text-xl mt-[10%]">LET'S CHAT!</p>
          <div className="flex justify-between mt-auto">
            <p><i className="text-xl">3</i> Years Experience</p>
            <p><i className="text-xl">165</i> Projects completed</p>
          </div>
        </div>

        {/* Profile Image with Animated Horizontal Halo */}
        <div className="flex justify-center w-full">
          <div className="bg-gray-900 shadow-md shadow-orange-300 w-[70%] aspect-square mt-auto rounded-full overflow-hidden relative flex items-center justify-center">
            {/* Profile Image */}
            <Image
              src="/images/me.jpg"
              width={180}
              height={180}
              alt="Victor Ng'ang'a"
              className="rounded-4xl rounded-tr-[80%]  mt-[40%] ml-[-40%] object-cover ring-3 ring-gray-900 border-t-1 border-b-1 border-orange-300"
            />

            {/* Floating Skills - The Horizontal Aura */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-lg w-24 h-24 md:w-48 md:h-48 top-[-25%] left-[75%] translate-x-[-25%] flex justify-center gap-10 items-center rounded-full shadow-lg shadow-orange-400">
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
      <AboutMe />
    </div>
  );
}
