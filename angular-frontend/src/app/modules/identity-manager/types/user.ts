import {Role} from "./role";

export class User {
  _id: string
  name: string
  email: string
  role: Role
  address?: string
  dateOfBirth?: {
    year: number,
    month: number,
    date: number
  }
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
