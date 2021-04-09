import express from "express";
import { User } from "../../../../common/model/user.model";
import { UserLoginSchema,UserChangeSchema } from "../DTO/user.dto";
import {commonValidateBody} from "../../../../middlewares/validatebody.middlewares";
import { UserController}  from "../controllers/user.Controller";
import { isAuth } from "../../../../middlewares/auth.middleware";
export class AdminRoute_admin {
  public userController: UserController = new UserController();
  public routes(app: express.Application): void {

    // Đăng nhập user
     app
      .route("/v1/api/admin/login")
      .post(
        commonValidateBody(UserLoginSchema),
      	this.userController.loginUser
      );

    // Đăng xuất
     app
      .route("/v1/api/admin/logout")
      .get(
        isAuth,
        this.userController.logoutUser
      );

       
    // Xem danh sách user (admin)
      app.route("/v1/api/admin/info").get(isAuth, this.userController.getAllUser);
    
    // get, change role, delete user
      app
      .route("/v1/api/admin/info/:user_id")
      .get(isAuth, this.userController.getUserById)
      .delete(isAuth, this.userController.deleteUser);


    // Refest token
     app.route("/v1/api/refresh-token").post(this.userController.refreshToken);
  }
}
