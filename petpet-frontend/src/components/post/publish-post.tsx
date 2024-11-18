"use client";

import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";

export const PublishPost = () => {
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const editableRef = useRef<HTMLDivElement>(null);

    const handleInputChange = () => {
        const currentContent = editableRef.current?.innerText || "";
        setIsPlaceholderVisible(currentContent.trim() === "");
    };

    useEffect(() => {
        if (editableRef.current) {
            setIsPlaceholderVisible(editableRef.current.innerText.trim() === "");
        }
    }, []);

    const handleImageUpload = () => {
    };

    const handlePostClick = () => {
        const content = editableRef.current?.innerText.trim();
        if (content) {
            console.log("Conteúdo postado:", content);
        } else {
            alert("O campo está vazio!");
        }
    };

    return (
        <div className="flex gap-6 px-6 py-6 border-b-2 border-yellow-300">
            <div>
                <img 
                    src={user.avatar}
                    alt={user.name}
                    className="size-12 rounded-full"
                />
            </div>
            <div className="flex-1 relative">
                {isPlaceholderVisible && (
                    <div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none text-gray-400 text-lg p-2"
                    >
                        Digite aqui...
                    </div>
                )}
                <div 
                    ref={editableRef}
                    className="min-h-14 outline-none text-lg text-blue-600 break-words max-w-full overflow-hidden p-2"
                    contentEditable
                    role="textbox"
                    style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}
                    onInput={handleInputChange} // Monitorar mudanças
                ></div>
                <div className="flex justify-between items-center mt-2">
                    <div onClick={handleImageUpload} className="cursor-pointer">
                        <FontAwesomeIcon icon={faImage} className="size-4"/>
                    </div>
                    <div className="w-28">
                        <Button
                            label="Postar" 
                            size={3}
                            onClick={handlePostClick}                        
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
