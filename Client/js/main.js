$(document).ready(function () {
    //getAllgetAllMatchesUsers();
    operationsListeners();
});

function getAllgetAllMatchesUsers() {
    $.ajax({
        url: `http://localhost:3000/api/match`,
        type: 'GET',
        success: function (match) {
            recreateTable(match);
        }
    });
}

function registerHelper(user) {
    $.ajax({
        url: `http://localhost:3000/api/users`,
        type: 'POST',
        data: user,
        success: function (match) {
            recreateTable(match);
        }
    });
}

function operationsListeners() {
    $("#regVol").click(() => {
        const id = $("#inputId").val();
        const fn = $("#inputFN").val();
        const ln = $("#inputLN").val();
        const email = $("#inputEmail").val();
        const address = $("#inputAddress").val();
        const helpType = $("#helpType").val();
        const location = $("#location").val();
        let arr = [];
        $('input[type=checkbox]').each(function () {
            this.checked ? arr.push($(this).val()) : '';
        });

        const userInfo = {
            id,
            email,
            address,
            time: arr,
            last_name: ln,
            first_name: fn,
            city: location,
            isVolunteer: true,
            help_types: helpType,
        }
        registerHelper(userInfo);
    });
}