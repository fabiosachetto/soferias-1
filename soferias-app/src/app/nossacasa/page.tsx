import Image from "next/image";

export default function Planos() {
  return (
    <div>
      <h1 className="text-9xl text-white">Nossa Casa</h1>

      <Image
        src="https://preview.redd.it/fumava-o-fino-ou-bolava-um-vela-kk-flor-com-quase-5-meses-v0-6m1xrjbd04xd1.jpeg?width=640&crop=smart&auto=webp&s=0c97ecb622984fee5338c05ab6c94360be9e3fc3"
        alt="Maconha"
        width={200}
        height={200}
      />
    </div>
  );
};