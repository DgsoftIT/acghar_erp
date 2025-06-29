export class Brand {
  id?: number;
  title: string;
  urlKey: string;
  description: string;
  images: string[];
  selected?: boolean;
  isActive: boolean;

  constructor(
    id: number = 0,
    title: string = '',
    urlKey: string = '',
    description: string = '',
    images: string[] = [],
    isActive: boolean = true
  ) {
    this.id = id;
    this.title = title;
    this.urlKey = urlKey;
    this.description = description;
    this.images = images;
    this.isActive = isActive;
  }
}
