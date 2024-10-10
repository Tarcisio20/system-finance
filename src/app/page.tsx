import { HeaderDown } from "@/components/header-donw";
import { Rotule } from "@/components/home/rotule";
import { ImagePage } from "../../types/Image-page";

export default function Home() {
  const data: ImagePage = {
    src: "/assets/credit-card.png",
    alt: "Icone cartão de Credito",
    width: 250,
    height: 50,
    class: "-ml-[300px]",
  };

  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-themeSecundary">
      <HeaderDown dataImage={data}>
        <Rotule label="Recebidos:" value={"0"} />
      </HeaderDown>
    </main>
  );
}
