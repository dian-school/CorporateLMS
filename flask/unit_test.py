import unittest

from app import Progress, Materials, Quizquestions, Quizzes, Admins, Learners

# Dian Farah Binte Riduan, dianfarahr.2019, G1T6
class TestProgress(unittest.TestCase):
    def test_to_dict(self):
        d1 = Progress(learners_eid=1, course_code=1008, class_section="G1", chapter_completed=1)
        self.assertEqual(d1.to_dict(), {
            'learners_eid': 1,
            'course_code':1008,
            'class_section':'G1',
            'chapter_completed':1
            }
        )

# Dian Farah Binte Riduan, dianfarahr.2019, G1T6
class TestMaterials(unittest.TestCase):
    def test_to_dict(self):
        d1 = Materials(material_id=1, course_code=1008, class_section="G1", material_name="Basic to Engineering", material_type="Doc", material_link="https://docs.google.com/document/d/1DyXDkl_Kuc1FtODEGnDOpS6FLkyextu0xoWSEYEJ8oQ/edit?usp=sharing", material_chapter=1)
        self.assertEqual(d1.to_dict(), {
            'material_id': 1,
            'course_code': 1008,
            'class_section': 'G1',
            'material_name': 'Basic to Engineering',
            'material_type': 'Doc',
            'material_link': 'https://docs.google.com/document/d/1DyXDkl_Kuc1FtODEGnDOpS6FLkyextu0xoWSEYEJ8oQ/edit?usp=sharing',
            'material_chapter':1
            }
        )

# Jaspavan Kaur, jaspavank.2019, G1T6
class TestQuizquestions(unittest.TestCase):
    def test_questions_to_dict(self):
        #Testing Quiz questions to_dict function for True False questions
        quizqn1= Quizquestions(questionid= 1, quizid=1, class_section="G1", course_code=1008, questiontext="The printer model HX234A has a greater ink capacity than AD756X", questiontype= "TF", questionoptions="True, False", answertext="True")
        self.assertEqual(quizqn1.to_dict(),{
            'questionid' : 1,
            'quizid' : 1,
            'class_section': 'G1',
            'course_code': 1008,
            'questiontext': 'The printer model HX234A has a greater ink capacity than AD756X',
            'questiontype': 'TF',
            'questionoptions': 'True, False',
            'answertext': 'True'
            }
        )
        #Testing Quiz questions to_dict function for MCQ questions
        quizqn2 = Quizquestions(questionid= 1, quizid=1, class_section="G1", course_code=1008, questiontext="What is not an ink colour?", questiontype= "MCQ", questionoptions="Cyan, Magenta, Black, Sunset on the ocean", answertext="Sunset on the ocean")
        self.assertEqual(quizqn2.to_dict(),{
            'questionid' : 1,
            'quizid' : 1,
            'class_section': 'G1',
            'course_code': 1008,
            'questiontext': 'What is not an ink colour?',
            'questiontype': 'MCQ',
            'questionoptions': 'Cyan, Magenta, Black, Sunset on the ocean',
            'answertext': 'Sunset on the ocean'
            }
        )

# Jaspavan Kaur, jaspavank.2019, G1T6
class TestQuizzes(unittest.TestCase):
    def test_quizzes_to_dict(self):
        #Testing Quizzes to_dict function
        quiz1= Quizzes(quizid=1, class_section="G1", course_code=1008, time=45, graded="T", chapter=1)
        self.assertEqual(quiz1.to_dict(),{
            'quizid' : 1,
            'class_section': 'G1',
            'course_code': 1008,
            'time': 45,
            'graded': 'T',
            'chapter': 1,
            }
        )

# Grace Charlotte Lui, gracelui.2019, G1T6
class TestAdmins(unittest.TestCase):
    def test_admins_to_dict(self):
        admin1 = Admins(admins_eid=1, admins_name="Phris Coskitt", admins_email="pcoskitt@smu.edu.sg")
        self.assertEqual(admin1.to_dict(), {
            'admins_eid': 1,
            'admins_name':"Phris Coskitt",
            'admins_email': "pcoskitt@smu.edu.sg"
            }
        )


class TestLearners(unittest.TestCase):
    def test_learners_to_dict(self):
        learner1 = Learners(learners_eid=1, learners_name="Chris Poskitt", learners_email="cposkitt@smu.edu.sg", learners_qualifications="Software Project Management", courses_completed="Enterprise Solution Development")
        self.assertEqual(learner1.to_dict(), {
            'learners_eid': 1,
            'learners_name':"Chris Poskitt",
            'learners_email':"cposkitt@smu.edu.sg",
            'learners_qualifications':"Software Project Management",
            'courses_completed':"Enterprise Solution Development"
            }
        )




# Grace Charlotte Lui, gracelui.2019, G1T6
class TestAdmins(unittest.TestCase):
    def test_admins_to_dict(self):
        admin1 = Admins(admins_eid=1, admins_name="Phris Coskitt", admins_email="pcoskitt@smu.edu.sg")
        self.assertEqual(admin1.to_dict(), {
            'admins_eid': 1,
            'admins_name':"Phris Coskitt",
            'admins_email': "pcoskitt@smu.edu.sg"
            }
        )


class TestLearners(unittest.TestCase):
    def test_learners_to_dict(self):
        learner1 = Learners(learners_eid=1, learners_name="Chris Poskitt", learners_email="cposkitt@smu.edu.sg", learners_qualifications="Software Project Management", courses_completed="Enterprise Solution Development")
        self.assertEqual(learner1.to_dict(), {
            'learners_eid': 1,
            'learners_name':"Chris Poskitt",
            'learners_email':"cposkitt@smu.edu.sg",
            'learners_qualifications':"Software Project Management",
            'courses_completed':"Enterprise Solution Development"
            }
        )


if __name__ == "__main__":
    unittest.main()