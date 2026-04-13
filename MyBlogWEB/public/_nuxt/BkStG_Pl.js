import{y as t}from"./CMd909lG.js";const o="/api/auth",s={profile:async()=>t.post(`${o}/profile`),getToken:async(e,a=!1)=>t.post(`${o}/oauth/token`,{code:e,remember:a})};export{s as a};
