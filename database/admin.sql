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
CREATE DATABASE IF NOT EXISTS `admins` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `admins`;

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
  CONSTRAINT `admins_pk` PRIMARY KEY (`admins_eid`, `admins_name`,`admins_email`)
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
(10, 'Xia Xue', 'xia.xue@gmail.com', '90007655'),