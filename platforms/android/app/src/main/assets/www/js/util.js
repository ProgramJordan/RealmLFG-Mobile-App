function saveValidate_frmAddPost(){

    var form = $("#FrmAddPost");
    form.validate({

        rules:{
            username:{
                required:true
            },
            radConsoleAdd:{
                required:true
            },
            DescTA:{
                required:true,

            },
            dateAvailable:{
                required: true
            }

        },
        messages:{
            username:{
                required:"You must enter a username",
            },
            radConsoleAdd:{
                required:"Platform must be selected",

            },
            DescTA:{
                required:"Description",
            },
            dateAvailable:{
                required: "Date Required for coordination"
            }

        }
    });
    return form.valid();
}
function updateValidate_frmModifyPost(){

    var form = $("#frmViewPost");
    form.validate({

        rules:{
            usernameModify:{
                required:true
            },
            radConsoleModifyAdd:{
                required:true
            },
            DescTAModify:{
                required:true,
                min:10
            },
            dateAvailableModify:{
                required: true
            }

        },
        messages:{
            usernameModify:{
                required:"You must enter a username",
            },
            radConsoleModifyAdd:{
                required:"Platform must be selected",

            },
            DescTAModify:{
                required:"Date of birth in required",
                min:"Description to contain over 10 characters."
            },
            dateAvailableModify:{
                required: "Date Required for coordination"
            }

        }
    });
    return form.valid();
}
