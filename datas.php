<?php
// Create session
session_start();

// JSON header
header("Content-type: application/json");

// GET vars
if (isset($_GET)) {

    // Create db
    if (isset($_GET["setDb"])) {
       
        try {
            // Get db settings
            $jsonFile = file_get_contents("settings.json");
            $json = json_decode($jsonFile, TRUE);
            $settings = $json["database"];
            
            // PDO Connection
            $db = new PDO("mysql:host=" . $settings["host"] . ";charset=utf8", $settings["userName"], $settings["password"]);

            // Connection error handling
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Create db if no exist
            $db->query("CREATE DATABASE IF NOT EXISTS `" . $settings["dbName"] . "`");

            // Use db
            $db->exec("USE `" . $settings["dbName"] . "`; GO");

            // Create score table if not exist
            $db->query("CREATE TABLE IF NOT EXISTS `" . $settings["dbName"] . "`.`" . $settings["tableName"] . "` ( 
                `score_id`  SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                `player`    VARCHAR(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
                `score`     SMALLINT NOT NULL,
                `date`      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )");

            // Save db settings in session
            foreach ($settings as $param => $value) {
                $_SESSION[$param] = $value;
            }

            echo json_encode(["success" => true]);

        } 
        catch(PDOException $e) {
            echo json_encode(["success" => false]);
        }
    } 
    else {
        // Get RAW post datas
        $content = trim(file_get_contents("php://input"));
        // Decode content
        $datas = json_decode($content, true);
        // DB Connection
        $db = new PDO("mysql:host=" . $_SESSION["host"] . ";dbname=" . $_SESSION["dbName"] . ";charset=utf8", $_SESSION["userName"], $_SESSION["password"]);

        // Get ranking
        if (isset($_GET["getRanking"])) {

            $sql = "SELECT `" . $_SESSION["tableName"] . "`.`player`, `" . $_SESSION["tableName"] . "`.`score`, DATE_FORMAT(`" . $_SESSION["tableName"] . "`.`date`, '%d-%m-%Y %H:%i:%s') AS `date` FROM `" . $_SESSION["dbName"] . "`.`" . $_SESSION["tableName"] . "` ORDER BY `" . $_SESSION["tableName"] . "`.`score` ASC LIMIT :limit";
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':limit', $datas["limit"], \PDO::PARAM_INT);
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode(["ranking" => $result]);
        }
        // Get player rank
        if (isset($_GET["getRank"])) {

            $sql = "SELECT COUNT(`" . $_SESSION["tableName"] . "`.`score_id`) + 1 AS `rank` FROM `" . $_SESSION["dbName"] . "`.`" . $_SESSION["tableName"] . "` WHERE  `" . $_SESSION["tableName"] . "`.`score` <= :score";
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':score', $datas["score"], \PDO::PARAM_INT);
            $stmt->execute();

            $result = $stmt->fetch();

            echo json_encode(["rank" => $result["rank"]]);
        }
        // Save score
        else if (isset($_GET["setScore"])) {
            // Sanitize player name
            $player = htmlspecialchars(trim($datas["player"]));

            $sql = "INSERT INTO `" . $_SESSION["dbName"] . "`.`" . $_SESSION["tableName"] . "`( `" . $_SESSION["tableName"] . "`.`player`,  `" . $_SESSION["tableName"] . "`.`score`) VALUES (:player, :score)";
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':player', !empty($player) ? $player : NULL, \PDO::PARAM_STR);
            $stmt->bindValue(':score', $datas["score"], \PDO::PARAM_INT);
        
            echo json_encode(["success" => $stmt->execute()]);
        }
    }
} 
    