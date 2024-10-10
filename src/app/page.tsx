import { HeaderDown } from "@/components/header-donw";
import { Rotule } from "@/components/home/rotule";
import { ImagePage } from "../../types/Image-page";

export default function Home() {
  const data: ImagePage = {
    src: "/assets/credit-card.png",
    alt: "Icone cartão de Credito",
    width: 250,
    height: 50,
    class: "-mr-[300px]",
  };

  return (
    <main className="flex h-screen w-screen flex-row  bg-themeSecundary">
      <HeaderDown dataImage={data}>
        <Rotule label="Recebidos:" value={"0"} />
      </HeaderDown>
    </main>
  );
}
