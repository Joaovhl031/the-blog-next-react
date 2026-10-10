import { PostModel } from "@/models/posts/post-models";

export interface PostRepository{
  findAll(): Promise<PostModel[]>
  findById(id: string): Promise<PostModel >
}
