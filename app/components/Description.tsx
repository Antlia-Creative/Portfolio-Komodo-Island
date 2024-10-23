export default function Description() {
  return (
    <div
      id="about"
      className="rounded-3xl	flex items-center gap-x-20 bg-white py-44 px-14 mx-12"
    >
      <div className="flex-1 flex gap-10">
        <div className="space-y-10">
          <img src="/komodo-park-1.png" className="rounded-3xl" />
          <img src="/komodo-park-3.png" className="rounded-3xl" />
        </div>
        <div className="space-y-10">
          <img src="/komodo-park-2.png" className="rounded-3xl" />
          <img src="/komodo-park-4.png" className="rounded-3xl" />
        </div>
      </div>
      <div className="flex-1">
        <p className="font-bold text-4xl">
          <span>KOMODO</span>{" "}
          <span className="text-bright-turquoise">Park</span>
        </p>
        <p className="mt-6 font-[family-name:var(--font-segoe-ui)] leading-7">
          At Komodo Park, we are dedicated to bringing you closer to the wild
          beauty and adventure of Komodo National Park. Our platform offers
          tailored travel insights, guided experiences, and essential
          information to help you explore this unique UNESCO World Heritage
          site. Whether you&apos;re here to witness the iconic Komodo dragons or
          to dive into crystal-clear waters, we make your journey seamless,
          safe, and unforgettable.
        </p>
      </div>
    </div>
  );
}
