import TailoringProcess from '../components/TailoringProcess';
import AldenCollab from '../components/AldenCollab';
import CuratedMenswear from '../components/CuratedMenswear';

export default function Services() {
  return (
    <div className="bg-stone-50">
      <div className="bg-charcoal text-white pt-40 pb-24 px-6 text-center">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Services</h1>
        <p className="text-white/70 max-w-2xl mx-auto tracking-wide text-lg">
          Uncompromising craftsmanship tailored to your exact specifications.
        </p>
      </div>
      <TailoringProcess />
      <AldenCollab />
      <CuratedMenswear />
    </div>
  );
}
