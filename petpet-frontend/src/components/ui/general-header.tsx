import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    backHref: string;
}

export const GeneralHeader = ({ children, backHref }: Props) => {
    return (
        <header className="flex gap-4 items-center p-6">
            <Link href={backHref} className="flex justify-center items-center border-2 border-blue-600 size-10 rounded-full">
                <FontAwesomeIcon icon={faArrowLeft} className="size-4"/>
            </Link>
            <div className="flex-1">{children}</div>
        </header>
    );    
}