'use strict';
const ApiUrls = {
    // Base URL
    BaseServiceUrl: 'http://127.0.0.1:8000/api',
    // Api URLs
    UserLoginUrl: '/user/login',
    MakePasswordUrl: '/user/makePassword',
    VerifyAccountUrl: '/user/verifyAccount',
    UserRegisterUrl: '/user/register',
    CategoryBreadCrumbUrl: '/category/breadcrumb?id=',
    GetAllCategoryUrl: '/category/all',
    ProductShowUrl: '/products/show/?q=',
    CategorySearchUrl: '/category/search/?q=',
    UserFavoriteUrl: '/user/favorite?user_id=',

};

module.exports = ApiUrls;

