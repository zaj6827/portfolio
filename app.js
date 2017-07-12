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
Project.prototype.toHtml = function() {
  var $newProject = $
}
