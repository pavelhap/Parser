
import parsePost from './parsePost.js';
import {elems} from'./configs.js';


const Post = parsePost(
    'https://cars.av.by/seat/alhambra/101377722',
    elems.avby,
);
Post.then(data=>console.log(data));

// function avby() {


//     unirest.get(
//         'https://cars.av.by/seat/alhambra/101376439')
//         .end(function (response) {

//             const body = response.body;
//             const $ = cheerio.load(body);

//             const title = $('.card__title').text();
//             const image = $('.gallery__frame img').attr('src');
//             const text = $('.card__comment-text').text();
//             const views = $('.card__view').text();
//             const params = $('.card__params').text();
//             const cardDescription = $('.card__description').text();
//             const price = $('.card__price-primary').text();

//             const post = {
//                 title: title,
//                 image: image,
//                 text: text,
//                 views: views,
//                 params: params,
//                 cardDescription: cardDescription,
//                 price: price,
//             }
//             console.log(post);
//         })

// }

// function groznyinform() {
//     unirest.get(
//         'https://grozny-inform.ru/news/culture/142990/')
//         .end(function (response) {
//             const body = response.body;
//             const $ = cheerio.load(body);
//             const title = $('.news h1').text();
//             const image = 'https://grozny-inform.ru' + $(' .imgB img').attr('src');
//             const text = $('.news p').text();

//             const post = {
//                 title: title,
//                 image: image,
//                 text: text,
//             }
//             console.log(post);
//         })

// }



// function magastimes() {


//     unirest.get(
//         'https://magastimes.ru/ingushetiya-na-chetvertoj-pozicii-sredi-regionov-po-rostu-chisla-ulichnyx-prestuplenij-v-strane/')
//         .end(function (response) {

//             const body = response.body;
//             const $ = cheerio.load(body);

//             const title = $('.td-post-title .entry-title').text();
//             const image = $(' .wp-block-image img').attr('src');
//             const text = $('.td-post-content p').text();


//             const post = {
//                 title: title,
//                 image: image,
//                 text: text,

//             }

//             console.log(post);

//         })

// }








