import Marquee from 'react-fast-marquee';

const partnerLogos = [
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Facebook', url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Tesla', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
];

// Duplicate logos for seamless scrolling
const logos = [...partnerLogos, ...partnerLogos];

export function PartnerLogos() {
  return (
    <div className="pt-16 overflow-hidden">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        <div className="flex gap-6 px-4 min-w-max">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="relative bg-white p-2 rounded-lg shadow-sm w-32 h-16 flex items-center justify-center
                         filter grayscale opacity-30 transition-all duration-300 
                         hover:grayscale-0 hover:opacity-100 hover:scale-105 hover:shadow-lg 
                         flex-shrink-0 will-change-transform overflow-visible"
            >
              <img src={logo.url} alt={logo.name} className="max-w-[80%] max-h-[80%] object-contain" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
