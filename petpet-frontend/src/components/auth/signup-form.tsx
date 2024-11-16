"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

export const SingupForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const handleEnterButton = () => {
        router.replace('/home');
    };

    return (
        <>
            <Input 
                placeholder="Digite seu nome"
                value={nameField}
                onChange={t => setNameField(t)}
                icon={faUser}
            />

            <Input 
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={t => setEmailField(t)}
                icon={faEnvelope}
            />

            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
                icon={faKey}
            />

            <Button
                label="Entrar"
                onClick={handleEnterButton}
                size={1}
            />
        </>
    );
}