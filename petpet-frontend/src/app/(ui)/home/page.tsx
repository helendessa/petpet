import { HomeFeed } from "@/components/home/home-feed";
import { HomeHeader } from "@/components/home/home-header";
import { PublishPost } from "@/components/post/publish-post";

export default function Page() {
    return (
        <div className="bg-white">
            <HomeHeader/>
            <PublishPost/>
            <HomeFeed/>
        </div>
    );
}