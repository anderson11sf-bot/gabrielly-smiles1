import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "473660647_18482680786040045_2386383700064152013_n.jpg", "473991531_18481885786040045_2250674828837805138_n.jpg", 
  "477526893_18486214480040045_8645709686930180804_n.webp", "477610846_18486569071040045_7915617370854338616_n.webp", 
  "481010738_18487670233040045_3529470913022006126_n.webp", "481988243_18488522062040045_1302871667868372256_n.webp", 
  "485277131_18493714843040045_2315904455619855076_n.jpg", "488945376_18497667877040045_2048561516874741150_n.webp", 
  "495194203_18502540381040045_5457499349224177761_n.jpg", "518117910_18515898982040045_6091139611396061441_n.webp", 
  "550772843_18527825779040045_6788272949131507689_n.webp", "590424343_18544699747040045_3368267842187455687_n.webp", 
  "623414602_18089760083286643_7629512173334697173_n.webp", 
  "623963378_18099094360899189_7588116850055354058_n.webp", "624734062_18094318183963889_3964189181356801018_n.webp", 
  "626087599_18120475396505957_5336904415362341738_n.webp", "628909336_18560067982040045_1579375902033764241_n.webp", 
  "629424638_18407897416120881_7084789818396201844_n.webp", "638328612_18378549094093486_2111896306078563959_n.webp", 
  "649902310_17914141872337459_2823654894577804085_n.webp", "655845753_18095335837843950_8209318229911706567_n.webp"
];

export function LavaSmilesGallery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal each image as the user scrolls down to it
    const items = gsap.utils.toArray('.gallery-item');
    items.forEach((item: any, i) => {
      gsap.from(item, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%", // Trigger when the top of the image hits 90% down the screen
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#0c0f16] relative pt-24 pb-32 border-t border-[#ccb24c]/10">
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-accent text-white drop-shadow-xl mb-4">
          Os sorrisos de nossos pacientes <br />
          <span className="italic text-[#ccb24c]">falam por si.</span>
        </h2>
        <p className="text-[#e5dec9]/80 font-body text-lg">Resultados reais que devolvem a confiança.</p>
      </div>

      {/* Vertical Grid Gallery - Shows 5 per row, animates up on scroll */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="gallery-item relative rounded-xl overflow-hidden border border-[#ccb24c]/15 shadow-md group aspect-square hover:z-10 bg-[#07090e]"
          >
            <img 
              src={`/images/antes-depois/${img}`} 
              alt="Caso Clínico" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-[#ccb24c]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
      
    </section>
  );
}
