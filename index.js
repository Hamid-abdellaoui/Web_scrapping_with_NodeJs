/********************* required packages ******************/
const request = require("request");
const fs = require("fs");
const { url } = require("inspector");

/********Let's creat an array that contains all the json files' names ********/

Web_Dev = {
    "https://www.programmer-books.com/category/web-development-programming-languages/angular-books/":
        "Angular Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/css3-language/":
        "CSS3 Language",
    "https://www.programmer-books.com/category/web-development-programming-languages/html5-language/":
        "HTML5 Language",
    "https://www.programmer-books.com/category/web-development-programming-languages/jquery-books/":
        "JQuery Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/laravel-books/":
        "Laravel Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/reactjs-books/":
        "Reactjs Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/nodejs-books/":
        "NodeJs Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/sails-js-books/":
        "Sails.js Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/typescript-books/":
        "TypeScript Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/vue-js-books/":
        "Vue.Js Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/symfony-books/":
        "Symfony Books",
    "https://www.programmer-books.com/category/web-development-programming-languages/github-books/":
        "Github Books",
};

json_Files = [];
arr = Object.entries(Web_Dev);
for (let index = 0; index < arr.length; index++) {
    subCategory = arr[index][1];
    str = "Web_Dev" + "_" + subCategory + ".json";
    json_Files.push(str);
}

// console.table(json_Files)

/************* creatDownloadLink :  a function that will create download links and add them into json files *******/

function creatDownloadLink(json_Files) {
    for (let i = 0; i < json_Files.length; i++) {
        file_link = json_Files[i];

        data = JSON.parse(fs.readFileSync(file_link));
        for (let index = 0; index < data.length; index++) {
            str = data[index].link;
            if (str) {
                downloadlink = str.replace(
                    "https://download.programmer-books.com?link=",
                    ""
                );
                downloadlink = downloadlink.replaceAll(" ", "%20");
                data[index].link = downloadlink;
            } else {
                newString = data[index].picture.replace("/i0.wp.com/", "/");
                newString = newString.replace("/i1.wp.com/", "/");
                newString = newString.replace("/i2.wp.com/", "/");
                newString = newString.replace("?resize=100%2C70&ssl=1", "");
                newString = newString.replaceAll(" ", "%20");
                newString = newString.replace("png", "pdf");
                newString = newString.replace("jpg", "pdf");
                newString = newString.replace("jpeg", "pdf");
                downloadlink = newString;
                data[index].link = downloadlink;
                console.log(data[index].title)
            }
        }

        fs.writeFileSync(file_link, JSON.stringify(data, null, 4));
    }
}

/************* LargePicture a function that will create the large image download links and add them into json files *******/

function LargePicture(json_Files) {
    for (let i = 0; i < json_Files.length; i++) {
        file_link = json_Files[i];

        data = JSON.parse(fs.readFileSync(file_link));
        for (let index = 0; index < data.length; index++) {
            newString = data[index].picture.replace("/i0.wp.com/", "/");
            newString = newString.replace("/i1.wp.com/", "/");
            newString = newString.replace("/i2.wp.com/", "/");
            newString = newString.replace("?resize=100%2C70&ssl=1", "");
            newString = newString.replaceAll(" ", "%20");
            downloadlink = newString;
            data[index].large_pic = downloadlink;
        }

        fs.writeFileSync(file_link, JSON.stringify(data, null, 4));
    }
}

LargePicture(json_Files);

creatDownloadLink(json_Files);
