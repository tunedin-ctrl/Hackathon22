import SerpApi from 'google-search-results-nodejs';
import fs from 'fs';
import path from 'path';
const fileName = "data.json";
const dataFile = path.resolve(process.cwd()) + `\\${fileName}`;

import express from 'express';
import { url } from 'inspector';
const app = express();

app.use('*', express.json());

// start server
app.listen(3001, () => {
	console.log(`⚡️ Server listening on port 3001`);
});

app.post('/search', function (req, res) {
	const { searchString } = req.body;
	
	const search = new SerpApi.GoogleSearch("398b46ced9ed6a813762b6c29ce6d5593ed51c080a5e95273453978288232951")
	search.json({
		q: searchString, 
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
		res.status(200).json(parseSearchResults(result));
	});
});




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
    searchWeb = searchWeb.slice(0, 5);
    console.log(searchWeb);
	return searchWeb;
}




