import RootLayout from "@/lib/components/root-layout/RootLayout";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="es">
    <body className="w-full h-screen">
      <RootLayout>{children}</RootLayout>
    </body>
  </html>
);

export default Layout;
