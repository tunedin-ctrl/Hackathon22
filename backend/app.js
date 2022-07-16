const fs = require('fs');
const path = require('path');
const fileName = "data.json";
console.log(path.resolve(process.cwd()) + `\\${fileName}`);
//fs.writeFileSync(path.resolve(process.cwd()) + `\\${fileName}`, JSON.stringify({abc:"dsa"}));




const SerpApi = require('google-search-results-nodejs')
const search = new SerpApi.GoogleSearch("398b46ced9ed6a813762b6c29ce6d5593ed51c080a5e95273453978288232951")
search.json({
  q: "JavaScript Throw", 
  location: "Sydney, New South Wales, Australia",
	safe : "active",
	num : "10",
	google_domain: "google.com",
}, (result) => {
	fs.writeFileSync(path.resolve(process.cwd()) + `\\${fileName}`, JSON.stringify(result));
  console.log(result);
});


