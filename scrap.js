/********* Required packages ******/

const request = require("request");
const fs = require("fs");
const { url } = require("inspector");
const { array } = require("x-ray/lib/stream");

var Xray = require('x-ray');
var xray = Xray();


Web_Dev = {
    "https://www.programmer-books.com/category/web-development-programming-languages/angular-books/": "Angular Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/css3-language/": "CSS3 Language",
    "https://www.programmer-books.com/category/web-development-programming-languages/html5-language/": "HTML5 Language",
    "https://www.programmer-books.com/category/web-development-programming-languages/jquery-books/": "JQuery Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/laravel-books/": "Laravel Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/reactjs-books/": "Reactjs Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/nodejs-books/": "NodeJs Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/sails-js-books/": "Sails.js Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/typescript-books/": "TypeScript Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/vue-js-books/": "Vue.Js Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/symfony-books/": "Symfony Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/github-books/": "Github Books"
}



/******Function to scrub and save data in separated json files *******/

function scrap_by_category(Category, Category_name) {
    arr = Object.entries(Category);
    for (let index = 0; index < arr.length; index++) {

        myUrl = arr[index][0]
        subCategory = arr[index][1]

        xray(myUrl, ".td-block-span6", [
            {
                title: "a@title",
                link: xray("a@href",".s_pdf_download_link@href"),
                picture: "img@src",
                source: "a@href"
            },
        ])
            .paginate(".page-nav a:last-of-type@href")
            .limit(23)
            .write(Category_name+"_"+ subCategory + ".json");
    }
}


scrap_by_category(Web_Dev,"Web_Dev")