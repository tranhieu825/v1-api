import express from "express";
import { Post } from "../../../../common/model/post.model";
import { PostCreateSchema, PostUpdateSchema } from "../DTO/post.dto";
import {commonValidateBody} from "../../../../middlewares/validatebody.middlewares";
import { PostController}  from "../controllers/post.Controller";
import { isAuth } from "../../../../middlewares/auth.middleware";


export class PostRoute_member {
  public postController: PostController = new PostController();
  public routes(app: express.Application): void {

    // Tạo bài post, xem tất cả bài post của mình
    app
      .route("/v1/api/user/category/:category_id/post")
      .get(isAuth,this.postController.getAllPost)
      .post(
          isAuth,
          commonValidateBody(PostCreateSchema),
          this.postController.createPost
      );
    
    // Update 1 bài post
    app
      .route("/v1/api/user/category/:category_id/post/:post_id")
      .put(
        isAuth,
        commonValidateBody(PostUpdateSchema),
        this.postController.updatePost
      )
      .delete(isAuth, this.postController.deletePost);

    
    // Phân trang 
     app
      .route("/v1/api/user/post")
      .get(isAuth,this.postController.getPerPage);

    // Search
     app
      .route("/v1/api/user/search")
      .get(isAuth,this.postController.getAllSearch);
  }
}
