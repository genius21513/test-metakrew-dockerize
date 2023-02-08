import React from "react";
import { library, IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import {

  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

library.add(
  faChevronLeft,
  faChevronRight
);

const getIcon = (name: IconName): IconProp => {
  switch (name) {
    case "clipboard":
      return ["far", "clipboard"];
    case "question-circle":
      return ["far", "question-circle"];
    default:
      return name;
  }
};

export type IconProps = Pick<FontAwesomeIconProps, "style" | "size" | "color" | "spin"> & {
  name: IconName;
};

export const Icon: React.FC<IconProps> = ({ name, style, ...rest }) => (
  <FontAwesomeIcon style={style} icon={getIcon(name)} {...rest} />
);
