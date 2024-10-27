import Logotipo from "@/app/images/logo.jpeg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="min-w-60 text-center h-screen flex flex-col border-4 border-blue-800 hover:border-blue-500 bg-amber-300 hover:bg-amber-200">
      <h1 className="mt-4">
        <a href="/" className="block">
          <Image
            className="inline-block"
            src={Logotipo}
            alt="Só Férias"
            title="Só Férias"
            width={180}
            height={180}
          />
        </a>
      </h1>

      <ul className="flex-grow p-2 my-4 text-white border-t-4 border-blue-800 hover:border-blue-500">
        <li className="w-full my-2 p-2 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
          <a href="tabelacomparativa" className="block" title="Tabela Comparativa">Tabela Comparativa</a>
        </li>
        <li className="w-full my-2 p-2 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
          <a href="planos" className="block" title="Planos">Planos</a>
        </li>
        <li className="w-full my-2 p-2 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
          <a href="cadastro" className="block" title="Cadastro">Cadastro</a>
        </li>
      </ul>

      <ul className="p-2 my-4 text-white border-t-4 border-blue-800 hover:border-blue-500">
        <li className="w-full my-2 p-2 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800">
          <a href="usuario" className="block" title="Usuário">Usuário</a>
        </li>
      </ul>
    </nav>
  );
};