'use strict';

/**
 * @ngdoc function
 * @name afterpartyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the afterpartyApp
 */
angular.module('afterpartyApp')
    .controller('MainCtrl', function ($scope) {
        $scope.baskets = [{"name":"Чек","products":[]},{"name":"Общее","products":[{"name":"Виттель","price":140},{"name":"Свиные ушки в соусе","price":150},{"name":"Кольца кальмаров","price":250},{"name":"Луковые кольца","price":200},{"name":"Гренки с сыром и чесноком","price":180}]},{"name":"Андрей","products":[{"name":"Мясной Ирландский пирог","price":330},{"name":"Вельвет пинта","price":250},{"name":"Вельвет пинта","price":250},{"name":"Ньюкасл пинта","price":270},{"name":"Ньюкасл пинта","price":270},{"name":"Салат с грибами и острой говядиной","price":240},{"name":"Б-52","price":220}]},{"name":"Дима","products":[{"name":"Свиная отбивная","price":490},{"name":"Б-52","price":220},{"name":"Ирландский манок","price":220},{"name":"Кальвадос Кер де Льон Селексьон","price":200},{"name":"Сандеман Руби","price":180},{"name":"Бургонь де Фландр пинта","price":270},{"name":"Бургонь де Фландр пинта","price":270}]},{"name":"Женя","products":[{"name":"Биг Стейк","price":890},{"name":"Холодный Борщ","price":220},{"name":"Б-52","price":220},{"name":"Хугарден пинта","price":270},{"name":"Килкенни пинта","price":290},{"name":"Абсент","price":180},{"name":"Сироп 10мл.","price":20},{"name":"Сироп 10мл.","price":20},{"name":"Кока-Кола в асс.","price":90}]},{"name":"Саша","products":[{"name":"Б-52","price":220},{"name":"Белый Русский","price":250},{"name":"Салат Цезарь с куриным филе","price":300},{"name":"Гиннесс пинта","price":290},{"name":"Гиннесс пинта","price":290},{"name":"Гиннесс пинта","price":290}]},{"name":"Юля","products":[{"name":"Б-52","price":220},{"name":"Дробовик","price":220},{"name":"Дабл Стаут Шоколад пинта","price":270},{"name":"Абсент","price":180},{"name":"Сироп 10мл.","price":20},{"name":"Сироп 10мл.","price":20},{"name":"Леффе Брюн пинта","price":280},{"name":"Бургонь де Фландр пинта","price":270}]}];

        $scope.newProduct = {
            name: '',
            price: ''
        };

        $scope.addProduct = function () {
            var newProduct = $scope.newProduct;
            var basket = $scope.baskets[0];
            basket.products.push({
                name: newProduct.name,
                price: newProduct.price
            });
            newProduct.name = '';
            newProduct.price = '';
        };

        $scope.addBasket = function () {
            $scope.baskets.push({
                name: $scope.newBasket,
                products: []
            });
            $scope.newBasket = '';
        };

        $scope.getBasketTotal = function (basket) {
            var sum = 0;
            for (var i = 0; i < basket.products.length; i++) {
                sum += basket.products[i].price;
            }
            return sum;
        };
        
        $scope.getTotal = function() {
            var sum = 0;
            for (var i = 0; i < $scope.baskets.length; i++) {
                sum += $scope.getBasketTotal($scope.baskets[i]);
            }
            return sum;
        };

        $scope.sortableOptions = {
            placeholder: "product",
            connectWith: ".product-list"
        };
        
        $scope.dump = function() {
            console.log(angular.toJson($scope.baskets));
        };
    });