



    jQuery('#frm').validate({
          rules: {
           name:"required",
           email:"required",
           password: {

            required:true,
            minlength:5

           }
          }

         , messages: {
             name:"Please Enter Your Name"
          }
    });
