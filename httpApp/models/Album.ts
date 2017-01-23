export class AlbumModel {

  private id: number;
  private title: string;
  private userId: number;

  constructor() { }

  public setId(id: number) { this.id = id }
  public getId(): number { return this.id }

  public setUserId(userId: number) { this.userId = userId }
  public getUserId(): number { return this.userId }

  public setTitle(title: string) { this.title = title }
  public getTitle(): string { return this.title }

}