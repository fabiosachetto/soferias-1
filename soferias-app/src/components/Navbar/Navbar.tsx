import { ContatoIcon, HomeIcon, LoginIcon, NossaCasaIcon, SobreIcon, SuitesIcon } from "@/components/Icons/Icons";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";

type NavbarTagProps = React.ComponentProps<"nav">;
type NavbarOlProps = React.ComponentProps<"ol">;
type NavbarOlLiProps = React.ComponentProps<"li">;

const NavbarTag = ({ children, className, ...props }: NavbarTagProps) => {
  return (
    <nav className={cn("float-right min-h-5 xl:w-auto mb:w-4/5 mr-0 xl:mt-1 mb:mt-3", className)} {...props}>
      {children}
    </nav>
  );
};

const NavbarOl = ({ children, className, ...props }: NavbarOlProps) => {
  return (
    <ol className={cn("float-left font-semibold text-white xl:text-base mb:text-xs", className)} {...props}>
      {children}
    </ol>
  );
};

const NavbarOlLi = ({ children, className, ...props }: NavbarOlLiProps) => {
  return (
    <li className={cn("float-left xl:mr-4 mb:mr-1", className)} {...props}>
      {children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <header className="w-full fixed text-center bg-white bg-opacity-70">
      <section className="mt-2 inline-block xl:w-3/4 mb:w-11/12">
        <h1 className="float-left">
          <Link href="/" className="">
            <Image
              className=""
              src="/assets/images/logo.png"
              alt="Só Férias"
              title="Só Férias"
              width={50}
              height={50}
            />
          </Link>
        </h1>

        <NavbarTag>
          <NavbarOl>
            <NavbarOlLi>
              <Link href="/" className="float-left xl:py-2 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Home">
                <HomeIcon className="float-left xl:block mb:hidden" />
                Home
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="nossacasa" className="float-left xl:py-2 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Nossa Casa">
                <NossaCasaIcon className="float-left xl:block mb:hidden" />
                Casa
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="suites" className="float-left xl:py-2 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Suítes">
                <SuitesIcon className="float-left xl:block mb:hidden" />
                Suítes
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="contato" className="float-left xl:py-2 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Contato">
                <ContatoIcon className="float-left xl:block mb:hidden" />
                Contato
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="sobre" className="float-left xl:py-2 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Sobre">
                <SobreIcon className="float-left xl:block mb:hidden" />
                Sobre
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="login" className="float-left xl:py-2 xl:px-6 mb:py-1 mb:px-1 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Login">
                <LoginIcon className="float-left xl:block mb:hidden" />
                Login
              </Link>
            </NavbarOlLi>
          </NavbarOl>
        </NavbarTag>
      </section>
    </header >
  );
};