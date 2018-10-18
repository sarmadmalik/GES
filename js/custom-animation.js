$(document).ready(function(){
        

//        $(' .b_companu_l_text h4').waypoint(function(){
//         $('.b_companu_l_text h4').addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
//        
//         $(' .best_company_area img').waypoint(function(){
//         $(this.element).addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
//    
//          $('.best_company_area .slider_btn').waypoint(function(){
//         $('.best_company_area .slider_btn').addClass('animated fadeInLeft')
//           
//        },{offset:'50%'}
//        );
//      $('.feature_content .animation1 ').waypoint(function(){
//         $('.feature_content .animation1').addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
//      $('.feature_content .f_content_item ').waypoint(function(){
//         $('.feature_content .f_content_item').addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
//      $('.feature_content .animation3 ').waypoint(function(){
//         $('.feature_content .animation3').addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
//       $('.main_c_b_title h2 ').waypoint(function(){
//         $('.main_c_b_title h2 ').addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
//    
//     $('.main_c_b_title h2 ').waypoint(function(){
//         $('.main_c_b_title h2 ').addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
//    $('.team_slider2_inner .owl-stage-outer').waypoint(function(){
//         $('.team_slider2_inner .owl-stage-outer ').addClass('animated fadeInUp')
//           
//        },{offset:'50%'}
//        );
    
    $('#form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons:{
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                },
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'This input is not a valid Email address'
                    }
                },
            },
            message: {
                validators: {
                      notEmpty: {
                        message: 'This field is required and cannot be empty'
                    },
                },
            },
        },
        
    }).on('success.form.bv', function(e){
        e.preventDefault();
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        $.post($form.attr('action'), $form.serialize(), function(result){
            console.log(result);
        },'json');
    })//bootstrapvalidator
});



