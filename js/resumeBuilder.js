/********************************BIO********************************/
var bio = {
  "name" : "Jerry Luo",
  "role" : "WEB DEVELOPER",
  "contacts" : {
    "mobile": "469-213-9932",
    "email": "jerryluo1989@gmail.com",
    "github": "jerryluo1989.github.io/portfolio/",
    "location": "Dallas, Tx"
  },
  "biopic" : "images/Self.jpg",
  "welcomeMessage" : "Hello!",
  "skills" : ["HTML","CSS","jQuery","javascript","Python","Java"],
  "aboutme": "Highly motivated MS engineering graduate, with knowledge of Object Oriented Programing and WEB development. Fast learner. Good interpersonal communication skill. Excellent teamwork."
};


//bio display function
bio.display=function(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
  var aboutme = HTMLaboutMe.replace("%data%",bio.aboutme);

  $("#header").prepend(formattedName);
  $(".bio").append(formattedRole);
  // $(".bio").add('<a href="https://www.visualcv.com/guojing-luo?access=2S9JxZm107L">Download Resume</a>')
  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

  //display at section II
  $(".aboutme-entry").prepend(aboutme);
  bio.skills.forEach(function(skill,index){
    var skillid = "demo"+""+index; //demo0, demo1, demo2 ... demo5
    var skillbar = HTMLskilldemo.replace("#",skillid); //'<div id="#"></div>'
    var skillname = HTMLskillname.replace("%data%",skill); //<h4>%data%</h4>
    var el = $('<div class="col-sm-2"></div>').addClass(skillid).append(skillbar,skillname);// Be sure to use the $ at the front
    $(".aboutme-entry").append(el);
  });
};

bio.display();


/********************************education********************************/
var education = {
  "schools": [
    {
      "name": "The University of Texas at Dallas",
      "location": "Richardson, Tx",
      "degree": "Master of Science",
      "majors": ["Electrical Engineering"],
      "dates": "2012-2014",
      "pic": "images/utd1.png",
      "url": "http://www.utdallas.edu"
    },
    {
      "name": "Chongqing University",
      "location": "Chongqing, China",
      "degree": "Bachelor of Science",
      "majors": ["Automation"],
      "dates": "2008-2012",
      "pic": "images/cqu.png",
      "url": "http://www.cqu.edu.cn/"
    }
  ],
  "onlineCourses":[
    {
      "title": "Front-End Developer Nanodegree",
      "school": "Udacity",
      "date": "2016-present",
      "url": "http://www.udacity.com",
      "onlineaddress":"udacity.com",
      "pic": "images/Udacity_logo.png"
    }]
};


//DISPLAY EDUCATION
education.display = function() {
  $("#education").append(HTMLschoolStart);

  // education online course
  education.onlineCourses.forEach(function(course,index){
    var onlineschoolid = "online"+""+index;
    var onlineschoolname = HTMLonlineName.replace("#",course.url).replace("%data%",course.school);
    var onlinelink = HTMLonlineURL.replace("%data%",course.onlineaddress);
    var onlinetitle = HTMLonlineDegree.replace("%data%",course.title);
    var oninedates = HTMLonlineDates.replace("%data%",course.date);
    var oninelogo = HTMLonineLogo.replace("%data%",course.pic);
    var el = $("<div class='col-sm-4'></div>").addClass(onlineschoolid).append(oninelogo,onlineschoolname,oninedates,onlinelink,onlinetitle,HTMLonlineClasses,"<hr>");
    $(".education-entry").append(el);
  });

  //education schools
  education.schools.forEach(function(school, index){
    var schoolid = "school"+""+index;
    var schoolname = HTMLschoolName.replace("#",school.url).replace("%data%",school.name);
    var schoollocation = HTMLschoolLocation.replace("%data%",school.location);
    var degree = HTMLschoolDegree.replace("%data%",school.degree);
    var major = HTMLschoolMajor.replace("%data%",school.majors);
    var dates = HTMLschoolDates.replace("%data%",school.dates);
    var logo = HTMLschoolLogo.replace("%data%",school.pic);
    var el = $("<div class='col-sm-4'></div>").addClass(schoolid).append(logo,schoolname,dates,schoollocation,degree,major,"<hr>");
    $(".education-entry").append(el);
  });
};

education.display();


/********************************work********************************/
var work = {
  "jobs":[{
    "title": "Application Enigneer",
    "employer": "Enseo",
    "dates": "2014-present",
    "location": "Richardson, Tx",
    "description": "Successfully directing installations of Enseo's in-room entertainment system for the world’s largest hotel groups including Marriott and Hilton.Coordinating plans, scheduling and technical support of over 30 hotels with 6,700+ guest rooms.Professionally communicating to Project Manger and Engineers on technical specifications.",
    "description1": "Assisting with new product development including hardware/software testing, system analysis and product issue assessment.Performing well under pressure, quick learning as a technical resource. Daily use of Ubuntu, Terminal commands, SSH, XML-RPC and JSON."
  }]

};

work.jobs[0].duty = [
  "<h4>Hotel Installations Coordination/Management</h4>",
  "<h4>Systems Integration testing and support</h4>"
];

//WORK display
work.display = function(){
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry").append("<div class='col-sm-4 box1'></div>");
  $(".work-entry").append("<div class='col-sm-4 box2'></div>");
  $(".work-entry").append("<div class='col-sm-4 box3'></div>");
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[0].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[0].title);
  var formattedDate = HTMLworkDates.replace("%data%",work.jobs[0].dates);
  var formattedLogo = HTMLworkLogo.replace("%data%","images/worklogo.png");
  var location = HTMLworkLocation.replace("%data%",work.jobs[0].location);
  var formattedDescription0 = HTMLworkDescription.replace("%data%",work.jobs[0].description);
  var formattedDescription1 = HTMLworkDescription.replace("%data%",work.jobs[0].description1);

  $(".box1").append(formattedLogo);
  $(".box1").append(formattedEmployer,formattedTitle,formattedDate,location);
  $(".box2").append(work.jobs[0].duty[0],formattedDescription0);
  $(".box3").append(work.jobs[0].duty[1],formattedDescription1);
};

work.display();


/******************************** PROJ ********************************/
var projects = {
  "projects":
  [
    {
      "title": "Personal Profolio",
      "description": "Developed a personal portfolio page",
      "show": "postes to github.io",
      "dates": "Mar.2016",
      "images":["images/Hello-md.jpg"]
    }]
};

//PROJ display
projects.display = function() {
  $("#projects").append(HTMLprojectStart);

  projects.projects.forEach(function(project,index){
    var projid = "proj"+""+index;
    var formattedTitle = HTMLprojectTitle.replace("#","http://jerryluo1989.github.io/portfolio").replace("%data%", project.title);
    var formattedTime = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
    var formattedImg = HTMLprojectImage.replace("%data%",project.images[index]);
    var el = $("<div class='col-sm-3'></div>").addClass(projid).append(formattedImg, formattedTitle, formattedTime);
    $(".project-entry:last").append(el);
  });

//upcoming projects, not done yet
  var formattedTitle1 = HTMLprojectTitle.replace("%data%", "Acrade Game");
  var formattedTitle2 = HTMLprojectTitle.replace("%data%", "Neighborhood Map");
  var formattedTitle3 = HTMLprojectTitle.replace("%data%", "More Projects");
  var formattedImg1 = HTMLprojectImage.replace("%data%","images/game.png");
  var formattedImg2 = HTMLprojectImage.replace("%data%","images/map-md.png");
  var formattedImg3 = HTMLprojectImage.replace("%data%","images/getting-stuff-done-md.png");
  $(".project-entry:last").append("<div class='col-sm-3 proj1'></div>");
  $(".project-entry:last").append("<div class='col-sm-3 proj2'></div>");
  $(".project-entry:last").append("<div class='col-sm-3 proj3'></div>");
  $(".proj1").append(formattedImg1,formattedTitle1,"<p>Coming Soon</p>");
  $(".proj2").append(formattedImg2,formattedTitle2,"<p>Coming Soon</p>");
  $(".proj3").append(formattedImg3,formattedTitle3,"<p>Coming Soon</p>");
};
 projects.display();


//internationalized name
// function inName(name){
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
//   return (name[1] + " " + name[0]);
// }

// show the button on the screen. How to show the result, see helper.css, $name.html(iName);
// $("#main").append(internationalizeButton);

// show the map
$("#mapDiv").append(googleMap);


/*
The resume includes an interactive map. Do the following to add it.
In resumeBuilder.js, append the googleMap string to <div id=”mapDiv”>.
In index.html, uncomment the Google script element: <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>
In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
*/
