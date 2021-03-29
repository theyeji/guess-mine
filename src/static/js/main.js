(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGFmMTFiMzEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcbiJdfQ==
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var main = document.getElementById("jsMain");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem("nickname");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

var login = function login(nickname) {
  var socket = io("/");
  socket.emit("setNickname", {
    nickname: nickname
  });
};

if (nickname === null) {
  main.classList.toggle(LOGGED_OUT);
} else {
  main.classList.toggle(LOGGED_IN);
  login(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  main.classList.toggle(LOGGED_OUT);
  main.classList.toggle(LOGGED_IN);
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIm1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9naW5Gb3JtIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTklDS05BTUUiLCJMT0dHRURfT1VUIiwiTE9HR0VEX0lOIiwibG9naW4iLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFDQSxJQUFNRSxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFqQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTixRQUFELEVBQWM7QUFDMUIsTUFBTU8sTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNELENBSEQ7O0FBS0EsSUFBSUEsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCSixFQUFBQSxJQUFJLENBQUNjLFNBQUwsQ0FBZUMsTUFBZixDQUFzQlAsVUFBdEI7QUFDRCxDQUZELE1BRU87QUFDTFIsRUFBQUEsSUFBSSxDQUFDYyxTQUFMLENBQWVDLE1BQWYsQ0FBc0JOLFNBQXRCO0FBQ0FDLEVBQUFBLEtBQUssQ0FBQ04sUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTVksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR2hCLFNBQVMsQ0FBQ2lCLGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUY4QixNQUd0QkMsS0FIc0IsR0FHWkYsS0FIWSxDQUd0QkUsS0FIc0I7QUFJOUJGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQWhCLEVBQUFBLFlBQVksQ0FBQ2lCLE9BQWIsQ0FBcUJmLFFBQXJCLEVBQStCYyxLQUEvQjtBQUNBckIsRUFBQUEsSUFBSSxDQUFDYyxTQUFMLENBQWVDLE1BQWYsQ0FBc0JQLFVBQXRCO0FBQ0FSLEVBQUFBLElBQUksQ0FBQ2MsU0FBTCxDQUFlQyxNQUFmLENBQXNCTixTQUF0QjtBQUNBQyxFQUFBQSxLQUFLLENBQUNXLEtBQUQsQ0FBTDtBQUNELENBVEQ7O0FBV0EsSUFBSWxCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNvQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ1AsZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01haW5cIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmlja25hbWVcIik7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IGxvZ2luID0gKG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcbiAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xufTtcblxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XG4gIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShMT0dHRURfT1VUKTtcbn0gZWxzZSB7XG4gIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShMT0dHRURfSU4pO1xuICBsb2dpbihuaWNrbmFtZSk7XG59XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKExPR0dFRF9PVVQpO1xuICBtYWluLmNsYXNzTGlzdC50b2dnbGUoTE9HR0VEX0lOKTtcbiAgbG9naW4odmFsdWUpO1xufTtcblxuaWYgKGxvZ2luRm9ybSkge1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cbiJdfQ==
},{}]},{},[1])