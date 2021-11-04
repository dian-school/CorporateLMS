import unittest

from app import Progress, Materials, Quizquestions, Quizzes

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


if __name__ == "__main__":
    unittest.main()