"use client";
import 'animate.css'; // https://animate.style/#documentation
import { useEffect, useState } from "react";
import Win98Desktop from './win_98_desktop';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const savedClicked = sessionStorage.getItem("clicked");
    if (savedClicked === "true") setClicked(true);
  }, []);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    sessionStorage.setItem("clicked", "true");

    const audio = new Audio("/sounds/win98_startup_sound.mp3");
    audio.volume = 0.1;
    audio.play().catch(err => console.log("Erreur lecture audio :", err));
  };;

  const handleShowPortfolio = () => {
    router.push('/portfolio')
  };

  return (
    <div>
      <div id="Experience" onClick={handleClick} className="w-screen min-h-screen flex justify-center cursor-pointer">
        { clicked ? (
          <Win98Desktop onOpenPortfolio={handleShowPortfolio}/>
        ) : (
          <h1> Clickez Pour commencer l&apos;expérience</h1>
        )}
      </div>
    </div>
    );
}
