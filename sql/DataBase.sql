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
  CONSTRAINT `account_logins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=829 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_logins`
--

LOCK TABLES `account_logins` WRITE;
/*!40000 ALTER TABLE `account_logins` DISABLE KEYS */;
INSERT INTO `account_logins` VALUES (819,101,'Logged in successfully','2023-04-17 14:38:01'),(820,101,'Logged in successfully','2023-04-17 14:43:20'),(821,101,'Logged in successfully','2023-04-17 14:44:38'),(822,101,'Logged in successfully','2023-04-17 14:45:01'),(823,101,'Logged in successfully','2023-04-17 14:47:50'),(824,101,'Logged in successfully','2023-04-17 14:51:16'),(825,103,'Logged in successfully','2023-04-17 14:53:49'),(826,103,'Logged in successfully','2023-04-17 14:54:51'),(827,101,'Logged in successfully','2023-04-17 14:57:34'),(828,103,'Logged in successfully','2023-04-17 14:58:51');
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
  CONSTRAINT `admin_changes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=389 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_changes`
--

LOCK TABLES `admin_changes` WRITE;
/*!40000 ALTER TABLE `admin_changes` DISABLE KEYS */;
INSERT INTO `admin_changes` VALUES (384,101,'DELETE: this admin executed query:DELETE from paypal.users WHERE user_id= 102','2023-04-17 14:44:54'),(385,101,'UPDATE USER ROLE: this admin executed query:UPDATE paypal.login_data SET userRole = \"admin\" WHERE user_id = 103;','2023-04-17 14:57:54'),(386,101,'UPDATE USER ROLE: this admin executed query:UPDATE paypal.login_data SET userRole = \"user\" WHERE user_id = 103;','2023-04-17 14:58:13'),(387,101,'BALANCE CHANGE: this admin executed query:UPDATE paypal.balance SET balance = 50 WHERE balance_id = 51','2023-04-17 14:58:29'),(388,101,'EMAIL: this admin sent mail Balance change to boiansinilkov2@abv.bg','2023-04-17 14:58:29');
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
  KEY `balance_ibfk_1` (`user_id`),
  KEY `balance_ibfk_2` (`currency_id`),
  CONSTRAINT `balance_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `balance_ibfk_2` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`currency_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance`
--

LOCK TABLES `balance` WRITE;
/*!40000 ALTER TABLE `balance` DISABLE KEYS */;
INSERT INTO `balance` VALUES (50,101,12,3),(51,103,50,3);
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
  KEY `balance_history_ibfk_1` (`balance_id`),
  CONSTRAINT `balance_history_ibfk_1` FOREIGN KEY (`balance_id`) REFERENCES `balance` (`balance_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance_history`
--

LOCK TABLES `balance_history` WRITE;
/*!40000 ALTER TABLE `balance_history` DISABLE KEYS */;
INSERT INTO `balance_history` VALUES (154,50,15,'2023-04-17 14:47:57','Imported money to the balance',15),(155,50,10,'2023-04-17 14:48:00','Exported money from the balance',5),(156,51,15,'2023-04-17 14:54:03','Imported money to the balance',15),(157,51,5,'2023-04-17 14:54:10','Exported money from the balance',10),(158,51,5,'2023-04-17 14:55:10','Made transaction to user 103',-2),(159,51,5,'2023-04-17 14:55:10','Recieved transaction from user 103',2),(160,51,3,'2023-04-17 14:55:49','Made transaction to user 101',-2),(161,50,12,'2023-04-17 14:55:49','Recieved transaction from user 103',2);
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
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (3,'BGN'),(6,'CAD'),(7,'EUR'),(5,'GBP'),(4,'USD');
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
  KEY `login_data_ibfk_1` (`user_id`),
  CONSTRAINT `login_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_data`
--

LOCK TABLES `login_data` WRITE;
/*!40000 ALTER TABLE `login_data` DISABLE KEYS */;
INSERT INTO `login_data` VALUES (105,101,'admin','$2b$10$fiDkvRJUcHKCnASISZHLVekFLETXf9UWKEJMtPEMqksSQedftRJXa','admin'),(106,103,'user','$2b$10$kYsHRYUo9nbw3oAwC71CV.Q6uWN8ErScLYvCK749s7odjNilYhbOy','user');
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
  `title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`reminder_id`),
  KEY `reminders_ibfk_1` (`user_id`),
  CONSTRAINT `reminders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminders`
--

LOCK TABLES `reminders` WRITE;
/*!40000 ALTER TABLE `reminders` DISABLE KEYS */;
INSERT INTO `reminders` VALUES (205,103,'Happy new year','2023-04-17 17:56:00','0 8 1 1 *',1,'E-wallet:Testing reminders');
/*!40000 ALTER TABLE `reminders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `reminders_with_emails`
--

DROP TABLE IF EXISTS `reminders_with_emails`;
/*!50001 DROP VIEW IF EXISTS `reminders_with_emails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `reminders_with_emails` AS SELECT 
 1 AS `reminder_id`,
 1 AS `remind`,
 1 AS `remind_date`,
 1 AS `remind_interval`,
 1 AS `isReocurrning`,
 1 AS `title`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

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
  KEY `transactions_ibfk_1` (`user_id`),
  KEY `transactions_ibfk_2` (`currency_id`),
  KEY `transactions_ibfk_3` (`reciever_id`),
  KEY `transactions_ibfk_4` (`reciever_balance_id`),
  KEY `transactions_ibfk_5` (`sender_balance_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`currency_id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`reciever_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_4` FOREIGN KEY (`reciever_balance_id`) REFERENCES `balance` (`balance_id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_5` FOREIGN KEY (`sender_balance_id`) REFERENCES `balance` (`balance_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (135,103,'2023-04-17 14:55:10',2,3,103,51,51),(136,103,'2023-04-17 14:55:49',2,3,101,50,51);
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
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (101,'1231231231','This','Account','IsAdmin','Bulgaria, Sofia, Lozenetz 68, entrance A, ap 15','2004-02-17','admin','What is the purpose of this profile','The be admin test profile','boiansinilkov@abv.bg'),(103,'1231231231','User1','User Mid Name','User1','Sofia Poligona Block 60, ap 60','2004-12-15','user','what is the color of your bugatty','The color of my bugatty is copper','boiansinilkov2@abv.bg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'paypal'
--

--
-- Dumping routines for database 'paypal'
--

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
-- Final view structure for view `reminders_with_emails`
--

/*!50001 DROP VIEW IF EXISTS `reminders_with_emails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `reminders_with_emails` AS select `reminders`.`reminder_id` AS `reminder_id`,`reminders`.`remind` AS `remind`,`reminders`.`remind_date` AS `remind_date`,`reminders`.`remind_interval` AS `remind_interval`,`reminders`.`isReocurrning` AS `isReocurrning`,`reminders`.`title` AS `title`,`users`.`email` AS `email` from (`reminders` join `users` on((`reminders`.`user_id` = `users`.`user_id`))) */;
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

-- Dump completed on 2023-04-17 18:02:01
