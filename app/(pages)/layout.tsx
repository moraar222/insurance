import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
          <Navbar />
            {children}
            <Footer />
    </>
  )
}
