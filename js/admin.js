var get_all_URL = "http://localhost:5000/courses";
var get_all_trainers = "http://localhost:5000/trainers";
var get_all_learners = "http://localhost:5000/learners";
var section_url = "http://localhost:5000/sections";
var progress_url = "http://localhost:5000/progress";

var app = new Vue({
    el: "#app",
    data: {
        searchStr: "",
        message: "There is a problem retrieving data, please try again later.",
        statusMessage: "",
        msg: "",
        course_title: "",

        "courses": [],
        "trainers": [],

        "sectionsNoTrainers": [],
        sectionCourseTitle: [],
        checkedSections: [],
        assignTrainerError: "",
        assignSuccess: false,

        "learners_all": [],
        "eligibleCourses": [],
        "sections": [],
        "sectionsVacancies": [],
        checkedCourseSections: [],
        searchError: "",
        courseAssigned: false,
        assignCourseError: "",
        vacancyUpdated: false,
        statusMsg: "",
        updateVacancyError: "",
        oneSection: [],

        newCourseTitle: "",
        newCode: "",
        newDescription: "",
        newPrerequisites: "",
        courseAdded: false,
        sectionAdded: false,
        addCourseError: "",
        addSectionError:"",
        new_size:0,
        newstart_date:"",
        newend_date:"",
        newstart_time: "08:00:00",
        newend_time:"23:59:00",
        new_duration:"",

        editCurrentCoursecourse_code:0,
        editCurrentCoursecourse_title: "",
        editCurrentCoursedescription:"",
        editCurrentCourseprerequisites:"",


        courseDeleted: false,

        edit: false,
        editCurrentCourse: "",
        editSuccessful: false,
        editCourseError: "",

        learner: {},
        trainer: {},
        
    },
    methods: {
        //courses
        getAllCourses: function () {
            // displays all courses 
            const response =
                fetch(get_all_URL)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no courses in db
                        this.message = data.message;
                    } else {
                        this.courses = data.data;
                    }
                })
                .catch(error => {
                    console.log(this.message + error);

                });

        },

        findCourse: function () { 
            if (isNaN(this.searchStr)) {
                // searches by course title 
                const response =
                    fetch(`${get_all_URL}/searchTitle/${this.searchStr}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no course found in db
                            this.searchError = data.message;
                        } else {
                            this.courses = data.data;
                        }
                    })
                    .catch(error => {
                        console.log(this.searchError + error);
                    });
                
            } else {
                // searches by course_code 
                const response =
                    fetch(`${get_all_URL}/search/${this.searchStr}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no course found in db
                            this.searchError = data.message;
                        } else {
                            this.courses = data.data;
                            this.searchError = "";
                        }
                    })
                    .catch(error => {
                        console.log(this.searchError + error);
                    });
            }
        },

        getCourseSectioninfo: function(){
            // Used for course profile when click View
            clickedCourse = localStorage.getItem("clickedCourse");
            console.log(clickedCourse);

            const response =
                fetch(`${section_url}/${clickedCourse}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        this.message = data.message;
                    } else {
                        this.sections = data.data;
                        console.log(this.sections);
                        }
                    })
                    .catch(error => {
                        console.log(this.message + error);
                    });
        },

        getCourseinfo: function(){
            // Used for course profile when click View
            clickedCourse = localStorage.getItem("clickedCourse");
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
           
        },
        getCourseSection: function(){
            // Used to display section in course section after clicking in course Profile page
            return localStorage.getItem("clickedSection")
        },
        addCourse: function () {
            // Used in admin to add new course and automatically generate the 1st section
            // initialize set up
            this.courseAdded = false;
            this.addCourseError = "";
            this.statusMessage = "";
            this.msg = "";
            // Data for Post to Add Course
            let courseData = JSON.stringify({
                course_title: this.newCourseTitle,
                course_code: this.newCode,
                description: this.newDescription,
                prerequisites: this.newPrerequisites,
            });
            // Data for Post to add 1st Section
            let sectionData = JSON.stringify({
                class_section: this.class_section,
                course_code: this.newCode,
                class_size: this.new_size,
                start_date: this.newstart_date,
                end_date: this.newend_date,
                start_time: this.newstart_time,
                end_time:this.newend_time,
                vacancies: this.new_size,
                duration: this.new_duration,
            })
            //Checks if form is filled
            if (this.newCourseTitle === "" || this.newCode === "" || this.newDescription === ""
            || this.new_size==="" || this.newstart_date==="" || this.newend_date ==="" || this.new_duration === "" ) {
                this.msg = "Please fill in required fields.";
                }
            else {
                //Post course
                fetch(`${get_all_URL}`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: courseData
                    })
                    .then(response => response.json())
                    .then(data => {
                        result = data.data;
                        switch (data.code) {
                            case 201:
                                this.courseAdded = true;
                                this.statusMessage = data.message
                                this.pageRefresh();
                                break;
                            case 500:
                                this.addCourseError = data.message;
                                break;
                            default:
                                throw `${data.code}: ${data.message}`;
                        }
                    })
                .catch(error => {
                    this.addCourseError = this.statusMessage
                    console.log(this.addCourseError);
                });
                // Post 1st section
                fetch(`${section_url}`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: sectionData
                })
                .then(response => response.json())
                .then(data => {
                    result = data.data;
                    switch (data.code) {
                        case 201:
                            this.sectionAdded = true;
                            this.statusMessage = data.message
                            this.pageRefresh();
                            break;
                        case 500:
                            this.addSectionError = data.message;
                            break;
                        default:
                            throw `${data.code}: ${data.message}`;
                    }
                })
                .catch(error => {
                    this.addSectionError = this.statusMessage
                    console.log(this.addSectionError);
                });
            }
        },
        editCourse: function () {
            // Used to update course details in admin page
            // reset data
            course_code = localStorage.getItem("clickedCourse")
            this.editSuccessful = false;
            this.edit = true;
            this.editCourseError = "";
            this.msg = "";
            let jsonData = JSON.stringify({
                course_code: this.editCurrentCoursecourse_code,
                course_title: this.editCurrentCoursecourse_title,
                description: this.editCurrentCoursedescription,
                prerequisites: this.editCurrentCourseprerequisites,
            });
            console.log(jsonData)
            if (this.editCurrentCoursecourse_title === "" || this.editCurrentCoursecourse_code === "" || this.editCurrentCoursedescription === "") {
                this.msg = "Please fill in required fields.";
                }
            else {
            fetch(`${get_all_URL}/${course_code}`, {
                    method: "PUT",
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
                        case 200:
                            this.editSuccessful = true;
                            this.pageRefresh();
                            this.getAllCourses();
                            this.statusMessage = 'Successfully edited course details';
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
            }
        },
        // STOPPED REFACTORING HERE
        del: function (course_code) {
            //reset all data to original setting
            this.course_code = course_code;
            this.courseDeleted = false;

            this.courseAdded = false;
            this.addCourseError = "";
            this.statusMessage = "";

            const response =
                fetch(`${get_all_URL}/${this.course_code}`, {
                    method: "DELETE",
                })
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no course in db
                        this.message = data.message;
                        this.courses = [];
                    } else {
                        this.courseDeleted = true;
                        this.statusMessage = "The course has been successfully deleted!";
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error,
                    // service offline, etc
                    console.log(this.message + error);

                });

            //Front end Vue
            var idx = 0
            for (course of this.courses) {
                if (course.course_code == course_code) {
                    this.courses.splice(idx, 1) // remove this element
                    break
                }
                idx++
            }
        },
        // trainers
        getAllTrainers: function () {
            // on Vue instance created, load the trainer list
            const response =
                fetch(get_all_trainers)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no trainers in db
                        this.message = data.message;
                    } else {
                        this.trainers = data.data;
                        // console.log(this.trainers);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.message + error);

                });

        },
        findTrainer: function () { 
            this.searchError = "";

            if (isNaN(this.searchStr)) {
                const response =
                    fetch(`${get_all_trainers}/${this.searchStr}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no trainer found in db
                            this.searchError = data.message;
                        } else {
                            this.trainers = data.data;
                            // console.log(this.trainers);
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
                
            } else {
                const response =
                    fetch(`${get_all_trainers}/eid/${this.searchStr}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no trainer found in db
                            this.searchError = data.message;
                        } else {
                            this.trainers = data.data;
                            // console.log(this.trainers);
                            this.searchError = "";
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
            }
        },
        trainerProfile: function(trainers_eid) {
            this.searchError = "";
            localStorage.trainerId = trainers_eid;
            console.log(localStorage.getItem("trainerId"));     
        },
        getTrainerInfo: function() {
            trainerId = localStorage.getItem("trainerId");
            console.log(trainerId);

            const response =
                fetch(`${get_all_trainers}/eid/${trainerId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no trainer found in db
                        this.searchError = data.message;
                    } else {
                        this.trainer = data.data[0];
                        console.log(this.trainer);
                        localStorage.trainerName = this.trainer.trainers_name;
                        console.log(localStorage.getItem("trainerName"));
                        this.searchError = "";
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.searchError + error);
                });
        },
        // sections
        sectionsWithNoTrainer: function () {
            const response =
                    fetch(`${section_url}/noTrainers`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no sections without trainers found in db
                            this.searchError = data.message;
                        } else {
                            this.sectionsNoTrainers = data.data;
                            console.log(this.sectionsNoTrainers);
                            for (let i = 0; i < this.sectionsNoTrainers.length; i++) {
                                const response =
                                fetch(`${get_all_URL}/search/${this.sectionsNoTrainers[i].course_code}`)
                                .then(response => response.json())
                                .then(data => {
                                    console.log(response);
                                    if (data.code === 404) {
                                        // no course found in db
                                        this.searchError = data.message;
                                    } else {
                                        this.course = data.data[0];
                                        console.log(this.course);
                                        this.sectionCourseTitle.push(this.course);
                                        console.log(this.sectionCourseTitle); //currently showing the last course title only because section course title is stored as a str and keeps changing. Must think about how to display the titles according to course code
                                        
                                         
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
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
        },
        assignSections: function () {
            for (courseSection of this.checkedSections) {
                console.log(courseSection);
                splitCourseSection = courseSection.split(':');
                courseCode = splitCourseSection[0];
                console.log(courseCode);
                courseSection = splitCourseSection[1];
                console.log(courseSection);

                this.assignTrainerError = "";

                let jsonData = JSON.stringify({
                    trainers_eid: trainerId,
                    trainers_name: localStorage.getItem("trainerName"),
                    
                });
    
                fetch(`${section_url}/${courseSection}/${courseCode}`, {
                        method: "PUT",
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
                        
                        switch (data.code) {
                            case 200:
                                this.assignSuccess = true;
    
                                this.assignTrainerError = 'Trainer successfully assigned.';
    
                                break;
                            case 404:
                                this.assignTrainerError = data.message;
                            
                            default:
                                throw `${data.code}: ${data.message}`;
                        }
                    })
            }
        },
        // learner
        getAllLearners: function () {
            // on Vue instance created, load the trainer list
            const response =
                fetch(get_all_learners)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no trainers in db
                        this.message = data.message;
                    } else {
                        this.learners_all = data.data;
                        // console.log(this.learners);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.message + error);

                });

        },
        findLearner: function () { 
            this.searchError = "";
            
            if (isNaN(this.searchStr)) {
                const response =
                    fetch(`${get_all_learners}/${this.searchStr}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no learner found in db
                            this.searchError = data.message;
                        } else {
                            this.learners = data.data;
                            // console.log(this.learners);
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
                
            } else {
                const response =
                    fetch(`${get_all_learners}/eid/${this.searchStr}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no trainer found in db
                            this.searchError = data.message;
                        } else {
                            this.learners = data.data;
                            // console.log(this.learners);
                            this.searchError = "";
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
            }
        },
        learnerProfile: function(learners_eid) {
            this.searchError = "";
            localStorage.learnerId = learners_eid
        },
        getLearnerInfo: function() {
            learnerId = localStorage.getItem("learnerId");
            console.log(learnerId);

            const response =
                fetch(`${get_all_learners}/eid/${learnerId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no learner found in db
                        this.searchError = data.message;
                    } else {
                        this.learner = data.data[0];
                        console.log(this.learner);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.searchError + error);
                });        
        },
         
        
        // assign learner to course sections with vacancies
        // get eligible courses for learner
        getEligibleCourses: function (learner_eid) {
            const response = 
                fetch(`http://localhost:5000/${learner_eid}/courses`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // no eligible courses
                        this.searchError = data.message;
                    } else {
                        this.eligibleCourses = data.data.eligible_courses;
                        console.log(this.eligibleCourses);
                        for (course of this.eligibleCourses) {
                            const response = 
                                fetch(`${section_url}/${course.course_code}`)
                                .then(response => response.json())
                                .then(data => {
                                    console.log(response);
                                    if (data.code === 404) {
                                        // no sections with vacancies
                                        this.searchError = data.message;
                                    } else {
                                        this.sections = data.data;
                                        console.log(this.sections);
                                        for (section of this.sections) {
                                            //console.log(section);
                                            if (section.vacancies != 0) {  
                                                this.sectionsVacancies.push(section);
                                            }  
                                        }
                                        console.log(this.sectionsVacancies);
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
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.searchError + error);
                });

            
        },    
        
        assignCourse: function(learnerId) {
            // reset data to original setting
            this.courseAssigned = false;
            this.assignCourseError = "";
            this.statusMessage = "";

            this.vacancyUpdated = false;
            this.statusMsg = ""; 
            this.updateVacancyError = "";

            for (section of this.checkedCourseSections) {
                splitCourseSection = section.split(':');
                code = splitCourseSection[0];
                console.log(code);
                section = splitCourseSection[1];
                console.log(section);

                const response = 
                    fetch(`${section_url}/${section}/${code}`, {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        },
                       
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no sections found
                            this.searchError = data.message;
                        } else {
                            this.oneSection = data.data[0];
                            // console.log(this.oneSection);
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });

                let jsonData = JSON.stringify({
                    
                    vacancies: this.oneSection.vacancies - 1 
                    
                });
    
                fetch(`${section_url}/${section}/${code}`, {
                        method: "PUT",
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
                        
                        switch (data.code) {
                            case 200:
                                this.vacancyUpdated = true;
    
                                this.statusMsg = 'Vacancy successfully updated.';
    
                                break;
                            case 404:
                                this.updateVacancyError = data.message;
                            
                            default:
                                throw `${data.code}: ${data.message}`;
                        }
                    })

                let jdata = JSON.stringify({
                    learners_eid: learnerId,
                    course_code: code,
                    class_section: section,
                    chapter_completed: 0
                });
            
                fetch(`${progress_url}`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: jdata
                    })
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                        result = data.data;
                        //console.log(result);
                        // 3 cases
                        switch (data.code) {
                            case 201:
                                this.courseAssigned = true;
                                this.statusMessage = "Learner assigned to courses successfully!"
                                // this.sectionsVacancies = think about how to remove section object after learner ha sbeen assigned to the class section
                                // refresh page
                                this.pageRefresh();

                                break;
                        
                            case 500:
                                this.assignCourseError = data.message;
                                break;
                            default:
                                throw `${data.code}: ${data.message}`;
                        }
                    })
                
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    this.assignCourseError = this.statusMessage
                    console.log(this.assignCourseError);
                });
            }
        },
        courseProfile: function(course_code) {
            // Used in admin page to send course code info to course Profile page
            localStorage.clickedCourse = course_code                       
        },
        storeCourseSection: function (sectionInfo) {
            // Used in course profile to send section info to course Section page
            localStorage.clickedSection = sectionInfo;
        },
    pageRefresh: function () {
        this.getAllCourses();
        this.getAllTrainers();
        this.getAllLearners();
        this.searchStr = "";
        }
    },
    created: function () {
        // on Vue instance created, load the course list
        this.getAllCourses();
        this.getAllTrainers();
        this.getAllLearners();
        this.getLearnerInfo();
        this.getTrainerInfo();
        this.assignCourse();
        // this.randomFunc(code);
        // this.getEligibleCourses();
        // this.courseSections(this.checkedCourses);
        this.searchError = "";
        this.searchStr = "";
     
    }
});