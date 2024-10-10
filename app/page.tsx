import Closing from "./components/Closing";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Gallery1 from "./components/Gallery1";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VideoPlayIcon from "./components/icons/VideoPlay";

export default function Home() {
  return (
    <div>
      <Navbar className="fixed w-full" />
      <main className="bg-bright-gray">
        <Hero />
        <div className="h-40" />
        <Description />
        <div className="h-40" />
        <Gallery1 />
        <div className="h-40" />
        <div className="px-12">
          <div className="rounded-3xl bg-bright-turquoise p-8">
            <h3 className="font-[family-name:var(--font-inter-semi-bold)] text-6xl text-white text-center font-semibold">
              A Visual Journey Trough The Lens To Explore A Most Beautiful
              Hidden Gem
            </h3>
            <div className="relative">
              <img
                src="/komodo-national-park-2.png"
                className="mt-8 rounded-2xl"
              />
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              >
                <VideoPlayIcon className="w-60 h-60 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-40" />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
