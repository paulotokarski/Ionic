export class PhotoModel {

  private id: number;
  private url: string;
  private title: string;
  private albumId: number;
  private thumnailUrl: string;

  constructor() { }

  setId(id: number) { this.id = id }
  getId(): number { return this.id }

  setTitle(title: string) { this.title = title }
  getTitle(): string { return this.title }

  setUrl(url: string) { this.url = url }
  getUrl(): string { return this.url }

  setAlbumId(albumId: number) { this.albumId = albumId }
  getAlbumId(): number { return this.albumId }

  getThumbnailUrl(): string { return this.thumnailUrl }
  setThumbnailUrl(thumnailUrl: string) { this.thumnailUrl = thumnailUrl }

}