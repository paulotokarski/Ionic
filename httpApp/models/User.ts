export class UserModel {

    private id: number;
    private name: string;
    private email: string;
    private username: string;

    constructor() { }

    setId(id: number):void { this.id = id }
    getId(): number { return this.id }

    setName(name: string): void { this.name = name }
    getName(): string { return this.name }

    setEmail(email: string): void { this.email = email }
    getEmail(): string { return this.email }

    setUsername(username: string): void { this.username = username }
    getUsername(): string { return this.username } 
}