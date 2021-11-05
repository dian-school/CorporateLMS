var get_all_URL = "http://localhost:5000/courses";
var materials_url = "http://localhost:5000/materials";
var quiz_url = "http://localhost:5000/quizzes";
var questions_url = "http://localhost:5000/questions";
var progress_url = "http://localhost:5000/progress"
var section_url = "http://localhost:5000/sections";

var app = new Vue({
    // binds the new Vue object to the HTML element with id="app".
    // import { FormPlugin } from 'bootstrap-vue',
    // Vue.use(FormPlugin),
    el: "#app",
    data: {
        searchStr: "",
        message: "There is a problem retrieving course data, please try again later.",
        statusMessage: "",

        // why quoted? 
        "courses": [],
        searchError: "",

        newCourseName: "",
        newCode: "",
        newDescription: "",
        newPrerequisites: "",
        // courseAdded: false,
        // addCourseError: "",

        "sections":[],
        class_section:"",

        "materials": [],
        "material_chapters": [],
        chapter_completed: 0,

        "quizzes": [],

        "quizquestions":[],
        course_code: 0, 
        class_section: "",
        quiz: 0,
        userans: {},
        answerChecked:false,

        marks: 0,

        "eligibleCourses": [],
        "completedCoursesArr": [],
        "completedCoursesObjectArr": [],
        "inprogressCourses": [],

        learners_eid: 0,        
    },
    methods: {
        getEligibleCourses: function() {
            this.learners_eid = 1    

            const response = 
                fetch(`${get_all_URL}/${this.learners_eid}/eligible`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        this.message = data.message;
                        console.log(this.message);
                    } else {
                        console.log(data.data.eligible_courses);
                        this.eligibleCourses = data.data.eligible_courses;
                        console.log(this.eligibleCourses);
                    }
                })
                .catch(error => {
                    console.log(this.message + error);
                });
        },

        getInprogressCourses: function() {
            this.learners_eid = 1

            const response = 
                fetch(`${get_all_URL}/${this.learners_eid}/inprogress`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        this.message = data.message;
                        console.log(this.message);
                    } else {
                        console.log(data.data);
                        this.inprogressCourses = data.data;
                        console.log(this.inprogressCourses);
                    }
                })
                .catch(error => {
                    console.log(this.message + error);
                });
        },
        
        getCompletedCourses: function() {
            this.learners_eid = 1 

            const response = 
                fetch(`${get_all_URL}/${this.learners_eid}/completed`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        this.message = data.message;
                        console.log(this.message);
                    } else {
                        console.log(data.data.courses_completed);
                        this.completedCourses = data.data.courses_completed;
                        if (this.completedCourses.includes(',')) {
                            this.completedCoursesArr = this.completedCourses.split(', ');
                            console.log(this.completedCoursesArr);
                            
                        } else {
                            
                            this.completedCoursesArr = new Array(this.completedCourses); 
                            console.log(this.completedCoursesArr);
                        }
                        for (var i = 0; i < this.completedCoursesArr.length; i++) {
                
                            console.log(this.completedCoursesArr[i]);
                            const response =
                                fetch(`${get_all_URL}/searchTitle/${this.completedCoursesArr[i]}`)
                                .then(response => response.json())
                                .then(data => {
                                    console.log(response);
                                    if (data.code === 404) {
                                        // no course found in db
                                        this.searchError = data.message;
                                    } else {
                                        this.course = data.data;
                                        console.log(this.course);
                                        
                                        this.completedCoursesObjectArr.push(this.course[0]);
                                        console.log(this.completedCoursesObjectArr);
                                    }
                                })
                                .catch(error => {
                                    // Errors when calling the service; such as network error, 
                                    // service offline, etc
                                    console.log(this.searchError + error);
                                });
            
                                
                        }
                    }
                })
                .catch(error => {
                    console.log(this.message + error);
                });
        },
        getAllCourses: function () {
            const response =
            //sends an HTTP GET request from Vue to the npm api to search for all courses
                fetch(get_all_URL)
                //then() deal with asynchronous tasks
                // .json() returns json object of the result (message)
                .then(response => response.json())
                // print out message from response
                .then(data => {
                    console.log(response);
                    // no courses in db
                    if (data.code === 404) {
                        //print error msg above
                        this.message = data.message;
                    } else {
                        //get course list
                        this.courses = data.data.courses;
                    }
                })
                // handle error - try,catch,error,finally
                .catch(error => {
                    // print out error message 
                    console.log(this.message + error);
                });
        },
        findCourse: function () {   
            const response =
                fetch(`${get_all_URL}/${this.searchStr}`)
                //then() deal with asynchronous tasks
                // .json() returns json object of the result (message)
                .then(response => response.json())
                // print out message from response
                .then(data => {
                    console.log(response);
                    // no course found in db
                    if (data.code === 404) {
                        //print error msg above
                        this.searchError = data.message;
                    } else {
                        //get course list
                        this.courses = data.data.courses;
                        //check for empty string in courses?
                        console.log(this.courses);
                        this.searchError = "";
                    }
                })

                // handle error - try,catch,error,finally
                .catch(error => {
                    // print out error message 
                    console.log(this.searchError + error);
                });
        },
        getMaterials: function () { 
            this.courseCode = 1008;
            this.classSection = "G1"

            console.log(this.courseCode)

            const response =
                fetch(`${materials_url}/${this.classSection}/${this.courseCode}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no course found in db
                        this.searchError = data.message;
                    } else {
                        this.materials = data.data;
                        console.log(this.materials);
                        for (let material of this.materials) {
                            if (!(this.material_chapters.includes(material.material_chapter))) {
                                this.material_chapters.push(material.material_chapter)
                            }
                        }
                        this.material_chapters.sort();
                        console.log(this.material_chapters);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.searchError + error);
                });
        },
        getQuizzes: function () { 
            this.courseCode = 1008;
            this.classSection = "G1"

            console.log(this.courseCode)

            const response =
                fetch(`${quiz_url}/${this.classSection}/${this.courseCode}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no course found in db
                        this.searchError = data.message;
                    } else {
                        this.quizzes = data.data;
                        console.log(this.quizzes);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.searchError + error);
                });
        },
        getQuizQuestions: function () { 
            this.course_code = 1008;
            this.class_section = "G1";
            // this.course_code = localStorage.getItem("course_code");
            // this.class_section = localStorage.getItem("class_section");
            quizid = localStorage.getItem("quizid");

            if (localStorage.getItem('graded')=='F'){
                this.quiz = localStorage.getItem("quiz");
            }
            else{
                this.quiz = 0;
            }

            const response =
                fetch(`${questions_url}/${this.class_section}/${this.course_code}/${quizid}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no course found in db
                        this.searchError = data.message;
                    } else {
                        this.quizquestions = data.data;
                        console.log(this.quizquestions);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, service offline, etc
                    console.log(this.searchError + error);
                });
        },
        storeAnswer: function(questionid, ans){
            this.userans[questionid] = ans
            console.log(this.userans)
        },
        checkAnswer: function() {
            this.answerChecked = true;
            this.course_code = 1008;
            this.class_section = "G1";
            quizid = localStorage.getItem("quizid");

            for (let questionid in this.userans) {
                const response =
                    fetch(`${questions_url}/${this.class_section}/${this.course_code}/${quizid}/${questionid}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no course found in db
                            this.searchError = data.message;
                        } else {
                            this.question = data.data;
                            if (this.userans[questionid] === this.question.answertext) {
                                this.marks = (this.marks + 1)
                            }
                        }
                        console.log(this.marks)
                        localStorage.marks = this.marks
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, service offline, etc
                        console.log(this.searchError + error);
                    });
            }
        },
        getMarks: function() {
            percent = (localStorage.getItem('marks')/Object.keys(this.userans).length)*100
            this.course_code = 1008;
            // sessionStorage.percent = percent
            // alert(percent)
            if (localStorage.getItem('graded')=='F') {
                alert(`Your got ${percent}%. You may click Exit to unlock your next lesson materials!`)
            }
            else{
                if (percent >= 85) {
                    const response =
                    fetch(`${get_all_URL}/${clickedCourse}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            this.message = data.message;
                        } else {
                            this.selected_course = data.data;
                            }
                        })
                        .catch(error => {
                            console.log(this.message + error);
                        });
                }
            }
        },
        storeQuizForm: function(quizid, chapter, graded) {
            localStorage.quizid = quizid
            localStorage.quiz = chapter
            localStorage.graded = graded
        },
        getCompleteChapter: function() {
            learners_eid = 1
            courseCode = 1008;
            classSection = "G1"

            // console.log(this.courseCode)

            const response =
                fetch(`${progress_url}/${learners_eid}/${classSection}/${courseCode}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 200) {
                        this.chapter_completed = data.data.chapter_completed;
                        console.log(this.chapter_completed);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.searchError + error);
                });
        },
        updateCompleteChapter: function() {
            learners_eid = 1
            courseCode = 1008;
            classSection = "G1"
            this.chapter_completed += 1

            console.log(this.chapter_completed)

            let jsonData = JSON.stringify({
                learners_eid: learners_eid,
                course_code: courseCode,
                class_section: classSection,
                chapter_completed: this.chapter_completed
            });

            console.log(jsonData)

            fetch(`${progress_url}/${learners_eid}/${classSection}/${courseCode}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: jsonData
                })
                .then(response => response.json())
                .then(data => {
                    result = data.data;
                    console.log(result);
                    // 3 cases
                    switch (data.code) {
                        case 200:
                            window.location = 'learner-material.html';
                            break;
                        case 404:
                            this.editCourseError = data.message;
                        case 500:
                            this.editCourseError = data.message;
                            break;
                        default:
                            throw `${data.code}: ${data.message}`;
                    }
                })
        },
        getSection: function () {
            // on Vue instance created, load the course list
            this.course_code = localStorage.getItem("course_code");
            console.log(this.course_code)

            const response =
                fetch(`${section_url}/${this.course_code}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no courses in db
                        this.message = data.message;
                    } else {
                        this.sections = data.data;
                        console.log(this.sections);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.message + error);

                });
        },
        storeCourseInfo: function (message) {
            console.log(message);
            localStorage.course_code = message;
        },
        getCourseInfo: function(){
            console.log(localStorage.getItem("course_code"));
            return localStorage.getItem("course_code")
        },
        storeSectionInfo: function (message) {
            console.log(message);
            localStorage.class_section = message;
        },
        getSectionInfo: function(){
            console.log(localStorage.getItem("class_section"));
            return localStorage.getItem("class_section")
        },
        pageRefresh: function () {
            this.getEligibleCourses();
            this.getCompletedCourses();
            this.getInprogressCourses();
            this.getSection();
            this.searchError = "";
            this.searchStr = "";
        },
    },
    created: function () {
        // on Vue instance created, load the course list
        // this.getAllCourses();
        this.getCompleteChapter();
        this.getMaterials();
        this.getQuizzes();
        this.getQuizQuestions();
        this.getAllCourses();
        this.getEligibleCourses();
        this.getCompletedCourses();
        this.getInprogressCourses();
        this.getSection();
    }

});