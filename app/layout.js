import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext";

export const metadata = {
  title: "CPRG306 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}