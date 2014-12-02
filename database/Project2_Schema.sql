-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema Project2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Project2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Project2` DEFAULT CHARACTER SET latin1 ;
USE `Project2` ;

-- -----------------------------------------------------
-- Table `Project2`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Project2`.`Category` (
  `categoryId` INT(11) NOT NULL AUTO_INCREMENT,
  `categoryName` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`categoryId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `Project2`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Project2`.`User` (
  `userId` INT(11) NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL DEFAULT NULL,
  `lastName` VARCHAR(45) NULL DEFAULT NULL,
  `emailId` VARCHAR(45) NULL DEFAULT NULL,
  `mobile` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `Project2`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Project2`.`Product` (
  `productId` INT(11) NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(45) NULL DEFAULT NULL,
  `quantity` INT(11) NULL DEFAULT NULL,
  `userId` INT(11) NULL DEFAULT NULL,
  `expectedOffer` VARCHAR(100) NULL DEFAULT NULL,
  `productDesc` VARCHAR(200) NULL DEFAULT NULL,
  `productExpiryDate` DATE NULL DEFAULT NULL,
  `isValid` BIT(1) NULL DEFAULT NULL,
  `categoryId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`productId`),
  INDEX `userId_fk1_idx` (`userId` ASC),
  INDEX `categoryId_fk1_idx` (`categoryId` ASC),
  CONSTRAINT `categoryId_fk1`
    FOREIGN KEY (`categoryId`)
    REFERENCES `Project2`.`Category` (`categoryId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `userId_fk1`
    FOREIGN KEY (`userId`)
    REFERENCES `Project2`.`User` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `Project2`.`Offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Project2`.`Offer` (
  `offerId` INT(11) NOT NULL AUTO_INCREMENT,
  `buyingQty` INT(11) NULL DEFAULT NULL,
  `offeredDetails` VARCHAR(100) NULL DEFAULT NULL,
  `buyerStatus` VARCHAR(45) NULL DEFAULT NULL,
  `sellerStatus` VARCHAR(45) NULL DEFAULT NULL,
  `offerExpiry` DATETIME NULL DEFAULT NULL,
  `productId` INT(11) NOT NULL,
  `buyerId` INT(11) NOT NULL,
  `lastModified` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`offerId`),
  INDEX `fk_Offer_Product1_idx` (`productId` ASC),
  INDEX `fk_Offer_User1_idx` (`buyerId` ASC),
  CONSTRAINT `fk_Offer_Product1`
    FOREIGN KEY (`productId`)
    REFERENCES `Project2`.`Product` (`productId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Offer_User1`
    FOREIGN KEY (`buyerId`)
    REFERENCES `Project2`.`User` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `Project2`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Project2`.`Comment` (
  `commentId` INT(11) NOT NULL AUTO_INCREMENT,
  `commentDesc` VARCHAR(45) NULL DEFAULT NULL,
  `lastUpdated` DATETIME NULL DEFAULT NULL,
  `offerId` INT(11) NOT NULL,
  `userId` INT(11) NOT NULL,
  PRIMARY KEY (`commentId`),
  INDEX `fk_Comment_Offer1_idx` (`offerId` ASC),
  INDEX `fk_Comment_User1_idx` (`userId` ASC),
  CONSTRAINT `fk_Comment_Offer1`
    FOREIGN KEY (`offerId`)
    REFERENCES `Project2`.`Offer` (`offerId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comment_User1`
    FOREIGN KEY (`userId`)
    REFERENCES `Project2`.`User` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `Project2`.`OfferHistory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Project2`.`OfferHistory` (
  `offerHistoryId` INT(11) NOT NULL AUTO_INCREMENT,
  `modified` VARCHAR(105) NULL DEFAULT NULL,
  `lastModified` DATETIME NULL DEFAULT NULL,
  `offerId` INT(11) NOT NULL,
  PRIMARY KEY (`offerHistoryId`),
  INDEX `fk_OfferHistory_Offer1_idx` (`offerId` ASC),
  CONSTRAINT `fk_OfferHistory_Offer1`
    FOREIGN KEY (`offerId`)
    REFERENCES `Project2`.`Offer` (`offerId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
