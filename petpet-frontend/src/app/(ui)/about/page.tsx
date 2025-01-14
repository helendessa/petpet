import { GeneralHeader } from "@/components/ui/general-header";

export default function Page() {
    
    return (
        <div className="bg-white">
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Sobre Nós</div>
            </GeneralHeader> 
            <div className="p-6 border b-2 border-yellow-300">
                <h2 className="text-2xl mb-4">História e Objetivos</h2>
                <div className="mb-4">
                    <img src="https://www.boanovacj.com.br/images/noticias/6836/6ed29a7c32f51184838eddedab37abdc.JPG" alt="Placeholder" className="mb-4 w-full h-auto"/>
                    <p className="text-base">
                        O PetPet surgiu como... etc etc. Nosso objetivo é etc etc.
                    </p>
                    <h2 className="text-2xl mt-4">Contato</h2>
                        <strong>Endereço:</strong> Rua Tal, 123 - Bairro Tal - Cidade Tal<br />
                        <strong>Telefone:</strong> (35) 1234-5678<br />
                </div>
            </div>
        </div>
    );
}