"use client"

import { useState } from "react";
import { PostItem } from "../post/post-item";
import { post, post1, post2 } from "@/data/post"; // Importando os posts

export const HomeFeed = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const posts = [post, post1, post2]; // Definindo o array de posts

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
            {/* Interface de seleção de categorias */}
            <div className="p-6 border-b-2 border-yellow-300 bg-white">
                <h2 className="text-xl mb-4">Filtrar por Categoria</h2>
                <div className="flex flex-wrap gap-2">
                    {["adoção", "ajuda", "perdidos", "social"].map(category => (
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
                <PostItem key={index} post={post} />
            ))}
        </div>
    );
}