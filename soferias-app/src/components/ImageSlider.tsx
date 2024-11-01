import Logotipo from "@/app/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export const ImageSlider = () => {
  return (
    <h1 className="float-left">
      <Link href="/" className="">
        <Image
          className=""
          src={Logotipo}
          alt="Só Férias"
          title="Só Férias"
          width={50}
          height={50}
        />
      </Link>
    </h1>
  );
};