import { Rotule } from "@/components/home/rotule";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-themeSecundary">
      <Image src={'/assets/credit-card.png'} alt="Icone cartão de Credito" width={250} height={50} className="-ml-[300px]" />
     <div className="flex flex-col w-[700px] max-w-6xl  bg-themePrimary p-5 justify-center items-center rounded-xl">
        <Rotule label="Recebidos:" value={"0"} />
     </div>
    </main>
  )
}

