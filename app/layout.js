// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

// const inter = Inter({
//   subsets: ["latin"],
// });

export const metadata = {
  title: "AI Car Marketplace",
  description: "Find your dream ride",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={``}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>

        <footer className="bg-blue-50 py-15">
          <div className="container mx-auto py-4 text-center text-gray-600">
            <p className="">© 2023 AICar Marketplace. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
