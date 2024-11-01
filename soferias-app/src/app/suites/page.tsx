import Suite1 from "@/app/images/suite1.jpeg";
import Suite10 from "@/app/images/suite10.jpeg";
import Suite11 from "@/app/images/suite11.jpeg";
import Suite12 from "@/app/images/suite12.jpeg";
import Suite13 from "@/app/images/suite13.jpeg";
import Suite14 from "@/app/images/suite14.jpeg";
import Suite2 from "@/app/images/suite2.jpeg";
import Suite3 from "@/app/images/suite3.jpeg";
import Suite4 from "@/app/images/suite4.jpeg";
import Suite5 from "@/app/images/suite5.jpeg";
import Suite6 from "@/app/images/suite6.jpeg";
import Suite7 from "@/app/images/suite7.jpeg";
import Suite82 from "@/app/images/suite8-2.jpeg";
import Suite8 from "@/app/images/suite8.jpeg";
import Suite9 from "@/app/images/suite9.jpeg";
import Image from "next/image";

export default function Suites() {
  return (

    <div className="w-full">
      <h1 className="text-9xl text-white">Suítes</h1>

      <picture className="">
        <div className="grid grid-cols-12 container mx-auto">
          <Image
            src={Suite1}
            alt="Suíte 1"
            title="Suíte 1"
            width={850}
            height={315}
          />

          <Image
            src={Suite2}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />

          <Image
            src={Suite3}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />


          <Image
            src={Suite4}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />


          <Image
            src={Suite5}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />


          <Image
            src={Suite6}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />


          <Image
            src={Suite7}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />


          <Image
            src={Suite8}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />


          <Image
            src={Suite82}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />


          <Image
            src={Suite9}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />
          <Image
            src={Suite10}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />
          <Image
            src={Suite11}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />
          <Image
            src={Suite12}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />
          <Image
            src={Suite13}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />
          <Image
            src={Suite14}
            alt="Suíte 2"
            title="Suíte 2"
            width={1200}
            height={1600}
          />
        </div>
      </picture>
    </div >

  );
};