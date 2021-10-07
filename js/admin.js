var get_all_URL = "http://localhost:5001/courses";

var app = new Vue({
    el: "#app",
    // computed: 
    // },
    data: {
        searchStr: "",
        message: "There is a problem retrieving course data, please try again later.",
        statusMessage: "",

        "courses": [],
        searchError: "",

        newCourseName: "",
        newCode: "",
        newDescription: "",
        newPrerequisites: "",
        courseAdded: false,
        addCourseError: "",

    },
    methods: {
        getAllCourses: function () {
            // on Vue instance created, load the course list
            const response =
                fetch(get_all_URL)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no courses in db
                        this.message = data.message;
                    } else {
                        this.courses = data.data.courses;
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.message + error);

                });

        },
        findCourse: function () {   
                const response =
                    fetch(`${get_all_URL}/${this.searchStr}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no course found in db
                            this.searchError = data.message;
                        } else {
                            this.courses = data.data.courses;
                            console.log(this.courses);
                            this.searchError = "";
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
            
        },
        addCourse: function () {
            // reset data to original setting
            this.courseAdded = false;
            this.addCourseError = "";
            this.statusMessage = "";

            let jsonData = JSON.stringify({
                courseName: this.newCourseName,
                code: this.newCode,
                description: this.newDescription,
                prerequisites: this.newPrerequisites,
            });

            fetch(`${get_all_URL}`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: jsonData
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    result = data.data;
                    console.log(result);
                    // 3 cases
                    switch (data.code) {
                        case 201:
                            this.courseAdded = true;
                            this.statusMessage = "The course has been successfully added!"
                            
                            // refresh page
                            this.pageRefresh();

                            break;
                        case 400:
                        case 500:
                            this.addCourseError = data.message;
                            this.statusMessage = "There is a problem adding this new course"
                            break;
                        default:
                            throw `${data.code}: ${data.message}`;
                    }
                })
        },
        pageRefresh: function () {
            this.getAllCourses();
            this.searchError = "";
            this.searchStr = "";
        }
    },
    created: function () {
        // on Vue instance created, load the course list
        this.getAllCourses();
    }
});