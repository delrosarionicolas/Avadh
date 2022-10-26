$(function () {
    $("#menu-item-about-us").click(function () {
        fetch("fetch/about-us.html")
            .then(response => response.text())
            .then(data => {
                $("#main-content").html(data)
            })
    })

    // fetch('https://servicios.campus.pe/empleados.php')
    //     .then(response => response.json())
    //     .then(data => {
    //         employeesTable(data)
    //     });

    // function employeesTable(data) {
    //     let contentEmployees = "";
    //     data.map(item => {
    //         console.log(item.nombres)
    //         let row = "<tr>";
    //         row += "<td>" + item.nombres + "</td>"
    //         row += "<td>" + item.apellidos + "</td>"
    //         row += "<td>" + item.ciudad + "</td>"
    //         row += "<td>" + item.pais + "</td>"
    //         row += "<td>" + item.telefono + "</td>"
    //         row += "<tr/>"
    //         contentEmployees += row
    //     });

    //     $("tbody-employees").html(contentEmployees)
    // }


    fetch('https://servicios.campus.pe/empleados.php')
        .then(response => response.json())
        .then(data => {
            employeesTable(data)
        });

    function employeesTable(data) {
        let contentEmployees = "";
        data.map(item => {
            let row = "<tr>";
            row += "<td>" + item.nombres + "</td>";
            row += "<td>" + item.apellidos + "</td>";
            row += "<td>" + item.ciudad + "</td>";
            row += "<td>" + item.pais + "</td>";
            row += "<td>" + item.telefono + "</td>";
            row += "<tr/>";
            contentEmployees += row
        });

        $("#tbody-employees").html(contentEmployees)
    }
})