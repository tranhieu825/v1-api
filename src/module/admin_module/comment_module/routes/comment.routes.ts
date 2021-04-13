import express from "express";
import { Comment} from "../../../../common/model/comment.model";
import { CommentCreateSchema, CommentUpdateSchema } from "../DTO/comment.dto";
import {commonValidateBody} from "../../../../middlewares/validatebody.middlewares";
import { CommentController}  from "../controllers/comment.Controller";
import { isAuth } from "../../../../middlewares/auth.middleware";


export class CommentRoute_admin {
  public commentController: CommentController = new CommentController();
  public routes(app: express.Application): void {
   
    app
      .route("/v1/api/admin/category/:category_id/post/:post_id/comment")
      .get(isAuth,this.commentController.getAllComment)
   

    app
      .route("/v1/api/admin/category/:category_id/post/:post_id/comment/:comment_id")
      .delete(isAuth, this.commentController.deleteComment);
  }
}
