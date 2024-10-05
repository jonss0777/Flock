
import "./globals.css";

import MenuAppBar from "./MenuBar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
         <MenuAppBar></MenuAppBar>
        {children}
      </body>
    </html>
  );
}
