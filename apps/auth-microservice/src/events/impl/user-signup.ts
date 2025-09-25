export class UserSignUpEvent {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  toStore(){
    return {
      type: UserSignUpEvent.name,
      payload: { email: this.email, password: this.password }
    }
  }
}