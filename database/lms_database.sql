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
  `admins_contact` int(11) NOT NULL,
  CONSTRAINT `admins_pk` PRIMARY KEY (`admins_eid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admins_eid`, `admins_name`, `admins_email`, `admins_contact`) VALUES
(1, 'Ding Zheng Xun', 'ding.zheng.xun@gmail.com', '89076688'),
(2, 'Zeng Xin Ling', 'zeng.xin.ling@gmail.com', '90887655'),
(3, 'Serena Lim', 'serena.lim@gmail.com', '86559077'),
(4, 'Rachel Soh', 'rachel.soh@gmail.com', '90554633'),
(5, 'Lee Jun Wei', 'lee.jun.wei@gmail.com', '87990977'),
(6, 'Christopher Low', 'chris.low@gmail.com', '87660909'),
(7, 'Rayn Lee', 'rayn.lee@gmail.com', '90887788'),
(8, 'Taufik Bautisah', 'taufik.bautisah@gmail.com', '90668955'),
(9, 'Linda Quek', 'linda.quek@gmail.com', '87660000'),
(10, 'Xia Xue', 'xia.xue@gmail.com', '90007655');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `course_code` int(11) NOT NULL AUTO_INCREMENT,
  `course_title` char(26) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `prerequisites`  varchar(1000) NULL,
  `class_section` varchar(2) NOT NULL,
  `class_size` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `no._lessons` int(11) NOT NULL,
  `trainer` varchar(1000) DEFAULT NULL,
  `vacancies` int(11) NOT NULL,
  `enrolled` int(11) NOT NULL,
  `in_progress` int(11) NOT NULL,
  `completed` int(11) NOT NULL,
  

  CONSTRAINT `course_pk` PRIMARY KEY (`course_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- section table, add foreign key

--
-- Dumping data for table `courses`
--


INSERT INTO `courses` (`course_code`,`course_title`,`description`,`prerequisites`, `class_section`,`class_size`,`duration`, `no._lessons`,`trainer`,`vacancies`,`enrolled`,`in_progress`,`completed`) VALUES
(1001, 'All About Maintenance', 'Basics about how to check and ensure all components of the copier is working well','', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,0),
(1002, 'Customer Service:Soft Skills Fundamentals', 'Learning to communicate well with customers', '', 'G1', 35, '3 days', 12, 'Christian Manwaring', 34, 1,0,0),
(1003, 'Customer Service Mastery: Delight Every Customer', 'Making every customer happy and satisfied with service provided', '', 'G1', 35, '3 days', 12, 'Shane Poe', 34, 0,1,0),
(1004, 'Foundations of Copier Repair', 'Basics about repairing copiers', 'Foundations of how Copiers work', 'G1', 45, '2 days', 12, 'Laura Valdez', 45, 0,0,0),
(1005, 'Basics of Hardware Repair', 'Basics about how to check and repair hardware that is faulty', '', 'G1', 30, '3 days', 12, 'Laura Valdez', 30, 0,0,0),
(1006, 'Basics of Software Repair', 'Basics about how to check and repair software that is faulty', '', 'G1', 35, '4 days', 12, 'Diana Cummings', 35, 0,0,0),
(1007, 'Printer Repair: Learn how to test Printer Components', 'Basics about printer components and how to test them to track issues that occur', '', 'G1', 35, '3 days', 12, 'Maxwell Simonds', 35, 0,0,0),
(1008, 'Identification & Resolution of Client Equipment & Systems (Beginner)', 'Learning to find issues in customer systems and solve them ', '', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,1),
(1009, 'Identification & Resolution of Client Equipment & Systems (Intermediate)', 'Learning to find issues in customer systems and solve them ', 'Identification & Resolution of Client Equipment & Systems (Beginner)', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,0),
(1010, 'Identification & Resolution of Client Equipment & Systems (Advanced)', 'Learning to find issues in customer systems and solve them ', 'Identification & Resolution of Client Equipment & Systems (Intermediate)', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,0),
(1011, 'Conduct of Maintenance for Printers/Copiers', 'Basics about how to check and ensure all components of the copier is working well', '', 'G1', 35, '3 days', 12, 'Shane Poe', 34, 1,0,0),
(1012, 'Conduct of Maintenance for Printers/Copiers', 'Basics about how to check and ensure all components of the copier is working well', '', 'G2', 35, '3 days', 12, 'Maxwell Simonds', 35, 0,0,0),
(1013, 'Sensors, Instrumentation & Control', 'Basics about how to check and ensure all components of the copier is working well', '', 'G1', 35, '3 days', 12, 'Kelsey Carlson', 35, 0,0,0),
(1014, 'Foundations of Printer Repairs', 'Basics about how to check and ensure all components of the copier is working well', '', 'G1', 35, '3 days', 12, 'Kelsey Carlson', 34, 1,0,0),
(1015, 'Learning to Deal with Difficult Customers', 'Learning how customers think and how to speak with angry customers and appease them', '', 'G1', 50, '3 days', 20, 'Betty	Craig', 50, 0,0,0),
(1016, 'Introduction to Printing Solutions', 'Learning how to solve problems with printers', '', 'G1', 50, '3 days', 20, 'Camilla Parker', 49, 1,0,0),
(1017, 'Introduction to Service Management', 'Learning how to provide Excellent Service', '', 'G1', 50, '3 days', 20, 'Christian Manwaring', 49, 0,1,0),
(1018, 'Maintenance Planning & Scheduling', 'Basics of maintenance planning so that engineers are able to schedule timely maintenance before systems are faulty', '', 'G1', 50, '3 days', 20, 'Faye	Park', 49, 1,0,1),
(1019, 'Foundations of how Copiers work', 'Basics of how copiers work', '', 'G1', 40, '3 days', 20, 'Laura Valdez', 49, 1,0,0);

-- --------------------------------------------------------

--
-- Table structure for table `learners`
--

DROP TABLE IF EXISTS `learners`;
CREATE TABLE IF NOT EXISTS `learners` (
  `learners_eid` int(11) NOT NULL AUTO_INCREMENT,
  `learners_name` char(26) NOT NULL,
  `learners_email` varchar(1000) NOT NULL,
  `learners_qualifications` varchar(1000) NOT NULL,
  `courses_enrolled` varchar(1000) DEFAULT NULL,
  `courses_in_progress` varchar(1000) DEFAULT NULL,
  `courses_completed` varchar(1000) DEFAULT NULL,
  CONSTRAINT `learners_pk` PRIMARY KEY (`learners_eid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `learners`
--

INSERT INTO `learners` (`learners_eid`, `learners_name`, `learners_email`, `learners_qualifications`, `courses_enrolled`,`courses_in_progress`,`courses_completed`) VALUES
(1, 'Marcus Foo', 'Marcus.Foo@gmail.com', "Bachelor's Degree in Customer Relationship Management", 'Customer Service:Soft Skills Fundamentals', 'Introduction to Service Management',''),
(2, 'Alan Chan', 'Alan.Chan@gmail.com', "Bachelor's Degree in Information Systems", 'Introduction to Printing Solutions', '',''),
(3, 'Hong Seng', 'Hong.Seng@gmail.com', "Bachelor's Degree in Maintenance Engineering", '','','Maintenance Planning & Scheduling'),
(4, 'Jennifer Lawrence', 'Jennifer.Lawrence@gmail.com', "Bachelor's Degree in Maintenance Engineering",'Conduct of Maintenance for Printers/Copiers','', ''),
(5, 'June Chow', 'June.Chow@gmail.com',"Bachelor's Degree in Technology Management", '','Total Productive Maintenance', ''),
(6, 'Phil Lee', 'Phil.Lee@gmail.com', "Bachelor's Degree in Customer Service",'Maintenance Planning & Scheduling', '',''),
(7, 'Jacob Tok', 'Jacob.Tok@gmail.com', "Bachelor's Degree in Computer Engineering",'Foundations of Printer Repairs','', ''),
(8, 'Yong Hao Koh', 'Yong Hao.Koh@gmail.com', "Bachelor's Degree in Electrical Engineering with a Minor in Field Studies",'','','Identification & Resolution of Client Equipment & Systems (Beginner)'),
(9, 'Jones Low', 'Jones.Low@gmail.com',  "Bachelor's Degree in Electrical Engineering", 'Foundations of how Copiers work','',''),	
(10, 'Linda	Teng', 'Linda.Teng@gmail.com', "Bachelor's Degree in Engineering Technology",'','','');

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
  `courses_specialisedin` varchar(1000) DEFAULT NULL,
  `courses_teaching` varchar(1000) DEFAULT NULL,
  `courses_taught` varchar(1000) DEFAULT NULL,
  CONSTRAINT `trainers_pk` PRIMARY KEY (`trainers_eid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trainers` 
-- remove teaching n taught
--

INSERT INTO `trainers` (`trainers_eid`, `trainers_name`, `trainers_email`, `qualifications`,`courses_specialisedin`, `courses_teaching`, `courses_taught`) VALUES
(1, 'Laura Valdez', 'Laura.Valdez@gmail.com', "Bachelor's Degree in Technology Management", 'Foundations of Copier Repair, Customer Service:Soft Skills Fundamentals','Customer Service:Soft Skills Fundamentals','Foundations of Copier Repair'),
(2, 'Diana Cummings', 'Diana.Cummings@gmail.com', "Bachelor's Degree in Engineering Technology", 'Basics of Hardware Repair, Basics of Software Repair','',''),
(3, 'Camilla Parker','Camilla.Parker@gmail.com', "Bachelor's Degree in Information Systems",'Introduction to Printing Solutions','Introduction to Printing Solutions',''),
(4, 'Christian Manwaring'	,'Christian.Manwaring@gmail.com', "Bachelor's Degree in Customer Relationship Management",'Customer Service Mastery: Delight Every Customer, Introduction to Service Management','','Customer Service Mastery: Delight Every Customer'),
(5, 'Maxwell Simonds', 'Maxwell.Simonds@gmail.com', "Bachelor's Degree in Computer Engineering", 'Printer Repair: Learn how to test Printer Components','',''),
(6, 'Francis Rowe',	'Francis.Rowe@gmail.com', "Bachelor's Degree in Electrical Engineering with a Minor in Field Studies", 'Identification & Resolution of Client Equipment & Systems (Beginner), Identification & Resolution of Client Equipment & Systems (Intermediate), Identification & Resolution of Client Equipment & Systems (Advanced)','',''),
(7, 'Shane Poe', 'Shane.Poe@gmail.com', "Bachelor's Degree in Maintenance Engineering", 'Maintenance Management, Conduct of Maintenance for Printers/Copiers','Sensors, Instrumentation & Control',''),
(8, 'Kelsey	Carlson','Kelsey.Carlson@gmail.com', "Bachelor's Degree in Computer Science",'Foundations of Printer Repairs','',''),
(9, 'Faye	Park','Faye.Park@gmail.com', "Bachelor's Degree in Maintenance Engineering",'','Foundations of Maintaining Printer Software','Maintenance Planning & Scheduling'),	
(10, 'Betty	Craig',	'Betty.Craig@gmail.com', "Bachelor's Degree in Customer Service",'Learning to Deal with Difficult Customers','Learning to Deal with Difficult Customers','');