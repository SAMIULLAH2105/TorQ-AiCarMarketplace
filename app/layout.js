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
          <Toaster richColors />

          <footer className="py-16 dotted-background ">
            <div className="mx-10 border border-gray-400 px-1 py-1 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0624658293486!2d67.13748587393775!3d24.929941842476442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338f5c31a8d97%3A0xd09821dc9c7cb62f!2sHascol%20Petrol%20Pump-jauhar!5e0!3m2!1sen!2s!4v1754396923433!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="container mx-auto py-4 text-center text-gray-200">
              <p className="">© 2023 AICar Marketplace. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
