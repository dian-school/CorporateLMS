from datetime import datetime


class Student:
    def __init__(self,
                 name="",
                 date_of_birth=datetime(1970, 1, 1),
                 nric=""):
        self.name = name
        self.date_of_birth = date_of_birth
        self.nric = nric

    def get_name(self):
        return self.name

    def get_age(self):
        born = self.date_of_birth
        today = datetime.today()
        return today.year - born.year - \
               ((today.month, today.day) < (born.month, born.day))


s1 = Student('Vedant', datetime(1998, 8, 8), 'ABCDEFG88')

# s1 = Student()

# s1.name = 'Vedant'
# s1.date_of_birth = datetime(1998, 8, 8)
# s1.nric = 'ABCDEFG88'

print(s1.get_name())
print(s1.get_age())
print(s1.nric)

class Staff:
    def __init__(self, name="", department="",
                 date_of_joining=datetime.today(),
                 base_salary=0):
        self.name = name
        self.department = department
        self.date_of_joining = date_of_joining
        self.base_salary = base_salary

    def get_salary(self):
        return self.base_salary


class Manager(Staff):
    def __init__(self, name="", department="",
                 date_of_joining=datetime.today(),
                 base_salary=0,
                 bonus_perk=0):
        Staff.__init__(self, name, department, date_of_joining,
                       base_salary)
        self.bonus_perk = bonus_perk

    def get_salary(self):
        return self.base_salary + self.bonus_perk


class SalesStaff(Staff):
    def __init__(self, name="", department="",
                 date_of_joining=datetime.today(),
                 base_salary=0,
                 commission_rate=0, sales_amount=0):
        Staff.__init__(self, name, department, date_of_joining,
                       base_salary)
        self.commission_rate = commission_rate
        self.sales_amount = sales_amount

    def get_salary(self):
        return self.base_salary + \
               (self.sales_amount * self.commission_rate)


p1 = Staff(name="Abang Comot", base_salary=3500)

# print(p1.name)
# print(p1.get_salary())
# print(p1.date_of_joining)

p2 = Manager(name="Phris", base_salary=3000, bonus_perk=1000000)

# print(p2.name)
# print(p2.get_salary())
# print(p2.date_of_joining)

p3 = SalesStaff(name="Xiao Di Di", base_salary=2000, commission_rate=200, sales_amount=20)

# print(p3.name)
# print(p3.get_salary())
# print(p3.date_of_joining)

staff_list = [p1, p2, p3]

for staff in staff_list:
    print(f"{staff.name} earned {staff.get_salary()}")


class ToolBox:
    def __init__(self, brand="", size=""):
        self.brand = brand
        self.size = brand
        self.tools = []

    def add_tool(self, tool):
        self.tools.append(tool)


class Tool:
    def __init__(self, name="", id=""):
        self.name = name
        self.id = id

tool1 = Tool("Magic Hammer", "MH111")
tool2 = Tool("IKEA Alan Key", "IK123")

tool_box = ToolBox("Poskittron Industries Toolbox", "BIG")
tool_box.add_tool(tool1)
tool_box.add_tool(tool2)

for tool in tool_box.tools:
    print(tool.name)

class Engine:
    def __init__(self, capacity=0.0, fuel_type="",
                 num_cylinders=0):
        self.capacity = capacity
        self.fuel_type = fuel_type
        self.num_cylinders = num_cylinders


class Car:
    def __init__(self, reg_number="", model="",
                 colour="", size=0, fuel_type=""):
        self.reg_number = reg_number
        self.model = model
        self.colour = colour
        self.size = size
        self.engine = Engine(fuel_type=fuel_type)


car1 = Car('IS212-G1', 'Kia', 'Red', 50, 'Diesel')

print(car1.engine.fuel_type)