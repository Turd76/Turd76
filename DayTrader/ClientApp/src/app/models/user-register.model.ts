

import { User } from './user.model';


export class UserRegister extends User {
    constructor(fullName?: string, userName?: string, newPassword?: string, confirmPassword?: string) {
      super();
      this.fullName = this.fullName;
      this.userName = userName;
      this.newPassword = newPassword;
      this.currentPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
    public fullName: string;
    public userName: string;
    public currentPassword: string;
    public newPassword: string;
    public confirmPassword: string;

}
