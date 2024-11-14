import suites from "@/data/suites.json";
import Image from "next/image";

export default function Suites() {
  return (

    <div className="w-full p-3">

      <h1 className="text-2xl text-center text-white mb-3">Suítes</h1>

      <picture className="container mx-auto my-6">
        <div className="grid gap-4 xl:grid-cols-3 mb:grid-cols-1">

          {suites.map((suite) => {
            return (
              <div key={suite.title} className="py-3 pl-3 grid grid-cols-2 bg-white bg-opacity-70 rounded-lg">
                <div className="flex flex-col mr-2.5">
                  <Image
                    src={`/assets/images/suites/${suite.image}`}
                    alt={suite.title}
                    title={suite.title}
                    width={200}
                    height={200}
                    className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
                  />
                </div>
                <div className="flex flex-col gap-2 pr-2">
                  <h2 className="text-2xl/9 font-bold tracking-tight text-blue-500">{suite.title}</h2>
                  <p className="text-xl/6">{suite.suite_description}</p>
                  <button className="text-xl/ mr-auto font-medium text-white w-auto py-1 px-2 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">Ler Mais</button>
                </div>
              </div>
            );
          })}
        </div>
      </picture>
    </div>

  );
};