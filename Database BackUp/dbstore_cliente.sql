-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: dbstore
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `cliente_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `identificacion` varchar(14) NOT NULL,
  `tel` varchar(8) NOT NULL,
  `correo` varchar(75) NOT NULL,
  `direccion_envio` varchar(200) NOT NULL,
  `información_dicional` varchar(200) NOT NULL,
  PRIMARY KEY (`cliente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Kevin Alva','0502199800566','98289289','kevin.alva@unah.hn','Choloma Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(3,'Julio Alvarez','0501198700001','99661155','julio@unah.hn','SPS Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(4,'Kevin Alva','0502199800566','98289289','kevin.alva@unah.hn','Choloma Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(5,'Kevin Alva','0502199800566','98289289','kevin.alva@unah.hn','Choloma Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(6,'Kevin Alva','0502199800566','98289289','kevin.alva@unah.hn','Choloma Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(7,'Kevin Alva','0502199800566','98289289','kevin.alva@unah.hn','Choloma Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(8,'Kevin Alva','0502199800566','98289289','kevin.alva@unah.hn','Choloma Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(9,'Kevin Alva','0502199800566','98289289','kevin.alva@unah.hn','Choloma Cortes Col Ficticia 1 calle 1 ave','Enfrente del Campo Ficticio'),(10,'','','','','',''),(11,'','','','','',''),(12,'','','','','',''),(13,'','','','','',''),(14,'','','','','',''),(15,'','','','','',''),(16,'','','','','',''),(17,'','','','','',''),(18,'','','','','',''),(19,'','','','','',''),(20,'','','','','',''),(21,'','','','','',''),(22,'','','','','',''),(23,'','','','','',''),(24,'','','','','',''),(25,'','','','','',''),(26,'a','1','1','a','a','a'),(27,'a','1','1','a','a','a'),(28,'','','','','',''),(29,'','','','','',''),(30,'','','','','',''),(31,'','','','','',''),(32,'','','','','','');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-29 14:03:41
