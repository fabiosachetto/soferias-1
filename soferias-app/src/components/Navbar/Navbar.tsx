import { ContatoIcon, HomeIcon, LoginIcon, NossaCasaIcon, SobreIcon, SuitesIcon } from "@/components/Icons/Icons";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";

type NavbarTagProps = React.ComponentProps<"nav">;
type NavbarOlProps = React.ComponentProps<"ol">;
type NavbarOlLiProps = React.ComponentProps<"li">;

const NavbarTag = ({ children, className, ...props }: NavbarTagProps) => {
  return (
    <nav className={cn("float-right min-h-5 mt-1", className)} {...props}>
      {children}
    </nav>
  );
};

const NavbarOl = ({ children, className, ...props }: NavbarOlProps) => {
  return (
    <ol className={cn("mr-4 float-left font-semibold text-white", className)} {...props}>
      {children}
    </ol>
  );
};

const NavbarOlLi = ({ children, className, ...props }: NavbarOlLiProps) => {
  return (
    <li className={cn("float-left mr-4", className)} {...props}>
      {children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <header className="w-full fixed text-center bg-white bg-opacity-70">
      <section className="mt-2 inline-block mx-auto text-center w-3/4">
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
              <Link href="/" className="float-left py-2 px-6 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Home">
                <HomeIcon />
                Home
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="nossacasa" className="float-left py-2 px-6 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Nossa Casa">
                <NossaCasaIcon />
                Nossa Casa
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="suites" className="float-left py-2 px-6 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Suítes">
                <SuitesIcon />
                Suítes
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="contato" className="float-left py-2 px-6 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Contato">
                <ContatoIcon />
                Contato
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="sobre" className="float-left py-2 px-6 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Sobre">
                <SobreIcon />
                Sobre
              </Link>
            </NavbarOlLi>

            <NavbarOlLi>
              <Link href="login" className="float-left py-2 px-6 rounded-lg cursor-pointer border-blue-800 hover:border-blue-500 bg-blue-500 hover:bg-blue-800" title="Login">
                <LoginIcon />
                Login
              </Link>
            </NavbarOlLi>
          </NavbarOl>
        </NavbarTag>
      </section>
    </header >
  );
};