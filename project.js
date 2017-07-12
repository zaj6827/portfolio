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
  /*Cloning the template */
  var $newProject = $('section.template').clone();
  /*Removing The template class from clones so they aren't hidden */
  $newProject.removeClass().addClass('domProject');
  /*If not published yet, give it a different class so it doesn't DOM Render*/
  if (!this.publishedOn) $newProject.addClass('draft');
  /*A fancy way to tell the user how long ago this Project was completed*/
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
}

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
