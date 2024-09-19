import Hero from "@/components/pages/hero"
import FeatureCards from "@/components/pages/feature-cards"
import Features from "@/components/pages/features"
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <Features />
      <ToastContainer />
    </main>
  )
}
