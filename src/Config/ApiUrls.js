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
    ProductShowUrl: '/products/show/?q=',
    CategorySearchUrl: '/category/search/?q=',
    GetUserFavoriteUrl: '/user/favorite',
    SetUserFavoriteUrl: '/user/favorite/store',
    DeleteUserFavoriteUrl: '/user/favorite/delete',
    GetUserCartUrl: '/user/cart',
    DeleteUserCartUrl: '/user/cart/delete',
    UpdateUserCartUrl: '/user/cart/update',
    SetUserCartUrl: '/user/cart/store',
    GetProvinceUrl: '/provinces',
    GetCitiesUrl: '/cities',

};

module.exports = ApiUrls;

