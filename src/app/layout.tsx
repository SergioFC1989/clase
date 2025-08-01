import RootLayout from "@/lib/features/root-layout/RootLayout";
import { MongoRequest } from "@/lib/services/requests/mongo.request";

MongoRequest.connect();

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
