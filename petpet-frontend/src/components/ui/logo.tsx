import Image from "next/image";
import Link from "next/link";

type Props = {
    size: number;
}

export const Logo = ({ size }: Props) => {
    return (
        <Link href={"/"}>
            <Image
                src={'/Pet/logo-fundo-amarelo.png'}
                alt="logo"
                width={size}
                height={size}
                quality={56}
        />
        </Link>
    );
}