import { post } from "@/data/post";
import { PostItem } from "../post/post-item";

export const ProfileFeed = () => {
    return (
        <div>
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
        </div>
    );
}