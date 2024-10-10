import Image from "next/image";
import { ReactNode } from "react";
import { ImagePage } from "../../types/Image-page";

type Props = {
  children: ReactNode;
  dataImage: ImagePage;
};

export const HeaderDown = ({ children, dataImage }: Props) => {
  return (
    <main className="flex flex-1 h-full w-full flex-row items-center justify-center bg-themePrimary/20 text-themeLight">
      <div className="bg-themeInative/20 p-3 rounded-xl  flex justify-center items-center ">
        {children}
      </div>
    </main>
  );
};
