'use strict';
var app = app || {};

(function(module) {
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


  Project.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
    Project.all = rows.map(ele => new Project(ele))
  }



//   var template = $('#article-template').html();
//   var comp = Handlebars.compile(template);

// Project.all.sort(function(a, b) {
//   /*This will sort the raw data project array, and place the newer projects first */
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// Project.all.forEach(function(projectObject) {
//   /*forEach will iterate through the array for each index, and push all our clones into the project array*/
//   Project.all.push(new Project(projectObject));
// });
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
      Project.loadAll(JSON.parse(localStorage.rawData));
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
  module.Project = Project;
})
app();
