"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { HomeMenu } from "./home-menu";

export const HomeHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex justify-between p-6 border-b-2 border-yellow-300">
            <div className="lg:hidden">
                <Logo size={30}/>
            </div>
            <div className="hidden lg:block text-xl">
                Página Inicial
            </div>
            <div 
            className="cursor-pointer lg:hidden"
            onClick={() => setShowMenu(true)} 
            >
                <FontAwesomeIcon icon={faBars} className="size-6"/>
            </div>

            {showMenu && 
                <HomeMenu
                    closeAction={() => setShowMenu(false)}
                />
            }
        </header>
    );
}