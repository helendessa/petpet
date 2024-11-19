import { PostItem } from "@/components/post/post-item";
import { PublishPost } from "@/components/post/publish-post";
import { GeneralHeader } from "@/components/ui/general-header";
import { post } from "@/data/post";

export default function Page() {
    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Voltar</div>
            </GeneralHeader>
            <div className="border-t-2 border-yellow-300">
                <PostItem post={post} />
                <div className="border-y-8 border-yellow-400">
                    <PublishPost></PublishPost>
                </div>
                <PostItem post={post} />
                <PostItem post={post} />
                <PostItem post={post} />
            </div>
        </div>
    );
}