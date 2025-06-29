export class Product {
  productId: number | null;
  productName: string;
  productUrl: string;
  productModelNumber: number | null;
  categoryId: number | null;
  productType: string;
  brandId: number | null;
  productHighlights: string;
  productDescription: string;
  productSpecification: string;
  additionalInfo: string;
  productWeight: number | null;
  productWidth: number | null;
  productHeight: number | null;
  productLength: number | null;
  price: number | null;
  offerPrice: number | null;
  discountPercentage: number | null;
  metatitle: string;
  metaKeyword: string[] = [];  
  seoDescription: string;
  isOffer: boolean | null;
  isPublished: boolean | null;
  createdDate: Date;
  deliveryTimeSpan: string;
  productImageUrl: string;
  productImages: File[] | null;

  constructor(
    productId: number | null = null,
    productName: string = '',
    productUrl: string = '',
    productModelNumber: number | null = null,
    categoryId: number | null = null,
    productType: string = '',
    brandId: number | null = null,
    productHighlights: string = '',
    productDescription: string = '',
    productSpecification: string = '',
    additionalInfo: string = '',
    productWeight: number | null = null,
    productWidth: number | null = null,
    productHeight: number | null = null,
    productLength: number | null = null,
    price: number | null = null,
    offerPrice: number | null = null,
    discountPercentage: number | null = null,
    metatitle: string = '',
    metaKeyword: string[] = [], 
    seoDescription: string = '',
    isOffer: boolean | null = null,
    isPublished: boolean | null = null,
    createdDate: Date = new Date(),
    deliveryTimeSpan: string = '',
    productImageUrl: string = '',
    productImages: File[] | null = null
  ) {
    this.productId = productId;
    this.productName = productName;
    this.productUrl = productUrl;
    this.productModelNumber = productModelNumber;
    this.categoryId = categoryId;
    this.productType = productType;
    this.brandId = brandId;
    this.productHighlights = productHighlights;
    this.productDescription = productDescription;
    this.productSpecification = productSpecification;
    this.additionalInfo = additionalInfo;
    this.productWeight = productWeight;
    this.productWidth = productWidth;
    this.productHeight = productHeight;
    this.productLength = productLength;
    this.price = price;
    this.offerPrice = offerPrice;
    this.discountPercentage = discountPercentage;
    this.metatitle = metatitle;
    this.metaKeyword = metaKeyword || []; 
    this.seoDescription = seoDescription;
    this.isOffer = isOffer;
    this.isPublished = isPublished;
    this.createdDate = createdDate;
    this.deliveryTimeSpan = deliveryTimeSpan;
    this.productImageUrl = productImageUrl;
    this.productImages = productImages;
  }
}
