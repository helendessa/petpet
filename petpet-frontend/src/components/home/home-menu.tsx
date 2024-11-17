import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faStar, faUser, faUserGroup, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";

type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className="fixed inset-0 p-6 bg-yellow-300 space-y-6 lg:hidden">
            <div className="flex justify-between items-center">
                <Logo size={32}/>
                <div onClick={closeAction} className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-blue-600">
                    <FontAwesomeIcon icon={faXmark} className="size-6 cursor-pointer"/>
                </div>
            </div>

            <div className="my-6">
                <SearchInput/>
            </div>

            <div>
                <NavItem
                    href="/home"
                    icon={faHouse}
                    label="Início" active={undefined}                        
                />
                <NavItem
                    href="/profile"
                    icon={faUser}
                    label="Meu Perfil" active={undefined}                        
                />
                <NavItem
                    href='/recommendations'
                    icon={faStar}
                    label='Recomendações' active={undefined}
                />
                <NavItem
                    href='/about'
                    icon={faUserGroup}
                    label='Sobre Nós' active={undefined}
                />
                <NavLogout/>
            </div>     
        </div>
    );
}