!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.querySelector("body"),a=document.querySelector("script"),r="font-size: 22px; padding: 10px 16px; margin: 0px 5px",s=document.createElement("div");function d(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}s.className="buttonWapper",s.style.cssText="position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%)",e.style.cssText=r,n.style.cssText=r,n.disabled=!0,e.textContent=e.textContent.toUpperCase(),n.textContent=n.textContent.toUpperCase(),s.append(e),s.append(n),o.insertBefore(s,a),s.insertBefore(e,null),s.insertBefore(n,null),e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,d(),t=setInterval(d,1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.8448c700.js.map