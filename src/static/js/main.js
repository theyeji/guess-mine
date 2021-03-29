(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var main = document.getElementById("jsMain");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem("nickname");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

if (nickname === null) {
  main.classList.toggle(LOGGED_OUT);
} else {
  main.classList.toggle(LOGGED_IN);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjhmNzFkNTAuanMiXSwibmFtZXMiOlsibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbkZvcm0iLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJOSUNLTkFNRSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFDQSxJQUFNRSxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFqQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjs7QUFFQSxJQUFJTCxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJKLEVBQUFBLElBQUksQ0FBQ1UsU0FBTCxDQUFlQyxNQUFmLENBQXNCSCxVQUF0QjtBQUNELENBRkQsTUFFTztBQUNMUixFQUFBQSxJQUFJLENBQUNVLFNBQUwsQ0FBZUMsTUFBZixDQUFzQkYsU0FBdEI7QUFDRDs7QUFFRCxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHWixTQUFTLENBQUNhLGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUY4QixNQUd0QkMsS0FIc0IsR0FHWkYsS0FIWSxDQUd0QkUsS0FIc0I7QUFJOUJGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsWUFBWSxDQUFDYSxPQUFiLENBQXFCWCxRQUFyQixFQUErQlUsS0FBL0I7QUFDRCxDQU5EOztBQVFBLElBQUlkLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNnQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ1AsZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01haW5cIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmlja25hbWVcIik7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICBtYWluLmNsYXNzTGlzdC50b2dnbGUoTE9HR0VEX09VVCk7XG59IGVsc2Uge1xuICBtYWluLmNsYXNzTGlzdC50b2dnbGUoTE9HR0VEX0lOKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xufTtcblxuaWYgKGxvZ2luRm9ybSkge1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cbiJdfQ==
},{}]},{},[1])