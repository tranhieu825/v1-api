import { IUserCreateForm} from "../models/user.model";
export interface IUserCreateResponse {
  phone:string;
  name: string;
  email: string;
}


export function serializeCreateUser(
  model: IUserCreateForm
): IUserCreateResponse {
  if (!model) {
    console.log("err");
  }

  console.log('==========model===========', model)
  return {
    name: model.name,
    email: model.email,
    phone:model.phone,
  };
}

