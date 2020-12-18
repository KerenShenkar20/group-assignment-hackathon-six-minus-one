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
        const id = $("#inputId").val();
        const fn = $("#inputFN").val();
        const ln = $("#inputLN").val();
        const email = $("#inputEmail").val();
    });
}