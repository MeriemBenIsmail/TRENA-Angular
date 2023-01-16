export class User {
  name: string;
  email: string;
  password: string;
  role: string;

  constructor(public id = 0, name = '', email = '', password = '', role = '') {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = name;
  }
}
