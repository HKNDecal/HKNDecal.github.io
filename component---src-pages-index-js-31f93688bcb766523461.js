/*! For license information please see component---src-pages-index-js-31f93688bcb766523461.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{4184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},3890:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return we},default:function(){return ye}});var n=a(4578),r=a(7294);function i(e){return r.createElement("li",{className:"Navigation-module--li--b277d"},r.createElement("a",{id:e.href,className:"Navigation-module--a--08d5a",href:e.href},r.createElement("div",{className:"Navigation-module--active--dfb64"}),e.children))}function s(){return r.createElement("nav",{className:"Navigation-module--nav--17201"},r.createElement("ul",{className:"Navigation-module--ul--c8998"},r.createElement(i,{href:"#intro"},"Welcome"),r.createElement(i,{href:"#overview"},"Course Overview"),r.createElement(i,{href:"#schedule"},"Class Schedule"),r.createElement(i,{href:"#facilitators"},"Teaching Assistants")))}var o=a(4184),l=a.n(o),c=a(5893);const u=["as","disabled"];function d({tagName:e,disabled:t,href:a,target:n,rel:r,role:i,onClick:s,tabIndex:o=0,type:l}){e||(e=null!=a||null!=n||null!=r?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const u=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(a))&&n.preventDefault(),t?n.stopPropagation():null==s||s(n)};return"a"===e&&(a||(a="#"),t&&(a=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:o,href:a,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?r:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const m=r.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,u);const[i,{tagName:s}]=d(Object.assign({tagName:a,disabled:n},r));return(0,c.jsx)(s,Object.assign({},r,i,{ref:t}))}));m.displayName="Button";const f=["xxl","xl","lg","md","sm","xs"],h=r.createContext({prefixes:{},breakpoints:f,minBreakpoint:"xs"}),{Consumer:p,Provider:b}=h;function g(e,t){const{prefixes:a}=(0,r.useContext)(h);return e||a[t]||t}function v(){const{breakpoints:e}=(0,r.useContext)(h);return e}function w(){const{minBreakpoint:e}=(0,r.useContext)(h);return e}const y=r.forwardRef((({as:e,bsPrefix:t,variant:a,size:n,active:r,className:i,...s},o)=>{const u=g(t,"btn"),[m,{tagName:f}]=d({tagName:e,...s}),h=f;return(0,c.jsx)(h,{...m,...s,ref:o,className:l()(i,u,r&&"active",a&&`${u}-${a}`,n&&`${u}-${n}`,s.href&&s.disabled&&"disabled")})}));y.displayName="Button",y.defaultProps={variant:"primary",active:!1,disabled:!1};var E=y,k=/-(.)/g;const C=e=>{return e[0].toUpperCase()+(t=e,t.replace(k,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function N(e,{displayName:t=C(e),Component:a,defaultProps:n}={}){const i=r.forwardRef((({className:t,bsPrefix:n,as:r=a||"div",...i},s)=>{const o=g(n,e);return(0,c.jsx)(r,{ref:s,className:l()(t,o),...i})}));return i.defaultProps=n,i.displayName=t,i}var S=e=>r.forwardRef(((t,a)=>(0,c.jsx)("div",{...t,ref:a,className:l()(t.className,e)})));const x=r.forwardRef((({bsPrefix:e,className:t,variant:a,as:n="img",...r},i)=>{const s=g(e,"card-img");return(0,c.jsx)(n,{ref:i,className:l()(a?`${s}-${a}`:s,t),...r})}));x.displayName="CardImg";var T=x;const j=r.createContext(null);j.displayName="CardHeaderContext";var $=j;const I=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},i)=>{const s=g(e,"card-header"),o=(0,r.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,c.jsx)($.Provider,{value:o,children:(0,c.jsx)(a,{ref:i,...n,className:l()(t,s)})})}));I.displayName="CardHeader";var P=I;const O=S("h5"),D=S("h6"),Z=N("card-body"),A=N("card-title",{Component:O}),L=N("card-subtitle",{Component:D}),R=N("card-link",{Component:"a"}),W=N("card-text",{Component:"p"}),M=N("card-footer"),_=N("card-img-overlay"),F=r.forwardRef((({bsPrefix:e,className:t,bg:a,text:n,border:r,body:i,children:s,as:o="div",...u},d)=>{const m=g(e,"card");return(0,c.jsx)(o,{ref:d,...u,className:l()(t,m,a&&`bg-${a}`,n&&`text-${n}`,r&&`border-${r}`),children:i?(0,c.jsx)(Z,{children:s}):s})}));F.displayName="Card",F.defaultProps={body:!1};var H=Object.assign(F,{Img:T,Title:A,Subtitle:L,Body:Z,Link:R,Text:W,Header:P,Footer:M,ImgOverlay:_}),B=a(3096),Y=a.n(B);const q="animate__animated",V="undefined"==typeof window;let G;V||(G=window);const U=({offset:e=150,duration:t=1,style:a,className:n,initiallyVisible:i=!1,animateIn:s,afterAnimatedIn:o,animateOut:l,delay:c=0,animatePreScroll:u=!0,afterAnimatedOut:d,scrollableParentSelector:m,animateOnce:f=!1,children:h})=>{const[p,b]=(0,r.useState)(q),[g,v]=(0,r.useState)({animationDuration:`${t}s`,opacity:i?1:0}),w=(0,r.useRef)(null),y=(0,r.useRef)(!1),E=(0,r.useRef)({onScreen:!1,inViewport:!1}),k=(0,r.useRef)(void 0),C=(0,r.useRef)(void 0),N=(0,r.useRef)(G),S=(0,r.useCallback)((e=>{let t=0;for(;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}),[]),x=(0,r.useCallback)((()=>void 0!==N.current.pageYOffset?N.current.pageYOffset:N.current.scrollTop),[N]),T=(0,r.useCallback)((()=>void 0!==N.current.innerHeight?N.current.innerHeight:N.current.clientHeight),[N]),j=(0,r.useCallback)((()=>x()+e),[e,x]),$=(0,r.useCallback)((()=>x()+T()-e),[e,x,T]),I=(0,r.useCallback)((e=>e>=j()&&e<=$()),[j,$]),P=(0,r.useCallback)((e=>e<j()),[j]),O=(0,r.useCallback)((e=>e>$()),[$]),D=(0,r.useCallback)(((e,t)=>I(e)||I(t)||P(e)&&O(t)),[I,P,O]),Z=(0,r.useCallback)((e=>e<x()),[x]),A=(0,r.useCallback)((e=>e>x()+T()),[x,T]),L=(0,r.useCallback)(((e,t)=>!Z(t)&&!A(e)),[Z,A]),R=(0,r.useCallback)((()=>{const e=S(w.current)-S(N.current),t=e+w.current.clientHeight;return{inViewport:D(e,t),onScreen:L(e,t)}}),[S,w,D,L,N]),W=(0,r.useCallback)(((e,t)=>e.inViewport!==t.inViewport||e.onScreen!==t.onScreen),[]),M=(0,r.useCallback)(((e,a)=>{k.current=setTimeout((()=>{y.current=!0,b(`${q} ${e}`),v({animationDuration:`${t}s`}),C.current=setTimeout(a,1e3*t)}),c)}),[y,c,t]),_=(0,r.useCallback)((e=>{M(s,(()=>{f||(v({animationDuration:`${t}s`,opacity:1}),y.current=!1);const a=R();e&&e(a)}))}),[y,s,f,t,M,R]),F=(0,r.useCallback)((e=>{M(l,(()=>{b(q),v({animationDuration:`${t}s`,opacity:0});const a=R();a.inViewport&&s?_(o):y.current=!1,e&&e(a)}))}),[y,M,s,t,o,_,l,R]),H=(0,r.useCallback)((()=>{if(!y.current){const{current:e}=E,a=R();W(e,a)&&(clearTimeout(k.current),a.onScreen?a.inViewport&&s?_(o):a.onScreen&&e.inViewport&&l&&"1"===w.current.style.opacity&&F(d):(b(q),v({animationDuration:`${t}s`,opacity:i?1:0})),E.current=a)}}),[o,d,s,_,l,t,i,W,F,R]),B=(0,r.useMemo)((()=>Y()((()=>{H()}),50)),[H]);return(0,r.useEffect)((()=>{if(!V){const e=m;return N.current=e?document.querySelector(e):window,N.current&&N.current.addEventListener?N.current.addEventListener("scroll",B):console.warn(`Cannot find element by locator: ${m}`),u&&H(),()=>{clearTimeout(k.current),clearTimeout(C.current),window&&window.removeEventListener&&window.removeEventListener("scroll",B)}}}),[H,m,N,B,u]),r.createElement("div",{ref:w,className:n?`${n} ${p}`:p,style:Object.assign({},g,a)},h)},z=[{img:a(1579).Z,name:"Ashwin Ganesh",year:"5th Year EECS MS",about:["Interested in deep learning, computer vision, natural language processing, and training models for robustness/sparsity","Passionate about electronic music, working out, and traveling"]},{img:a(7452).Z,name:"Richel Dhaliwal",year:"3rd Year EECS",about:["Interested in computer architecture and exploring computer science fields in general","Accidentally hit a tennis ball with my hand instead of my racket once during a tennis match and it actually went over the net"]},{img:a(8655).Z,name:"Albert Guo",year:"2nd Year EECS",about:["Interested in quant finance and machine learning","Plays tft and tennis"]},{img:a(7073).Z,name:"Miguel Tenant de La Tour",year:"4th Year EECS",about:["Interested in compilers, programming languages, and anything framework-level","Originally from France, but somehow has a Spanish name"]},{img:a(5567).Z,name:"Anish Dhanashekar",year:"2nd Year EECS",about:["Interested in Robotics, Machine Learning, Computer Architecture, and Chip Design","Enjoys custom manufacturing, from 3D-Printing to CNC Milling"]},{img:a(8886).Z,name:"Aniruddh Khanwale",year:"4th Year EECS + MSE",about:["Interested in renewable energy, energy storage,  sensing, and hardware (especially low-level computing)","Once slept for 25 hours straight because he got 5 hours of sleep the night before"]}],K=[{number:1,title:"Introduction",description:"This week will provide a quick preliminary overview of what the course will be about, distribution of course materials, as well as an introduction to the course staff. If available, we will be inviting Professor Anant Sahai, our faculty sponsor, to come and speak to interested students about our class.",image:a(5161).Z,slides:""},{number:2,title:"Human-Computer Interaction",description:"Human-computer interaction is the subfield of computer science that focuses on the interactions that users have with computers. This class will mainly be about the User Interfaces which is what the user will directly interact with. We will also introduce the iterative design cycle, which is one of the primary methods for the prototyping and development of user interfaces.",lab:"Designing an App User Interface",image:a(5161).Z,slides:""},{number:3,title:"Video and Image Processing",description:"YouTube is one of the most iconic pieces of the modern internet. In this course, we will dissect the process of requesting a video, and playing it in the browser. This session will focus heavily on the mechanics of audio and graphics, as well as their representations. In addition, we will perform a simple overview of compression using various methods, such as Fourier transforms and wavelet compression.",lab:"Audio, video, and networking demonstration",image:a(5161).Z,slides:""},{number:4,title:"Machine Learning",description:"Machine Learning is the science of making software “learn.” We will introduce the big ideas behind machine learning and discuss how YouTube uses them to figure out which videos its users are more likely to watch. Along the way, we’ll gain some hands-on experience at designing and running your own learning algorithms.",lab:"YouTube Recommender System and Machine Learning Techniques",image:a(5161).Z,slides:""},{number:5,title:"Security and Cryptography",description:"While developers would like to write code that just does what it’s supposed to, the reality is that attackers have incentives to exploit loopholes in applications. This week we examine defenses against these attacks, including code security, network security, and web security. We will also study the tool that enables many of these defenses: cryptography, the study of algorithms that achieve certain guarantees in the presence of adversaries.",lab:"Network and Web Security",image:a(5161).Z,slides:""},{number:6,title:"Computer Theory and Research",description:"Computer theory is the branch of computer science related to the mathematical study of computing. In this class we will cover three main areas of algorithms, complexity, and computability. We will cover several of the fundamental problems/ideas in computer theory such as the halting problem, P vs. NP, and the Church-Turing Thesis.",lab:"Computer Theory Puzzle Set",image:a(5161).Z,slides:""},{number:7,title:"Systems",description:"Applications run by writing code, but that code doesn’t automagically run on the physical computer. This session will cover Operating Systems, Compilers, and Binary -- the translation and execution of code from human-readable format to computer-readable format. This session will also cover hardware device interfaces, such as network sockets and drivers",lab:"Simple Compiler for Circuits",image:a(5161).Z,slides:""},{number:8,title:"How to Build a Computer",description:"Applications run on top of hardware, which is typically a set of wires and gates. In this session, we will examine digital logic, memory units, and the hardware-software interface. We will also examine digital circuit design, clocking, and hardware-peripheral interfaces.",lab:"Logisim CPU",image:a(5161).Z,slides:""},{number:9,title:"Electronic and Photonic Devices",description:"Transistors are the building blocks of computers, but what exactly are transistors? This session will describe the physics behind how transistors work, in a qualitative, simple way. We will build up from the ideas of bonding in silicon to different charge carriers in semiconductors, MOSFETs, and LEDs. We will also explore power systems and renewable energy.",lab:"Visual simulations of MOSFETs (tentatively)",image:a(5161).Z,slides:""},{number:10,title:"Embedded Systems & Robotics",description:"Personal computers aren't the only kind of devices powering our modern world. In this session, we will look deeper into other applications such as embedded systems, IoT devices, and robotics.",lab:"TBD",image:a(5161).Z,slides:""},{number:11,title:"Conclusion/Ethics",description:"The final session will provide an overarching unification of the topics covered in the course, with a review of how an application travels from the user interface to the wires. We will also cover non-technical aspects of EECS, such as ethics, morality, and policy.",lab:"Discussion of ethics in EECS",image:a(5161).Z,slides:""}],J=[r.createElement(r.Fragment,null,r.createElement("h3",null,"Key Learning Outcomes"),r.createElement("p",null,"This course will take students on a journey through the fields of EE and CS starting from the browser request to the underlying circuitry and physics in computers. Each week will move lower on the software/hardware stack, with a deconstructive approach to software and a constructive approach towards hardware. After taking this course, students will have a fair understanding of every level of the EECS stack.")),r.createElement(r.Fragment,null,r.createElement("h3",null,"Methods of Instruction"),r.createElement("p",null,"Sessions will consist of 2 hours of instruction, including a mix of interactive labs/demonstrations and lecture. In addition, staff will plan trips to various research labs or host talks by current researchers in applicable fields to provide deeper insight into various areas of research. The syllabus itself covers 11 weeks of instruction, including guest lectures by either faculty or a current researcher, lab tours, and other activities!")),r.createElement(r.Fragment,null,r.createElement("h3",null,"Assignments and Grading"),r.createElement("p",null,"To pass the course a total of 19 points must be obtained by each student. Attendance and weekly submissions are worth 1 point each (there are 11 classes and 10 weekly assignments). There will also be a field trip and a final project, both of which are mandatory. For students who are unable to attend the field trip, there will be an alternative assignment.")),r.createElement(r.Fragment,null,r.createElement("h3",null,"How to Enroll"),r.createElement("p",null,"Fill out our short interest form:"," ",r.createElement("a",{href:"https://hkn.mu/decalapp"},"https://hkn.mu/decalapp")," by"," ",r.createElement("span",{style:{fontWeight:"bold"}},"Friday 01/27"),". Please apply as soon as possible; applications will be processed on a first-come-first-serve basis. Please make sure to attend the first lecture, as we will be handling course codes based on attendance. If you cannot make the first class, send us an email."))],Q=!0;var X="Sections-module--button--cf01f",ee="Sections-module--image--4cfbe",te="Sections-module--inner--7ff4b",ae="Sections-module--section--f81ca";const ne=r.forwardRef((({bsPrefix:e,fluid:t,as:a="div",className:n,...r},i)=>{const s=g(e,"container"),o="string"==typeof t?`-${t}`:"-fluid";return(0,c.jsx)(a,{ref:i,...r,className:l()(n,t?`${s}${o}`:s)})}));ne.displayName="Container",ne.defaultProps={fluid:!1};var re=ne;const ie=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},r)=>{const i=g(e,"row"),s=v(),o=w(),u=`${i}-cols`,d=[];return s.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==o?`-${e}`:"";null!=a&&d.push(`${u}${r}-${a}`)})),(0,c.jsx)(a,{ref:r,...n,className:l()(t,i,...d)})}));ie.displayName="Row";var se=ie;const oe=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:a,...n}){t=g(t,"col");const r=v(),i=w(),s=[],o=[];return r.forEach((e=>{const a=n[e];let r,l,c;delete n[e],"object"==typeof a&&null!=a?({span:r,offset:l,order:c}=a):r=a;const u=e!==i?`-${e}`:"";r&&s.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=c&&o.push(`order${u}-${c}`),null!=l&&o.push(`offset${u}-${l}`)})),[{...n,className:l()(a,...s,...o)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,c.jsx)(r,{...n,ref:t,className:l()(a,!s.length&&i)})}));oe.displayName="Col";var le=oe;function ce(){return r.createElement("footer",{className:"Footer-module--footer--afd90"},r.createElement(re,null,r.createElement(se,null,r.createElement(le,{sm:12,md:6},r.createElement("h6",null,"Some Advice"),r.createElement("p",null,"Professor Sahai notes in his unofficial advice page 1 , “Set yourself a goal of understanding some system from top to bottom before you graduate. For example, you might want to know how the entire process of downloading and listening to an MP3 or OGG file works. This can be a good tool for integrating knowledge across different courses.” Since taking every EECS course may be infeasible and inefficient under the current system, we would like to provide a cocktail-party level of understanding so students can make educated decisions about which classes to explore. Even if you never take an EECS class after this one, this DeCal will be worthwhile if you enjoy learning about a variety of topics.")),r.createElement(le,{xs:6,md:3},r.createElement("h6",null,"Email"),r.createElement("p",null,"Decal: decal[at]hkn.eecs.berkeley.edu"),r.createElement("p",null,"General: hkn[at]hkn.eecs.berkeley.edu")),r.createElement(le,{xs:6,md:3},r.createElement("h6",null,"Our Offices"),r.createElement("p",null,"290 Cory Hall | (510) 642-7346"),r.createElement("p",null,"345 Soda Hall | (510) 642-9952")))))}var ue=a.p+"static/decal-logo-bbb1652ac9370634d8fe0a7f0c5331bd.png";function de(){return r.createElement("div",{className:"Sections-module--wrapper--bc583"},r.createElement(me,null),r.createElement(he,null),r.createElement(be,null),r.createElement(ve,null),r.createElement(ce,null))}function me(){return r.createElement("section",{id:"intro",className:"Sections-module--intro--b2b53"},r.createElement("div",{className:te},r.createElement("div",{className:"Sections-module--introCard--aa8c4"},r.createElement("div",{className:"Sections-module--introContent--ca37b"},r.createElement("span",{className:"Sections-module--introLogo--77967"},r.createElement("img",{className:ee,src:ue,alt:"Logo"})),r.createElement("div",null,r.createElement("h1",null,"Going Down the EECS Stack"),r.createElement("p",null,"With so many EE and CS classes at Berkeley, it is important that students know which classes best match their personal and career interests. This DeCal is offered to provide students with a broad survey of topics within EECS and a general sense of the courses and subfields within the major. We aim to cover each topic in totality, so no EE or CS experience is required."),r.createElement(E,{variant:"primary",className:X,href:"https://hkn.mu/decalapp"},"Enroll Now!"),r.createElement(E,{variant:"secondary",className:X,href:"#overview"},"Learn More"))))))}function fe(e){return r.createElement(U,{animateIn:"animate__animated animate__fadeIn",animateOnce:Q},e.children)}function he(){return r.createElement("section",{id:"overview",className:ae},r.createElement("section",{className:te},J.map(((e,t)=>r.createElement(fe,{key:t},e)))))}function pe(e){var t;return r.createElement(U,{animateIn:"animate__animated animate__fadeInUp",animateOnce:Q},r.createElement("div",{className:"Sections-module--classCard--0a5dc"},r.createElement("span",{className:"Sections-module--classCardThumbnail--87507"},r.createElement("div",{className:"Sections-module--classCardImageContainer--bdc62"},r.createElement("div",{className:"Sections-module--classCardTText--7d600"}," ",e.week.title," "),r.createElement("img",{className:ee,alt:"DeCal Lecture for Week "+e.week.number,src:e.week.image}))),r.createElement("span",{className:"Sections-module--classCardContent--8637b"},r.createElement("h4",{className:"Sections-module--classCardTitle--e68f1"},e.week.title," - Week ",e.week.number),null!==(t=e.week.slides)&&void 0!==t?t:r.createElement(E,{target:"_blank",href:e.week.slides,variant:"info",size:"sm"},"Slides"),r.createElement("div",{className:"Sections-module--classCardDescription--4b957"},e.week.description))))}function be(){return r.createElement("section",{id:"schedule",className:ae},r.createElement("section",{className:te},K.map(((e,t)=>r.createElement(pe,{key:t,week:e})))))}function ge(e){return r.createElement(U,{style:{display:"inline-block",verticalAlign:"top"},animateIn:"animate__animated animate__fadeIn",animateOnce:Q},r.createElement(H,{className:"Sections-module--instructorCard--af284"},r.createElement(H.Img,{variant:"top",src:e.ta.img}),r.createElement(H.Body,null,r.createElement(H.Title,null,e.ta.name),r.createElement(H.Subtitle,{className:"mb-2 text-muted"},e.ta.year),r.createElement("ul",{className:"Sections-module--instructorList--3ac24"},e.ta.about.map(((e,t)=>r.createElement("li",{key:t},e)))))))}function ve(){return r.createElement("section",{id:"facilitators",className:ae},r.createElement("div",{className:te},r.createElement("h2",null,"Facilitators"),r.createElement("p",null,"Meet the people who will be interacting with you throughout the semester!"),r.createElement("div",null,z.sort(((e,t)=>e.name.localeCompare(t.name))).map(((e,t)=>r.createElement(ge,{key:t,ta:e}))))))}const we=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"Going Down the EECS Stack"));let ye=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleScroll=e=>{let t=window.scrollY,a=document.getElementById("#intro").childNodes[0].className;document.querySelectorAll("nav ul li a").forEach((e=>{let n=document.querySelector(e.hash);n.offsetTop<=t&&n.offsetTop+n.offsetHeight>t?e.classList.add(a):e.classList.remove(a)}))},t}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){document.removeEventListener("scroll",this.handleScroll)},a.render=function(){return r.createElement("div",null,r.createElement("div",{className:"index-module--nav--732dd"},r.createElement(s,null)),r.createElement("div",{className:"index-module--bod--4f638"},r.createElement(de,null)))},t}(r.Component)},3096:function(e,t,a){var n="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=c||u||Function("return this")(),m=Object.prototype.toString,f=Math.max,h=Math.min,p=function(){return d.Date.now()};function b(e,t,a){var r,i,s,o,l,c,u=0,d=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var a=r,n=i;return r=i=void 0,u=t,o=e.apply(n,a)}function y(e){return u=e,l=setTimeout(k,t),d?w(e):o}function E(e){var a=e-c;return void 0===c||a>=t||a<0||m&&e-u>=s}function k(){var e=p();if(E(e))return C(e);l=setTimeout(k,function(e){var a=t-(e-c);return m?h(a,s-(e-u)):a}(e))}function C(e){return l=void 0,b&&r?w(e):(r=i=void 0,o)}function N(){var e=p(),a=E(e);if(r=arguments,i=this,c=e,a){if(void 0===l)return y(c);if(m)return l=setTimeout(k,t),w(c)}return void 0===l&&(l=setTimeout(k,t)),o}return t=v(t)||0,g(a)&&(d=!!a.leading,s=(m="maxWait"in a)?f(v(a.maxWait)||0,t):s,b="trailing"in a?!!a.trailing:b),N.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=i=l=void 0},N.flush=function(){return void 0===l?o:C(p())},N}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=s.test(e);return a||o.test(e)?l(e.slice(2),a?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,a){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return g(a)&&(r="leading"in a?!!a.leading:r,i="trailing"in a?!!a.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})}},5161:function(e,t,a){"use strict";t.Z=a.p+"static/background-eb0b0d3d8cfff34fa11ac5b641b1b236.jpg"},8655:function(e,t,a){"use strict";t.Z=a.p+"static/albert-guo-e7bba8c35887ca3f5765be204c9bf37e.jpg"},8886:function(e,t,a){"use strict";t.Z=a.p+"static/aniruddh-khanwale-cef99f4eb87fce376542e82ebc7826df.jpg"},5567:function(e,t,a){"use strict";t.Z=a.p+"static/anish-dhanashekar-b802ba7603cf8e9f68d676ebfeac5e20.jpg"},1579:function(e,t,a){"use strict";t.Z=a.p+"static/ashwin-ganesh-483c1ae4c296cfc32df459c184100da9.jpg"},7073:function(e,t,a){"use strict";t.Z=a.p+"static/miguel-tenantdelatour-c91b9ed2a207f081075e79dc019fe5ab.jpg"},7452:function(e,t,a){"use strict";t.Z=a.p+"static/richel-dhaliwal-dac90336274475e8e3f03429c1b1e971.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-31f93688bcb766523461.js.map