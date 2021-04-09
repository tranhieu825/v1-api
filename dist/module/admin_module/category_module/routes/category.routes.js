"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute_admin = void 0;
const category_dto_1 = require("../DTO/category.dto");
const validatebody_middlewares_1 = require("../../../../middlewares/validatebody.middlewares");
const category_Controller_1 = require("../controllers/category.Controller");
const auth_middleware_1 = require("../../../../middlewares/auth.middleware");
class CategoryRoute_admin {
    constructor() {
        this.categoryController = new category_Controller_1.CategoryController();
    }
    routes(app) {
        app
            .route("/v1/api/category")
            .get(auth_middleware_1.isAuth, this.categoryController.getAllCategory)
            .post(auth_middleware_1.isAuth, validatebody_middlewares_1.commonValidateBody(category_dto_1.CategoryCreateSchema), this.categoryController.createCategory);
        app
            .route("/v1/api/category/:category_id")
            .put(auth_middleware_1.isAuth, validatebody_middlewares_1.commonValidateBody(category_dto_1.CategoryUpdateSchema), this.categoryController.updateCategory)
            .delete(auth_middleware_1.isAuth, this.categoryController.deleteCategory);
    }
}
exports.CategoryRoute_admin = CategoryRoute_admin;
