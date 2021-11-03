import unittest

from app import Progress, Materials

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

if __name__ == "__main__":
    unittest.main()