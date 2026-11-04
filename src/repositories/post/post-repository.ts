import { PostModel } from "@/models/posts/post-models";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlug(slug: string): Promise<PostModel>
}
