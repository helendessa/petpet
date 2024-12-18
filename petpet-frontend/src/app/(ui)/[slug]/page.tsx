import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page () {
    const isMe = true;

    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-base">{user.name}</div>
                <div className="text-xs text-blue-400">{user.postCount} posts</div>
            </GeneralHeader>
            <section className="border-b-2 border-yellow-300">
                <div 
                className="bg-yellow-500 h-28 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${user.cover})` }}
                ></div>
                <div className="flex justify-between items-end px-6">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="-mt-12 size-24 rounded-full"
                    />
                    <div className="w-32">
                        {isMe &&
                            <Link href={`/${user.slug}/edit`}>
                                <Button label="Editar perfil" size={3}/>
                            </Link>
                        }
                        {!isMe &&
                            <Button label="Seguir" size={3}/>
                        }

                    </div>
                </div>
                <div className="px-6 mt-4">
                    <div className="text-xl font-bold">{user.name}</div>
                    <div className="text-blue-500">@{user.slug}</div>
                    <div className="py-5 text-md text-blue-600">{user.bio}</div>
                    {user.link &&
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faLink} className="size-4"/>
                            <Link className="py-2 hover:underline" target="_blank" href={user.link}>{user.link}</Link>
                        </div>
                    }
                     
                    <div className="my-5 flex gap-6 text-md text-blue-700">
                        <div> <span className="font-bold text-blue-700">24</span> Seguindo </div>
                        <div> <span className="font-bold text-blue-700">24</span> Seguidores </div>
                    </div>
                </div>
            </section>
            <ProfileFeed/>
        </div>
    );
}