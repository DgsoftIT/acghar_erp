export const Constant = {
  API_END_POINT: 'https://api.com',
  METHODS: {
    // ✅ Product APIs
    GET_ALL_PRODUCTS: '/products',
    GET_PRODUCT_BY_ID: (id: number) => `/products/${id}`,
    CREATE_PRODUCT: '/products',
    UPDATE_PRODUCT: (id: number) => `/products/${id}`,
    DELETE_PRODUCT: (id: number) => `/products/${id}`,

    // ✅ Category APIs
    GET_ALL_CATEGORY: '/categories',
    CREATE_CATEGORY: '/categories',
    UPDATE_CATEGORY: (id: number) => `/categories/${id}`,
    DELETE_CATEGORY: (id: number) => `/categories/${id}`,

    // ✅ Brand APIs
    GET_ALL_BRANDS: '/brands',
    GET_BRAND_BY_ID: (id: number) => `/brands/${id}`, // ✅ Added missing method
    CREATE_BRAND: '/brands',
    UPDATE_BRAND: (id: number) => `/brands/${id}`,
    DELETE_BRAND: (id: number) => `/brands/${id}`,
  }
};
