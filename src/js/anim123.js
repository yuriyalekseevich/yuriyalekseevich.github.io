$(function() {
    
    $({numberValue: 0}).animate({numberValue: $(".count1").text()}, {
    
        duration: 5000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        
        step: function(val) {
        
            $(".count1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
            
        }
        
    });
    
});


$(function() {
    
    $({numberValue: 0}).animate({numberValue: $(".count2").text()}, {
    
        duration: 5000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        
        step: function(val) {
        
            $(".count2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
            
        }
        
    });
    
});

$(function() {
    
    $({numberValue: 0}).animate({numberValue: $(".count3").text()}, {
    
        duration: 5000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        
        step: function(val) {
        
            $(".count3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
            
        }
        
    });
    
});

$(function() {
    
    $({numberValue: 0}).animate({numberValue: $(".count4").text()}, {
    
        duration: 5000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",
        
        step: function(val) {
        
            $(".count4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
            
        }
        
    });
    
});