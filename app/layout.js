import { Montserrat  } from "next/font/google";
import 'funuicss/css/fun.css'
import "aos/dist/aos.css"
import "../assets/styles/globals.css"
const font = Montserrat({ subsets: ["latin"]  , weight:["100", "300", "400", "500","600","700","800"]});

export const metadata = {
  title: "GSS",
  description: "GSS App",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div >
      <body className={[font.className ]}>{children}</body>
      </div>
    </html>
  );
}
