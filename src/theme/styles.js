import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#E1F6F0", // Vert très clair
      200: "#5DD3C1", // Vert clair
      300: "#00A68A", // Vert moyen
      400: "#00976D", // Vert émeraude
      500: "#007A5E", // Couleur de base (vert émeraude)
      600: "#006F55", // Vert foncé
      700: "#005C4B", // Vert très foncé
      800: "#004B3D", // Vert sombre
      900: "#003C2F", // Vert très sombre
    },
    brandScheme: {
      100: "#A4DBD1", // Couleur très claire
      200: "#74C3B7", // Couleur claire
      300: "#4AB49B", // Couleur intermédiaire
      400: "#28A37F", // Couleur légèrement plus foncée
      500: "#007A5E", // Couleur principale
      600: "#006B4F", // Couleur plus foncée
      700: "#005C3F", // Couleur très foncée
      800: "#004D30", // Couleur sombre
      900: "#003E21", // Couleur très sombre
    },
    brandTabs: {
      100: "#A7E2D9", // Un vert très clair
      200: "#5CD1B9", // Un vert clair
      300: "#3FBFA4", // Un vert moyen
      400: "#2ABF8B", // Un vert légèrement plus foncé
      500: "#007A5E", // La couleur principale
      600: "#006B54", // Un vert plus foncé
      700: "#005A46", // Un vert foncé
      800: "#004A3A", // Un vert très foncé
      900: "#00392E", // Un vert presque noir
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d6f5d6", // Un vert très clair, presque pastel
      100: "#a3e3a3", // Un vert clair, doux et frais
      200: "#75d075", // Un vert émeraude vif
      300: "#4bcf4b", // Un vert moyen, vibrant et énergique
      400: "#29b929", // Un vert émeraude profond
      500: "#009900", // Un vert émeraude pur, riche et fort
      600: "#007700", // Un vert plus sombre, intense
      700: "#005700", // Un vert très foncé, presque forêt
      800: "#003700", // Un vert sombre et riche
      900: "#001800", // Un vert presque noir, très sombre
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
