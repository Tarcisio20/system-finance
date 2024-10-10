import Image from "next/image";
import { ReactNode } from "react";
import { ImagePage } from "../../types/Image-page";

type Props = {
  children: ReactNode;
  dataImage: ImagePage;
};

export const HeaderDown = ({ children, dataImage }: Props) => {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-themeSecundary">
      <Image
        src={dataImage.src}
        alt={dataImage.alt}
        width={dataImage.width}
        height={dataImage.height}
        className={dataImage.class}
      />
      <div className="flex flex-col w-[700px] max-w-6xl  bg-themePrimary p-5 justify-center items-center rounded-xl">
        {children}
      </div>
    </main>
  );
};
