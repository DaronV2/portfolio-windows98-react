import { ReactNode } from "react";

export default function Tab(title : string, children : ReactNode){
    return (
        <div className="p-1 m-2 bg-[#acacac] border-2 border-[#929292] shadow-custom-inset text-center font-pixelify text-azure justify-center flex-col ">  
            <div className="title bg-gradient-to-r from-[#112772] to-[#aac2df] justify-center items-center px-1  grid grid-cols-[98%_2%] text-xs"> 
                <p className="font-pixelify h-auto  w-full flex justify-start">{title}</p>
                <div>
                    <div className="closeBtn aspect-square max-h-4 flex justify-center items-center text-center cursor-pointer bg-[#acacac] m-0.5 text-black shadow-(--custom-inset-button) hover:bg-[#4d4d4d] hover:shadow-(--custom-inset-type) hover:text-white hover:scale-[1.1] hover:transition-all hover:duration-200 hover:ease-out">X</div>
                </div>
            </div>
            {children}
        </div>
    );
}