import Logotipo from "@/app/images/logo.jpeg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="w-full fixed text-center border-4 border-blue-800 hover:border-blue-500 bg-amber-300 hover:bg-amber-200">
      <section className="mt-2 inline-block mx-auto text-center w-3/4">
        <h1 className="float-left">
          <a href="/" className="">
            <Image
              className=""
              src={Logotipo}
              alt="Só Férias"
              title="Só Férias"
              width={100}
              height={100}
            />
          </a>
        </h1>

        <nav className="float-right min-h-5 mt-7">
          <ol className="mr-4 float-left text-white border-blue-800 hover:border-blue-500">
            <li className="float-left mr-4 pt-2 pb-2 px-4 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
              <a href="/" className="block" title="Home">Home</a>
            </li>
            <li className="float-left mr-4 pt-2 pb-2 px-4 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
              <a href="nossacasa" className="block" title="Nossa Casa">Nossa Casa</a>
            </li>
            <li className="float-left mr-4 pt-2 pb-2 px-4 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
              <a href="suites" className="block" title="Suítes">Suítes</a>
            </li>
            <li className="float-left pt-2 pb-2 px-4 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
              <a href="contato" className="block" title="Contato">Contato</a>
            </li>
          </ol>

          <ol className="float-left text-white border-blue-800 hover:border-blue-500">
            <li className="pt-2 pb-2 px-4 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
              <a href="sobre" className="block" title="Sobre">Sobre</a>
            </li>
          </ol>

        </nav>
      </section>


    </header >
  );
};