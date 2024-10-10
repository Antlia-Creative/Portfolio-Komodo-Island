export default function Gallery1(){
    return  <div>
    <h3 className="text-center font-[family-name:var(--font-inter-semi-bold)] text-2xl">
      Explore and Dive, Unwind and Thrive in This Hidden Heaven
    </h3>
    <div className="mt-20 flex items-center gap-x-4">
      <div className="px-7 flex-1">
        <div className="bg-white rounded-3xl overflow-hidden">
          <img src="/komodo-gallery1-1.png" className="w-full" />
          <div className="pt-4 px-8 pb-6">
            <p className="font-[family-name:var(--font-inter-semi-bold)]">
              Komodo Island
            </p>
            <p className="mt-2 text-xs font-[family-name:var(--font-inter)]">
              Where ancient dragons roam that invites you to explore
              rugged landscapes and vibrant reefs in a wild paradise.
            </p>
          </div>
        </div>
      </div>
      <div className="px-7 flex-[1.125_1.125_0%]">
        <div className="bg-white rounded-3xl overflow-hidden">
          <img src="/komodo-gallery1-2.png" className="w-full" />
          <div className="pt-4 px-8 pb-6">
            <p className="font-[family-name:var(--font-inter-semi-bold)] text-xl">
              Labuan Bajo
            </p>
            <p className="mt-4 text-sm font-[family-name:var(--font-inter)]">
              Your gateway to Flores that offers breathtaking sunsets,
              vibrant marine life, and unforgettable adventures across
              pristine islands.
            </p>
          </div>
        </div>
      </div>
      <div className="px-7 flex-1">
        <div className="bg-white rounded-3xl overflow-hidden">
          <img src="/komodo-gallery1-3.png" className="w-full" />
          <div className="pt-4 px-8 pb-6">
            <p className="font-[family-name:var(--font-inter-semi-bold)]">
              Pink Beach
            </p>
            <p className="mt-2 text-xs font-[family-name:var(--font-inter)]">
              A rare pink-hued beach that blends crystal waters and serene
              beauty for a truly magical escape.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 flex justify-center gap-x-4">
      <div className="w-3 h-3 rounded-full bg-silver-foil" />
      <div className="w-3 h-3 rounded-full bg-silver-foil" />
      <div className="w-3 h-3 rounded-full bg-bright-turquoise" />
      <div className="w-3 h-3 rounded-full bg-silver-foil" />
      <div className="w-3 h-3 rounded-full bg-silver-foil" />
    </div>
  </div>
}