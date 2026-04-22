"use client"
import { Rnd } from "react-rnd";
import CustomImage from "./components/widgets/customImage";
import Button from "./components/widgets/button";
import Tab from "./components/widgets/tab";
import BottomBar from "./components/widgets/bottom_bar";

type Win98DesktopProps = {
  onOpenPortfolio: () => void; // le type de la prop (une fonction)
};

export default function Win98Desktop({ onOpenPortfolio }: Win98DesktopProps){
    const closeConnexionTab = () => {
        const tab = document.getElementById('tab-Connexion');
        if(tab) tab.hidden = true;
    };

    const redirectToPokedex = () => {
      window.open('https://site-pokemon-pearl.vercel.app/', '_blank');
    };
    const redirectToGithub = () => {
      window.open('https://github.com/DaronV2', '_blank');
    };
    return (
        <div className='overflow-hidden'>
          <div className="w-screen h-screen relative  flex flex-col animate__fadeIn wallpaperWin98">
            <CustomImage
              src="/wallpaper_win98.png"
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
            />
            <CustomImage
              src="/wallpaper_win98_phone.jpg"
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
            />
            <div className='z-10 w-full h-full flex flex-col justify-between'>
              <div className="flex flex-row gap-0.5">
                <div onDoubleClick={onOpenPortfolio} id='app_desktop_portfolio' className='app_desktop h-20 w-20 hover:bg-blue-200 hover:border hover:border-blue-600 hover:border-dotted m-2 grid grid-rows-[10%_70%_20%] items-center justify-center'>
                  <div></div>
                  <CustomImage src='/icon_pc.png' alt=" icon pc"/>
                  <p className=' pt-8 flex justify-center text-black  font-light'> Portfolio</p>
                </div>
                <div onDoubleClick={redirectToPokedex} id='app_desktop_portfolio' className='app_desktop h-20 w-20 hover:bg-blue-200 hover:border hover:border-blue-600 hover:border-dotted m-2 grid grid-rows-[10%_70%_20%] items-center justify-center'>
                  <div></div>
                  <CustomImage src='/icon_pokedex.png' alt=" icon pokedex"/>
                  <p className=' pt-8 flex justify-center text-black  font-light'> Site Pokédex</p>
                </div>
                <div onDoubleClick={redirectToGithub} id='app_desktop_portfolio' className='app_desktop p-2 h-20 w-20 hover:bg-blue-200 hover:border hover:border-blue-600 hover:border-dotted m-2 grid grid-rows-[10%_70%_20%] items-center justify-center'>
                  <div></div>
                  <CustomImage src='/icon_github.png' alt=" icon github"/>
                  <p className=' pt-8 flex justify-center text-black  font-light'>Github</p>
                </div>
              </div>
              <Rnd
                default={{
                  x: 550,
                  y: 300,
                  width: 320,
                  height: 200,
                }}
              >
                <Tab title="Connexion">
                    <div>
                     <div className='flex flex-col justify-center items-center w-full'>
                      <label htmlFor="user">Username : </label>
                      <input type="text" name="user" id="user" className=' rounded-[0px] bg-white shadow-(--custom-inset-type) w-[70%] text-black px-1' />
                      <label htmlFor="password"> Password : </label>
                      <input type="password" name="password" id="password" className=' rounded-[0px] bg-white shadow-(--custom-inset-type) w-[70%] text-black px-1' />
                     </div>
                     <Button hover className=' mt-2' onClickFunction={closeConnexionTab}>
                        <p className=' text-xl'>Connexion</p>
                     </Button>
                   </div>
                </Tab>
              </Rnd>
              <BottomBar/>
            </div> 
          </div>
        </div>
    );
}