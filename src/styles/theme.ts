import {extendTheme, theme as ChakraTheme} from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      500: "#4529E6",
      300: "#5126EA",
      150: "#B0A6F0",
      10: "#EDEAFD",
    },
    grey: {
      1000: "#0B0D0D",
      900: "#212529",
      800: "#495057",
      700: "#868E96",
      600: "#ADB5BD",
      500: "#CED4DA",
      400: "#DEE2E6",
      300: "#E9ECEF",
      200: "#F1F3F5",
      100: "#F8F9FA",
      50: "#FDFDFD",
      10: "#FFFFFF",
    },
    alert: {
      300: "#CD2B31",
      200: "#FDD8D8",
      100: "#FFE5E5",
    },
    sucess: {
      300: "#18794E",
      200: "#CCEBD7",
      100: "#DDF3E4",
    },
    profile : {
        1200: "#30007D",
        1100: "#36007D",
        1000 : "#5700E3",
        900 : "#6200E3",
        800 : "#6100FF",
        700 : "#7000FF",
        600 : "#153D2E",
        500 : "#7D2A4D",
        400 : "#2A7D5F",
        300 : "#C04277",
        200 : "#349974",
        100 : "#E34D8C"
    },
    fonts : {
        heading : "Lexend",
        body : "Inter"
    }
  },
  fontSizes : {

  },
  styles : {
    global : {
        body : {
            bg: "white",
            color : "grey.1000"
        }
    }
  }
});
