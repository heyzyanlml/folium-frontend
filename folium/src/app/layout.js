import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";

export const metadata = {
  title: "Folium",
  description: "Plant Info Search & Blog for Plant Lovers 🌱❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Loader />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
