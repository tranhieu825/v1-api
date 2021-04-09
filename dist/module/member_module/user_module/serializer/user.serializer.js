"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCreateUser = void 0;
function serializeCreateUser(model) {
    if (!model) {
        console.log("err");
    }
    console.log('==========model===========', model);
    return {
        name: model.name,
        email: model.email,
        phone: model.phone,
    };
}
exports.serializeCreateUser = serializeCreateUser;
