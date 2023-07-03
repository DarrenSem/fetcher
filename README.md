# fetcher
minimal async await wrapper for fetch
```js
var fetcher=async(a,b)=>{let c=await fetch(a,b),d=c.headers.get("content-type");return c.ok?await c[d?.includes("application/json")?"json":"text"]():Error([c.status,c.statusText,a])};
```
