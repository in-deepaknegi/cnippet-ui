import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/routes/home/Hero'
import Components from '@/components/routes/home/Component'
import Pricing from '@/components/routes/home/Pricing'
import CN1 from '@/ui/navbar/C1.mdx';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Components />
        <Pricing/>
        <CN1 />
      </main>
      <Footer />
    </>
  );
}
