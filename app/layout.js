import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext";

export const metadata = {
  title: "CPRG306 Assignment",
  description: "Shopping List App with Firebase Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}