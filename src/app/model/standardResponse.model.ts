import { Blog } from "./blog.model";

export class StandardResponse{
  data:{

    allBlogs:Blog[];
  };
  results:number;
  status:string;
}