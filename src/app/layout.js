import "./globals.css";
// import Navbar from "./navbar";
import Navbar from "./components/Navbar/Navbar";

export const metadata = {
  title: "My Next.js App",
  description: "Learning dynamic routing with navbar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar appears on ALL pages */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
