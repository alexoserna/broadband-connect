const icons = import.meta.glob("../assets/icons/*.svg", { eager: true, import: "default" });
const images = import.meta.glob("../assets/icons/*.png", { eager: true });
import { SvgIcon } from "@mui/material";

// Centralized Icon Registry
const iconRegistry = {
  "default": icons["../assets/icons/404.svg"],
  "aerialCabling": icons["../assets/icons/aerial-cabling.svg"],
  "coaxial": icons["../assets/icons/coaxial.svg"],
  "opticalFibre": icons["../assets/icons/optical-fiber.svg"],
  "hygiene": icons["../assets/icons/hygiene.svg"],
  "openCabler": icons["../assets/icons/open-cabler.svg"],
  "splicer": icons["../assets/icons/splicer.svg"],
  "underground": icons["../assets/icons/underground.svg"],
  "fttc": icons["../assets/icons/fttc.svg"],
  "structuredCabling": icons["../assets/icons/structuredCabling.svg"],
  "telecommunications": icons["../assets/icons/telecommunications.svg"],
  "faultFinding": icons["../assets/icons/faultFinding.svg"],
  "copperJointing": icons["../assets/icons/copper-cable.svg"],
  "terminal": icons["../assets/icons/terminal.svg"],
  "build": icons["../assets/icons/build.svg"],
};

// IconRenderer Component
const AssetRenderer = ({ iconName, ...props }) => {
  console.log(iconName);
  const IconComponent = iconRegistry[iconName];

  if (!IconComponent) {
    console.error(`❌ Icon "${iconName}" not found.`);
    return <img src={iconRegistry["default"]} {...props} />;
  }

  return <img src={iconRegistry[iconName]} {...props} />;
};

export default AssetRenderer;
