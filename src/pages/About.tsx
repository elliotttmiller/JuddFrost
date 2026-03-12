import Heritage from '../components/Heritage';
import MeetTheTeam from '../components/MeetTheTeam';

export default function About() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-charcoal text-white pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">About Us</h1>
        <p className="text-white/70 max-w-2xl mx-auto tracking-wide text-base md:text-lg">
          A legacy of uncompromising craftsmanship in Wayzata.
        </p>
      </div>
      
      <Heritage />
      
      <div className="py-24 md:py-32 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-4">The Master Tailor</h3>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 md:mb-8">Judd Frost</h2>
            <p className="text-charcoal/70 leading-relaxed text-base md:text-lg mb-6">
              With decades of experience in the art of sartorial elegance, Judd Frost has dedicated his life to perfecting the male silhouette. Training under master tailors and studying the nuances of global menswear, he brought his uncompromising standards back to Wayzata.
            </p>
            <p className="text-charcoal/70 leading-relaxed text-base md:text-lg">
              His vision was simple: to create a sanctuary for men who appreciate true craftsmanship, personalized service, and garments that stand the test of time. Today, the shop serves as a testament to that enduring philosophy.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={`${import.meta.env.BASE_URL}judd.jpg`}
              alt="Master Tailor"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <MeetTheTeam />
    </div>
  );
}
