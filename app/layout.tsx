import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <title>messenger</title>

      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
