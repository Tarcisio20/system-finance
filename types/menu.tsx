import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Menu = {
  icon?: IconDefinition;
  name: string;
  slug: string;
  url?: string;
  active?: boolean;
};
