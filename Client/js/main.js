$(document).ready(function () {
    //getAllMatches();
    operationsListeners();
});

function getAllgetAllMatchesUsers() {
    $.ajax({
        url: '',
        type: 'GET',
        success: function (match) {
            recreateTable(match);
        }
    });
}

function recreateTable(match) {

}

function operationsListeners() {
    $("#regVol").click(() => {
  
    });
}