import "./globals.css";

export const metadata = {
  title: "UiFry",
  description: "This is a finance website template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-clash-display">{children}</body>
    </html>
  );
}
