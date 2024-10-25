
$(document).ready(function(){
    function validateEmail(email) {
        let emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
        return emailReg.test(email);
    }
    

    $('#registerForm').submit(e => {
        let val = $('.email input').val();
        console.log(val);
        if ( !validateEmail(val) ) {
            e.preventDefault();
            $('#exampleModalToggle').modal('show');
            $('.email').addClass('error')
        }
    });
})
