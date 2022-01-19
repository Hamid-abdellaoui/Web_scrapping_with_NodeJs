/********* Required packages ******/
const request = require("request");
const fs = require("fs");
const { url } = require("inspector");
const { array } = require("x-ray/lib/stream");

/*********** initialising xray  ********** */
var Xray = require('x-ray');
var xray = Xray();

/**************** import data and retrieving the keys************** */
const data = require('./AllCategoriesLinks.json');
Categories=Object.keys(data)



/******Function to scrub and save data in separated json files *******/

function scrap_by_category(Category, Category_name) { //Category must be an object and the Category name must be a string
    arr = Object.entries(Category);
    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        myUrl =arr[index][0]
        console.log(myUrl);
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
            .write("Assets/"+Category_name+"/"+String(subCategory)+".json");
    }
    
}


/******************** let's start scraping***************** */
for (let i = 0; i < Categories.length; i++) {
    key= Categories[i]

    // to create the directories
    Category_name = String(key)
    targetDir='Assets/'+Category_name
    fs.mkdirSync(targetDir, { recursive: true }); 

    // Scrap by category
    Category = data[key];
    scrap_by_category(Category,Category_name)
}

