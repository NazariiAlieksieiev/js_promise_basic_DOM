var e=document.querySelector(".logo");new Promise(function(n){e.addEventListener("click",function(){n('<div class="message">\n      <p>Promise was resolved!</p>\n    </div>')})}).then(function(e){document.body.insertAdjacentHTML("beforeend",e)}),new Promise(function(e,n){setTimeout(function(){n('<div class="message error-message">\n      <p>Promise was rejected!</p>\n    </div>')},3e3)}).catch(function(e){document.body.insertAdjacentHTML("beforeend",e);var n=document.querySelector(".message.error-message");setTimeout(function(){n&&n.remove()},3e3)});
//# sourceMappingURL=index.9af72f47.js.map