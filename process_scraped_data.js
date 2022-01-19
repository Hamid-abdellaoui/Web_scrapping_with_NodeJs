/********************* required packages ******************/
const request = require("request");
const fs = require("fs");
const { url } = require("inspector");

/**************** import data and retrieving the keys and entries************** */
const data = require('./AllCategoriesLinks.json');
Categories=Object.keys(data)


/********Let's creat an array that contains all the json files' paths 
 *(we will need them later in creatDownloadLink() and LargePicture() functions) ********/

json_Files = [];

for (let i = 0; i < Categories.length; i++) {
    key= Categories[i]
    Category = data[key]
    Category_name = String(key)
    arr = Object.entries(Category);
    for (let index = 0; index < arr.length; index++) {
        subCategory = arr[index][1];
        str = "Assets/"+Category_name+"/"+String(subCategory)+".json";
        json_Files.push(str);
    }
}

// console.table(json_Files)


/************* CreatDownloadLink :  a function that will create download links and add them into json files *******/

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

/************* LargePicture: a function that will create the large image download links and add them into json files *******/

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
