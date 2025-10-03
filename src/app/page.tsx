import Tab from "./components/widgets/tab";
import ProfessionalExperience from "./components/widgets/professionalExperience";
import Link from 'next/link'
import CustomImage from "./components/widgets/customImage";

export default function Home() {
  const map = new Map();
  map.set("/csharp_icon.png","C#");
  map.set("/php_icon.png","PHP Symfony");
  map.set("/Java_logo.png","Java");
  map.set("/Typescript_logo_2020.png","Javascript / Typescript");
  map.set("/mysql_logo.png","MySQL");
  const map2 = new Map();
  map2.set("/Blazor_logo.png","Blazor");
  map2.set("/Python_logo.png","Python");
  map2.set("/Git_logo.png","Git bash");
  map2.set("/Tailwind_logo.png","HTML / CSS / Tailwind");
  return (
      
      Tab(
        "Portfolio NIÉ Louis", 
        <div className=" flex flex-row font-pixelify">
          <div className=" w-[30%] flex flex-col">
            {Tab("Contact", 
            <div className="w-full inline-block m-1 text-xl h-auto">
              <div className="w-full flex justify-center mb-4">
                <CustomImage src="/profile_pic.jpg" alt="Photo de profil" className="w-50 h-50 object-cover shadow-(--custom-inset) border-2 border-[#929292] "/>
              </div>
              <div className="flex w-full justify-center items-center gap-x-2 mb-2">
                <CustomImage src="/phone_icon.png" alt="phone icon" className="w-6 h-6 "/>
                <a href="tel:+330675649452">
                  06.75.64.94.52
                </a>
              </div>
              <Link href="mailto:louisnie91@gmail.com" className="flex w-full justify-center items-center gap-x-2 mb-2">
                <CustomImage src="/mail_icon.png" alt="mail icon" className="w-6 h-6 "/>
                <p>louisnie91@gmail.com</p>
              </Link>
              <Link href="https://www.linkedin.com/in/nie-louis/" target="_blank" className="flex w-full justify-center items-center gap-x-2 mb-2">
                <CustomImage src="/linkedin_icon.png" alt=" Linkedin icon" className="w-6 h-6 "/>
                <p> Linkedin </p>
              </Link>
              <div className="flex w-full justify-center items-center gap-x-2">
                <CustomImage src="/licence_icon.png" alt=" Licence icon" className="h-6" />
                <p> Permis B + Véhiculé</p>
              </div>
            </div>
            )}
            {Tab("Qualités",
              <div className=" w-full p-1 justify-start flex flex-col text-2xl h-auto"> 
                <p> - Persévérant</p>
                <p> - Créatif</p>
                <p> - Ordonné</p>
                <p> - Curieux</p>
              </div> 
            )}
            {Tab("Langues",
              <div className=" w-full p-1 justify-start flex flex-col text-2xl h-auto"> 
                <p> - Français</p>
                <p> - Anglais (niveau B2)</p>
              </div> 
            )}
            {Tab("Hobbies",
              <div className=" w-full p-1 justify-start flex flex-col text-2xl h-auto"> 
                <p> - Jeux vidéos</p>
                <p> - Aquariophilie</p>
              </div> 
            )}
          </div>
          <div className=" w-[70%]">
            {
              Tab("Présentation",
                <div className="grid grid-cols-2">
                  <div className=" flex justify-start flex-col px-4 m-1">
                    <p className=" text-7xl text-left ">NIÉ</p>
                    <p className=" text-7xl text-left font-chicle ">LOUIS</p>
                    <p className="underline text-left">étudiant en développement informatique</p>
                  </div>
                </div>
                
              )
            }
            {Tab("Profil", 
                <div className=" flex justify-center items-center mt-2 mb-2">
                  <p>Jeune diplômé en BTS SIO (Services Informatiques aux Organisations), je suis actuellement à la recherche d’une alternance dans le domaine du développement d’applications.</p>
                </div> 
              )}
              {Tab("Compétences",
                <div className=" grid grid-cols-2 ">
                  <div>
                    {Array.from(map.entries()).map(([key, value]) => ( 
                      <div key={key} >
                        <p className="flex items-center justify-center"> 
                          - <CustomImage src={key} alt=" Linkedin icon" className="w-6 h-6  mx-1"/> {value} 
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {Array.from(map2.entries()).map(([key, value]) => ( 
                      <div key={key} >
                        <p className="flex items-center justify-center"> 
                          - <CustomImage src={key} alt=" Linkedin icon" className="w-6 h-6 mx-1"/> {value} 
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {Tab("Formations",
                <div className=" w-full m-1 justify-start">
                  <p> - BTS SIO SLAM (Solutions logicielles et applications métiers) </p>
                  <p> - Baccalauréat général, Mention Assez Bien</p>
                </div>
              )}
              {Tab("Expériences Professionelles",
                <div className=" m-1">
                  <ProfessionalExperience logo="/Ciuch_logo.png" title="Stage BTS SIO 1ère année (2024, 6 semaines)" entrepriseName="CIUCH Ingini" description="Génération et enrichissement de données techniques via un programme en C# en prenant en entrée des données brutes du bureau d’études afin de produire des données structurées exploitables"/>
                  <hr className=" h-0.5 bg-white"/>
                  <ProfessionalExperience logo="/Lyreco_logo.png" title="Stage de BTS SIO 2ème année(2024, 5 semaines)" entrepriseName="LYRECO France" description="Développement d’un logiciel de gestion des taches et maintenances en PHP, Typescript."/>
                  <hr className=" h-0.5 bg-white"/>
                  <ProfessionalExperience logo="/Logo_Sdez.jpg" title="Job d’été (Juillet 2025)" entrepriseName="SDEZ Valenciennes" description="Agent de production" />
                </div>
              )}
              {
                Tab("Certifications",
                  <div className="flex flex-col">
                    <p> - MOOC de l'ANSSI</p>
                    <p> - Cambridge B2 First</p>
                    <p> - Certification PIX (555 points)</p>
                  </div>
                )
              }
          </div>
        </div>
      )
  );
}
