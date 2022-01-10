$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
var currentMoment = moment();
$("#timeBlocks tr").each(function () {
    if(($(this).attr("data-hour"))<currentMoment.hour()){
        $(this).addClass("past");
    }
    else if(($(this).attr("data-hour"))>currentMoment.hour()){
        $(this).addClass("future");
    }
    else{
        $(this).addClass("present");
    }
});

$("button").on("click",function(){
    //console.log($(this).attr("data-hour")+"button");
    var selectedInput = $(this).attr("data-hour")+"input";
    var selectedHour = $(this).attr("data-hour");
    //console.log(selected);
    item = $('#' + selectedInput).val();
    //console.log($('#' + selected).val());
    localStorage.setItem(selectedHour,item);
})