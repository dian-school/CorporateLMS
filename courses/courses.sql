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
CREATE DATABASE IF NOT EXISTS `courses` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `courses`;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `course_title` int(11) NOT NULL AUTO_INCREMENT,
  `course_code` char(26) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `prerequisites`  varchar(1000) NULL,
  `class` int(11) NOT NULL,
  `class_size` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `no._lessons` int(11) NOT NULL,
  `trainer` varchar(1000) DEFAULT NULL,
  `vacancies` int(11) NOT NULL,
  `enrolled` int(11) NOT NULL,
  `in_progress` int(11) NOT NULL,
  `completed` int(11) NOT NULL,
  

  CONSTRAINT `course_pk` PRIMARY KEY (`course_title`,`course_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--


INSERT INTO `courses` (`course_title`,`course_code`,`description`,`prerequisites`, `class`,`class_size`,`duration`, `no._lessons`,`trainer`,`vacancies`,`enrolled`,`in_progress`,`completed`) VALUES
('All About Maintenance', 1001, 'Basics about how to check and ensure all components of the copier is working well', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,0),
('Customer Service:Soft Skills Fundamentals', 1002, 'Learning to communicate well with customers', '', 'G1', 35, '3 days', 12, 'Christian Manwaring', 34, 1,0,0),
('Customer Service Mastery: Delight Every Customer', 1003, 'Making every customer happy and satisfied with service provided', '', 'G1', 35, '3 days', 12, 'Shane Poe', 34, 0,1,0),
('Foundations of Copier Repair', 1004, 'Basics about repairing copiers', 'Foundations of how Copiers work', 'G1', 45, '2 days', 12, 'Laura Valdez', 45, 0,0,0),
('Basics of Hardware Repair', 1005, 'Basics about how to check and repair hardware that is faulty', '', 'G1', 30, '3 days', 12, 'Laura Valdez', 30, 0,0,0),
('Basics of Software Repair', 1006, 'Basics about how to check and repair software that is faulty', '', 'G1', 35, '4 days', 12, 'Diana Cummings', 35, 0,0,0),
('Printer Repair: Learn how to test Printer Components', 1007, 'Basics about printer components and how to test them to track issues that occur', '', 'G1', 35, '3 days', 12, 'Maxwell Simonds', 35, 0,0,0),
('Identification & Resolution of Client Equipment & Systems (Beginner)', 1008, 'Learning to find issues in customer systems and solve them ', '', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,1),
('Identification & Resolution of Client Equipment & Systems (Intermediate)', 1009, 'Learning to find issues in customer systems and solve them ', 'Identification & Resolution of Client Equipment & Systems (Beginner)', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,0),
('Identification & Resolution of Client Equipment & Systems (Advanced)', 1010, 'Learning to find issues in customer systems and solve them ', 'Identification & Resolution of Client Equipment & Systems (Intermediate)', 'G1', 35, '3 days', 12, 'Shane Poe', 35, 0,0,0),
('Conduct of Maintenance for Printers/Copiers', 1011, 'Basics about how to check and ensure all components of the copier is working well', '', 'G1', 35, '3 days', 12, 'Shane Poe', 34, 1,0,0),
('Conduct of Maintenance for Printers/Copiers', 1011, 'Basics about how to check and ensure all components of the copier is working well', '', 'G2', 35, '3 days', 12, 'Maxwell Simonds', 35, 0,0,0),
('Sensors, Instrumentation & Control', 1012, 'Basics about how to check and ensure all components of the copier is working well', '', 'G1', 35, '3 days', 12, 'Kelsey Carlson', 35, 0,0,0),
('Foundations of Printer Repairs', 1013, 'Basics about how to check and ensure all components of the copier is working well', '', 'G1', 35, '3 days', 12, 'Kelsey Carlson', 34, 1,0,0),
('Learning to Deal with Difficult Customers', 1014, 'Learning how customers think and how to speak with angry customers and appease them', '', 'G1', 50, '3 days', 20, 'Betty	Craig', 50, 0,0,0),
('Introduction to Printing Solutions', 1015, 'Learning how to solve problems with printers', '', 'G1', 50, '3 days', 20, 'Camilla Parker', 49, 1,0,0),
('Introduction to Service Management', 1016, 'Learning how to provide Excellent Service', '', 'G1', 50, '3 days', 20, 'Christian Manwaring', 49, 0,1,0),
('Maintenance Planning & Scheduling', 1017, 'Basics of maintenance planning so that engineers are able to schedule timely maintenance before systems are faulty', '', 'G1', 50, '3 days', 20, 'Faye	Park', 49, 1,0,1),
('Foundations of how Copiers work', 1018, 'Basics of how copiers work', '', 'G1', 40, '3 days', 20, 'Laura Valdez', 49, 1,0,0)
