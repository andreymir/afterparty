"use strict";angular.module("afterpartyApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("afterpartyApp").controller("MainCtrl",["$scope",function(a){a.baskets=[{name:"Чек",products:[]},{name:"Общее",products:[{name:"Виттель",price:140},{name:"Свиные ушки в соусе",price:150},{name:"Кольца кальмаров",price:250},{name:"Луковые кольца",price:200},{name:"Гренки с сыром и чесноком",price:180}]},{name:"Андрей",products:[{name:"Мясной Ирландский пирог",price:330},{name:"Вельвет пинта",price:250},{name:"Вельвет пинта",price:250},{name:"Ньюкасл пинта",price:270},{name:"Ньюкасл пинта",price:270},{name:"Салат с грибами и острой говядиной",price:240},{name:"Б-52",price:220}]},{name:"Дима",products:[{name:"Свиная отбивная",price:490},{name:"Б-52",price:220},{name:"Ирландский манок",price:220},{name:"Кальвадос Кер де Льон Селексьон",price:200},{name:"Сандеман Руби",price:180},{name:"Бургонь де Фландр пинта",price:270},{name:"Бургонь де Фландр пинта",price:270}]},{name:"Женя",products:[{name:"Биг Стейк",price:890},{name:"Холодный Борщ",price:220},{name:"Б-52",price:220},{name:"Хугарден пинта",price:270},{name:"Килкенни пинта",price:290},{name:"Абсент",price:180},{name:"Сироп 10мл.",price:20},{name:"Сироп 10мл.",price:20},{name:"Кока-Кола в асс.",price:90}]},{name:"Саша",products:[{name:"Б-52",price:220},{name:"Белый Русский",price:250},{name:"Салат Цезарь с куриным филе",price:300},{name:"Гиннесс пинта",price:290},{name:"Гиннесс пинта",price:290},{name:"Гиннесс пинта",price:290}]},{name:"Юля",products:[{name:"Б-52",price:220},{name:"Дробовик",price:220},{name:"Дабл Стаут Шоколад пинта",price:270},{name:"Абсент",price:180},{name:"Сироп 10мл.",price:20},{name:"Сироп 10мл.",price:20},{name:"Леффе Брюн пинта",price:280},{name:"Бургонь де Фландр пинта",price:270}]}],a.newProduct={name:"",price:""},a.addProduct=function(){var b=a.newProduct,c=a.baskets[0];c.products.push({name:b.name,price:b.price}),b.name="",b.price=""},a.addBasket=function(){a.baskets.push({name:a.newBasket,products:[]}),a.newBasket=""},a.getBasketTotal=function(a){for(var b=0,c=0;c<a.products.length;c++)b+=a.products[c].price;return b},a.getTotal=function(){for(var b=0,c=0;c<a.baskets.length;c++)b+=a.getBasketTotal(a.baskets[c]);return b},a.sortableOptions={placeholder:"product",connectWith:".product-list"},a.dump=function(){console.log(angular.toJson(a.baskets))}}]);