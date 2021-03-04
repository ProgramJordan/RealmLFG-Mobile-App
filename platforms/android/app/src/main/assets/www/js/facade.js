function ClearDatabase(){

    var message = confirm("Delete Default Username?");

    if(message){
        DB.dropTables();
        alert("Username and Feed Cleared");
        location.reload(true);
        localStorage.removeItem('username');
		// $("#ClearDatabase").val('');
		// $("#username").val('');
    }
}
// function updateDefaultConsole() {
//
//     var options = [];
//
//     function callback(tx,result) {
//         var htmlCode = "";
//
//         for (var i = 0; i < result.rows.length; i++) {
//             var row = result.rows[i];
//
//
//             if(row['isConsole'] == 'Xbox'){
//
//                 htmlCode += "<option value=" + row['name'] + " selected> " + row['isConsole'] + " </option>";
//             }
//             else{
//                 htmlCode += "<option value=" + row['name'] + " > " + row['isConsole'] + " </option>";
//             }
//             console.info("Type: " + row['type']);
//         }
//
//         $("#platformOption").html(htmlCode);
//         $('#platformOption').selectmenu("refresh");
//     }
//
//     user.selectAll(options, callback);
//     console.info("type dropdown loaded.")
// }
function addPost(){
    if (saveValidate_frmAddPost()) {

        var username = $("#username").val();

        var description = $("#DescTA").val();
        var dateAvailable = $("#dateAvailable").val();
        var isConsole = $("#platformOption").val();

        var console1 = $("#radPs4").prop('checked');;
        var console2 = $("#radXbox").prop('checked');;
        var console3 = $("#radPc").prop('checked');;

        if(console1 === true){
            isConsole ='Ps4'
        }
        else if(console2 === true) {
            isConsole = 'Xbox'
        }
        else  if(console3 === true) {
            isConsole = 'Pc'
        }

        var options = [username, isConsole, description, dateAvailable];

        function callBack() {
            console.info("Success: record inserted successfully");
        }
        post.insert(options,callBack);
        alert("New Post Added");

    }
else{
        console.info("validation failed");
    }
}
function addedPosts(){
    var options =[];
    function callBack(tx,result) {
        var htmlCode = "";

        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows[i];


            console.info("id : " + row['id']);
            console.info("Username : " + row['username']);
            console.info("Platform : " + row['isConsole']);
            console.info("Description : " + row['description']);
            console.info("Date Available : " + row['dateAvailable']);

            htmlCode += "<li>" +
                "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1 style='color: lightseagreen'>Username: " + row['username'] + "</h1>" +
                "<p>Platform: " + row['isConsole'] + "</p>" +
                "<p>Description: " + row['description'] + "</p>" +
                "<p>Date Available: " + row['dateAvailable'] + "</p>" +
                "</a>" +
                "</li>";
        }
        var lv = $('#PostList');
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', '#viewPostPageMore');
        }

        $("#PostList a").on("click", clickHandler);

    }
    post.selectAll(options,callBack);
}
function showPost(){

    var id = localStorage.getItem('id');
    var options =[id];

    function callBack(tx,results) {
        var row = results.rows[0];

        $("#usernameModify").val(row['username']);
        $("#platformOptionModify").val(row['isConsole']);
        if (row['isConsole'] === 'Ps4') {
            $("#radModifyPs4").prop("checked", true);
        }
        if(row['isConsole']=== 'Pc'){
            $("#radModifyPc").prop("checked", true);
        }
        if(row['isConsole']=== 'Xbox'){

            $("#radModifyXbox").prop("checked", true);
        }
        $("#DescTAModify").val(row['description']);
        $("#dateAvailableModify").val(row['dateAvailable']);
        $("#JwEditReviewDateModify").val(row['reviewDate']);

        $("#frmViewPost :radio").checkboxradio("refresh");

    }
    post.select(options, callBack);


}
function updatePost(){

}
function deletePost(){

}