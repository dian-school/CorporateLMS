var get_all_URL = "http://localhost:5000/courses";
var materials_url = "http://localhost:5000/materials";
var quiz_url = "http://localhost:5000/quizzes";
var questions_url = "http://localhost:5000/questions";
var progress_url = "http://localhost:5000/progress"


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

        "materials": [],
        "material_chapters": [],
        chapter_completed: 0,

        "quizzes": [],
        "quiz": [],
        
        "quizquestions":[],
        course_code: 0, 
        class_section: "",
        quizid: 0,
        // date: moment(60 * 10 * 1000),

        marks: 85 //hardcoded - should be updated using checkanswer() later
    },
    // computed: {
    //     time: function(){
    //       return this.date.format('mm:ss');
    //     }
    // },
    // mounted: function(){   
    //     setInterval(() => {
    //         this.date = moment(this.date.subtract(1, 'seconds'))
    //     }, 1000);
    // },
    methods: {
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
            this.course_code = 1008;
            this.class_section = "G1"

            console.log(this.course_code)

            const response =
                fetch(`${quiz_url}/${this.class_section}/${this.course_code}`)
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
        getQuiz: function(){
            this.course_code = 1008;
            this.class_section = "G1";
            this.quizid = 3;
            // this.time = 60;
            // this.questionid = 1;
            // this.answertext = "True";
            console.log(this.quizid);

            const response =
                fetch(`${quiz_url}/${this.class_section}/${this.course_code}/${this.quizid}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no course found in db
                        this.searchError = data.message;
                    } else {
                        this.quiz = data.data;
                        console.log(this.quiz);
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
            this.quizid = 3
            // this.course_code = localStorage.getItem("course_code");
            // this.class_section = localStorage.getItem("class_section");
            // this.quizid = localStorage.getItem("quizid");

            console.log(this.class_section)

            const response =
                fetch(`${questions_url}/${this.class_section}/${this.course_code}/${this.quizid}`)
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
        checkAnswers: function(){
            this.course_code = 1008;
            this.class_section = "G1";
            this.quizid = 3;
            // this.questionid = 1;
            // this.answertext = "True";
            console.log(this.quizid);

            const response =
                fetch(`${questions_url}/${this.class_section}/${this.course_code}/${this.quizid}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no course found in db
                        this.searchError = data.message;
                    } else {
                        this.quizquestions = data.data;
                        console.log(this.quizquestions);

                        // var marks = 0;
                        if (document.getElementById(question.questionid) in quizquestions){
                            var form = document.getElementById(quizquestions.questionid);
                            qn = form[quizquestions.questionid];
                            //for each question
                            var n = 0;
                            for (n = 0; n < qn.length; n++) {
                                // qn = form[question.questionid];
                                // console.log(qn);

                                // var ansNum = 0;
                                // //check which option is selected
                                // for (ansNum = 0; ansNum < qn.length; ansNum++) {
                                    if (qn[n].checked) {
                                        // get selected option.value
                                        var choice= parse(qn[n].value);
                                        console.log(choice);
                                    }
                            // }
                                if(choice==quizquestions.answertext){ 
                                    // marks += 1;
                                    alert("Your answer is correct!"); 
                                }
                                else{
                                    alert("The correct answer is '" + quizquestions.answertext + "'.");
                                }
                            }
                        }
                        else{
                            alert("cannot get question");
                        }
                        // if (marks/this.quizquestions.count > 0.85) {
                        //     document.writeln("Your total marks is" + marks); 
                        // }
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, service offline, etc
                    console.log(this.searchError + error);
                });
        },
        storeQuizForm: function(quizid) {
            localStorage.quizid = quizid
        },
        // getQuizForm: function() {
        //     console.log(localStorage.getItem("quizid"))
        //     return localStorage.getItem("quizid")
        // },
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
    },
    created: function () {
        // on Vue instance created, load the course list
        // this.getAllCourses();
        this.getCompleteChapter();
        this.getMaterials();
        this.getQuizzes();
        // this.getQuizForm();
        this.getQuizQuestions();
        this.checkAnswers();
        this.getQuiz();
    }

});