$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
var currentMoment = moment();

$("#timeBlocks tr td input").each(function () {
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


$("#timeBlocks tr td input").each(function () {

    storedTask = localStorage.getItem(($(this)).attr("id"));
    //alert(storedTask);
    if(storedTask!="undefined"){
        //alert(($(this)).attr("id"));
        ($(this)).val(storedTask) ;
    }
});



$("button").on("click",function(){
    //console.log($(this).attr("data-hour")+"button");
    var selectedInput = $(this).attr("data-hour")+"input";
    //var selectedHour = $(this).attr("data-hour");
    //console.log(selected);
    item = $('#' + selectedInput).val();
    //console.log($('#' + selected).val());
    localStorage.setItem(selectedInput,item);
})