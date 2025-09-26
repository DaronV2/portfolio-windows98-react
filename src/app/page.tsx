import Tab from "./components/widgets/tab";
import Image from 'next/image'
import Link from 'next/link'
import CustomImage from "./components/widgets/customImage";

export default function Home() {
  return (
      Tab(
        "Portfolio NIÉ Louis", 
        <div className="grid grid-cols-[30%_70%]">
          {Tab("Contact", 
          <div className="w-full inline-block m-1">
            <div className="w-full flex justify-center mb-4">
              <CustomImage src="/favicon.ico" alt="Photo de profil" className="w-24 h-24 rounded-full object-cover "/>
            </div>
            <div className="flex w-full justify-center items-center gap-x-2 mb-2">
              <CustomImage src="/phone_icon.png" alt="phone icon" className="w-6 h-6 object-contain filter  brightness-150 saturate-0"/>
              <a href="tel:+330675649452">
                06.75.64.94.52
              </a>
            </div>
            <Link href="mailto:louisnie91@gmail.com" className="flex w-full justify-center items-center gap-x-2 mb-2">
              <CustomImage src="/mail_icon.png" alt="mail icon" className="w-6 h-6 object-contain filter invert brightness-150 saturate-0"/>
              <p>louisnie91@gmail.com</p>
            </Link>
            <Link href="https://www.linkedin.com/in/nie-louis/" target="_blank" className="flex w-full justify-center items-center gap-x-2 mb-2">
              <CustomImage src="/linkedin_icon.png" alt=" Linkedin icon" className="w-6 h-6 object-contain filter  brightness-150 saturate-0"/>
              <p> Linkedin </p>
            </Link>
            <div className="flex w-full justify-center items-center gap-x-2">
              <CustomImage src="/licence_icon.png" alt=" Licence icon" className="h-6" />
              <p> Permis B + Véhiculé</p>
            </div>
          </div>
          )}
          {Tab("titre", <div></div> )}
        </div>
      )
  );
}
