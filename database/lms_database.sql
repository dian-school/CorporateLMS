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
  `class` int(11) NOT NULL,
  `class_size` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `trainers_eid` int(11) DEFAULT NULL,
  `vacancies` int(11) NOT NULL,
  `enrolled` int(11) NOT NULL,
  `in_progress` int(11) NOT NULL,
  `completed` int(11) NOT NULL,
  
  PRIMARY KEY (`class_section`, `course_code`),
  CONSTRAINT `section_ibfk_1` FOREIGN KEY (`trainers_eid`) REFERENCES `trainers` (`trainers_eid`),
  CONSTRAINT `section_ibfk_2` FOREIGN KEY (`course_code`) REFERENCES `courses` (`course_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `sections` (`class_section`, `course_code`, `class_size`, `duration`, `trainers_eid`, `vacancies`) VALUES
('G1', 1008, 40, 3, 1, 40),
('G1', 1009, 40, 3, 1, 40),
('G2', 1003, 40, 3, 2, 40),
('G3', 1005, 40, 3, 3, 40);

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