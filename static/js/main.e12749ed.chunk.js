(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(3),i=a.n(n),s=a(4),r=a(5),c=a(8),l=a(6),m=a(1),o=a.n(m),u=(a(13),a(7)),d=(a(14),a(0)),h=function(t){var e=t.images,a=t.frameSize,n=t.itemWidth,i=t.step,s=t.animationDuration,r=Object(m.useState)(0),c=Object(u.a)(r,2),l=c[0],o=c[1];Object(m.useEffect)((function(){return o(0)}),[n]);var h=e.length*n-a*n;return Object(d.jsxs)("div",{className:"Carousel",children:[Object(d.jsx)("div",{className:"Carousel__list-wrapper",style:{width:"".concat(a*n,"px")},children:Object(d.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(l,"px)"),transitionDuration:"".concat(s,"ms")},children:e.map((function(t,e){return Object(d.jsx)("li",{className:"Carousel__list-item",children:Object(d.jsx)("img",{src:t,alt:"#".concat(e+1),width:n})},t)}))})}),Object(d.jsxs)("div",{className:"Carousel__buttons",children:[Object(d.jsx)("button",{type:"button","data-cy":"prev",onClick:function(){o((function(t){return Math.min(t+n*i,0)}))},disabled:0===l,children:"Prev"}),Object(d.jsx)("button",{type:"button","data-cy":"next",onClick:function(){o((function(t){return Math.max(t-n*i,-h)}))},disabled:l===-h,children:"Next"})]})]})},p=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3},t.setStep=function(e){var a=+e.target.value;t.setState({step:a||3})},t.setFrameSize=function(e){var a=+e.target.value;t.setState({frameSize:a||3})},t.setItemWidth=function(e){var a=+e.target.value;t.setState({itemWidth:a||130})},t.setAnimationDuration=function(e){var a=+e.target.value;t.setState({animationDuration:a||1e3})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.state,e=t.images,a=t.itemWidth,n=t.frameSize,i=t.step,s=t.animationDuration;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsxs)("label",{htmlFor:"stepId",className:"label",children:["Step:",Object(d.jsx)("input",{type:"number",id:"stepId",value:i,min:1,max:e.length,step:1,onChange:this.setStep})]}),Object(d.jsxs)("label",{htmlFor:"frameId",className:"label",children:["Frame Size:",Object(d.jsx)("input",{type:"number",id:"frameId",value:n,min:1,max:e.length,step:1,onChange:this.setFrameSize})]}),Object(d.jsxs)("label",{htmlFor:"itemId",className:"label",children:["Item Width:",Object(d.jsx)("input",{type:"number",id:"itemId",value:a,min:60,max:260,step:10,onChange:this.setItemWidth})]}),Object(d.jsxs)("label",{htmlFor:"animationId",className:"label",children:["AnimationDuration:",Object(d.jsx)("input",{type:"number",id:"animationId",value:s,min:500,max:5e3,step:500,onChange:this.setAnimationDuration})]})]}),Object(d.jsx)(h,{images:e,itemWidth:a,frameSize:n,step:i,animationDuration:s})]})}}]),a}(o.a.Component),b=p;i.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e12749ed.chunk.js.map