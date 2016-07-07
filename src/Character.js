"use strict";

var Character = function () {
  
};

var Actor = function () {
  acting = true;
  this.profession = "actor";
}

Actor.prototype = new Character();

var Singer = function () {
  this.singer = true;
  this.profession = "singer";
};

var Goldblum = function () {

};