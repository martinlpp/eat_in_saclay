import localFont from "next/font/local";

const moreSugar = localFont({
  src: [
    {
      path: "./MoreSugar-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./MoreSugar-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-more-sugar",
});

export default moreSugar;
