// fetcher.js -- minimal async await wrapper for fetch

// var fetcher=async(a,b)=>{let c=await fetch(a,b),d=c.headers.get("content-type");return c.ok?await c[d?.includes("application/json")?"json":"text"]():Error([c.status,c.statusText,a])};

let fetcher = async (url, options) => {
  let response = await fetch(url, options);

  let contentType = response.headers.get("content-type");

  if(response.ok) return (
    await response[ contentType?.includes("application/json") ? "json" : "text" ]()
		// ^ above minifies 4 chars less than this...
		// contentType?.includes("application/json") ? await response.json() : await response.text()
  );

  return Error([
    response.status,
    response.statusText,
    url
  ]);

};



let output = v => processErrorOrTextOrJSON(v);

fetcher("https://foo.bar/file.ext")
.then(output)
.catch(output)
);
