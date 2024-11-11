import Image from "next/image";

export default function NossaCasa() {
  return (
    <div className="w-full p-3">
      <h1 className="text-2xl text-center text-white mb-3">Nossa Casa</h1>

      <Image
        src="/assets/images/entrada.jpg"
        alt="Fachada"
        width={680}
        height={510}
      />
    </div>
  );
};