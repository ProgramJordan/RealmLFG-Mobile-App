var user ={
    selectAll: function (options, callBack) {
        function txFunction(tx) {
            var sql = "SELECT * FROM user;";
            tx.executeSql(sql, options, callBack, errorHandler)
        }

        function successType() {
            console.info("Success: Select All type successful");
        }
        db.transaction(txFunction, errorHandler, successType);
    },

};
var post = {

    insert: function(options,callBack){
        function txFunction(tx) {
            var sql = "INSERT INTO post(username,isConsole,description," +
                "dateAvailable) VALUES(?,?,?,?);";

            tx.executeSql(sql,options,callBack,errorHandler)
        }

        function successTransaction() {
            console.info("Success: insert transaction successful");
        }

        db.transaction(txFunction,errorHandler,successTransaction);
    },
    select: function(options,callBack){
        function txFunction(tx) {
            var sql = "SELECT * FROM post WHERE id=?;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    selectAll: function(options,callBack){
        function txFunction(tx) {
            var sql = "SELECT * FROM post;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    // update: function(options, callBack){
    //     function txFunction(tx) {
    //         var sql = "UPDATE post SET username=?, isConsole=?, description=?," +
    //             " dateAvailable=? WHERE id=?;";
    //         tx.executeSql(sql,options,callBack,errorHandler)
    //     }
    //     function successTransaction() {
    //         console.info("Success: Update transaction successful");
    //     }
    //     db.transaction(txFunction,errorHandler,successTransaction);
    //
    // },
    // delete: function(options,callBack){
    //     function txFunction(tx) {
    //         var sql = "DELETE FROM post WHERE id=?;";
    //         tx.executeSql(sql,options,callBack,errorHandler)
    //     }
    //     function successTransaction() {
    //         console.info("Success: Delete transaction successful");
    //     }
    //     db.transaction(txFunction,errorHandler,successTransaction);
    //
    // },



};