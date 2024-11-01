import Entrada from "@/app/images/entrada.jpg";
import Image from "next/image";

export default function NossaCasa() {
  return (
    <div>
      <h1 className="text-9xl text-white">Nossa Casa</h1>

      <Image
        src={Entrada}
        alt="Fachada"
        width={680}
        height={510}
      />
    </div>
  );
};