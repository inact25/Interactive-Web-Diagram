$('#myModal').modal({show: false})

function ShowPop(labelID) {
    document.getElementsByClassName("CategoryModal")[0].setAttribute("id", labelID);
    $('.CategoryModal').modal('show');
    console.log(labelID)
}