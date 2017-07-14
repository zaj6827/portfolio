'use strict';
var allProjects = [];
//make a js for all the raw data on projects
function Project (/*rawData*/) {
  this.preview = preview;
  this.link = link;
  //this.time= publishedDate;
  //this.projectUrl= projectUrl;
  //this.body= content;

  allProjects.push(this);
}

//new Project(image,src?)

//Making clones from raw data to pick and choose what DOM renders
Article.prototype.toHtml = function() {

  var template = $('#article-template').html();
  var comp = Handlebars.compile(template);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  return comp(this);
};

projectData.sort(function(a, b) {
  /*This will sort the raw data project array, and place the newer projects first */
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(projectObject) {
  /*forEach will iterate through the array for each index, and push all our clones into the project array*/
  allProjects.push(new Project(projectObject));
});

allProjects.forEach(function(article) {
  $(/*ID'd section for where the projects will appear*/).append(/*DOM renders to the article in html?*/article.toHtml());
});
