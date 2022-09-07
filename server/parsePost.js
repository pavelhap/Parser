import unirest from 'unirest';
import cheerio from 'cheerio';

function parsePost(url, elems) {
    return new Promise((resolve, reject) => {

        unirest.get(url).end(({ body }) => {

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

        })

    });
}

export default parsePost;