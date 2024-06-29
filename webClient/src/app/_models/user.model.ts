export class UserModel {
  id?: number;
  name?: string;
  email?: string;
  email_verified_at?: Date;
  password?: string;
  remember_token?: string;
  created_at?: Date;
  updated_at?: Date;

  setUser(user: any) {
    this.id = user.id;
    this.name = user.userName;
    this.password = user.userPassword;
    this.email = user.userEmail;
    // this.email_verified_at = user.email_verified_at
    // this.remember_token = user.remember_token;
    // this.created_at = user.created_at;
    // this.updated_at = user.updated_at;
  }
}
