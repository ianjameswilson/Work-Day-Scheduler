$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        console.log(value)

        var time = $(this).parent().attr("id");
        console.log(time);

        localStorage.setItem(time, value);
    });

    function hourTracker () {
        var currentTime = moment().hours();
        
        $(".time-block").each(function() {
            var hourNumber = parseInt($(this).attr("id").split("-")[1]); 
            console.log(hourNumber);
            
            if (hourNumber < currentTime) {
                $(this).addClass("past");
            } else if (hourNumber === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourTracker();

    var timeCheck = setInterval(hourTracker, 15000);

    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
