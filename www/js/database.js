<!--tx = Transaction-->
function errorHandler (tx,error)
{
    console.log("SQL error: " + tx + " (" + error.code +") " + error.message);
}
var db;
var DB ={

    createDatabase: function(){

        var shortName = "LFGTournament";
        var version = "1.0";
        var displayName = "DB for Mobile final app";
        var dbSize = 2 * 1024 * 1024;


        function dbCreateSuccess() {

            console.info(("Success: Database created Successfully."))
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

    },
    createTables: function () {
        function txFunction(tx) {

            var sqlDropTable = "Drop table if EXISTS user";

            var sqlCreatetype =  "CREATE TABLE IF NOT EXISTS user( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "isConsole VARCHAR(1) NOT NULL);";

            var sqlConsole1 = "INSERT INTO user(isConsole) VALUES('Xbox')";
            var sqlConsole2 = "INSERT INTO user(isConsole) VALUES('Ps4')";
            var sqlConsole3 = "INSERT INTO user(isConsole) VALUES('Pc')";

            var sqlCreatePost = "CREATE TABLE IF NOT EXISTS post( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "username VARCHAR(20) NOT NULL," +
                "isConsole VARCHAR(1) NOT NULL," +
                "description TEXT," +
                "dateAvailable DATE," +
                "FOREIGN KEY(isConsole) REFERENCES user(isConsole));";

            var sqlCreateArray =[sqlDropTable,sqlCreatetype,sqlConsole1,sqlConsole2,sqlConsole3,sqlCreatePost];
            var options =[];

            sqlCreateArray.forEach(function (sql, index) {
                function ArrayLoop() {
                    console.info("Success table " + (index + 1) + " created successfully");
                }

                tx.executeSql(sql, options, ArrayLoop, errorHandler)
            });

        }
        function successCreateTables() {
            console.info(("Success: Table created Successfully."))
        }
        db.transaction(txFunction, errorHandler, successCreateTables);
    },

    dropTables: function () {
        function txFunction(tx) {
            var sqlDropUser = "Drop table if EXISTS user";
            var sqlDropPost = "Drop table if EXISTS post";
            var sqlDropArray =[sqlDropUser,sqlDropPost];
            var options = [];

            sqlDropArray.forEach(function (sql,index) {
                function DropArray() {
                    console.info("Success dropped table" + (index + 1) + " dropped successfully");
                }
                tx.executeSql(sql,options,DropArray,errorHandler)
            });
        }
        function successTransaction() {
            console.info("Success: Drop table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

};