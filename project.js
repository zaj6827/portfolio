'use strict';
// TODO: Wrap the entire project in an IIFE for ease of use
//make a js for all the raw data on projects
//make a js for all the raw data on projects
function Project (rawDataObj) {
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author= rawDataObj.author;
  this.authorUrl= rawDataObj.authorUrl;
  this.time = rawDataObj.publishedOn;
  this.body= rawDataObj.body;
  this.all.push(this);
}
//new Project(image,src?)
Project.all = [];

// TODO: Change this functionality to use the .map that is used in Lab 10
rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  Project.all.push(new Project(articleObject));
});
//
// allProjects.forEach(function(article){
//   $('#articles').append(article.toHtml());
// });
// //Making clones from raw data to pick and choose what DOM renders
// Project.prototype.toHtml = function() {
//
//   var template = $('#article-template').html();
//   var comp = Handlebars.compile(template);
//
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//
//   return comp(this);
// };

Project.all.sort(function(a, b) {
  /*This will sort the raw data project array, and place the newer projects first */
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

Project.all.forEach(function(projectObject) {
  /*forEach will iterate through the array for each index, and push all our clones into the project array*/
  Project.all.push(new Project(projectObject));
});
//
// allProjects.forEach(function(article) {
//   $(/*ID'd section for where the projects will appear*/).append(/*DOM renders to the article in html?*/article.toHtml());
// });


Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData)); //TODO: What do we pass in to loadAll()?
    /*Init function here*/
  } else {
    $.getJSON('rawData.json')
      .then(function(data){
        localStorage.setItem('rawData', JSON.stringify(data))
        console.log('SUCCESS!' + JSON.stringify(data))
        Project.loadAll(JSON.parse(localStorage.rawData))
        /*Init function here*/
      }, function (err) {
        console.error('Error Has Occured' + err)
      })
  }
}

// TODO: add a random .reduce in and display the results in your .html footer
