'use strict';
const ApiUrls = {
    // Base URL
    BaseServiceUrl: 'http://127.0.0.1:8000/api',
    BaseUrl: 'http://127.0.0.1:8000/',
    // Api URLs
    UserLoginUrl: '/user/login',
    MakePasswordUrl: '/user/makePassword',
    VerifyAccountUrl: '/user/verifyAccount',
    UserRegisterUrl: '/user/register',
    CategoryBreadCrumbUrl: '/category/breadcrumb?id=',
    GetAllCategoryUrl: '/category/all',
    ProductShowUrl: '/products/show?q=',
    SearchProductUrl: '/product/search',
    CategorySearchUrl: '/category/search?q=',
    GetUserFavoriteUrl: '/user/favorite',
    SetUserFavoriteUrl: '/user/favorite/store',
    DeleteUserFavoriteUrl: '/user/favorite/delete',
    GetUserCartUrl: '/user/cart',
    DeleteUserCartUrl: '/user/cart/delete',
    UpdateUserCartUrl: '/user/cart/update',
    SetUserCartUrl: '/user/cart/store',
    GetProvinceUrl: '/provinces',
    GetCitiesUrl: '/cities',
    UserFullnameUpdateUrl: '/user/fullname/update',
    UserPhoneUpdateUrl: '/user/phone/update',
    UserEmailUpdateUrl: '/user/email/update',
    UserHomePhoneUpdateUrl: '/user/homePhone/update',
    UserNationalCodeUpdateUrl: '/user/nationalCode/update',
    UserOrdersUrl: '/user/orders',
    GetUserOrdersProductUrl: '/user/orders/product',
    UserOrderAddUrl: '/user/orders/add',
    AdminCheckUrl: '/admin/check',
    UserCheckUrl: '/user/check',
    UploadProductImageUrl: '/product_images/store',
};

module.exports = ApiUrls;

