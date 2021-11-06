-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sept 21, 2021 at 09:48 AM
-- Server version: 8.0.18
-- PHP Version: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+08:00";

-- Database: `spm_G1T6lms`
--
CREATE DATABASE IF NOT EXISTS `lms_database` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `lms_database`;

-- --------------------------------------------------------
--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `admins_eid` int(11) NOT NULL AUTO_INCREMENT,
  `admins_name` char(26) NOT NULL,
  `admins_email` varchar(1000) NOT NULL,
  PRIMARY KEY (`admins_eid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admins_eid`, `admins_name`, `admins_email`) VALUES
(1, 'Ding Zheng Xun', 'ding.zheng.xun@gmail.com'),
(2, 'Zeng Xin Ling', 'zeng.xin.ling@gmail.com'),
(3, 'Serena Lim', 'serena.lim@gmail.com'),
(4, 'Rachel Soh', 'rachel.soh@gmail.com'),
(5, 'Lee Jun Wei', 'lee.jun.wei@gmail.com'),
(6, 'Christopher Low', 'chris.low@gmail.com'),
(7, 'Rayn Lee', 'rayn.lee@gmail.com'),
(8, 'Taufik Bautisah', 'taufik.bautisah@gmail.com'),
(9, 'Linda Quek', 'linda.quek@gmail.com'),
(10, 'Xia Xue', 'xia.xue@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `course_code` int(11) NOT NULL AUTO_INCREMENT,
  `course_title` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `prerequisites`  varchar(1000) NULL,
  PRIMARY KEY (`course_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--


INSERT INTO `courses` (`course_code`,`course_title`,`description`,`prerequisites`) VALUES
(1001, 'All About Maintenance', 'Basics about how to check and ensure all components of the copier is working well',''),
(1002, 'Customer Service:Soft Skills Fundamentals', 'Learning to communicate well with customers', ''),
(1003, 'Customer Service Mastery: Delight Every Customer', 'Making every customer happy and satisfied with service provided', ''),
(1004, 'Foundations of Copier Repair', 'Basics about repairing copiers', 'Foundations of how Copiers work'),
(1005, 'Basics of Hardware Repair', 'Basics about how to check and repair hardware that is faulty', ''),
(1006, 'Basics of Software Repair', 'Basics about how to check and repair software that is faulty', ''),
(1007, 'Printer Repair: Learn how to test Printer Components', 'Basics about printer components and how to test them to track issues that occur', ''),
(1008, 'Identification & Resolution of Client Equipment & Systems (Beginner)', 'Learning to find issues in customer systems and solve them ', ''),
(1009, 'Identification & Resolution of Client Equipment & Systems (Intermediate)', 'Learning to find issues in customer systems and solve them ', 'Identification & Resolution of Client Equipment & Systems (Beginner)'),
(1010, 'Identification & Resolution of Client Equipment & Systems (Advanced)', 'Learning to find issues in customer systems and solve them ', 'Identification & Resolution of Client Equipment & Systems (Intermediate)'),
(1011, 'Conduct of Maintenance for Printers/Copiers', 'Basics about how to check and ensure all components of the copier is working well', ''),
(1012, 'Conduct of Maintenance for Printers/Copiers', 'Basics about how to check and ensure all components of the copier is working well', ''),
(1013, 'Sensors, Instrumentation & Control', 'Basics about how to check and ensure all components of the copier is working well', ''),
(1014, 'Foundations of Printer Repairs', 'Basics about how to check and ensure all components of the copier is working well', ''),
(1015, 'Learning to Deal with Difficult Customers', 'Learning how customers think and how to speak with angry customers and appease them', ''),
(1016, 'Introduction to Printing Solutions', 'Learning how to solve problems with printers', ''),
(1017, 'Introduction to Service Management', 'Learning how to provide Excellent Service', ''),
(1018, 'Maintenance Planning & Scheduling', 'Basics of maintenance planning so that engineers are able to schedule timely maintenance before systems are faulty', ''),
(1019, 'Foundations of how Copiers work', 'Basics of how copiers work', '');

-- --------------------------------------------------------

--
-- Table structure for table `trainers`
--

DROP TABLE IF EXISTS `trainers`;
CREATE TABLE IF NOT EXISTS `trainers` (
  `trainers_eid` int(11) NOT NULL AUTO_INCREMENT,
  `trainers_name` char(26) NOT NULL,
  `trainers_email` varchar(1000) NOT NULL,
  `qualifications` varchar(1000) NOT NULL,
  `specialisation` varchar(1000) NOT NULL,
  PRIMARY KEY (`trainers_eid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trainers` 
--

INSERT INTO `trainers` (`trainers_eid`, `trainers_name`, `trainers_email`, `qualifications`,`specialisation`) VALUES
(1, 'Laura Valdez', 'Laura.Valdez@gmail.com', "Bachelor's Degree in Technology Management", 'Foundations of Copier Repair, Customer Service:Soft Skills Fundamentals'),
(2, 'Diana Cummings', 'Diana.Cummings@gmail.com', "Bachelor's Degree in Engineering Technology", 'Basics of Hardware Repair, Basics of Software Repair'),
(3, 'Camilla Parker','Camilla.Parker@gmail.com', "Bachelor's Degree in Information Systems",'Introduction to Printing Solutions'),
(4, 'Christian Manwaring'	,'Christian.Manwaring@gmail.com', "Bachelor's Degree in Customer Relationship Management",'Customer Service Mastery: Delight Every Customer, Introduction to Service Management'),
(5, 'Maxwell Simonds', 'Maxwell.Simonds@gmail.com', "Bachelor's Degree in Computer Engineering", 'Printer Repair: Learn how to test Printer Components'),
(6, 'Francis Rowe',	'Francis.Rowe@gmail.com', "Bachelor's Degree in Electrical Engineering with a Minor in Field Studies", 'Identification & Resolution of Client Equipment & Systems (Beginner), Identification & Resolution of Client Equipment & Systems (Intermediate), Identification & Resolution of Client Equipment & Systems (Advanced)'),
(7, 'Shane Poe', 'Shane.Poe@gmail.com', "Bachelor's Degree in Maintenance Engineering", 'Maintenance Management, Conduct of Maintenance for Printers/Copiers'),
(8, 'Kelsey	Carlson','Kelsey.Carlson@gmail.com', "Bachelor's Degree in Computer Science",'Foundations of Printer Repairs'),
(9, 'Faye	Park','Faye.Park@gmail.com', "Bachelor's Degree in Maintenance Engineering",'Introduction to Printing Solutions'),	
(10, 'Betty	Craig',	'Betty.Craig@gmail.com', "Bachelor's Degree in Customer Service",'Learning to Deal with Difficult Customers');

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

DROP TABLE IF EXISTS `sections`;
CREATE TABLE IF NOT EXISTS `sections` (
  `class_section` varchar(2) NOT NULL,
  `course_code` int(11) NOT NULL,
  `class_size` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `start_time` varchar(8) NOT NULL,
  `end_time` varchar(8) NOT NULL,
  `trainers_eid` int(11) DEFAULT NULL,
  `vacancies` int(11) NOT NULL,
  `trainers_name` char(26) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  
  PRIMARY KEY (`class_section`, `course_code`, `start_date`),
  CONSTRAINT `section_ibfk_1` FOREIGN KEY (`trainers_eid`) REFERENCES `trainers` (`trainers_eid`),
  CONSTRAINT `section_ibfk_2` FOREIGN KEY (`course_code`) REFERENCES `courses` (`course_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `section` 
--

INSERT INTO `sections` (`class_section`, `course_code`, `class_size`, `start_date`, `end_date`, `start_time`, `end_time`, `trainers_eid`, `vacancies`,  `trainers_name`, `duration`) VALUES
('G1', 1001, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 2, 40, 'Diana Cummings', 15),
('G1', 1002, 40, '2021-08-05', '2021-12-10', '08:00', '23:59', 1, 40, 'Laura Valdez', 15),
('G1', 1003, 40,'2021-08-05' ,'2021-12-10' ,'08:00', '23:59', 3, 40, 'Camilla Parker', 15),
('G1', 1004, 40,'2021-08-05' ,'2021-12-10' ,'08:00', '23:59', 3, 40, 'Camilla Parker', 15),
('G1', 1005, 40,'2021-08-05' , '2021-12-10','08:00', '23:59', 1, 40, 'Laura Valdez', 15),
('G1', 1006, 40,'2021-08-05' , '2021-12-10','08:00', '23:59', 1, 40, 'Laura Valdez', 15),
('G1', 1007, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 2, 40, 'Diana Cummings', 20),
('G1', 1008, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 2, 40, 'Diana Cummings', 20),
('G1', 1009, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 1, 40, 'Laura Valdez', 20),
('G1', 1010, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 3, 40, 'Camilla Parker', 25),
('G1', 1011, 40,'2021-08-05',  '2021-12-10','08:00', '23:59', 1, 40, 'Laura Valdez', 25),
('G1', 1012, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 3, 40, 'Camilla Parker', 18),
('G1', 1013, 40, '2021-08-05','2021-12-10' ,'08:00', '23:59', 2, 40, 'Diana Cummings', 22),
('G1', 1014, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 1, 40, 'Laura Valdez', 25),
('G1', 1015, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 2, 40, 'Diana Cummings', 17),
('G1', 1016, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 3, 40, 'Camilla Parker', 27),
('G1', 1017, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 2, 40, 'Diana Cummings', 30),
('G1', 1018, 40, '2021-08-05','2021-12-10' ,'08:00', '23:59', 2, 40, 'Diana Cummings', 26),
('G1', 1019, 40, '2021-08-05','2021-12-10' ,'08:00', '23:59', 2, 40, 'Diana Cummings', 25),
('G2', 1008, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 2, 40, 'Diana Cummings', 20),
('G2', 1009, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 1, 40, 'Laura Valdez', 20),
('G2', 1003, 40, '2021-08-05','2021-12-10' ,'08:00', '23:59', 2, 40, 'Diana Cummings', 15),
('G2', 1005, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 3, 40, 'Camilla Parker', 15),
('G3', 1005, 40, '2021-08-05', '2021-12-10','08:00', '23:59', 3, 40, 'Camilla Parker', 15);

-- --------------------------------------------------------

--
-- Table structure for table `learners`
--

-- CHANGE: Remove course_code and class_section so that one learner can take up multiple courses
 
DROP TABLE IF EXISTS `learners`;
CREATE TABLE IF NOT EXISTS `learners` (
  `learners_eid` int(11) NOT NULL AUTO_INCREMENT,
  `learners_name` char(26) NOT NULL,
  `learners_email` varchar(1000) NOT NULL,
  `learners_qualifications` varchar(1000) NOT NULL,
  `courses_completed` varchar(1000) DEFAULT NULL,

  PRIMARY KEY (`learners_eid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `learners`
--

INSERT INTO `learners` (`learners_eid`, `learners_name`, `learners_email`, `learners_qualifications`, `courses_completed`) VALUES
(1, 'Marcus Foo', 'Marcus.Foo@gmail.com', "Bachelor's Degree in Customer Relationship Management", 'Customer Service:Soft Skills Fundamentals'),
(2, 'Alan Chan', 'Alan.Chan@gmail.com', "Bachelor's Degree in Information Systems", 'Introduction to Printing Solutions'),
(3, 'Hong Seng', 'Hong.Seng@gmail.com', "Bachelor's Degree in Maintenance Engineering", ''),
(4, 'Jennifer Lawrence', 'Jennifer.Lawrence@gmail.com', "Bachelor's Degree in Maintenance Engineering",'Conduct of Maintenance for Printers/Copiers'),
(5, 'June Chow', 'June.Chow@gmail.com',"Bachelor's Degree in Technology Management", ''),
(6, 'Phil Lee', 'Phil.Lee@gmail.com', "Bachelor's Degree in Customer Service",'Maintenance Planning & Scheduling'),
(7, 'Jacob Tok', 'Jacob.Tok@gmail.com', "Bachelor's Degree in Computer Engineering",'Foundations of Printer Repairs'),
(8, 'Yong Hao Koh', 'Yong Hao.Koh@gmail.com', "Bachelor's Degree in Electrical Engineering with a Minor in Field Studies",''),
(9, 'Jones Low', 'Jones.Low@gmail.com',  "Bachelor's Degree in Electrical Engineering", 'Foundations of how Copiers work'),	
(10, 'Linda Teng', 'Linda.Teng@gmail.com', "Bachelor's Degree in Engineering Technology",'');

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

-- CHANGE: Rename enroling table to progress & added chapter_completed column to track if learners completed a lesson before accessing the materials for another lesson

DROP TABLE IF EXISTS `progress`;
CREATE TABLE IF NOT EXISTS `progress` (
  `learners_eid` int(11) NOT NULL,
  `course_code` int(11) NOT NULL,
  `class_section` varchar(2) NOT NULL,
  `chapter_completed` int(100) NOT NULL,

  PRIMARY KEY (`learners_eid`, `course_code`, `class_section`),
  CONSTRAINT `enroling_ibfk_1` FOREIGN KEY (`learners_eid`) REFERENCES `learners` (`learners_eid`),
  CONSTRAINT `enroling_ibfk_2` FOREIGN KEY (`course_code`) REFERENCES `courses` (`course_code`),
  CONSTRAINT `enroling_ibfk_3` FOREIGN KEY (`class_section`) REFERENCES `sections` (`class_section`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

DROP TABLE IF EXISTS `quizzes`;
CREATE TABLE IF NOT EXISTS `quizzes` (
  `quizid` int(11) NOT NULL AUTO_INCREMENT,
  `course_code` int(11) NOT NULL,
  `class_section` varchar(2) NOT NULL,
  `time` int(11) NOT NULL,
  `graded` varchar(1) NOT NULL,
  `chapter` int(11) NOT NULL,
  

  PRIMARY KEY (`quizid`, `course_code`, `class_section`),
  CONSTRAINT `quizzes_ibfk_1` FOREIGN KEY (`course_code`) REFERENCES `courses` (`course_code`),
  CONSTRAINT `quizzes_ibfk_2` FOREIGN KEY (`class_section`) REFERENCES `sections` (`class_section`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `quizquestions`
--

DROP TABLE IF EXISTS `quizquestions`;
CREATE TABLE IF NOT EXISTS `quizquestions` (
  `questionid` int(11) NOT NULL AUTO_INCREMENT,
  `course_code` int(11) NOT NULL,
  `class_section` varchar(2) NOT NULL,
  `quizid` int(11) NOT NULL,
  `questiontext` varchar(1000) NOT NULL,
  `questiontype` varchar(4) NOT NULL,
  `questionoptions` varchar(1000) NOT NULL,
  `answertext` varchar(1000) NOT NULL,
  
  PRIMARY KEY (`questionid`,`course_code`, `class_section`, `quizid`),
  CONSTRAINT `quizquestions_ibfk_1` FOREIGN KEY (`course_code`) REFERENCES `courses` (`course_code`),
  CONSTRAINT `quizquestions_ibfk_2` FOREIGN KEY (`class_section`) REFERENCES `sections` (`class_section`),
  CONSTRAINT `quizquestions_ibfk_3` FOREIGN KEY (`quizid`) REFERENCES `quizzes` (`quizid`)

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

-- CHANGE: Added material_chapter column to link the materials to a lesson (there may be several materials under one lesson)

DROP TABLE IF EXISTS `materials`;
CREATE TABLE IF NOT EXISTS `materials` (
  `material_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_code` int(11) NOT NULL,
  `class_section` varchar(2) NOT NULL,
  `material_name` varchar(100) NOT NULL,
  `material_type` varchar(100) NOT NULL,
  `material_link` varchar(1000) NOT NULL,
  `material_chapter` int(100) NOT NULL,
  
  PRIMARY KEY (`material_id`, `course_code`, `class_section`),
  CONSTRAINT `materials_ibfk_1` FOREIGN KEY (`course_code`) REFERENCES `courses` (`course_code`),
  CONSTRAINT `materials_ibfk_2` FOREIGN KEY (`class_section`) REFERENCES `sections` (`class_section`)

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;