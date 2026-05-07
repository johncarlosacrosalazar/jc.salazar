import Header from "@/components/Header";
import ScrollBackground from "@/components/ScrollBackground";
import Chatbot from "@/components/Chatbot";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollBackground />
      <Header />
      {children}
      <Chatbot />
    </>
  );
}
