'use strict';

angular.module("mushroom").factory("factory", function($q, $http){

    let getShrooms = () => {
        return $q( (resolve, reject) => {
            $http
                .get("https://mushrooms-6ad0c.firebaseio.com/mushrooms.json")
                .then( (mushrooms) => {
                    resolve(mushrooms);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    };
    return { getShrooms };
});