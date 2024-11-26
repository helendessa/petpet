import { Post } from "@/types/post";
import { user } from "./user";

export const post: Post = {
    id: 123,
    user: user,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nec nunc.",
    image: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg",
    likeCount: 24,
    commentCount: 8,
    repostCount: 3,
    liked: true,
    reposted: false,
    dataPost: new Date(2024, 10, 15),
    categories: ["adoção"],
};

export const post1: Post = {
    id: 124,
    user: user,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nec nunc.",
    image: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg",
    likeCount: 24,
    commentCount: 8,
    repostCount: 3,
    liked: true,
    reposted: false,
    dataPost: new Date(2024, 10, 15),
    categories: ["ajuda", "perdidos"],
};

export const post2: Post = {
    id: 125,
    user: user,
    body: "Torcendo muito para não dar erro novamente.",
    image: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg",
    likeCount: 24,
    commentCount: 8,
    repostCount: 3,
    liked: true,
    reposted: false,
    dataPost: new Date(2024, 10, 15),
    categories: ["social"],
};