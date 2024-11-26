"use client"

import { useState } from "react";
import { GeneralHeader } from "@/components/ui/general-header";

// Dados dos posts com categorias
const posts = [
    {
        title: "Clínica Tal Tal",
        image: "https://www.boanovacj.com.br/images/noticias/6836/6ed29a7c32f51184838eddedab37abdc.JPG",
        description: "Clínica Tal Tal, oferece os serviços de consultas, exames, cirurgias, internações e vacinas.",
        address: "Rua da Penha, 290 - Penha II, Passos - MG, 37903-070",
        phone: "(35) 1234-5678",
        discount: "PETPET10",
        mapUrl: "https://maps.app.goo.gl/yGaoDoLgo9kiuCPS9",
        categories: ["consulta", "exame", "cirurgia", "internação", "vacina"]
    },
    {
        title: "Clínica Tal Tal Teste",
        image: "https://www.boanovacj.com.br/images/noticias/6836/6ed29a7c32f51184838eddedab37abdc.JPG",
        description: "Clínica Tal Tal, oferece os serviços de consultas, exames, cirurgias, internações e vacinas.",
        address: "Rua da Penha, 290 - Penha II, Passos - MG, 37903-070",
        phone: "(35) 1234-5678",
        discount: "PETPET10",
        mapUrl: "https://maps.app.goo.gl/yGaoDoLgo9kiuCPS9",
        categories: ["vacina", "exame", "cirurgia"]
    },
];

export default function Page() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleShare = (title: string, text: string, url: string) => {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: text,
                url: url,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            // Fallback: Copy to clipboard
            const shareData = `${title}\n${text}\n${url}`;
            navigator.clipboard.writeText(shareData)
                .then(() => {
                    alert('Informações copiadas para a área de transferência. Você pode colar e compartilhar manualmente.');
                })
                .catch((error) => console.log('Error copying to clipboard', error));
        }
    };

    {/* Implementação do filtro */}
    const toggleCategory = (category: string) => {
        setSelectedCategories(prevSelectedCategories =>
            prevSelectedCategories.includes(category)
                ? prevSelectedCategories.filter(c => c !== category)
                : [...prevSelectedCategories, category]
        );
    };

    const filteredPosts = selectedCategories.length > 0
        ? posts.filter(post => selectedCategories.every(category => post.categories.includes(category)))
        : posts;

    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Recomendações</div>
            </GeneralHeader> 

            {/* Interface de seleção de categorias */}
            <div className="p-6 border-r-2 border-t-2 border-b-2 border-yellow-300">
                <h2 className="text-xl mb-4">Filtrar por Categoria</h2>
                <div className="flex flex-wrap gap-2">
                    {["vacina", "abrigo", "cirurgia", "internação", "consulta", "exame"].map(category => (
                        <button
                            key={category}
                            className={`px-2 py-1 mb-2 rounded ${selectedCategories.includes(category) ? "bg-blue-500 text-yellow-200" : "bg-yellow-400"}`}
                            onClick={() => toggleCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Exibição dos posts filtrados */}
            {filteredPosts.map((post, index) => (
                <div key={index} className="p-6 border-b-2 border-t-2 border-r-2 border-yellow-300 mb-4">
                    <h2 className="text-2xl mb-4">{post.title}</h2>
                    <div className="mb-4">
                        <img src={post.image} alt="Placeholder" className="mb-4 w-full h-auto"/>
                        <p className="text-base">
                            {post.description}<br />
                            <strong>Endereço:</strong> 
                            <a href={post.mapUrl} target="_blank" rel="noopener noreferrer">
                                {post.address}
                            </a><br />
                            <strong>Telefone:</strong> {post.phone}<br />
                            <strong>Cupom para desconto de 10%:</strong> {post.discount}
                        </p>
                        <div className="mt-4">
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8843271415135!2d-46.63041542475189!3d-20.714921280857077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6c3a6a935b78b%3A0x10fd8020560ab6da!2sIFSULDEMINAS%20-%20Campus%20Passos!5e0!3m2!1sen!2sbr!4v1732622348685!5m2!1sen!2sbr`}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => handleShare(
                                post.title,
                                `${post.description} Endereço: ${post.address}. Telefone: ${post.phone}. Cupom para desconto de 10%: ${post.discount}`,
                                post.mapUrl
                            )}
                        >
                            Compartilhar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}