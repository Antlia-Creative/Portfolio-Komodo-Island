import Closing from "./components/Closing";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Packets from "./components/Packets";
import Testimony from "./components/Testimony";

export default function Home() {
  return (
    <div>
      <Navbar className="fixed z-50 w-full" />
      <main className="bg-bright-gray">
        <Hero />
        <div className="h-40" />
        <Description />
        <div className="h-40" />
        <Gallery />
        <div className="h-40" />
        <Video />
        <div className="h-40" />
        <Packets />
        <div className="h-40" />
        <Testimony />
        <div className="h-40" />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
