import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: IconDefinition;
  size: string;
  color: "gray" | "white" | "black";
};

export const Icons = ({ icon, size, color }: Props) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={`size-${size} 
  ${color === "gray" && "text-gray-500"}
  ${color === "white" && "text-white"}
  ${color === "black" && "text-black"}
  `}
    />
  );
};
