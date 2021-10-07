from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *
from flask_cors import CORS

import json
from os import environ

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = environ.get('dbURL') or 'mysql+mysqlconnector://root@localhost:3306/lms_database' or 'mysql+mysqlconnector://root:root@localhost:3306/lms_database'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {'pool_recycle': 299}

db = SQLAlchemy(app)

CORS(app)

class Courses(db.Model):
    __tablename__ = 'courses'

    course_code = db.Column(db.Integer, primary_key=True)
    course_title = db.Column(db.String(26))
    description = db.Column(db.String(1000))
    prerequisites = db.Column(db.String(1000))

    def to_dict(self):
        """
        'to_dict' converts the object into a dictionary,
        in which the keys correspond to database columns
        """
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result
    
@app.route("/courses")
def get_all():
    course_list = Courses.query.all()
    if len(course_list):
        return jsonify(
            {
                "code": 200,
                "data": {
                    "courses": [course.json() for 
                    course in course_list]
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "There are no courses."
        }
    ), 404

@app.route("/courses/<string:course_code>")
def find_by_course_code(course_code):
    course = Courses.query.filter_by(course_code=course_code).first()
    if course:
        return jsonify(
            {
                "code": 200,
                "data": course.json()
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "Course code not found."
        }
    ), 404

@app.route("/courses/<string:course_title>")
def find_by_course_title(course_title):
    course = Courses.query.filter_by(course_title=course_title).first()
    if course:
        return jsonify(
            {
                "code": 200,
                "data": course.json()
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "Course title not found."
        }
    ), 404

@app.route("/courses", methods=['POST'])
def add_course():
    addCourseName = request.json.get('course_title', None)
    addCode = request.json.get('course_code', None)
    addDescription = request.json.get('description', None)
    addPrerequisites = request.json.get('prerequisites', None)

    #Checks if the current entry is already inside the course database: Checks by code, course Name, description
    courseCheck = Courses.query.filter(Courses.course_code.like(addCode), Courses.course_title.like(addCourseName),Courses.description.like(addDescription),Courses.prerequisites.like(addPrerequisites)).first()

    if (courseCheck):
        return jsonify(
            {
                "code": 400,
                "data": courseCheck.json(),
                "message": "Course seems to be in the database already."
            }
        ), 400

    data = request.get_json()
    course = Courses(**data)

    try:
        db.session.add(course)
        db.session.commit()
    except:
        return jsonify(
            {
                "code": 500,
                "message": "An error occurred while adding course. "
            }
        ), 500

    return jsonify(
        {
            "code": 201,
            "data": course.json()
        }
    ), 201



class Sections(db.Model):
    __tablename__ = 'sections'

    class_section = db.Column(db.String(2), primary_key=True)
    course_code = db.Column(db.Integer, db.ForeignKey('course_code'), primary_key=True)
    class_size = db.Column(db.Integer)
    duration = db.Column(db.Integer)
    trainers_eid = db.Column(db.Integer, db.ForeignKey('trainers_eid'))
    vacancies = db.Column(db.Integer)

    def to_dict(self):
        """
        'to_dict' converts the object into a dictionary,
        in which the keys correspond to database columns
        """
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

class Trainers(db.Model):
    __tablename__ = 'trainers'

    trainers_eid = db.Column(db.Integer, primary_key=True)
    trainers_name = db.Column(db.String(26))
    trainers_email = db.Column(db.String(1000))
    qualifications = db.Column(db.String(1000))
    specialisation = db.Column(db.String(1000))

    def to_dict(self):
        """
        'to_dict' converts the object into a dictionary,
        in which the keys correspond to database columns
        """
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

class Learners(db.Model):
    __tablename__ = 'learners'

    learners_eid = db.Column(db.Integer, primary_key=True)
    learners_name = db.Column(db.String(26))
    learners_email = db.Column(db.String(1000))
    learners_qualifications = db.Column(db.String(1000))
    courses_completed = db.Column(db.String(1000))
    class_section = db.Column(db.String(2), db.ForeignKey('class_section'))
    course_code = db.Column(db.Integer, db.ForeignKey('course_code'))

    def to_dict(self):
        """
        'to_dict' converts the object into a dictionary,
        in which the keys correspond to database columns
        """
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

class Admins(db.Model):
    __tablename__ = 'admins'

    admins_eid = db.Column(db.Integer, primary_key=True)
    admins_name = db.Column(db.String(26))
    admins_email = db.Column(db.String(1000))

    def to_dict(self):
        """
        'to_dict' converts the object into a dictionary,
        in which the keys correspond to database columns
        """
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

class Enrols(db.Model):
    __tablename__ = 'enroling'

    course_code = db.Column(db.Integer, db.ForeignKey('course_code'), primary_key=True)
    class_section = db.Column(db.Integer, db.ForeignKey('class_section'), primary_key=True)
    learners_eid = db.Column(db.Integer, db.ForeignKey('learners_eid'), primary_key=True)

    def to_dict(self):
        """
        'to_dict' converts the object into a dictionary,
        in which the keys correspond to database columns
        """
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

db.create_all()

if __name__ == '__main__':
    print("This is flask for " + os.path.basename(__file__) +
          ": lms G1T6 ...")
    app.run(host='0.0.0.0', port=5001, debug=True)

