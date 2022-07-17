import fs from 'fs';
import path from 'path';
const fileName = "data.json";
const dataFile = path.resolve(process.cwd()) + `\\${fileName}`;
import SerpApi from 'google-search-results-nodejs';

const search = new SerpApi.GoogleSearch("398b46ced9ed6a813762b6c29ce6d5593ed51c080a5e95273453978288232951")
search.json({
    q: "NodeJs state", 
    location: "Sydney, New South Wales, Australia",
    safe : "active",
    num : "10",
    google_domain: "google.com",
}, (result) => {
    /**
     * Return first 5 results
     * @array {
     *   @link
     *   @title
     *   @snippet
     * }
     */

    console.log(parseSearchResults(result));
});




function parseSearchResults(result) {
    let searchWeb = result.organic_results;
    searchWeb = searchWeb.map(web => {
        return {
            title : web.title,
            link : web.link,
            snippet : web.snippet,
            keyword : web.about_this_result.keywords,
        }
    });
    searchWeb = searchWeb.slice(0, 5);
    console.log(searchWeb);
    fs.writeFileSync(dataFile, JSON.stringify(searchWeb));
}

