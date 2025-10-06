"use client"
import Button from "./button";

interface TabProps {
  title: string;
  children: React.ReactNode;
  onCloseButton?: () => void;
}

export default function Tab({ title, children, onCloseButton }: TabProps){
    return (
        <div id={`tab-${title}`} className={` p-1 m-1 bg-[#acacac] border-2 border-[#929292] shadow-custom-inset text-center font-pixelify text-azure justify-center flex-col `}>  
            <div className="title bg-gradient-to-r from-[#112772] to-[#aac2df] flex items-center justify-between px-1 text-xl mb-0.5">
                <p className="font-pixelify flex-1 truncate text-left">{title}</p>
                <Button isSquare hover onClickFunction={onCloseButton}>
                    <p>X</p>
                </Button>   
            </div>
            <div className=" text-2xl">
                {children}
            </div>
        </div>
    );
}