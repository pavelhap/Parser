import unirest from 'unirest';
import cheerio from 'cheerio';
import {elems} from'./configs.js';

const delay = ms => new Promise(r => setTimeout(r, ms));

export function parsePost(url, elems) {
    return new Promise((resolve, reject) => {

        unirest.get(url).end(({ body, error }) => {
            if (error) reject(error);

            const $ = cheerio.load(body);

            const domain = url.match(/\/\/(.*?)\//)[1];
            const title = $(elems.title).text().trim();
            let image = $(elems.image).attr('src');
            image = image.indexOf('htpp') >= 0 ? image : `http://${domain}${image}`;
            const text = $(elems.text).text().trim();


            const post = {
                title: title,
                image: image,
                text: text,

            };

           resolve(post);

        });

    });
}

export function parseLinks(url, className, maxLinks=5){
    return new Promise((resolve, reject) => {
        let links = []; 
      
        unirest.get(url).end(({ body, error}) => {
            if (error) reject (error);
            const $ = cheerio.load(body);
         
            const domain = url.match(/\/\/(.*?)\//)[1];
            $(className).each((i, e) => {
              if( i+1 <= maxLinks)
               links.push('http://'+ domain + $(e).attr('href'));
    
            });
            resolve(links);
            if(!links.length) reject({error:'empty links'}); 
        });    
     
    });
}
export async function fetchLinks(links){
    for (let i=0; i<links.length; i++){
        console.log('saddsa',links[i]);
        const post= await parsePost(
            links[i],
            elems.groznyinform,
        ).then(post => post);
        console.log(post);
        await delay (2000);
    
    }


}