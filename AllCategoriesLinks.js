Web_development = {
  "https://www.programmer-books.com/category/web-development-programming-languages/angular-books/":
    "Angular",
  "https://www.programmer-books.com/category/web-development-programming-languages/css3-language/":
    "CSS3 Language",
  "https://www.programmer-books.com/category/web-development-programming-languages/html5-language/":
    "HTML5 Language",
  "https://www.programmer-books.com/category/web-development-programming-languages/jquery-books/":
    "JQuery",
  "https://www.programmer-books.com/category/web-development-programming-languages/laravel-books/":
    "Laravel",
  "https://www.programmer-books.com/category/web-development-programming-languages/reactjs-books/":
    "Reactjs",
  "https://www.programmer-books.com/category/web-development-programming-languages/nodejs-books/":
    "NodeJs",
  "https://www.programmer-books.com/category/web-development-programming-languages/sails-js-books/":
    "Sails.js",
  "https://www.programmer-books.com/category/web-development-programming-languages/typescript-books/":
    "TypeScript",
  "https://www.programmer-books.com/category/web-development-programming-languages/vue-js-books/":
    "Vue.Js",
  "https://www.programmer-books.com/category/web-development-programming-languages/symfony-books/":
    "Symfony",
  "https://www.programmer-books.com/category/web-development-programming-languages/github-books/":
    "Github",
};
Software_Development = {
  "https://www.programmer-books.com/category/software-development-languages/python-language/":
    "Python Language",
  "https://www.programmer-books.com/category/software-development-languages/java-language/":
    "Java Language",
  "https://www.programmer-books.com/category/software-development-languages/net-language/":
    ".NET language",
  "https://www.programmer-books.com/category/software-development-languages/c-language/":
    "C Language",
  "https://www.programmer-books.com/category/software-development-languages/c-plus-plus-language/":
    "C++ Language",
  "https://www.programmer-books.com/category/software-development-languages/c-language-software-development-languages/":
    "C# Language",
  "https://www.programmer-books.com/category/software-development-languages/perl/":
    "Perl",
  "https://www.programmer-books.com/category/ruby-language/": "Ruby Language",
  "https://www.programmer-books.com/category/software-development-languages/go-language/":
    " Go Language",
  "https://www.programmer-books.com/category/software-development-languages/r-language/":
    " R Language",
  "https://www.programmer-books.com/category/software-development-languages/erlang/":
    "Erlang",
  "https://www.programmer-books.com/category/scala-books/": "Scala",
};
Mobile_development = {
  "https://www.programmer-books.com/category/mobile-development/android/":
    "Android",
  "https://www.programmer-books.com/category/mobile-development/ios/": "iOS",
  "https://www.programmer-books.com/category/mobile-development/ionic-books/":
    "Ionic",
  "https://www.programmer-books.com/category/mobile-development/kotlin-language/":
    "Kotlin Language",
  "https://www.programmer-books.com/category/swift-language/":
    "Swift Language,",
};
System_Administrations = {
  "https://www.programmer-books.com/category/system-administrations-books/cloud-books/":
    "Cloud",
  "https://www.programmer-books.com/category/system-administrations-books/amazon-web-services-aws-books/":
    "Amazon Web Services (AWS)",
  "https://www.programmer-books.com/category/software-development-languages/go-language/docker/":
    "Docker",
  "https://www.programmer-books.com/category/system-administrations-books/linux-books/":
    "Linux",
  "https://www.programmer-books.com/category/system-administrations-books/windows-administrations-books/":
    "Windows Administrations",
  "https://www.programmer-books.com/category/vmware-vsphere-books/":
    "VMware vSphere",
  "https://www.programmer-books.com/category/system-administrations-books/network-administrations-books/":
    "Network Administrations",
  "https://www.programmer-books.com/category/system-administrations-books/bash-scripting/":
    "Bash Scripting",
};
Data = {
  "Data Science":
    "https://www.programmer-books.com/category/data-science-books/",
  "Machine learning":
    "https://www.programmer-books.com/category/machine-learning-books/",
  "Artificial Intelligence":
    "https://www.programmer-books.com/category/artificial-intelligence-books/",
  "Deep Learning":
    "https://www.programmer-books.com/category/deep-learning-books/",
  "Neural Networks":
    "https://www.programmer-books.com/category/deep-learning-books/neural-networks-books/",
};
Databases_Books = {
  "https://www.programmer-books.com/category/web-development-programming-languages/sql-language/":
    "SQL Language",
  "https://www.programmer-books.com/category/mongodb-books/": "MongoDB",
};
Others = {
  "Game development":
    "https://www.programmer-books.com/category/game-development-books/",
  "Raspberry Pi":
    "https://www.programmer-books.com/category/raspberry-pi-books/",
  Security: "https://www.programmer-books.com/category/security/",
  "Top collections":
    "https://www.programmer-books.com/category/top-books-collections/",
};

// let categories = [Web_development, Software_Development, Mobile_development, System_Administrations, Data, Databases_Books, Others]

// for (let index = 0; index < categories.length; index++) {
// 	 element = categories[index];
// 	 console.table(element)
// };
test = Object.entries(Web_development);
// console.log(test[0][0]);

arr = Object.entries(Web_development);
for (let index = 0; index < arr.length; index++) {
  myUrl = arr[index][0];
  subCategory = arr[index][1];
  console.log(subCategory)
}
