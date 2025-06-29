export class Category {
  id?: number;
  categoryTitle: string;
  categoryUrl: string;
  categoryType: string;
  subCategory: string;
  productType: string;
  metaTagTitle: string;
  metaKeyword: string[];
  description: string;
  metaDescription: string;
  selected?: boolean;
  images: string[];
  isActive: boolean;

  constructor(
    id: number = 0,
    categoryTitle: string = '',
    categoryUrl: string = '',
    categoryType: string = '',
    subCategory: string = '',
    productType: string = '',
    metaTagTitle: string = '',
    metaKeyword: string[] = [],
    description: string = '',
    metaDescription: string = '',
    images: string[] = [],
    isActive: boolean = true
  ) {
    this.id = id;
    this.categoryTitle = categoryTitle;
    this.categoryUrl = categoryUrl;
    this.categoryType = categoryType;
    this.subCategory = subCategory;
    this.productType = productType;
    this.metaTagTitle = metaTagTitle;
    this.metaKeyword = metaKeyword;
    this.description = description;
    this.metaDescription = metaDescription;
    this.images = images;
    this.isActive = isActive;
  }
}
