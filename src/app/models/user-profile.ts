import { RoleEnum } from "../enums/role-enum";

export interface UserProfile {
  fullName: string,
  firstName?: string,
  lastName?: string,
  email: string,
  role: RoleEnum
}
