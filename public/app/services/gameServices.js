/**
 * Created by abhi on 20-Jan-18.
 */

angular.module('gameService',[])

    .factory('cogo',function ($http) {
        gamefactory = {};


        gamefactory.getGames = function(gdata) {
            return $http.get('https://starlord.hackerearth.com/gamesarena',gdata);
        };
        return gamefactory;
    });