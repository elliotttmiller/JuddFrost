import TailoringProcess from '../components/TailoringProcess';
import CuratedMenswear from '../components/CuratedMenswear';

export default function Services() {
  return (
    <div className="bg-stone-50">
      <div className="bg-charcoal text-white pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={`${import.meta.env.BASE_URL}men-s-suits-are-display-with-interesting-warrants_986511-1128.png`}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Our Services</h1>
          <p className="text-white/70 max-w-2xl mx-auto tracking-wide text-base md:text-lg">
            Uncompromising craftsmanship tailored to your exact specifications.
          </p>
        </div>
      </div>
      <TailoringProcess />
      <CuratedMenswear />
    </div>
  );
}
