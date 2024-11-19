"use client"

import { Post } from "@/types/post";
import { getFormatRelativeTime } from "@/utils/format-relative";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faPaw, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type Props = {
    post: Post;
}

export const PostItem = ({ post }: Props) => {
    const [liked, setLiked] = useState(post.liked);

    const handleLikeButton = () => {
        setLiked(!liked);
    };

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
                <div className="flex flex-wrap items-center gap-x-3">
                    <div className="font-bold text-md">
                        <Link href={`/${post.user.slug}`}>{post.user.name}</Link>
                    </div>
                    <div className="text-xs text-blue-500">@{post.user.slug} - {getFormatRelativeTime(post.dataPost)}</div>
                </div>
                <div className="py-4 text-md">{post.body}</div>
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
                    <div className="flex-1">
                        <Link href={`/post/${post.id}`}>
                            <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faComment} className="size-5"/>
                                <div className="text-sm">{post.commentCount}</div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 cursor-pointer">
                            <FontAwesomeIcon icon={faRetweet} className="size-5"/>
                            <div className="text-sm">{post.repostCount}</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div onClick = {handleLikeButton} className={`inline-flex items-center gap-2 cursor-pointer ${liked && 'text-red-500'}`}>
                            <FontAwesomeIcon icon={faPaw} className="size-5"/>
                            <div className="text-sm">{post.likeCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}