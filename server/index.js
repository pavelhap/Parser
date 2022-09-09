
import { parsePost, getPosts, parseLinks }from './parsePost.js';
import { elems } from './configs.js';
import fs from 'fs';

const saveResult = (json) => {
    fs.writeFile('../src/post.json', json, err =>{
        if(err) console.log('not saved');
    });
};


const urlPage ='https://cars.av.by/bmw'; //2-ой источник



parseLinks(urlPage,' .listing__items h3 a',10)
.then(links =>{
getPosts(links, elems.avby)
.then(posts => saveResult(JSON.stringify(posts, 0, 4)))
.catch(e=> console.log(e));
}).catch(e=> console.log(e))


























// parseLinks(urlPage, ' .listing__items h3 a');

// parsePost('https://avto.abw.by/minsk/legkovye/prodazha/12170642', elems.abwby)

// const urlPage ='https://magastimes.ru/category/ingushetiya/';
// const urlPage ='https://grozny-inform.ru/news/culture/'; // это первый он работает


