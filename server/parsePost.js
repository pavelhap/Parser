import unirest from 'unirest';
import cheerio from 'cheerio';


const log = (i, count, ms) => {
    return new Promise(r =>
        setTimeout(() => {
            console.log(`
    Индекс:'${i};
    Всего записей:${count}
    `);
            r();
        }, ms),
    );

};

export function parsePost(url, elems) {
    return new Promise((resolve, reject) => {

        unirest.get(url).end(({ body, error }) => {
            if (error) reject(error);

            const $ = cheerio.load(body, { decodeEntities: false });

            const domain = url.match(/\/\/(.*?)\//)[1];
            const title = $(elems.title).text().trim();
            // let image = $(elems.image).attr('src');
            let image;
            if (!image) image='https://content.onliner.by/automarket/1056036/600x370/e27671cc4290e59a9e180db5b024be97.jpeg';
            image = image.indexOf('https') >= 0 ? image : `https://${domain}${image}`;
            const text = $(elems.text).text().trim();


            const post = {
                title: title,
                image: image,
                text: text,
                url: url,

            };

            resolve(post);
            console.log(post);

        });

    });
}

export function parseLinks(url, className, maxLinks = 5) {
    return new Promise((resolve, reject) => {
        let links = [];

        unirest.get(url).end(({ body, error }) => {
            if (error) reject(error);
            const $ = cheerio.load(body, { decodeEntities: false });

            const domain = url.match(/\/\/(.*?)\//)[1];
            $(className).each((i, e) => {
                if (i + 1 <= maxLinks)
                    links.push('https://' + domain+ $(e).attr('href'));

            });
            resolve(links);
            console.log(links);
            if (!links.length) reject({ error: 'empty links' });
        });

    });
}
export async function getPosts(links, elems) {
    let posts = [];
    let count = links.length;
    for (let i = 0; i < count; i++) {
        // console.log(links[i]);
        const post = await parsePost(
            links[i],
            elems).then(
                post => post
            );
        posts.push(post);
        // console.log(post);
        await log(i + 1, count, 2000);
    }
    return new Promise((resolve, reject) => {
        if (!posts.length) reject({ empty: 'empty posts' });
        resolve(posts);
    });


}