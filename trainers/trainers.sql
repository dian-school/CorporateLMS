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
CREATE DATABASE IF NOT EXISTS `trainers` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `trainers`;

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
  `courses_taught` varchar(1000) NOT NULL,
  CONSTRAINT `trainers_pk` PRIMARY KEY (`trainers_eid`, `trainers_name`,`trainers_email`)
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
(8, 'Kelsey	Carlson','Kelsey.Carlson@gmail.com', "Bachelor's Degree in Computer Science",'Foundations of Printer Repairs','','');
(9, 'Faye	Park','Faye.Park@gmail.com', "Bachelor's Degree in Maintenance Engineering",'','Foundations of Maintaining Printer Software','Maintenance Planning & Scheduling');	
(10, 'Betty	Craig',	'Betty.Craig@gmail.com', "Bachelor's Degree in Customer Service",'Learning to Deal with Difficult Customers','Learning to Deal with Difficult Customers','');

COMMIT;
-- --------------------------------------------------------
