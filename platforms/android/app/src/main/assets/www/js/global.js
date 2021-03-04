//clicks
function ClearDatabase_click() {
    ClearDatabase();
}

function saveBtn_click() {
    saveValidate_frmAddPost();
    addPost();
}

function updateBtn_click() {
    updateValidate_frmModifyPost();
}
//shows
function addPostPage_Show() {
    // updateDefaultConsole();

    $("#username").val( localStorage.getItem("username"));
    console.info("default username loaded");

    $("#DefaultUsername").val( localStorage.getItem("username"));
    console.info("default settings username loaded");

}

function viewPostPage_Show() {
    addedPosts();
}

function viewPostPageMore_show() {
    showPost();
}

function SaveDefaultUser_Click() {

    var username = $("#DefaultUsername").val();
    localStorage.setItem("username" , username );
    console.log("Default username saved.");
    alert("Default username saved.");
}

function DefaultUser_show() {
    $("#DefaultUsername").val( localStorage.getItem("username"));
}

function init() {
    console.info("DOM is ready");

    //page1 home
    $("#addPostPage").on ('pageshow' , addPostPage_Show);

    //page2 post
    $("#saveBtn").on('click', saveBtn_click);
    //page3a display
    $("#viewPostPage").on('pageshow', viewPostPage_Show);
    //page3b modify
    $("#viewPostPageMore").on('pageshow', viewPostPageMore_show);
    $("#UpdateBtn").on('click', updateBtn_click);
    //page4 setting
    $("#ClearDatabase").on('click', ClearDatabase_click);
    $("#SaveDefaultUsername").on('click', SaveDefaultUser_Click);
    $("#DefaultUsername").on('pageshow', DefaultUser_show);
    //page5 about

}
function initDB() {
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating Tables....");
            DB.createTables();
        }
        else {
            console.error("Error: cannot create Db. can not proceed.");
        }

    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). can not proceed.");
    }
}
$(document).ready(function () {
    init();
    initDB();
});