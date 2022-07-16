const fs = require('fs');
const path = require('path');

const fileName = "data.json";
const dataFile = path.resolve(process.cwd()) + `\\${fileName}`;

const result = JSON.parse(fs.readFileSync(fileName, 'utf8'));

parseSearchResults(result);

function parseSearchResults(result) {
    let searchWeb = result.organic_results;
    searchWeb = searchWeb.map(web => {
        return {
            title : web.title,
            link : web.link,
            snippet : web.snippet,
            rank : web.position
        }
    });
    searchWeb = searchWeb.slice(0, 4);
    console.log(searchWeb);
}