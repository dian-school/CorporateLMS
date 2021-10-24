var get_all_URL = "http://localhost:5000/courses";
var get_all_trainers = "http://localhost:5000/trainers";
var get_all_learners = "http://localhost:5000/learners";
var questions_url = "http://localhost:5000/questions";

var app = new Vue({
    el: "#app",
    // computed: 
    // },
    data: {
        searchStr: "",
        statusMessage: "",
        msg: "",

        // materialAdded = false,
        // statusMessage = "",
        // msg = "",

        errorMsg: "",

        courseCode: 0,
        classSection: "",
        quizid: 0,
        "questions":[],
        questiontext:"",
        questiontype:"",
        questionoptions:"",
        answertext:"",

    },
    methods: {
        getQuestions: function () { 
            this.courseCode = 1003;
            this.classSection = "G2";
            this.quizid=1;

            const response =
                fetch(`${questions_url}/${this.classSection}/${this.courseCode}/${this.quizid}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no course found in db
                        this.searchError = data.message;
                    } else {
                        this.questions = data.data;
                        console.log(this.questions);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.searchError + error);
                });
        },
        addQuestion: function () {
            this.courseCode = 1003;
            this.classSection = "G2";
            this.quizid=1;

            console.log("hey")
            if (this.questionoptions=== ""){
                this.questionoptions= "True, False"
            }

            let jsonData = JSON.stringify({
                quizid: this.quizid,
                class_section: this.classSection,
                course_code: this.courseCode,
                questiontext: this.questiontext,
                questiontype: this.questiontype,
                questionoptions: this.questionoptions,
                answertext:this.answertext
            });
            console.log(jsonData)
            if (this.questiontext === "" || this.questiontype === "" || this.answertext==="") {
                this.msg = "Please fill in required fields.";
            }
            fetch(`${questions_url}`, {
                method: "POST",
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
                        this.questionAdded = true;
                        this.statusMessage = data.message
                        
                        // refresh page
                        // this.questionid = result[0].questionid;
                        this.questiontext = "";
                        this.questiontype= "";
                        this.questionoptions= "";
                        this.answertext="";

                        this.pageRefresh()

                        break;
                
                    case 500:
                        this.errorMsg = data.message;
                        break;
                    default:
                        throw `${data.code}: ${data.message}`;
                }
            })
            .catch(error => {
                // Errors when calling the service; such as network error, 
                // service offline, etc
                this.errorMsg = this.statusMessage
                console.log(this.errorMsg);
            });
        },
        pageRefresh: function () {
            // this.getQuizzes();
            this.searchError = "";
            this.searchStr = "";
            this.getQuestions();
        }
    },
    created: function () {
        // on Vue instance created, load the course list
        this.getQuestions();

    }
});