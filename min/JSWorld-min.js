!function(){function e(e,t){for(;null!=e;e=e.parentNode)if(e==t)return!0}function t(t){e(t.relatedTarget,a)||(i=r[Math.floor(6*Math.random())],i.style.visibility="visible")}function n(t){e(t.relatedTarget,a)||(i.style.visibility="hidden")}for(var r=[],o=0;6>o;o++)r.push(document.getElementById("monster"+(o+1).toString()));var i=r[Math.floor(6*Math.random())],a=document.getElementsByClassName("cube")[0];a.addEventListener("mouseover",t),a.addEventListener("mouseout",n)}(),function(){function e(o){null!=r&&(n+=(o-r)%360*.03),r=o,t.style.color="hsl("+n+", 100%, 60%)",t.style.textShadow="1px 0px 30px hsl("+n+", 100%, 60%)",requestAnimationFrame(e)}var t=document.getElementById("phrase"),n=0,r=null;requestAnimationFrame(e)}(),function(){function e(e){for(var t=[],n=2;e>=n;n++)t.push(n);for(var r=2,o;;){for(o=r;e>=o+r;)o+=r,-1!=t.indexOf(o)&&t.splice(t.indexOf(o),1);if(!t[t.indexOf(r)+1])break;r=t[t.indexOf(r)+1]}return t}for(var t=document.getElementById("primesTable"),n,r,o,i=500,a=e(i),d=1;i>=d;d++)d%10==1&&(n=t.appendChild(document.createElement("tr"))),r=document.createElement("td"),r.className="number",o=document.createTextNode(" "+d.toString()+" "),r.appendChild(o),-1!=a.indexOf(d)&&(r.className+=" prime"),n.appendChild(r)}();