"use client"

import { faArrowRightFromBracket, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
    const router = useRouter();

    const handleClick = () => {
        router.replace('/signin');
    };

    return (
        <div onClick={handleClick} className={`text-red-700 cursor-pointer flex items-center gap-6 py-3 opacity-80 hover:opacity-100`}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6 text-red-700" />
            <div className="text-lg">Sair</div>
        </div>
    );
}