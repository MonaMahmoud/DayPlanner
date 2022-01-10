//set the first title to current date 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
//create a moment instance to work with
var currentMoment = moment();

//loop on all the input elements to check for past present or future
$("#timeBlocks tr td input").each(function () {
    //if hour is less than current hour (24 format) it is in the past 
    if(($(this).attr("data-hour"))<currentMoment.hour()){
        $(this).addClass("past");
    }
    //if hour is greater than current hour (24 format) it is in the future 
    else if(($(this).attr("data-hour"))>currentMoment.hour()){
        $(this).addClass("future");
    }
    //neither less nor greater, then it is the current hour
    else{
        $(this).addClass("present");
    }
});

//loop to check for previously stored tasks 
$("#timeBlocks tr td input").each(function () {
    //get the task stored with key equals input id
    storedTask = localStorage.getItem(($(this)).attr("id"));
    //if there is a stored value display it
    if(storedTask!="undefined"){
        ($(this)).val(storedTask) ;
    }
});


//event handler for all buttons to store the tasks into local storage
$("button").on("click",function(){
    //prepare the key under which the item will be stored as: "[hour]input";
    var selectedInput = $(this).attr("data-hour")+"input";
    //extract the value to be stored
    item = $('#' + selectedInput).val();
    //set the key and value pair into local storage
    localStorage.setItem(selectedInput,item);
})