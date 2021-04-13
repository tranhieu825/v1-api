"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoute = void 0;
const common_Controller_1 = require("../controllers/common.Controller");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
class CommonRoute {
    constructor() {
        this.commonController = new common_Controller_1.CommonController();
    }
    routes(app) {
        // Phân trang chính
        app
            .route("/v1/api/post")
            .get(auth_middleware_1.isAuth, this.commonController.getPerPage);
        // Phân trang theo category
        app
            .route("/v1/api/category")
            .get(auth_middleware_1.isAuth, this.commonController.getPerPageCategory);
        // Search
        app
            .route("/v1/api/search")
            .get(auth_middleware_1.isAuth, this.commonController.getAllSearch);
    }
}
exports.CommonRoute = CommonRoute;
