"use client"
import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isSquare?: boolean;
  hover?: boolean;
  handleTheClick? : boolean
  onClickFunction? : () => void;
}

export default function Button({ children, className ,isSquare, hover, handleTheClick, onClickFunction }: ButtonProps) {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        if (!handleTheClick) return;
        setClicked((prev) => !prev);
    };

    if(onClickFunction){
      return(
        <div onClick={onClickFunction} className={`closeBtn 
            ${ clicked ? "bg-[#4d4d4d] shadow-(--custom-inset-type) text-white  transition-all duration-200 ease-out" : " "}
            ${hover ? "hover:bg-[#4d4d4d] hover:shadow-(--custom-inset-type) hover:text-white  hover:transition-all hover:duration-200 hover:ease-out" : ""}
            ${ isSquare ? "aspect-square" : ""}
            text-xs flex justify-center items-center text-center cursor-pointer bg-[#acacac] m-0.5 text-black shadow-(--custom-inset-button)  font-geist min-h-4 
            ${className}`}>
            {children}
        </div>
      );
    }
    
    return (
        <div onClick={handleClick} className={`closeBtn 
            ${ clicked ? "bg-[#4d4d4d] shadow-(--custom-inset-type) text-white  transition-all duration-200 ease-out" : " "}
            ${hover ? "hover:bg-[#4d4d4d] hover:shadow-(--custom-inset-type) hover:text-white  hover:transition-all hover:duration-200 hover:ease-out" : ""}
            ${ isSquare ? "aspect-square" : ""}
            text-xs flex justify-center items-center text-center cursor-pointer bg-[#acacac] m-0.5 text-black shadow-(--custom-inset-button)  font-geist min-h-4 
            ${className}`}>
            {children}
        </div>
    );
}