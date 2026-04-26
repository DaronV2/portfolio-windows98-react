"use client"

import Link from "next/link";
import Button from "./button";
import CustomImage from "./customImage";
import { useRouter } from "next/navigation";

interface BottomBarProps {
    openedTab? : string;
}

export default function BottomBar({openedTab} : BottomBarProps){
    const router = useRouter();
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const toPortfolio = () => {
        router.push('/portfolio')
    }
    return (
        <div className="h-9 w-full bg-(--grey) z-10 border-t-2 border-white grid md:grid-cols-[10%_80%_10%] grid-cols-[30%_60%_10%] fixed bottom-0 left-0">
            <Button className=' m-0.5 flex justify-start w-auto' handleTheClick>
              <CustomImage src='/win98_logo.svg' alt=" windows 98 pc" className=' max-h-7 p-0.5 mr-1 ml-1'/>
              <p className=' text-black text-3xl my-0.5 flex items-center'>Start</p>
            </Button>
            <div className="h-auto max-h-8 flex items-center space-x-2 w-auto"> 
                <div className=" max-h-9">
                    {openedTab == "e" ? 
                        <Button className="mt-1 h-7 w-full flex space-x-2">
                            <CustomImage src="/icon_pc.png" alt="pc icon" className=" max-h-6" />
                            <p className=" mr-5 text-lg">Portfolio</p>
                        </Button>
                    :
                        <div onDoubleClick={toPortfolio}>
                            <CustomImage src="/icon_pc.png" alt="pc icon" className=" max-h-7" />
                        </div>
                    }
                </div>
                <div className="max-h-7">
                  <CustomImage src="/icon_pokedex.png" alt="icon pokedex" className="max-h-7"/>
                </div>
                <div className="max-h-7">
                  <CustomImage src="/icon_github.png" alt="icon github" className="max-h-7"/>
                </div>
            </div>
            <div>
                <Button className='m-0.5 max-h-7 h-full'>
                    <p className=' text-xl font-extralight'>{hour < 10 ? `0${hour}`: `${hour}`}:{min < 10 ? `0${min}`: `${min}`}</p>
                </Button>
            </div>
        </div>
    );
}