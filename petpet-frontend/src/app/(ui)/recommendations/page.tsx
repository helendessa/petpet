import { GeneralHeader } from "@/components/ui/general-header";

export default function Page() {
    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Recomendações</div>
            </GeneralHeader> 
            {/* CLINICA TAL TAL */}
            <div className="p-6 border b-2 border-yellow-300">
                <h2 className="text-2xl mb-4">Clínica Tal Tal</h2>
                <div className="mb-4">
                    <img src="https://www.boanovacj.com.br/images/noticias/6836/6ed29a7c32f51184838eddedab37abdc.JPG" alt="Placeholder" className="mb-4 w-full h-auto"/>
                    <p className="text-base">
                        Clínica Tal Tal, oferece os serviços de consultas, exames, cirurgias, internações e vacinas.<br />
                        <strong>Endereço:</strong> 
                            <a href="https://maps.app.goo.gl/yGaoDoLgo9kiuCPS9" target="_blank" rel="noopener noreferrer">
                            Rua da Penha, 290 - Penha II, Passos - MG, 37903-070
                            </a><br />
                        <strong>Telefone:</strong> (35) 1234-5678<br />
                        <strong>Cupom para desconto de 10%:</strong> PETPET10
                    </p>
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8843271415135!2d-46.63041542475189!3d-20.714921280857077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6c3a6a935b78b%3A0x10fd8020560ab6da!2sIFSULDEMINAS%20-%20Campus%20Passos!5e0!3m2!1sen!2sbr!4v1732622348685!5m2!1sen!2sbr"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* CLINICA TAL TAL */}
            <div className="p-6 border b-2 border-yellow-300">
                <h2 className="text-2xl mb-4">Clínica Tal Tal</h2>
                <div className="mb-4">
                    <img src="https://www.boanovacj.com.br/images/noticias/6836/6ed29a7c32f51184838eddedab37abdc.JPG" alt="Placeholder" className="mb-4 w-full h-auto"/>
                    <p className="text-base">
                        Clínica Tal Tal, oferece os serviços de consultas, exames, cirurgias, internações e vacinas.<br />
                        <strong>Endereço:</strong> 
                            <a href="https://maps.app.goo.gl/yGaoDoLgo9kiuCPS9" target="_blank" rel="noopener noreferrer">
                            Rua da Penha, 290 - Penha II, Passos - MG, 37903-070
                            </a><br />
                        <strong>Telefone:</strong> (35) 1234-5678<br />
                        <strong>Cupom para desconto de 10%:</strong> PETPET10
                    </p>
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8843271415135!2d-46.63041542475189!3d-20.714921280857077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6c3a6a935b78b%3A0x10fd8020560ab6da!2sIFSULDEMINAS%20-%20Campus%20Passos!5e0!3m2!1sen!2sbr!4v1732622348685!5m2!1sen!2sbr"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}