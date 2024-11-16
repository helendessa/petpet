import { NavItem } from "@/components/nav/nav-item";
import { NavLogout } from "@/components/nav/nav-logout";
import { Logo } from "@/components/ui/logo";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
            <section className="flex lg:flex flex-col sticky top-0 h-screen w-72 p-3 border-r-2 border-yellow-300">
                <div className="flex-1 m-6">
                    <Logo size={80}/>
                    <nav className="mt-11">
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
                    </nav>
                </div>
                <div className="mb-6 flex flex-col gap-4">
                    <NavLogout/>
                </div>
            </section>
            <section className="flex-1 max-w-lg">
                {children}
            </section>
            <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-yellow-300">
                DIREITA
            </aside>
        </main>
    );
}