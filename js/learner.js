var get_all_URL = "http://localhost:5001/courses";


var app = new Vue({
    // binds the new Vue object to the HTML element with id="app".
    el: "#app",
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
        // courseAdded: false,
        // addCourseError: "",
    },
    methods: {
        getAllCourses: function () {




});