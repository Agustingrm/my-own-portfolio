(this["webpackJsonpagustingrm.github.io"]=this["webpackJsonpagustingrm.github.io"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var a,i=t(1),r=t.n(i),o=t(12),c=t.n(o),s=t(2),l=t(7),d=r.a.createContext({}),p=t(0),g=String.raw;var m,x=function(n){var e=n.children,t=Object(i.useState)(),r=Object(l.a)(t,2),o=r[0],c=r[1],m=Object(i.useState)(!0),x=Object(l.a)(m,2),j=x[0],h=x[1];return Object(i.useEffect)((function(){fetch("https://idug9s1o.api.sanity.io/v1/graphql/production/default",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:g(a||(a=Object(s.a)(['\n          query {\n            SiteSettings(id: "default") {\n              projects {\n                name\n                image {\n                  asset {\n                    url\n                  }\n                }\n                dynamicImage {\n                  asset {\n                    url\n                  }\n                }\n                technologiesEmployed {\n                  name\n                  image {\n                    asset {\n                      url\n                    }\n                  }\n                }\n                codeLink\n                previewLink\n              }\n              frontend {\n                name\n                image {\n                  asset {\n                    url\n                  }\n                }\n              }\n              backend {\n                name\n                image {\n                  asset {\n                    url\n                  }\n                }\n              }\n              miscellaneous {\n                name\n                image {\n                  asset {\n                    url\n                  }\n                }\n              }\n            }\n          }\n        '])))})}).then((function(n){return n.json()})).then((function(n){c(n.data.SiteSettings),h(!1)}))}),[]),Object(p.jsx)(d.Provider,{value:{data:o,loading:j},children:e})},j=t.p+"static/media/face.d112b283.jpg",h=t.p+"static/media/Spain.1014e328.svg",b=t.p+"static/media/France.9ce5346a.svg",u=t.p+"static/media/Germany.0fce3f51.svg",f=t.p+"static/media/GreatBritain.c92a8361.svg",O=t.p+"static/media/Brazil.3c1a2075.svg",w=t(3),k=w.default.section(m||(m=Object(s.a)(["\n  background-color: rgb(68, 24, 68);\n  display: grid;\n  grid-template-columns: 900px;\n  justify-content: center;\n  grid-column-gap: 20px;\n  color: white;\n  font-weight: 300;\n  padding: 60px 0;\n  h2 {\n    font-size: 45px;\n    color: white;\n    font-weight: 400;\n    text-align: center;\n    margin: 0 0 10px;\n  }\n  h3 {\n    color: white;\n    font-weight: 300;\n    margin: 0 0 10px;\n  }\n  p {\n    margin: 0;\n  }\n  .secondPart {\n    margin-bottom: 10px;\n  }\n  .languages {\n    margin: 0;\n  }\n  .languageContainer {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .languageBadge {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background-color: rgba(170, 170, 170, 0.5);\n    border-radius: 10px;\n    margin: 5px 5px 0 0;\n  }\n\n  .flags {\n    width: 30px;\n    border-radius: 15px;\n    margin-right: 5px;\n  }\n\n  .faceAndText {\n    display: flex;\n  }\n\n  .face {\n    width: 129px;\n    height: 129px;\n    position: relative;\n    border: 2px solid rgb(202, 202, 202);\n    border-radius: 10px;\n    margin: 0px 5px 0 0;\n  }\n\n  @media all and (max-width: 960px) {\n    grid-template-columns: 100%;\n    padding: 75px 5%;\n    .faceAndText {\n      display: inline;\n      .face {\n        float: left;\n      }\n    }\n    h2 {\n      margin-bottom: 15px;\n    }\n    .languageContainer {\n      display: flex;\n      flex-wrap: wrap;\n    }\n  }\n\n  @media all and (max-width: 600px) {\n    .languageContainer {\n      flex-direction: column;\n      margin: 0 20px;\n    }\n  }\n"])));var v,y=function(){return Object(p.jsxs)(k,{id:"about",children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsxs)("div",{className:"faceAndText",children:[Object(p.jsx)("img",{src:j,alt:"Agustin Gramajo Gaitan",loading:"lazy",className:"face"}),Object(p.jsx)("p",{children:"Hello, my name is Agustin and I am originally from Argentina but with Spanish roots so I have both nationalities. I am currently 27 years old and I have a degree in Industrial Engineering from the National University of Tucum\xe1n, Argentina. After finishing my degree, having studied some notions of programming for industrial equipment, I decided to get more into this world. I started doing two diploma courses at the National Technological University of Argentina, which allowed me to learn concepts of HTML5, CSS and Javascript, including some libraries like React and also Node.js with Express."})]}),Object(p.jsxs)("p",{className:"secondPart",children:["From the moment I started studying programming I knew that this was what I wanted to work on during my life, so I dedicated many hours of study per week in order to achieve my goal, helping me with online resources such as www.theodinproject.com, to which I owe much of my knowledge.",Object(p.jsx)("br",{})," At the moment I am finishing a master's degree in project management at the University of Applied Sciences in Biberach, Germany, while I continue learning new programming tools, such as Gatsby, in which I am still improving.",Object(p.jsx)("br",{})," For the above mentioned, I am looking for a job that allows me to keep growing and learning day by day to keep improving myself, meanwhile I eventually do freelance work."]}),Object(p.jsxs)("div",{className:"languages",children:[Object(p.jsx)("h3",{children:"Languages I speak:"}),Object(p.jsxs)("div",{className:"languageContainer",children:[Object(p.jsxs)("div",{className:"languageBadge",children:[Object(p.jsx)("img",{src:h,alt:"Spanish Flag",className:"flags"}),Object(p.jsx)("p",{children:"Spanish: Native"})]}),Object(p.jsxs)("div",{className:"languageBadge",children:[Object(p.jsx)("img",{src:f,alt:"Great Britain Flag",className:"flags"}),Object(p.jsx)("p",{children:"English: Advanced"})]}),Object(p.jsxs)("div",{className:"languageBadge",children:[Object(p.jsx)("img",{src:O,alt:"Brazilian Flag",className:"flags"}),Object(p.jsx)("p",{children:"Portuguese: Advanced"})]}),Object(p.jsxs)("div",{className:"languageBadge",children:[Object(p.jsx)("img",{src:b,alt:"French Flag",className:"flags"}),Object(p.jsx)("p",{children:"French: Upper Intermediate"})]}),Object(p.jsxs)("div",{className:"languageBadge",children:[Object(p.jsx)("img",{src:u,alt:"German Flag",className:"flags"}),Object(p.jsx)("p",{children:"German: Intermediate"})]})]})]})]})},N=t(6),C=t.n(N),I=t.p+"static/media/githubIcon.d0b68cd0.svg",S=t.p+"static/media/linkedinIcon.cbc458aa.svg",z=t.p+"static/media/xingIcon.0ce1938a.svg",B=w.default.section(v||(v=Object(s.a)(["\n  background-color: #161416;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  h2 {\n    color: white;\n    font-weight: 400;\n    font-size: 45px;\n    margin: 10px 0;\n  }\n  a {\n    text-decoration: none;\n    color: orange;\n    font-size: 25px;\n  }\n  p {\n    color: white;\n    text-align: center;\n  }\n\n  .socialNetworks {\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n  }\n\n  .icon {\n    width: 40px;\n    margin: 0 15px;\n    transition: 0.1s;\n  }\n\n  .icon:hover {\n    transition: 0.1s;\n    transform: scale(1.5);\n  }\n"])));var A,G=function(){return Object(p.jsxs)(B,{id:"contact",children:[Object(p.jsx)("h2",{children:"Contact"}),Object(p.jsx)("a",{href:"mailto:agustingramajo@gmail.com",onClick:function(){return C.a.track("E-mail")},children:"agustingramajo@gmail.com"}),Object(p.jsx)("p",{children:"Or contact me through my social networks"}),Object(p.jsxs)("div",{className:"socialNetworks",children:[Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"https://github.com/Agustingrm",target:"_blank",rel:"noreferrer noopener",onClick:function(){return C.a.track("Github")},children:Object(p.jsx)("img",{src:I,alt:"Github Icon",className:"icon"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/agustingrm",target:"_blank",rel:"noreferrer noopener",onClick:function(){return C.a.track("Linkedin")},children:Object(p.jsx)("img",{src:S,alt:"Linkedin Icon",className:"icon"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"https://www.xing.com/profile/AgustinAndres_GramajoGaitan/",target:"_blank",rel:"noreferrer noopener",onClick:function(){return C.a.track("Xing")},children:Object(p.jsx)("img",{src:z,alt:"XingIcon",className:"icon"})})})]})]})},L=t(3).default.section(A||(A=Object(s.a)(["\n  height: 100vh;\n  background-color: #161416;\n  span {\n    color: orange;\n  }\n  h2 {\n    margin: 0;\n    text-align: center;\n    padding-top: 35vh;\n    color: white;\n    font-size: 48px;\n    font-weight: 400;\n  }\n\n  .buttonContainer {\n    display: flex;\n    justify-content: center;\n  }\n\n  .homeButtons {\n    border: 1px #700070 solid;\n    border-radius: 15px;\n    padding: 10px;\n    text-decoration: none;\n    color: white;\n    margin: 5px;\n    font-size: 20px;\n    transition: 0.3s;\n  }\n\n  .homeButtons:hover {\n    background-color: #700070;\n    border: 1px #700070 solid;\n    box-shadow: 0 0 10px 2px #7000706b;\n    transition: 0.3s;\n  }\n\n  @media all and (max-width: 960px) {\n    h2 {\n      padding: 22% 10px 0;\n      font-size: 40px;\n    }\n  }\n\n  @media all and (max-width: 600px) {\n    h2 {\n      padding: 40% 10px 0;\n    }\n  }\n"])));var F,P=function(){return Object(p.jsxs)(L,{id:"home",children:[Object(p.jsxs)("h2",{children:["Hey! I am Agustin ",Object(p.jsx)("br",{})," ",Object(p.jsx)("span",{children:"A Full Stack Developer"})]}),Object(p.jsxs)("div",{className:"buttonContainer",children:[Object(p.jsx)("a",{href:"#about",className:"homeButtons",children:"About me"}),Object(p.jsx)("a",{href:"#projects",className:"homeButtons",children:"Portfolio"})]})]})},E=t.p+"static/media/topLine.3848c0ba.svg",T=t.p+"static/media/middleLine.9b8128b4.svg",_=t.p+"static/media/bottomLine.7d96e1ba.svg",q=t(25),M=w.default.header(F||(F=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #161416;\n  position: fixed;\n  z-index: 10;\n  width: 100%;\n  .menuBack {\n    width: 100%;\n    height: 46px;\n    background-color: #161416;\n    padding: 5px 0;\n    z-index: 15;\n    display: flex;\n    align-items: center;\n  }\n\n  h1 {\n    color: #a700a7;\n    margin: 0 0 0 45px;\n    font-size: 32px;\n    font-weight: 400;\n    z-index: 15;\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n    span {\n      color: white;\n    }\n  }\n\n  ul {\n    display: flex;\n    align-items: center;\n    margin: 0 5% 0 0;\n    li {\n      list-style-type: none;\n      padding: 0 20px;\n      color: white;\n      font-size: 18px;\n      a {\n        text-decoration: none;\n        color: white;\n      }\n      a:hover {\n        color: #a700a7;\n      }\n    }\n  }\n\n  .menuButton {\n    display: none;\n    z-index: 15;\n    cursor: pointer;\n    .topLine,\n    .middleLine,\n    .bottomLine {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      width: 35px;\n    }\n  }\n\n  @media all and (max-width: 960px) {\n    h1 {\n      margin: 0 0 0 15px;\n    }\n    ul {\n      flex-direction: column;\n      background-color: #272427;\n      li {\n        font-size: 24px;\n        margin: 5px 0;\n      }\n    }\n\n    .displayMenu {\n      z-index: 0;\n      display: inherit;\n      position: absolute;\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      top: -225px;\n      right: 0px;\n    }\n    .menuButton {\n      display: block;\n    }\n  }\n\n  @media all and (max-width: 450px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));var J,H=function(){var n=Object(i.useState)(!1),e=Object(l.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)({}),o=Object(l.a)(r,2),c=o[0],s=o[1],d=Object(i.useState)({}),g=Object(l.a)(d,2),m=g[0],x=g[1],j=Object(i.useState)({}),h=Object(l.a)(j,2),b=h[0],u=h[1],f=Object(i.useState)({}),O=Object(l.a)(f,2),w=O[0],k=O[1],v=function(){s({}),u({}),x({}),k({y:50}),setTimeout(console.log("asd"),1e3)};return Object(p.jsxs)(M,{children:[Object(p.jsx)("div",{className:"menuBack",children:Object(p.jsx)("h1",{children:Object(p.jsxs)("a",{href:"#home",children:[Object(p.jsx)("span",{children:"Agustin"})," Gramajo Gaitan"]})})}),Object(p.jsxs)(q.a.ul,{className:"displayMenu",animate:t?w:"",transition:{type:"tween"},children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#home",onClick:v,children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#about",onClick:v,children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#skills",onClick:v,children:"Skills"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#projects",onClick:v,children:"Projects"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#contact",onClick:v,children:"Contact"})})]}),Object(p.jsxs)("div",{className:"menuButton",onClick:function(){t?v():(s({rotate:45,x:-11.25,y:11.25}),u({rotate:45,x:11.25,y:-11.25}),x({rotate:-45}),k({y:281}),a(!0))},children:[Object(p.jsx)(q.a.img,{src:E,alt:"",className:"topLine",animate:c,transition:{type:"tween"}}),Object(p.jsx)(q.a.img,{src:T,alt:"",className:"middleLine",animate:m,transition:{type:"tween"}}),Object(p.jsx)(q.a.img,{src:_,alt:"",className:"bottomLine",animate:b,transition:{type:"tween"}})]})]})},U=w.default.div(J||(J=Object(s.a)(["\n  display: grid;\n  justify-items: center;\n  p {\n    font-size: 10px;\n    margin: 5px 0 15px;\n    color: white;\n    text-align: center;\n    word-wrap: break-word;\n  }\n  .logoContainer {\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    padding: 5px;\n    border-radius: 5px;\n    .logo {\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media (max-width: 960px) {\n    .logoContainer {\n      padding: 5px;\n      width: 30px;\n      height: 30px;\n    }\n    .logo {\n      width: 30px;\n    }\n  }\n"])));var D,R=function(n){var e=n.skill;return Object(i.useContext)(d).loading?Object(p.jsx)(p.Fragment,{}):Object(p.jsxs)(U,{children:[Object(p.jsx)("div",{className:"logoContainer",children:Object(p.jsx)("img",{src:e.image.asset.url,alt:e.name,className:"logo"})}),Object(p.jsx)("p",{className:"projectSkillName",children:e.name})]})},V=w.default.section(D||(D=Object(s.a)(["\n  background-color: rgb(68, 24, 68);\n  padding: 60px 0;\n  h2 {\n    color: white;\n    font-size: 45px;\n    font-weight: 400;\n    text-align: center;\n    margin: 10px 0 30px;\n  }\n\n  .projectGrid {\n    display: grid;\n    grid-template-columns: repeat(2, 400px);\n    gap: 50px;\n    padding-bottom: 50px;\n    justify-content: center;\n  }\n\n  .projectContainer {\n    position: relative;\n    display: grid;\n    grid-template-rows: auto auto 100px auto;\n    background-color: #161416;\n    width: 400px;\n    border-radius: 10px;\n    h3 {\n      margin: 5px 0 10px;\n      font-size: 25px;\n      color: white;\n      font-weight: 300;\n      text-align: center;\n    }\n  }\n\n  .projectImage {\n    position: relative;\n    z-index: 5;\n    width: 400px;\n    border-radius: 10px 10px 0 0;\n    &:hover {\n      opacity: 0;\n    }\n  }\n\n  .overlap {\n    position: absolute;\n    left: 0px;\n    z-index: 1;\n  }\n\n  .projectSkills {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 50px);\n    grid-column-gap: 5px;\n    justify-content: center;\n  }\n\n  .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    a {\n      border: 1px #700070 solid;\n      background-color: rgba(255, 255, 255, 0);\n      border-radius: 15px;\n      padding: 10px;\n      color: white;\n      text-decoration: none;\n      margin: 5px;\n      font-size: 20px;\n      cursor: pointer;\n      margin: 0 30px 20px;\n      transition: 0.3s;\n    }\n    .firstButton:hover {\n      transition: 0.3s;\n      background-color: #700070;\n      border: 1px #700070 solid;\n    }\n    .secondButton {\n      border-color: orange;\n    }\n    .secondButton:hover {\n      transition: 0.3s;\n      color: #161416;\n      background-color: orange;\n    }\n  }\n\n  @media all and (max-width: 960px) {\n    .projectsSectionContainer {\n      height: auto;\n      padding-bottom: 20px;\n    }\n    .projectGrid {\n      margin: 0 20px;\n      grid-template-columns: repeat(auto-fit, 320px);\n      grid-row-gap: 20px;\n    }\n    .projectContainer {\n      width: 100%;\n      grid-template-rows: auto;\n    }\n    .projectImage {\n      width: 100%;\n    }\n    .projectSkills {\n      grid-template-columns: repeat(auto-fit, 45px);\n      justify-content: center;\n      margin-bottom: 10px;\n      grid-column-gap: 0px;\n      .projectSkillName {\n        display: none;\n      }\n    }\n    .projectButtonsContainer {\n      a {\n        font-size: 16px;\n        margin: 0 20px 20px;\n      }\n    }\n  }\n\n  @media all and (max-width: 405px) {\n    h2 {\n      font-size: 40px;\n    }\n    .projectButtonsContainer {\n      a {\n        font-size: 16px;\n        margin: 0 10px 20px;\n      }\n    }\n  }\n"])));var X,K=function(){var n=Object(i.useContext)(d);return n.loading?Object(p.jsx)(p.Fragment,{}):Object(p.jsxs)(V,{id:"projects",children:[Object(p.jsx)("h2",{children:"Featured Projects"}),Object(p.jsx)("div",{className:"projectGrid",children:n.data.projects.map((function(n){return Object(p.jsxs)("div",{className:"projectContainer",children:[Object(p.jsxs)("a",{href:n.previewLink,target:"_blank",rel:"noreferrer noopener",children:[Object(p.jsx)("img",{src:n.image.asset.url,alt:"Project Preview",className:"projectImage"}),Object(p.jsx)("img",{src:n.dynamicImage.asset.url,alt:"Dynamic Preview",className:"projectImage overlap"})]}),Object(p.jsx)("h3",{children:n.name}),Object(p.jsx)("div",{className:"projectSkills",children:n.technologiesEmployed.map((function(n){return Object(p.jsx)(R,{skill:n},"technologiesEmployed".concat(n.name))}))}),Object(p.jsxs)("div",{className:"projectButtonsContainer",children:[Object(p.jsx)("a",{href:n.codeLink,target:"_blank",rel:"noreferrer noopener",className:"firstButton",onClick:function(){return C.a.track("View Code - ".concat(n.name))},children:"View Code"}),Object(p.jsx)("a",{href:n.previewLink,target:"_blank",rel:"noreferrer noopener",className:"secondButton",onClick:function(){return C.a.track("Preview - ".concat(n.name))},children:"Live Preview"})]})]},n.name)}))})]})},Q=w.default.section(X||(X=Object(s.a)(["\n  background-color: #161416;\n  padding: 60px 0;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(3, 280px);\n  grid-column-gap: 3.33%;\n  grid-template-rows: 80px auto;\n  box-sizing: border-box;\n  h2 {\n    color: white;\n    font-weight: 400;\n    font-size: 45px;\n    margin: 10px 0;\n    grid-column: 1 / 4;\n    text-align: center;\n  }\n  h3 {\n    color: white;\n    font-weight: 400;\n    font-size: 20px;\n    text-align: center;\n    margin: 25px 0 15px;\n  }\n\n  .skillContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 80px);\n    background-color: rgba(170, 170, 170, 0.5);\n    border-radius: 5px;\n    justify-content: center;\n    justify-items: center;\n    padding-top: 20px;\n    p {\n      color: white;\n      text-align: center;\n      font-size: 14px;\n      word-wrap: break-word;\n    }\n  }\n\n  @media all and (max-width: 960px) {\n    grid-template-columns: 320px;\n    height: auto;\n    h2 {\n      grid-column: 1 / 2;\n    }\n    .skillContainer {\n      grid-template-columns: repeat(3, 30%);\n      .logoContainer {\n        width: 50px;\n        height: 50px;\n      }\n    }\n  }\n"])));var W,Y=function(){var n=Object(i.useContext)(d);return n.loading?Object(p.jsx)(p.Fragment,{}):Object(p.jsxs)(Q,{id:"skills",children:[Object(p.jsx)("h2",{children:"Skills"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Front-end"}),Object(p.jsx)("div",{className:"skillContainer",children:n.data.frontend.map((function(n){return Object(p.jsx)(R,{skill:n},"frontend".concat(n.name))}))})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Back-end"}),Object(p.jsx)("div",{className:"skillContainer",children:n.data.backend.map((function(n){return Object(p.jsx)(R,{skill:n},"backend".concat(n.name))}))})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Miscellaneous"}),Object(p.jsx)("div",{className:"skillContainer",children:n.data.miscellaneous.map((function(n){return Object(p.jsx)(R,{skill:n},"miscellaneous".concat(n.name))}))})]})]})},Z=Object(w.createGlobalStyle)(W||(W=Object(s.a)(['\n\n// Reset\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\nbody {\n  margin: 0;\n  font-family: "Jost", sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n//Scroll Bar\n\n::-webkit-scrollbar {\n  width: 0px;\n}\n::-webkit-scrollbar-track {\n  background: #aaa;\n}\n::-webkit-scrollbar-thumb {\n  background: #666;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #444;\n}\n'])));var $=function(){return C.a.init("a57fbb1ac5cd6a7d6e3c649f195f6b38",{debug:!1}),C.a.track("New visitor"),Object(p.jsxs)(x,{children:[Object(p.jsx)(Z,{}),Object(p.jsx)(H,{}),Object(p.jsx)(P,{}),Object(p.jsx)(y,{}),Object(p.jsx)(Y,{}),Object(p.jsx)(K,{}),Object(p.jsx)(G,{})]})};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c53eb32f.chunk.js.map