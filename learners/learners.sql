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
CREATE DATABASE IF NOT EXISTS `learners` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `learners`;

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
  CONSTRAINT `learners_pk` PRIMARY KEY (`learners_eid`, `learners_name`,`learners_email`)
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
(8, 'Yong Hao Koh', 'Yong Hao.Koh@gmail.com', "Bachelor's Degree in Electrical Engineering with a Minor in Field Studies",'','','Identification & Resolution of Client Equipment & Systems (Beginner)');
(9, 'Jones Low', 'Jones.Low@gmail.com',  "Bachelor's Degree in Electrical Engineering", 'Foundations of how Copiers work','','');	
(10, 'Linda	Teng', 'Linda.Teng@gmail.com', "Bachelor's Degree in Engineering Technology",'','','');

COMMIT;
-- --------------------------------------------------------
