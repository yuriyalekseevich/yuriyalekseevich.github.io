$(document).ready(function () {


    var timeCalc,
        workPrice,
        timeHolder,
        priceHolder;

    timeHolder = $("#time2");
    priceHolder = $("#price2");

    workPrice = 0;
    timeCalc = '';

    function calculatePrice() {

        var workPriceTypes = $('#list11').val();
        var workPriceDes = $('#list22').val();
        var workPriceAdap = $('#list33').val();

        workPriceTypes = parseInt(workPriceTypes);
        workPriceDes = parseInt(workPriceDes);
        workPriceAdap = parseInt(workPriceAdap);

        workPrice = workPriceTypes + workPriceDes + workPriceAdap;

        priceHolder.text(workPrice + ' рублей');
    };

    function calculateTime() {

        timeCalc = $('option[name=design]:checked', '#calc').data('type');
        timeCalc = timeCalc + $('option[name=design1]:checked', '#calc').data('des');
        timeCalc = timeCalc + $('option[name=design2]:checked', '#calc').data('adaptiv');

        timeHolder.text(timeCalc + ' недели');
    };

    $('#calc select').on('change', function () {
        calculatePrice();
        calculateTime();
    });

    calculatePrice();
    calculateTime();

});

//Плавный скролл и отступ от верхней границы при скролле
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $("html, body").animate({scrollTop: $(valHref).offset().top - 30 + "px"});
});