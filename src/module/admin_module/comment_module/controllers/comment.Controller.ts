import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { CommentService } from "../services/comment.service";
import { success, error } from "../../../../common/service/response.service";
import { Comment } from "../../../../common/model/comment.model";
import { Post } from "../../../../common/model/post.model";
import { RoleCode } from "../../../../common/model/user.model";
import { StatusCode} from "../../../../common/model/common.model";
import { Token } from "../../../../common/model/token.model";
import session from "express-session";
import {
  serializeCreateComment,
} from "../serializer/comment.serializer";
import {
  ICommentCreateForm,
  ICommentUpdateForm,

} from "../models/comment.model";

import {
  ACCESS_TOKEN_LIFE,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_LIFE,
  REFRESH_TOKEN_SECRET,
} from "../../../../config/env";

import {
  generateToken,
  verifyToken,
} from "../../../../middlewares/helper.middleware";

export class CommentController{


public commentService: CommentService = new CommentService(Comment);


  // Xem tất cả comment trong bài Post

    getAllComment = async (req: Request, res: Response) => {
      try {
         const { post_id } = req.params;
         const role = req.authorized_user.role;
         if(role === RoleCode.Admin)
         {
         const check  = await Post.find(
          {
           status: StatusCode.Active, _id: post_id,
          })
         if(check.length!==0)
         {
         const result = await Comment.find(
          { status: StatusCode.Active, post_id:post_id },
          "content post_id"
          ).populate({path:'user_id',select:"name" }).populate({path:'post_id',select:"title"}).sort({ updatedAt: -1 });
   
          return success(res, result);
          }
        return error(res,"Không tìm thấy URL", 200);
        }
        return error(res,"Bạn không có quyền này", 200);
      } catch (err) {
        return error(res, "Error", 200);
      }
    };


   // Xoá một comment

   deleteComment = async (req: Request, res: Response) => {
    try {    
      const { post_id,comment_id } = req.params;
      const id = req.authorized_user._id;
      const role = req.authorized_user.role;
      if(role === RoleCode.Admin)
         {
      const check = await Comment.find(
        {
          status: StatusCode.Active,user_id: id
        })
      if(check)
      {
      const statusComment = StatusCode.Deactive;
      const comment = await this.commentService.deleteOne(comment_id,statusComment);
      const messageSuccess = "You have been Delete comment successfully";
      return success(res, messageSuccess, 201);
      }
      const messageError = "Không tồn tại comment này";
      return error(res, messageError, 200);
    }
      return error(res, "Bạn không có quyền này", 200);
  }
    catch (err) {
      return error(res, "Error", 200);
    }
   }
}