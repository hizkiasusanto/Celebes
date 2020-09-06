import {Role} from "./role";
import {DateOnly} from "../../../shared/types/date";

export class User {
  _id: string
  name: string
  email: string
  role: Role
  address?: string
  dateOfBirth?: DateOnly
  profilePicUrl?: string
  jobTitle: string
  approved: boolean
}

export class RegisterFormData {
  name: string
  email: string
  password: string
}

export class LoginFormData {
  email: string
  password: string
}
