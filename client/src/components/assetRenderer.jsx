const icons = import.meta.glob("../assets/icons/*.svg", { eager: true, import: "default" });
const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", { eager: true, import: 'default' });
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

const imageRegistry = {
  "default": icons["../assets/icons/404.svg"],
  "installation": images["../assets/images/installation.png"],
  "hero": images["../assets/images/ricardo-gomez-angel-MagdWoazARo-unsplash.png"],
}



// IconRenderer Component
const AssetRenderer = ({ type, assetName, ...props }) => {
  console.log(assetName);
  const registry = type === "image" ? imageRegistry : iconRegistry;
  console.log(type)

  const imgSrc = registry[assetName];

  if (!imgSrc) {
    console.error(`❌ Icon "${assetName}" not found.`);
    return <img src={registry["default"]} {...props} />;
  }

  return <img src={registry[assetName]} {...props} />;
};

export default AssetRenderer;
