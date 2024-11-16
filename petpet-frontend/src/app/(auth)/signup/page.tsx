import { SingupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6">
            <div className="flex justify-center items-center">
                <Logo size={120}/>
            </div>
            <h1 className="mt-5 text-2xl text-center">Crie a sua conta</h1>
            <div className="mt-10 mb-14 flex flex-col gap-6">
                <SingupForm/>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className="">Já tem uma conta?</div>
                <Link href="/signin" className="hover:underline">Entrar no PetPet</Link>
            </div>
        </div>
    );
}