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
        addCourseError: "",

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
                        this.courses = data.data;
                        // console.log(this.courses);
                    }
                })
                .catch(error => {
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    console.log(this.message + error);

                });

        },
        findCourse: function () { 
            // this.searchError = "";

            if (isNaN(this.searchStr)) {
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
                            // console.log(this.courses);
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
                
            } else {
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
                            // console.log(this.courses);
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
        courseProfile: function(course_title) {
            this.searchError = "";
            this.course_title = course_title;
            // console.log(course_title);

            const response =
                    fetch(`${get_all_URL}/searchTitle/${this.course_title}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(response);
                        if (data.code === 404) {
                            // no course found in db
                            this.searchError = data.message;
                        } else {
                            this.course = data.data;
                            // console.log(this.course);
                            localStorage.clickedCourse = JSON.stringify(this.course);
                            // console.log(localStorage.getItem("clickedCourse")); 
                        }
                    })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.searchError + error);
                    });
                       
        },
       
        getCourseinfo: function(){
            clickedCourse = JSON.parse(localStorage.getItem("clickedCourse"));
            // console.log(clickedCourse);

            const response =
                fetch(`${section_url}/${clickedCourse[0].course_code}`)
                .then(response => response.json())
                .then(data => {
                    console.log(response);
                    if (data.code === 404) {
                        // course has no section
                        this.message = data.message;
                    } else {
                        this.sections = data.data;
                        // console.log(this.sections);
                        localStorage.sections = JSON.stringify(this.sections);
                        // console.log(localStorage.getItem("sections")); 
                        courseSections = JSON.parse(localStorage.getItem("sections"));
                        // console.log(courseSections);
                        // console.log(courseSections.length);
                        if (courseSections.length == 0) {
                            document.getElementById("courseDetails").innerHTML = 
                            `
                            <H1> ${clickedCourse[0].course_title} </H1>
                            <h2> Course Code: ${clickedCourse[0].course_code} </h2>
                            <h3> Course Description: ${clickedCourse[0].description} </h3>
                            `;
                        } else {
                            document.getElementById("courseDetails").innerHTML = 
                            `
                            <H1> ${clickedCourse[0].course_title} </H1>
                            <h2> Course Code: ${clickedCourse[0].course_code} </h2>
                            <h3> Course Description: ${clickedCourse[0].description} </h3>
                            `;
                            for (let i = 0; i < courseSections.length; i++) {
                                const response =
                                    fetch(`${get_all_trainers}/eid/${courseSections[i].trainers_eid}`)
                                    .then(response => response.json())
                                    .then(data => {
                                        // console.log(response);
                                        if (data.code === 404) {
                                            // no trainer found in db
                                            this.searchError = data.message;
                                        } 
                                        else {
                                            this.trainer = data.data;
                                            // console.log(this.trainer);
                                            // console.log(this.trainer[0].trainers_name);
                                            
                                            document.getElementById("section").innerHTML = 
                                            `
                                            <h4> Sections: </h4>
                                            <ul> 
                                                <li> <a target="_blank" href="courseSection.html" @click="storeCourseSection(courseSections[i].class_section);"> ${courseSections[i].class_section} </a>, Section Trainer: ${this.trainer[0].trainers_name} </li>
                                            </ul>
                                            `;
                                             
                                        }    
                                    })
                                    // 
                                    .catch(error => {
                                        // Errors when calling the service; such as network error, 
                                        // service offline, etc
                                        console.log(this.searchError + error);
                                    });
                            } 
                        }
                    }
                })
                    .catch(error => {
                        // Errors when calling the service; such as network error, 
                        // service offline, etc
                        console.log(this.message + error);

                    });
           
        },
        storeCourseSection: function (sectionInfo) {
            // console.log(sectionInfo);
            localStorage.clickedSection = sectionInfo;
        },
        getCourseSection: function(){
            // console.log(localStorage.getItem("clickedSection"));
            sectionData = localStorage.getItem("clickedSection");
            document.getElementById("sectionNumber").innerHTML = `${sectionData}`;
            // document.getElementById("trainer").innerHTML = `${sectionData[sectionTrainer]}`;
        },
        addCourse: function () {
            // reset data to original setting
            this.courseAdded = false;
            this.addCourseError = "";
            this.statusMessage = "";
            this.msg = "";

            let jsonData = JSON.stringify({
                course_title: this.newCourseTitle,
                course_code: this.newCode,
                description: this.newDescription,
                prerequisites: this.newPrerequisites,
            });

            if (this.newCourseTitle === "" || this.newCode === "" || this.newDescription === "") {
                this.msg = "Please fill in required fields.";
                }
            else {
                fetch(`${get_all_URL}`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: jsonData
                    })
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                        result = data.data;
                        //console.log(result);
                        // 3 cases
                        switch (data.code) {
                            case 201:
                                this.courseAdded = true;
                                this.statusMessage = data.message
                                
                                // refresh page
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
                    // Errors when calling the service; such as network error, 
                    // service offline, etc
                    this.addCourseError = this.statusMessage
                    console.log(this.addCourseError);
                });
            }
        },
        editCourseForm: function (course) {
            //resets the data setting
            this.editSuccessful = false;
            this.editCurrentCourse = course;
            this.edit = true;

        },
        editCourse: function (course) {
            // reset data

            this.editCourseError = "";
            this.msg = "";

            let jsonData = JSON.stringify({
                course_code: this.editCurrentCourse.course_code,
                course_title: this.editCurrentCourse.course_title,
                description: this.editCurrentCourse.description,
                prerequisites: this.editCurrentCourse.prerequisites
            });
            if (this.editCurrentCourse.course_title === "" || this.editCurrentCourse.course_code === "" || this.editCurrentCourse.description === "") {
                this.msg = "Please fill in required fields.";
                }
            else {
            fetch(`${get_all_URL}`, {
                    method: "PATCH",
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