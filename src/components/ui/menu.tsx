import { faHome, faSliders, faVault } from "@fortawesome/free-solid-svg-icons";
import { Menu as MenuType } from "../../../types/menu";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Icons } from "./icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

export const Menu = () => {
  const data: MenuType[] = [
    {
      name: "Pagina Inicial",
      slug: "home",
      url: "/",
      icon: faHome,
      active: true,
    },
    {
      name: "Recebidos",
      slug: "received",
      url: "/received",
      icon: faVault,
    },
    {
      name: "Despesas",
      slug: "expenses",
      url: "/expenses",
      icon: faCartPlus,
    },
    {
      name: "Configurações",
      slug: "config",
      url: "/config",
      icon: faSliders,
    },
    {
      name: "Perfil",
      slug: "profile",
      url: "/profile",
      icon: faUser,
    },
  ];

  return (
    <section className="h-screen bg-themePrimary/40 border-r-2 border-themeLight">
      <ul className="">
        {data.map((item, key) => (
          <li key={key} className="hover:bg-themePrimary/60">
            <Link
              href={item.url ? item.url : ""}
              className="flex flex-row px-4 py-4"
            >
              <div>
                {item.icon && (
                  <div>
                    <Icons icon={item.icon} size="[30px]" color="white" />
                  </div>
                )}
              </div>
              <div className="text-themeLight">{item.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
