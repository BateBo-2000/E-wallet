CREATE DATABASE  IF NOT EXISTS `paypal` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `paypal`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: paypal
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_logins`
--

DROP TABLE IF EXISTS `account_logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_logins` (
  `account_logins_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `login_try` varchar(255) DEFAULT NULL,
  `login_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`account_logins_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `account_logins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=267 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_logins`
--

LOCK TABLES `account_logins` WRITE;
/*!40000 ALTER TABLE `account_logins` DISABLE KEYS */;
INSERT INTO `account_logins` VALUES (28,4,'logged in','2023-03-13 21:52:37'),(29,4,'logged in','2023-03-13 21:52:37'),(30,4,'logged in','2023-03-13 21:54:00'),(55,35,'Logged in successfully','2023-03-20 21:28:42'),(56,35,'Logged in successfully','2023-03-20 21:29:33'),(57,35,'Tryed to log in with incorrect password','2023-03-20 21:29:36'),(58,35,'Logged in successfully','2023-03-20 21:29:40'),(59,35,'Logged in successfully','2023-03-20 22:03:41'),(60,35,'Logged in successfully','2023-03-21 18:53:38'),(61,35,'Logged in successfully','2023-03-21 18:55:15'),(62,35,'Logged in successfully','2023-03-21 18:56:23'),(63,35,'Logged in successfully','2023-03-21 19:52:38'),(64,35,'Logged in successfully','2023-03-21 21:37:10'),(65,35,'Logged in successfully','2023-03-21 21:57:33'),(66,35,'Logged in successfully','2023-03-22 22:55:04'),(67,35,'Logged in successfully','2023-03-23 18:37:13'),(68,35,'Logged in successfully','2023-03-23 18:37:27'),(69,35,'Logged in successfully','2023-03-24 21:26:24'),(70,35,'Logged in successfully','2023-03-27 17:23:39'),(71,35,'Logged in successfully','2023-03-28 18:34:55'),(72,35,'Logged in successfully','2023-03-28 18:37:58'),(73,35,'Logged in successfully','2023-03-28 18:41:36'),(74,35,'Logged in successfully','2023-03-28 18:41:39'),(75,35,'Logged in successfully','2023-03-29 17:33:43'),(76,35,'Logged in successfully','2023-04-01 21:06:39'),(77,35,'Logged in successfully','2023-04-03 09:55:28'),(78,35,'Logged in successfully','2023-04-04 12:33:58'),(79,35,'Logged in successfully','2023-04-04 12:35:21'),(80,35,'Logged in successfully','2023-04-04 12:35:43'),(81,35,'Logged in successfully','2023-04-04 12:36:34'),(82,35,'Logged in successfully','2023-04-04 22:19:43'),(83,35,'Logged in successfully','2023-04-04 22:28:00'),(84,35,'Logged in successfully','2023-04-04 22:28:01'),(85,35,'Logged in successfully','2023-04-04 22:28:02'),(86,35,'Logged in successfully','2023-04-04 22:28:02'),(87,35,'Logged in successfully','2023-04-04 22:28:03'),(88,35,'Logged in successfully','2023-04-04 22:28:03'),(89,35,'Logged in successfully','2023-04-04 22:28:04'),(90,35,'Logged in successfully','2023-04-04 22:30:48'),(91,35,'Logged in successfully','2023-04-04 22:35:07'),(92,35,'Logged in successfully','2023-04-05 19:51:14'),(93,35,'Logged in successfully','2023-04-05 20:17:02'),(94,35,'Logged in successfully','2023-04-05 20:25:41'),(95,35,'Logged in successfully','2023-04-05 20:25:41'),(96,35,'Logged in successfully','2023-04-05 20:25:41'),(97,35,'Logged in successfully','2023-04-05 20:25:42'),(98,35,'Logged in successfully','2023-04-05 20:25:42'),(99,35,'Logged in successfully','2023-04-05 20:25:42'),(100,35,'Logged in successfully','2023-04-05 20:28:57'),(101,35,'Logged in successfully','2023-04-05 20:28:57'),(102,35,'Logged in successfully','2023-04-05 20:28:57'),(103,35,'Logged in successfully','2023-04-05 20:29:04'),(104,35,'Logged in successfully','2023-04-05 20:29:04'),(105,35,'Tryed to log in with incorrect password','2023-04-05 20:30:23'),(106,35,'Tryed to log in with incorrect password','2023-04-05 20:30:23'),(107,35,'Tryed to log in with incorrect password','2023-04-05 20:30:24'),(108,35,'Tryed to log in with incorrect password','2023-04-05 20:30:24'),(109,35,'Tryed to log in with incorrect password','2023-04-05 20:30:24'),(110,35,'Tryed to log in with incorrect password','2023-04-05 20:30:29'),(111,35,'Tryed to log in with incorrect password','2023-04-05 20:30:29'),(112,35,'Tryed to log in with incorrect password','2023-04-05 20:30:29'),(113,35,'Logged in successfully','2023-04-05 20:30:31'),(114,35,'Logged in successfully','2023-04-05 20:30:31'),(115,35,'Logged in successfully','2023-04-05 20:30:32'),(116,35,'Tryed to log in with incorrect password','2023-04-05 20:30:34'),(117,35,'Tryed to log in with incorrect password','2023-04-05 20:30:35'),(118,35,'Tryed to log in with incorrect password','2023-04-05 20:30:35'),(119,35,'Tryed to log in with incorrect password','2023-04-05 20:31:25'),(120,35,'Tryed to log in with incorrect password','2023-04-05 20:31:51'),(121,35,'Logged in successfully','2023-04-05 20:33:56'),(122,35,'Logged in successfully','2023-04-05 20:33:57'),(123,35,'Tryed to log in with incorrect password','2023-04-05 20:33:59'),(124,35,'Tryed to log in with incorrect password','2023-04-05 20:34:49'),(125,35,'Logged in successfully','2023-04-05 20:35:05'),(126,35,'Tryed to log in with incorrect password','2023-04-05 20:37:28'),(127,35,'Tryed to log in with incorrect password','2023-04-05 20:37:29'),(128,35,'Tryed to log in with incorrect password','2023-04-05 20:37:30'),(129,35,'Tryed to log in with incorrect password','2023-04-05 20:37:30'),(130,35,'Logged in successfully','2023-04-05 20:37:40'),(131,35,'Tryed to log in with incorrect password','2023-04-05 20:37:49'),(132,35,'Tryed to log in with incorrect password','2023-04-05 20:40:37'),(133,35,'Tryed to log in with incorrect password','2023-04-05 20:41:28'),(134,35,'Tryed to log in with incorrect password','2023-04-05 20:43:38'),(135,35,'Tryed to log in with incorrect password','2023-04-05 20:44:14'),(136,35,'Tryed to log in with incorrect password','2023-04-05 20:44:22'),(137,35,'Tryed to log in with incorrect password','2023-04-05 20:44:23'),(138,35,'Logged in successfully','2023-04-05 21:12:18'),(139,35,'Logged in successfully','2023-04-05 21:12:19'),(140,35,'Logged in successfully','2023-04-05 21:12:21'),(141,35,'Logged in successfully','2023-04-05 21:12:22'),(142,35,'Logged in successfully','2023-04-05 21:12:22'),(143,35,'Logged in successfully','2023-04-05 21:12:23'),(144,35,'Logged in successfully','2023-04-05 21:12:23'),(145,35,'Logged in successfully','2023-04-05 21:13:37'),(146,35,'Logged in successfully','2023-04-05 21:13:47'),(147,35,'Logged in successfully','2023-04-05 21:13:47'),(148,35,'Logged in successfully','2023-04-05 21:13:47'),(149,35,'Logged in successfully','2023-04-05 21:13:48'),(150,35,'Logged in successfully','2023-04-05 21:13:48'),(151,35,'Logged in successfully','2023-04-05 21:13:48'),(152,35,'Logged in successfully','2023-04-05 21:21:16'),(153,35,'Logged in successfully','2023-04-05 21:21:44'),(154,35,'Logged in successfully','2023-04-05 21:21:45'),(155,35,'Logged in successfully','2023-04-05 21:30:06'),(156,35,'Logged in successfully','2023-04-05 21:30:22'),(157,35,'Logged in successfully','2023-04-05 21:30:22'),(158,35,'Logged in successfully','2023-04-05 21:30:23'),(159,35,'Logged in successfully','2023-04-05 21:30:45'),(160,35,'Logged in successfully','2023-04-05 21:31:20'),(161,35,'Logged in successfully','2023-04-05 21:31:57'),(162,35,'Logged in successfully','2023-04-05 21:33:25'),(163,35,'Logged in successfully','2023-04-05 21:33:51'),(164,35,'Logged in successfully','2023-04-05 21:33:52'),(165,35,'Logged in successfully','2023-04-05 21:33:52'),(166,35,'Logged in successfully','2023-04-05 21:33:53'),(167,35,'Logged in successfully','2023-04-05 21:33:53'),(168,35,'Logged in successfully','2023-04-05 21:33:53'),(169,35,'Logged in successfully','2023-04-05 21:33:53'),(170,35,'Logged in successfully','2023-04-05 21:34:41'),(171,35,'Logged in successfully','2023-04-05 22:03:39'),(172,35,'Logged in successfully','2023-04-05 22:04:44'),(173,35,'Logged in successfully','2023-04-05 22:07:59'),(174,35,'Logged in successfully','2023-04-05 22:08:00'),(175,35,'Logged in successfully','2023-04-05 22:08:15'),(176,35,'Logged in successfully','2023-04-05 22:08:15'),(177,35,'Logged in successfully','2023-04-05 22:08:16'),(178,35,'Logged in successfully','2023-04-05 22:17:07'),(179,35,'Tryed to log in with incorrect password','2023-04-05 22:17:24'),(180,35,'Logged in successfully','2023-04-05 22:18:33'),(181,35,'Tryed to log in with incorrect password','2023-04-05 22:18:40'),(182,35,'Tryed to log in with incorrect password','2023-04-05 22:19:03'),(183,35,'Tryed to log in with incorrect password','2023-04-05 22:19:05'),(184,35,'Tryed to log in with incorrect password','2023-04-05 22:19:05'),(185,35,'Tryed to log in with incorrect password','2023-04-05 22:19:05'),(186,35,'Tryed to log in with incorrect password','2023-04-05 22:19:05'),(187,35,'Logged in successfully','2023-04-05 22:19:09'),(188,35,'Tryed to log in with incorrect password','2023-04-05 22:19:11'),(189,35,'Tryed to log in with incorrect password','2023-04-05 22:19:18'),(190,35,'Tryed to log in with incorrect password','2023-04-05 22:19:19'),(191,35,'Tryed to log in with incorrect password','2023-04-05 22:19:29'),(192,35,'Tryed to log in with incorrect password','2023-04-05 22:19:47'),(193,35,'Tryed to log in with incorrect password','2023-04-05 22:20:04'),(194,35,'Tryed to log in with incorrect password','2023-04-05 22:21:03'),(195,35,'Tryed to log in with incorrect password','2023-04-05 22:21:24'),(196,35,'Tryed to log in with incorrect password','2023-04-05 22:21:26'),(197,35,'Logged in successfully','2023-04-05 22:21:34'),(198,35,'Tryed to log in with incorrect password','2023-04-05 22:21:36'),(199,35,'Logged in successfully','2023-04-05 22:28:08'),(200,35,'Logged in successfully','2023-04-05 22:29:26'),(201,35,'Logged in successfully','2023-04-05 22:29:27'),(202,35,'Logged in successfully','2023-04-05 22:29:28'),(203,35,'Logged in successfully','2023-04-05 22:29:28'),(204,35,'Logged in successfully','2023-04-05 22:29:28'),(205,35,'Logged in successfully','2023-04-05 22:29:35'),(206,35,'Logged in successfully','2023-04-05 22:30:08'),(207,35,'Logged in successfully','2023-04-05 22:30:50'),(208,35,'Logged in successfully','2023-04-05 22:31:51'),(209,35,'Logged in successfully','2023-04-05 22:32:38'),(210,35,'Logged in successfully','2023-04-05 22:33:28'),(211,35,'Logged in successfully','2023-04-05 22:33:36'),(212,35,'Logged in successfully','2023-04-05 22:33:36'),(213,35,'Logged in successfully','2023-04-05 22:33:36'),(214,35,'Tryed to log in with incorrect password','2023-04-05 22:33:38'),(215,35,'Tryed to log in with incorrect password','2023-04-05 22:33:40'),(216,35,'Tryed to log in with incorrect password','2023-04-05 22:33:46'),(217,35,'Tryed to log in with incorrect password','2023-04-05 22:33:47'),(218,35,'Tryed to log in with incorrect password','2023-04-05 22:33:47'),(219,35,'Logged in successfully','2023-04-05 22:34:20'),(220,35,'Logged in successfully','2023-04-05 22:41:44'),(221,35,'Logged in successfully','2023-04-05 22:41:53'),(222,35,'Logged in successfully','2023-04-05 22:42:16'),(223,35,'Logged in successfully','2023-04-05 22:43:01'),(224,35,'Logged in successfully','2023-04-05 22:43:04'),(225,35,'Logged in successfully','2023-04-05 22:43:04'),(226,35,'Logged in successfully','2023-04-05 22:43:04'),(227,35,'Logged in successfully','2023-04-05 22:43:04'),(228,35,'Logged in successfully','2023-04-05 22:43:04'),(229,35,'Logged in successfully','2023-04-05 22:44:51'),(230,35,'Logged in successfully','2023-04-05 22:45:01'),(231,35,'Logged in successfully','2023-04-05 22:45:02'),(232,35,'Logged in successfully','2023-04-05 22:45:02'),(233,35,'Logged in successfully','2023-04-05 22:45:02'),(234,35,'Logged in successfully','2023-04-05 22:45:03'),(235,35,'Logged in successfully','2023-04-05 22:45:03'),(236,35,'Logged in successfully','2023-04-05 22:45:03'),(237,35,'Logged in successfully','2023-04-05 22:45:03'),(238,35,'Logged in successfully','2023-04-05 22:45:03'),(239,35,'Logged in successfully','2023-04-05 22:45:03'),(240,35,'Logged in successfully','2023-04-05 22:45:03'),(241,35,'Logged in successfully','2023-04-05 22:45:04'),(242,35,'Logged in successfully','2023-04-05 22:45:05'),(243,35,'Logged in successfully','2023-04-05 22:45:05'),(244,35,'Logged in successfully','2023-04-05 22:45:14'),(245,35,'Logged in successfully','2023-04-05 22:45:15'),(246,35,'Logged in successfully','2023-04-05 22:45:15'),(247,35,'Logged in successfully','2023-04-05 22:45:15'),(248,35,'Logged in successfully','2023-04-05 22:45:15'),(249,35,'Logged in successfully','2023-04-05 22:45:15'),(250,35,'Logged in successfully','2023-04-05 22:45:16'),(251,35,'Logged in successfully','2023-04-05 22:45:16'),(252,35,'Logged in successfully','2023-04-05 22:45:16'),(253,35,'Logged in successfully','2023-04-05 22:45:16'),(254,35,'Logged in successfully','2023-04-05 22:45:17'),(255,35,'Logged in successfully','2023-04-05 22:45:18'),(256,35,'Logged in successfully','2023-04-05 22:45:19'),(257,35,'Logged in successfully','2023-04-05 22:45:34'),(258,35,'Logged in successfully','2023-04-05 22:45:45'),(259,35,'Logged in successfully','2023-04-05 22:45:46'),(260,35,'Logged in successfully','2023-04-05 22:45:54'),(261,35,'Tryed to log in with incorrect password','2023-04-05 22:47:10'),(262,35,'Logged in successfully','2023-04-05 22:47:14'),(263,35,'Logged in successfully','2023-04-05 22:48:48'),(264,35,'Tryed to log in with incorrect password','2023-04-06 01:22:35'),(265,65,'Logged in successfully','2023-04-06 01:39:54'),(266,67,'Logged in successfully','2023-04-06 01:48:16');
/*!40000 ALTER TABLE `account_logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_changes`
--

DROP TABLE IF EXISTS `admin_changes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_changes` (
  `admin_changes_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `change` text NOT NULL,
  `datetime_done` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`admin_changes_id`),
  KEY `user_id_idx1` (`user_id`),
  CONSTRAINT `admin_changes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_changes`
--

LOCK TABLES `admin_changes` WRITE;
/*!40000 ALTER TABLE `admin_changes` DISABLE KEYS */;
INSERT INTO `admin_changes` VALUES (4,4,'asdf','2023-03-21 18:15:29'),(5,4,'asdf','2023-03-21 18:15:32'),(6,4,'asdf','2023-03-21 18:15:32'),(7,4,'asdf','2023-03-21 18:15:32'),(8,4,'asdf','2023-03-21 18:15:33'),(9,35,'SELECT: this admin executed querySelect * FROM users WHERE user_id=4;','2023-03-21 20:04:34'),(12,35,'SELECT: this admin executed query:Select * FROM users WHERE user_id=4;','2023-03-21 20:16:54'),(13,35,'ADDED CURRENCY: this admin executed query:INSERT INTO paypal.currency (currency_name) VALUES (\"YEN\");','2023-03-21 20:28:35'),(14,35,'ADDED CURRENCY: this admin executed query:INSERT INTO paypal.currency (currency_name) VALUES (\"undefined\");','2023-03-21 20:29:17'),(15,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 9','2023-03-21 20:30:39'),(16,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-21 20:30:43'),(17,35,'ADDED CURRENCY: this admin executed query:INSERT INTO paypal.currency (currency_name) VALUES (\"YEN\");','2023-03-21 20:32:49'),(18,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 55','2023-03-21 20:33:59'),(19,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-21 20:34:25'),(20,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 55','2023-03-21 20:34:27'),(21,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 55','2023-03-21 20:34:30'),(22,35,'BALANCE DELETE: this admin executed query:DELETE from paypal.balance WHERE  user_id= 54 AND balance = 55','2023-03-21 20:35:32'),(23,35,'BALANCE DELETE: this admin executed query:DELETE from paypal.balance WHERE balance = 55','2023-03-21 20:36:27'),(24,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:39:53'),(25,35,'EMAIL: this admin sent mail Balance change to [object Promise]','2023-03-21 20:39:54'),(26,35,'UPDATE USER ROLE: this admin executed query:UPDATE paypal.login_data SET userRole = \"admin\" WHERE user_id = 35;','2023-03-21 20:41:44'),(27,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:42:13'),(28,35,'EMAIL: this admin sent mail Balance change to [object Promise]','2023-03-21 20:42:13'),(29,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:43:18'),(30,35,'EMAIL: this admin sent mail Balance change to [object Promise]','2023-03-21 20:43:18'),(31,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:43:53'),(32,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:44:04'),(33,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:44:21'),(34,35,'EMAIL: this admin sent mail Balance change to boiansinilkov@abv.bg','2023-03-21 20:44:21'),(35,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:46:02'),(36,35,'EMAIL: this admin sent mail Balance change to boiansinilkov@abv.bg','2023-03-21 20:46:02'),(37,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-21 20:47:11'),(38,35,'EMAIL: this admin sent mail Balance change to boiansinilkov@abv.bg','2023-03-21 20:47:11'),(39,35,'EMAIL: this admin sent mail testing admin message to boiansinilkov@abv.bg','2023-03-21 20:50:09'),(40,35,'ADDED CURRENCY: this admin executed query:INSERT INTO paypal.currency (currency_name) VALUES (\"YEN\");','2023-03-27 17:45:54'),(41,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-27 17:47:19'),(42,35,'EMAIL: this admin sent mail Balance change to boiansinilkov@abv.bg','2023-03-27 17:47:19'),(43,35,'UPDATE USER ROLE: this admin executed query:UPDATE paypal.login_data SET userRole = \"admin\" WHERE user_id = 35;','2023-03-27 17:47:23'),(44,35,'EMAIL: this admin sent mail testing admin message to boiansinilkov@abv.bg','2023-03-27 17:47:57'),(45,35,'SELECT: this admin executed query:Select * FROM users WHERE \"user_id=4\";','2023-03-27 18:37:27'),(46,35,'SELECT: this admin executed query:Select * FROM users WHERE \"user_id=4\";','2023-03-27 18:37:31'),(47,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 55','2023-03-27 18:38:17'),(48,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-27 18:38:30'),(49,35,'EMAIL: this admin sent mail Balance change to boiansinilkov@abv.bg','2023-03-27 18:38:30'),(50,35,'BALANCE DELETE: this admin executed query:DELETE from paypal.balance WHERE balance = 55','2023-03-27 18:39:08'),(51,35,'BALANCE DELETE: this admin executed query:DELETE from paypal.balance WHERE balance = 55','2023-03-27 18:39:08'),(52,35,'EMAIL: this admin sent mail testing admin message to boiansinilkov@abv.bg','2023-03-27 18:39:24'),(53,35,'UPDATE USER ROLE: this admin executed query:UPDATE paypal.login_data SET userRole = \"admin\" WHERE user_id = 35;','2023-03-27 18:39:27'),(54,35,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 256.05 WHERE user_id = 35','2023-03-27 18:39:29'),(55,35,'EMAIL: this admin sent mail Balance change to boiansinilkov@abv.bg','2023-03-27 18:39:29'),(56,35,'BALANCE DELETE: this admin executed query:DELETE from paypal.balance WHERE balance = 55','2023-03-27 18:39:30'),(57,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 55','2023-03-27 18:39:32'),(58,35,'ADDED CURRENCY: this admin executed query:INSERT INTO paypal.currency (currency_name) VALUES (\"YEN\");','2023-03-27 18:40:33'),(59,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 55','2023-03-27 19:16:51'),(60,35,'EMAIL: this admin sent mail testing admin message to boiansinilkov@abv.bg','2023-03-27 19:21:14'),(61,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 55','2023-03-27 19:21:20'),(62,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 56','2023-03-27 19:21:31'),(63,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 56','2023-03-27 19:21:32'),(64,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 54','2023-03-27 19:21:36'),(65,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 54','2023-03-27 19:21:37'),(66,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 54','2023-03-27 19:21:38'),(67,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 54','2023-03-27 19:21:38'),(68,35,'BALANCE DELETE: this admin executed query:DELETE from paypal.balance WHERE balance = 55','2023-03-27 19:21:46'),(69,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 54','2023-03-27 19:26:09'),(70,35,'BALANCE DELETE: this admin executed query:DELETE from paypal.balance WHERE balance = 55','2023-03-27 19:26:13'),(71,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-27 19:26:17'),(72,35,'ADDED CURRENCY: this admin executed query:INSERT INTO paypal.currency (currency_id, currency_name) VALUES (2,\"YEN\");','2023-03-27 19:46:44'),(73,35,'ADDED CURRENCY FAIL: this admin tried to add currency:YEN','2023-03-27 19:50:09'),(74,35,'ADDED CURRENCY FAIL: this admin tried to add currency:YEN','2023-03-27 19:50:12'),(75,35,'ADDED CURRENCY FAIL: this admin tried to add currency:YEN','2023-03-27 20:00:31'),(76,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-27 20:00:34'),(77,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-27 20:00:36'),(78,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-27 20:00:37'),(79,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 54','2023-03-27 20:00:41'),(80,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-27 20:00:53'),(81,35,'BALANCE CHANGE: this admin executed query:DELETE from paypal.users WHERE user_id= 54','2023-03-27 20:00:57'),(82,35,'SELECT: this admin executed query:Select * FROM users WHERE \"user_id=4\";','2023-03-27 20:47:49'),(83,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-27 20:47:58'),(84,35,'DELETED CURRENCY: this admin executed query:DELETE from paypal.currency WHERE currency_id= 8','2023-03-27 20:48:00');
/*!40000 ALTER TABLE `admin_changes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `balance`
--

DROP TABLE IF EXISTS `balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `balance` (
  `balance_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `balance` double NOT NULL DEFAULT '0',
  `currency_id` int DEFAULT NULL,
  PRIMARY KEY (`balance_id`),
  KEY `user_id` (`user_id`),
  KEY `currency_id` (`currency_id`),
  CONSTRAINT `balance_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `balance_ibfk_2` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`currency_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance`
--

LOCK TABLES `balance` WRITE;
/*!40000 ALTER TABLE `balance` DISABLE KEYS */;
INSERT INTO `balance` VALUES (1,4,10,4),(2,4,10,4),(3,4,79.69,4),(4,4,10,4),(5,4,10,4),(6,5,1245,3),(7,5,1802.5200000000004,3),(8,5,1245,3),(9,4,10,5),(10,6,0,4),(11,6,0,4),(12,6,929.8000000000001,3),(13,6,0,5),(14,6,0,5),(15,6,0,5),(16,6,0,5),(17,35,256.08,5),(18,35,256.05,5),(19,35,256.05,5),(20,35,256.05,3),(21,35,256.05,3),(22,35,0,3);
/*!40000 ALTER TABLE `balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `balance_history`
--

DROP TABLE IF EXISTS `balance_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `balance_history` (
  `balance_history_id` int NOT NULL AUTO_INCREMENT,
  `balance_id` int NOT NULL,
  `amount_after_change` double NOT NULL,
  `date_of_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `reason_for_change` varchar(250) DEFAULT NULL,
  `change_amount` double NOT NULL,
  PRIMARY KEY (`balance_history_id`),
  KEY `balance_id` (`balance_id`),
  CONSTRAINT `balance_history_ibfk_1` FOREIGN KEY (`balance_id`) REFERENCES `balance` (`balance_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance_history`
--

LOCK TABLES `balance_history` WRITE;
/*!40000 ALTER TABLE `balance_history` DISABLE KEYS */;
INSERT INTO `balance_history` VALUES (1,4,1000,'2023-03-15 20:52:47','got laid by prostitute',0),(2,4,1000,'2023-03-15 20:52:48','got laid by prostitute',0),(3,4,1000,'2023-03-15 20:52:49','got laid by prostitute',0),(4,4,1000,'2023-03-15 20:52:49','got laid by prostitute',0),(5,4,850,'2023-03-15 20:52:58','got laid by prostitute',0),(6,4,1050.03,'2023-03-15 21:03:26','got hookers',50),(7,4,1050.03,'2023-03-15 21:03:27','got hookers',50),(8,4,1050.03,'2023-03-15 21:03:28','got hookers',50),(9,4,1050.03,'2023-03-15 21:04:09','got hookers',50),(10,4,1000,'2023-03-15 23:25:41','spent in starbucks',100.45),(11,4,1000,'2023-03-15 23:27:53','spent in starbucks',100.45),(12,4,1000,'2023-03-15 23:27:54','spent in starbucks',100.45),(13,4,1000,'2023-03-15 23:27:54','spent in starbucks',100.45),(14,5,1000,'2023-03-15 23:42:00','spent in starbucks',100.45),(15,5,1000,'2023-03-15 23:42:01','spent in starbucks',100.45),(16,5,1000,'2023-03-15 23:42:02','spent in starbucks',100.45),(17,5,1000,'2023-03-15 23:42:02','spent in starbucks',100.45),(18,5,1000,'2023-03-17 02:08:25','spent in starbucks',100.45),(19,5,1000,'2023-03-20 17:54:39','spent in starbucks',100.45),(20,5,1000,'2023-03-20 21:52:29','spent in starbucks',100.45),(21,5,1000,'2023-03-22 23:29:55','spent in starbucks',100.45),(22,5,1000,'2023-03-23 00:20:29','spent in starbucks',100.45),(23,5,1000,'2023-03-23 00:21:03','spent in starbucks',100.45),(24,5,1000,'2023-03-23 00:21:05','spent in starbucks',100.45),(25,5,1000,'2023-03-23 00:21:41','spent in starbucks',100.45),(27,17,-208.85000000000005,'2023-03-23 00:40:46','Made transaction to user 6',-46.49),(28,12,418.41,'2023-03-23 00:40:46','Recieved transaction from user 35',46.49),(29,17,-255.34000000000006,'2023-03-23 00:40:50','Made transaction to user 6',-46.49),(30,12,464.90000000000003,'2023-03-23 00:40:50','Recieved transaction from user 35',46.49),(31,17,-301.83000000000004,'2023-03-23 00:40:51','Made transaction to user 6',-46.49),(32,12,511.39000000000004,'2023-03-23 00:40:51','Recieved transaction from user 35',46.49),(33,17,-348.32000000000005,'2023-03-23 00:40:51','Made transaction to user 6',-46.49),(34,12,557.88,'2023-03-23 00:40:51','Recieved transaction from user 35',46.49),(35,17,-394.81000000000006,'2023-03-23 00:40:51','Made transaction to user 6',-46.49),(36,12,604.37,'2023-03-23 00:40:51','Recieved transaction from user 35',46.49),(37,17,-441.30000000000007,'2023-03-23 00:40:51','Made transaction to user 6',-46.49),(38,12,650.86,'2023-03-23 00:40:51','Recieved transaction from user 35',46.49),(39,17,-487.7900000000001,'2023-03-23 18:49:35','Made transaction to user 6',-46.49),(40,12,697.35,'2023-03-23 18:49:35','Recieved transaction from user 35',46.49),(41,17,-87.79000000000008,'2023-03-23 18:56:30','Imported money to the balance',100),(42,17,67.20999999999992,'2023-03-23 18:56:45','Imported money to the balance',155),(43,17,222.20999999999992,'2023-03-23 18:56:45','Imported money to the balance',155),(44,17,377.2099999999999,'2023-03-23 18:56:46','Imported money to the balance',155),(45,17,532.2099999999999,'2023-03-23 18:56:46','Imported money to the balance',155),(46,17,687.2099999999999,'2023-03-23 18:56:46','Imported money to the balance',155),(47,17,842.2099999999999,'2023-03-23 19:04:28','Imported money to the balance',155),(48,17,826.7099999999999,'2023-03-23 19:05:26','Imported money to the balance',15.5),(49,17,811.2099999999999,'2023-03-23 19:05:29','Imported money to the balance',15.5),(50,17,795.7099999999999,'2023-03-23 19:05:35','Imported money to the balance',15.5),(51,17,780.2099999999999,'2023-03-23 19:05:35','Imported money to the balance',15.5),(52,17,764.7099999999999,'2023-03-23 19:05:35','Imported money to the balance',15.5),(53,17,919.7099999999999,'2023-03-23 19:08:22','Imported money to the balance',155),(54,17,1074.71,'2023-03-23 19:08:23','Imported money to the balance',155),(55,17,1059.21,'2023-03-23 19:08:24','Exported money from the balance',15.5),(56,17,1043.71,'2023-03-23 19:08:24','Exported money from the balance',15.5),(57,17,1028.21,'2023-03-23 19:08:24','Exported money from the balance',15.5),(58,17,1183.21,'2023-03-23 19:08:45','Imported money to the balance',155),(59,17,1136.72,'2023-03-24 23:14:31','Made transaction to user 6',-46.49),(60,12,743.84,'2023-03-24 23:14:31','Recieved transaction from user 35',46.49),(61,5,1000,'2023-03-27 17:21:09','spent in starbucks',100.45),(62,5,1000,'2023-03-27 17:24:24','spent in starbucks',100.45),(63,5,1000,'2023-03-27 17:24:26','spent in starbucks',100.45),(64,17,1090.23,'2023-03-27 17:28:14','Made transaction to user 6',-46.49),(65,12,790.33,'2023-03-27 17:28:14','Recieved transaction from user 35',46.49),(66,17,411.05,'2023-03-27 17:49:14','Imported money to the balance',155),(67,17,395.55,'2023-03-27 17:49:16','Exported money from the balance',15.5),(68,17,240.55,'2023-03-27 18:39:18','Exported money from the balance',15.5),(69,17,395.55,'2023-03-27 18:39:20','Imported money to the balance',155),(70,17,550.55,'2023-03-27 18:39:22','Imported money to the balance',155),(71,17,240.55,'2023-03-27 19:20:48','Exported money from the balance',15.5),(72,17,395.55,'2023-03-27 19:21:09','Imported money to the balance',155),(73,17,349.06,'2023-03-27 20:04:06','Made transaction to user 6',-46.49),(74,12,836.82,'2023-03-27 20:04:06','Recieved transaction from user 35',46.49),(75,17,302.57,'2023-03-27 20:09:44','Made transaction to user 6',-46.49),(76,12,883.3100000000001,'2023-03-27 20:09:44','Recieved transaction from user 35',46.49),(77,17,256.08,'2023-04-03 21:07:27','Made transaction to user 6',-46.49),(78,12,929.8000000000001,'2023-04-03 21:07:27','Recieved transaction from user 35',46.49),(79,5,1000,'2023-04-03 22:23:07','spent in starbucks',100.45);
/*!40000 ALTER TABLE `balance_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `balance_historycur`
--

DROP TABLE IF EXISTS `balance_historycur`;
/*!50001 DROP VIEW IF EXISTS `balance_historycur`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `balance_historycur` AS SELECT 
 1 AS `balance_history_id`,
 1 AS `balance_id`,
 1 AS `user_id`,
 1 AS `amount_after_change`,
 1 AS `currency_id`,
 1 AS `change_amount`,
 1 AS `date_of_update`,
 1 AS `reason_for_change`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `balcur`
--

DROP TABLE IF EXISTS `balcur`;
/*!50001 DROP VIEW IF EXISTS `balcur`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `balcur` AS SELECT 
 1 AS `balance_id`,
 1 AS `user_id`,
 1 AS `balance`,
 1 AS `currency_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currency` (
  `currency_id` int NOT NULL AUTO_INCREMENT,
  `currency_name` varchar(45) NOT NULL,
  PRIMARY KEY (`currency_id`),
  UNIQUE KEY `UC_cur` (`currency_id`,`currency_name`),
  UNIQUE KEY `UC_cur2` (`currency_name`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (1,'asdf'),(3,'BGN'),(6,'CAD'),(7,'EUR'),(5,'GBP'),(4,'USD'),(2,'YEN');
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `historycur`
--

DROP TABLE IF EXISTS `historycur`;
/*!50001 DROP VIEW IF EXISTS `historycur`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `historycur` AS SELECT 
 1 AS `balance_history_id`,
 1 AS `balance_id`,
 1 AS `user_id`,
 1 AS `amount_after_change`,
 1 AS `currency_name`,
 1 AS `change_amount`,
 1 AS `date_of_update`,
 1 AS `reason_for_change`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `login_data`
--

DROP TABLE IF EXISTS `login_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_data` (
  `login_data_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `username` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `userRole` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`login_data_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `login_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_data`
--

LOCK TABLES `login_data` WRITE;
/*!40000 ALTER TABLE `login_data` DISABLE KEYS */;
INSERT INTO `login_data` VALUES (39,35,'user','$2b$10$7dvvzs3xZb5OtMDnEQNPLuFCQ7m14/bJAcAyFwUN7AVYlGJW0YX4e','admin'),(40,36,'user','$2b$10$MlrNcawcdwT9TtN800TWhu5HTSyoUusvU2.QampYW7QBWqdNYEai6','user'),(41,37,'user','$2b$10$tpZKqqbq722bcHO8LjoTR.jlp96y0zQt/xk68zCuTHPu2P4wK3a6G','user'),(42,38,'user','$2b$10$OYscJvRgOC88JDArAzY1Xu7w5NP65PLkawyZfDUCq.L7tCXkKxsDS','user'),(43,39,'user','$2b$10$OqJAkWduCx3c7w.7uo2Pl.YfUAd6d4JwO8o5ldbPCVIC46obo9sMC','user'),(44,40,'user','$2b$10$15wj/QFHDmLvxyHhjkIKWOo4xQ0bEMBWqDJagebSBIuicsI5IKai6','user'),(45,41,'user','$2b$10$HwJLLLHsb/KrEyEaQj.HeeF2ryVQDmb1i6GPPzboPvU4yEKG1l6.W','user'),(46,42,'user','$2b$10$oZjuiuYignNIP.Rz0y2c4ulPs0dnDT/XmgEvoDhwImuWQaVZ9YDfS','user'),(47,43,'user','$2b$10$pM/DxDidGzZY8Mxwvnbu/.W1PykQl5tNLUUS2ORXsY7OG7Amncp9C','user'),(48,44,'user','$2b$10$i2pAjK4YEpvTISU8JV/m9u9784RQHCfyGeOUyCS4pPvxKSDaG3Lpq','user'),(49,45,'user','$2b$10$zY8w3QDIDUCXssRKqFFvr.uIOfRWbF2DrQd0QSoBhJQvVWcWu9AQC','user'),(50,46,'user','$2b$10$9OKLYkHD2r02yJL3VJZlj.MiW/aZlHUpVlO0vFr6AnWAIl3gNziyC','user'),(51,47,'user','$2b$10$hw2LMa.L2KFEaze541pzpu9kKRtB0kJjYXKA0cQBM4lwtReqgDRtK','user'),(52,48,'user','$2b$10$G1eaqGIaHSZABBtlqgb19umv3wLPR9YHu8WB2gQ2LjGG1StmVeIWe','user'),(53,49,'user','$2b$10$/HJoLLiv7Dd8M1bdbqyaSuoDqFZ.zaWQnSIol.OgPEvmNvtIvt8Je','user'),(54,50,'user','$2b$10$7t9xXJx1oglJbc8EB7HspOoPD4rmb8wPNYjU29fkHNajhyFhRjK1m','user'),(56,52,'user','$2b$10$QHmhypDZ/Ok4E3MurK5lUunsZCmEcqKfioHihkeGbBcIaq1RBb7B.','user'),(57,53,'user','$2b$10$1Gd/WOI1vo/tpHYbKnxs4uoBFs0KaRv6UDckm4Ttp8ejDn0yXbSy2','user'),(58,54,'user','$2b$10$D7uk1gwMz1Lbc/ksmOHaguoivODXvZVofUnBFQJBTfewvPxFG8zYm','user'),(59,55,'user','$2b$10$/2SXTYeCN6PchCKCBMddzejQRLUKUh6OVE6niFxvs6pX74WDsQsMK','user'),(60,56,'user','$2b$10$332IbtBI2KP0HKdGDrdRtOpmJRj3HVa0KuLlA0i86JmWkVRK3sD5.','user'),(61,57,'user','$2b$10$FXKuixhhqwa7HcXv4zwqreQeLgnBsmKH4fFWF9gKpOO0gF8mZ6bhu','user'),(62,58,'user','$2b$10$Bqb9iUWUl2R7lUsrLY55uO/t7emXX.ARHhqlLD3XRwg8nMyhtrV8S','user'),(63,59,'user','$2b$10$hQ0veVe0IDfQ8beFzxxxUu5hKyxeU46jy6.vqAT6S/PN4Bo7zRblG','user'),(64,60,'user','$2b$10$qOKLeLmSyj.O7dlXKJlJHOXOTlQ2ap3TtWPT.u1gcFtpTQA5Q0Lyq','user'),(65,61,'asdaf','$2b$10$oafpYJ.YHCqEbPqsp2cpB.z22HzBDIqyH8eMS87D1dVt3/Vw/eCkK','user'),(66,62,'sadfsaf','$2b$10$yIR2ylEgSwemf25lwjpj6.3OGNxdvMgBWeEre6ZGDKuv6fHrmlAyK','user'),(67,63,'sadfsaf','$2b$10$NxXhm5dh9M96S2RrmOFMO.phMBI1w1eJh9FYWEtDTgbtg2uokVCBO','user'),(68,64,'null','$2b$10$RmUbIaSvKNLbNqorg9xjNeXo13ZSlRBNsOoAMuE06ZbW6/j6Qq9qO','user'),(69,65,'asdf','$2b$10$nIOhXGGBn5/jDYhcLc5XXeqnTm55oRJxliSqQ.2nW5DfFfDNzMBm.','user'),(70,66,'asdf','$2b$10$6BLT1XbZC81bY6SHUsuF3uMNT/94frRH4Cg.OWhGp0CJcc.QlWLeu','user'),(71,67,'Boqn','$2b$10$I7veedvqAf8vWZWjM83GZ.WR.Qu0k5pdvoJZyebDXOy8d1X2QFDqq','user'),(72,68,'null','$2b$10$NhnbxTG9pPK5XHt4POYy7.mqya2VXf5DJWLQHEma2knOeOY89hpwa','user'),(73,69,'null','$2b$10$GT2EhzaSX1yMCBnmhzCibusT6wC8qrPa8Ur7zzWRE7aavz43TUC4.','user'),(74,70,'asdf','$2b$10$QMdur6B6/hmBxk95Xfv9.Oss1p58CeJxAKMFptOmffm3Y/7.Af.v2','user'),(75,71,'asdfsadf','$2b$10$MVlTJnWm5iR4MDBTAAcI0.UKR7UA7uLSIb4I9w4SGXQ5X/qOUiPlW','user');
/*!40000 ALTER TABLE `login_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminders`
--

DROP TABLE IF EXISTS `reminders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminders` (
  `reminder_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `remind` varchar(1000) NOT NULL,
  `remind_date` datetime NOT NULL,
  `remind_interval` varchar(25) DEFAULT NULL,
  `isReocurrning` tinyint(1) NOT NULL,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`reminder_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `reminders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminders`
--

LOCK TABLES `reminders` WRITE;
/*!40000 ALTER TABLE `reminders` DISABLE KEYS */;
INSERT INTO `reminders` VALUES (139,35,'ready for production ig','2023-03-27 20:43:00','* * * * *',1,'Your E-wallet reminder: pay the bills');
/*!40000 ALTER TABLE `reminders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `trans_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `date_done` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `amount` double NOT NULL,
  `currency_id` int DEFAULT NULL,
  `reciever_id` int DEFAULT NULL,
  `reciever_balance_id` int DEFAULT NULL,
  `sender_balance_id` int DEFAULT NULL,
  PRIMARY KEY (`trans_id`),
  KEY `user_id` (`user_id`),
  KEY `currency_id` (`currency_id`),
  KEY `reciever_id` (`reciever_id`),
  KEY `reciver_balance_id` (`reciever_balance_id`),
  KEY `sender_balance_id` (`sender_balance_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`currency_id`),
  CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`reciever_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `transactions_ibfk_4` FOREIGN KEY (`reciever_balance_id`) REFERENCES `balance` (`balance_id`),
  CONSTRAINT `transactions_ibfk_5` FOREIGN KEY (`sender_balance_id`) REFERENCES `balance` (`balance_id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,4,'2023-03-14 20:37:05',1000,4,6,NULL,2),(2,4,'2023-03-14 20:37:09',1000,4,6,NULL,2),(3,4,'2023-03-14 20:37:09',1000,4,6,NULL,2),(4,4,'2023-03-14 20:37:09',1000,4,6,NULL,2),(5,4,'2023-03-14 20:37:09',1000,4,6,NULL,2),(6,4,'2023-03-14 20:37:10',1000,4,6,NULL,2),(7,4,'2023-03-14 20:37:10',1000,4,6,NULL,2),(8,4,'2023-03-14 20:37:10',1000,4,6,NULL,2),(9,4,'2023-03-14 20:37:10',1000,4,6,NULL,2),(10,4,'2023-03-16 00:20:19',50.03,4,6,NULL,2),(11,4,'2023-03-16 00:20:21',50.03,4,6,NULL,2),(12,4,'2023-03-16 00:27:22',10.49,3,6,NULL,2),(13,4,'2023-03-16 21:30:15',15.49,3,6,NULL,2),(14,4,'2023-03-16 21:30:20',16.49,3,6,NULL,2),(15,4,'2023-03-16 21:30:23',16.49,3,6,NULL,2),(16,4,'2023-03-16 21:30:27',6.49,3,6,NULL,2),(17,4,'2023-03-16 21:30:29',26.49,3,6,NULL,2),(18,4,'2023-03-16 21:30:32',46.49,3,6,NULL,2),(19,4,'2023-03-16 21:30:36',46.49,3,6,NULL,2),(20,4,'2023-03-16 21:30:39',46.49,3,6,NULL,2),(21,4,'2023-03-16 21:34:48',46.49,3,6,NULL,2),(22,4,'2023-03-16 21:34:48',46.49,3,6,NULL,2),(23,4,'2023-03-16 21:34:48',46.49,3,6,NULL,2),(24,4,'2023-03-16 21:34:48',46.49,3,6,NULL,2),(25,4,'2023-03-16 21:34:49',46.49,3,6,NULL,2),(26,4,'2023-03-16 21:34:49',46.49,3,6,NULL,2),(27,4,'2023-03-17 02:08:20',46.49,3,6,NULL,2),(28,4,'2023-03-20 17:54:54',46.49,3,6,NULL,2),(29,35,'2023-03-20 21:55:16',46.49,3,6,NULL,2),(30,35,'2023-03-20 21:55:48',46.49,3,6,NULL,2),(31,35,'2023-03-20 21:56:16',46.49,3,6,NULL,2),(32,35,'2023-03-21 21:37:47',46.49,3,6,NULL,2),(33,35,'2023-03-21 21:57:20',46.49,3,6,NULL,2),(34,35,'2023-03-21 21:57:21',46.49,3,6,NULL,2),(35,35,'2023-03-21 21:57:21',46.49,3,6,NULL,2),(36,35,'2023-03-21 21:57:22',46.49,3,6,NULL,2),(37,35,'2023-03-21 21:58:41',46.49,3,6,NULL,2),(38,35,'2023-03-21 21:58:43',46.49,3,6,NULL,2),(39,35,'2023-03-21 21:58:43',46.49,3,6,NULL,2),(40,35,'2023-03-21 21:58:44',46.49,3,6,NULL,2),(69,35,'2023-03-22 23:57:49',46.49,3,6,1,1),(70,35,'2023-03-22 23:58:28',46.49,3,6,1,1),(71,35,'2023-03-22 23:58:30',46.49,3,6,1,1),(72,35,'2023-03-22 23:58:36',46.49,3,6,1,1),(73,35,'2023-03-23 00:13:21',46.49,3,6,1,1),(74,35,'2023-03-23 00:14:06',46.49,3,6,1,1),(75,35,'2023-03-23 00:15:45',46.49,3,6,1,1),(76,35,'2023-03-23 00:16:17',46.49,3,6,1,1),(77,35,'2023-03-23 00:16:56',46.49,3,6,1,1),(78,35,'2023-03-23 00:18:16',46.49,3,6,1,1),(79,35,'2023-03-23 00:24:38',46.49,3,6,12,1),(80,35,'2023-03-23 00:25:10',46.49,3,6,12,1),(81,35,'2023-03-23 00:25:52',46.49,3,6,12,1),(82,35,'2023-03-23 00:27:07',46.49,3,6,12,1),(83,35,'2023-03-23 00:27:10',46.49,3,6,12,1),(84,35,'2023-03-23 00:27:26',46.49,3,6,12,1),(85,35,'2023-03-23 00:28:37',46.49,3,6,12,17),(86,35,'2023-03-23 00:29:15',46.49,3,6,12,17),(87,35,'2023-03-23 00:30:18',46.49,3,6,12,17),(88,35,'2023-03-23 00:31:02',46.49,3,6,12,17),(89,35,'2023-03-23 00:31:21',46.49,3,6,12,17),(90,35,'2023-03-23 00:31:31',46.49,3,6,12,17),(91,35,'2023-03-23 00:31:34',46.49,3,6,12,17),(92,35,'2023-03-23 00:36:57',46.49,3,6,12,17),(93,35,'2023-03-23 00:38:06',46.49,3,6,12,17),(94,35,'2023-03-23 00:40:46',46.49,3,6,12,17),(95,35,'2023-03-23 00:40:50',46.49,3,6,12,17),(96,35,'2023-03-23 00:40:51',46.49,3,6,12,17),(97,35,'2023-03-23 00:40:51',46.49,3,6,12,17),(98,35,'2023-03-23 00:40:51',46.49,3,6,12,17),(99,35,'2023-03-23 00:40:51',46.49,3,6,12,17),(100,35,'2023-03-23 18:49:35',46.49,3,6,12,17),(101,35,'2023-03-24 23:14:31',46.49,3,6,12,17),(102,35,'2023-03-27 17:28:14',46.49,3,6,12,17),(103,35,'2023-03-27 20:04:06',46.49,3,6,12,17),(104,35,'2023-03-27 20:09:44',46.49,3,6,12,17),(105,35,'2023-04-03 21:07:27',46.49,3,6,12,17);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `transcur`
--

DROP TABLE IF EXISTS `transcur`;
/*!50001 DROP VIEW IF EXISTS `transcur`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `transcur` AS SELECT 
 1 AS `trans_id`,
 1 AS `user_id`,
 1 AS `sender_balance_id`,
 1 AS `amount`,
 1 AS `currency_name`,
 1 AS `reciever_id`,
 1 AS `reciever_balance_id`,
 1 AS `date_done`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `egn` varchar(10) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `mid_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) NOT NULL,
  `address` varchar(250) NOT NULL,
  `date_of_birth` date NOT NULL,
  `role` varchar(5) NOT NULL DEFAULT 'user',
  `secret_question` varchar(100) NOT NULL,
  `secret_answer` varchar(45) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`role`),
  UNIQUE KEY `users_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'1234567890','TOm','second','Doe','sofia adress 1','1990-12-09','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(5,'1234567890','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(6,'1234567890','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(7,'1234567890','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(8,'1234567890','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(9,'1234567890','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(18,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(19,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(21,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(22,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(23,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(24,'3456275347','TOm','second','Doe','sofia adress 1','1990-12-10','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(28,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(29,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(30,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(31,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(32,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(33,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(35,'3456275347','TOm','second','Doe','sofia adress 1','1990-12-10','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(36,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(37,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(38,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(39,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(40,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(41,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(42,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(43,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(44,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(45,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','boiansinilkov@abv.bg'),(46,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(47,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(48,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(49,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(50,'3456275347','John','second','Doe','sofia adress 1','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(52,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(53,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(54,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(55,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(56,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(57,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(58,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(59,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(60,'3456275347','John','second','Doe','sofia adress 1asdfasdfasfsd','1990-12-12','user','secret querstion 1','secret answer 1','myemail@abv.bg'),(61,'1234567890','asdfasdf','sadfsadf','asdfa','asdfsadfsadfsadfsadf','2000-04-06','user','sadfsadfasdfsadfsadfsadf','asdfsadfsadfsadfsadf','asdfsadf@gmail.com'),(62,'1234567890','asdfasdf','sadfsadf','asdfa','asdfsadfsadfsadfsadf','2000-04-06','user','sadfsadfasdfsadfsadfsadf','asdfsadfsadfsadfsadf','asdf@gamil.com'),(63,'1234567890','asdfasdf','sadfsadf','asdfa','asdfsadfsadfsadfsadf','2000-04-06','user','sadfsadfasdfsadfsadfsadf','asdfsadfsadfsadfsadf','asdf@gamil.com'),(64,'1212121212','TEST11','TEST11','TEST11','asdfsadfasdfsadfasdf','2001-02-06','user','asdfasdfasdfsadfsadfasdfsadf','asdfasdfasdfasdfasdfasdfasdf','TEST@gmail.com'),(65,'2323232323','sadfsadf','sadfsadf','sadfsadf','sadfasdfsadfsadf','2000-03-06','user','sadfasdfsadsadfasdfasdfasdf','asdfsadfsadfsadfsadfsdaffasdf','sadf@gmail.com'),(66,'1231231231','teastast','sadfasdfasdf','dsfsadfasdf','asdfsadfsafasfsadfsadfsa','1999-02-06','user','fsadfsadfasdfasdfsadf','sadfsadfasdfsadf','safdsfsa@gmail.com'),(67,'1231231231','Boyan','Pavlov','Sinilkov','Sofia, Poligona block 3 ap 9','2004-03-22','user','Where am i bodrn - city?','I am bor in Varna','boiansinilkov@gmail.com'),(68,'1231231231','asdfsadf','sadfsadf','sadfsadf','asdfsadfasdfasdfadsf','2001-02-27','user','asdfasdfasdfadsfasdf','sadfasdfasdfsadfasdfads','sadfas@gmail.com'),(69,'1212121212','sadfsadf','sadfsadf','sadfsadf','sadfsadfadsfsadfasdfasfasf','2002-06-06','user','fadsfasdfadsfadsfdsaf','sadfadsfasdfsadfasdfsadfsad','asdf@gmail.com'),(70,'1231231231','sadfsadf','sdafsadf','sadffsadf','asdffasdfadsfsadfasdfasdf','1999-10-06','user','sadfasfsadfasdfsadfasdfas','dfadsfasdfasdfsadfasdfsadfsad','sadf@gmail.com'),(71,'1231231231','sadfsadf','sadfsadfsadf','sadfsadfasdf','asdfasdfasdfsadfasdfasdfsad','2003-10-06','user','fadsfasdfsdafsadfasdfasd','fasdfsadfasdfasdf','asdf@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `balance_historycur`
--

/*!50001 DROP VIEW IF EXISTS `balance_historycur`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `balance_historycur` AS select `t`.`balance_history_id` AS `balance_history_id`,`t`.`balance_id` AS `balance_id`,`c`.`user_id` AS `user_id`,`t`.`amount_after_change` AS `amount_after_change`,`c`.`currency_id` AS `currency_id`,`t`.`change_amount` AS `change_amount`,`t`.`date_of_update` AS `date_of_update`,`t`.`reason_for_change` AS `reason_for_change` from (`balance_history` `t` join `balance` `c` on((`t`.`balance_id` = `c`.`balance_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `balcur`
--

/*!50001 DROP VIEW IF EXISTS `balcur`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `balcur` AS select `t`.`balance_id` AS `balance_id`,`t`.`user_id` AS `user_id`,`t`.`balance` AS `balance`,`c`.`currency_name` AS `currency_name` from (`balance` `t` join `currency` `c` on((`t`.`currency_id` = `c`.`currency_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `historycur`
--

/*!50001 DROP VIEW IF EXISTS `historycur`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `historycur` AS select `t`.`balance_history_id` AS `balance_history_id`,`t`.`balance_id` AS `balance_id`,`d`.`user_id` AS `user_id`,`t`.`amount_after_change` AS `amount_after_change`,`c`.`currency_name` AS `currency_name`,`t`.`change_amount` AS `change_amount`,`t`.`date_of_update` AS `date_of_update`,`t`.`reason_for_change` AS `reason_for_change` from ((`balance_historycur` `t` join `currency` `c` on((`t`.`currency_id` = `c`.`currency_id`))) join `users` `d` on((`t`.`user_id` = `d`.`user_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `transcur`
--

/*!50001 DROP VIEW IF EXISTS `transcur`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `transcur` AS select `t`.`trans_id` AS `trans_id`,`t`.`user_id` AS `user_id`,`t`.`sender_balance_id` AS `sender_balance_id`,`t`.`amount` AS `amount`,`c`.`currency_name` AS `currency_name`,`t`.`reciever_id` AS `reciever_id`,`t`.`reciever_balance_id` AS `reciever_balance_id`,`t`.`date_done` AS `date_done` from (`transactions` `t` join `currency` `c` on((`t`.`currency_id` = `c`.`currency_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-06  5:03:33
