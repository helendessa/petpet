import { Post } from "@/types/post";
import Link from "next/link";

type Props = {
    post: Post;
}

export const PostItem = ({ post }: Props) => {
    return (
        <div className="flex gap-2 p-6 border-b-2 border-yellow-300">
            <div>
                <Link href={`/${post.user.slug}`}>
                    <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="size-10 rounded-full"
                    />
                </Link>
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3">...</div>
                <div className="py-4 text-lg">{post.body}</div>
                {post.image &&
                    <div className="w-full">
                        <img
                            src={post.image}
                            alt=""
                            className="w-full rounded-2xl"
                        />
                    </div>
                }
                <div className="flex mt-6 text-blue-600">
                    ...
                </div>
            </div>
        </div>
    );
}