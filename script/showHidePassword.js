/*jshint esversion: 6 */
// show/hide password in forms

const nodeList = document.getElementsByTagName("input");
let isShown = false;
[...nodeList].forEach(node => {
  if(!isShown && node.getAttribute("type") === "password"){
    node.setAttribute('type', 'text');
    isShown = true;
  } else {
    node.setAttribute('type', 'password');
  }
});
