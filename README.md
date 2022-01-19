# Web scrapping with NodeJs, Using X-ray

##  <i style="color:lightgreen"> <u> About this repository </i> </u>

Scrapping programming books data and stock it in json files separated and ordere by categories and sub categories
<br>
<br>

##  <i style="color:lightgreen"> <u> More info </i> </u>

The scripts and files in this repo: <br> 

`main_script.js`  : <i> scrap the data and store it under sub-directories into the <b>Assets</b> directory </i> <br>

`process_scraped_data.js` : <i> process the scraped data by reformattinf and adding new insights </i> <br>

`AllCategoriesLinks.json` : this file contains all the URLs where we will scrapp data
<br>
<br>

##  <i style="color:lightgreen"> <u> About data </i> </u>
each json file conatain list of books and each books has 5 keys : <br> 

`"title" `: the title of book  
`"picture" `: small square images of cover  
`"source" ` : the source page (wher we scrapped the data of the book)  
`"link" ` :  a direct link to download book in pdf version  
`"large_pic" ` : the cover image of book (good quality)
<br>
<br>

##  <i style="color:lightgreen"> <u> Wana run it in your computer? </i> </u>
* <i> First make sure you have Node js installed and tap thes commands:</i> 

    >`npm install`

    >`node main_scrap.js`

    >`node process_scraped_data.js`

* <i> Alternatively just run this command:</i> 

    >`npm run start`