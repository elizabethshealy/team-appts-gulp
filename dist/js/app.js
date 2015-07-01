(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Backbone=require("backbone"),$=require("jquery"),_=require("underscore"),app={},data=[],Router=Backbone.Router.extend({routes:{"":"home","new":"new","detail/:id":"detail","edit/:id":"edit"},home:function(){var t=_.template($("#all-appts").html(),{variable:"m"});$(".main-content").html(t(data))},"new":function(){$(".main-content").html($("#create-appt").html()),$(".new-appt").on("submit",function(t){t.preventDefault();var e={};e.title=$(".title").val(),e.date=$(".date").val(),e.time=$(".time").val(),e.street=$(".street").val(),e.city=$(".city").val(),e.state=$(".state").val(),data.push(e)}),console.log(data),window.location.hash=""},detail:function(t){$(".main-content").html($("#detail").html())},edit:function(t){}}),app_router=new Router;Backbone.history.start();

},{"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],2:[function(require,module,exports){
(function (global){
"use strict";global.jQuery=require("jquery"),require("./app");


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./app":1,"jquery":"jquery"}]},{},[2])


//# sourceMappingURL=app.js.map