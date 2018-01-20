/**
 * Created by abhi on 20-Jan-18.
 */
angular.module('gameApp', ['gameRoutes', ])

    .config(function($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptors');
    });
