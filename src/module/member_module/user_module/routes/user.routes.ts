import express from "express";
import { User } from "../../../../common/model/user.model";
import { UserCreateSchema,UserLoginSchema,UserChangeSchema } from "../DTO/user.dto";
import {commonValidateBody} from "../../../../middlewares/validatebody.middlewares";
import { UserController}  from "../controllers/user.Controller";
import { isAuth } from "../../../../middlewares/auth.middleware";
export class MemberRoute_member {
  public userController: UserController = new UserController();
  public routes(app: express.Application): void {


    
    // Đăng kí user
    app
      .route("/v1/api/user/signup")
      .post(
        commonValidateBody(UserCreateSchema),
        this.userController.createUser
      );


    // Đăng nhập user
     app
      .route("/v1/api/user/login")
      .post(
        commonValidateBody(UserLoginSchema),
      	this.userController.loginUser
      );


    // Đăng xuất
     app
      .route("/v1/api/user/logout")
      .get(
        isAuth,
        this.userController.logoutUser
      );

    // Xem thông tin cá nhân và thay đổi mật khẩu
      app
      .route("/v1/api/user/:id")
      .get(isAuth, this.userController.getUser)
      .patch(
        isAuth,
        commonValidateBody(UserChangeSchema),
        this.userController.updateUser
      );


    // Refest token
     app.route("/v1/api/user/refresh-token").post(this.userController.refreshToken);
  }
}
