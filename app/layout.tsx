import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/ui/Navbar";

export const metadata: Metadata = {
  title: "Vishwajeet Singh Rathore | Java Backend Developer",
  description:
    "World-class Java Backend Developer specializing in Spring Boot, Microservices, Docker, and Kubernetes. Building scalable systems that power modern applications.",
  keywords: [
    "Java Developer",
    "Backend Developer",
    "Spring Boot",
    "Microservices",
    "Docker",
    "Kubernetes",
  ],
  openGraph: {
    title: "Vishwajeet Singh Rathore | Java Backend Developer",
    description:
      "Building scalable backend systems with Java, Spring Boot & Cloud Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="noise">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
