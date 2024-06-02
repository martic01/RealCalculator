let operator = false;
function currentInput() {
    return $("#input-js").val()
}
function secoundCurrentInput() {
    return $("#inputEval").val()
}
function evaluate() {
    let solved = $("#input-js").val();
    let result = eval(solved);
    return result
}
function secoundEvaluate() {
    let solved = $("#inputEval").val();
    let result = eval(solved);
    return result
}

function Text() {
    let text1 = ("(" + evaluate() + ")");

    return text1
}
function Text1() {
    let text1 = ("(" + currentInput() + ")");

    return text1
}

function sinAngle(number) {
    let angleInDegree = number;
    let angleInRadians = angleInDegree * (Math.PI / 180);
    let sine = Math.sin(angleInRadians);
    return sine;

}

function cosAngle(number) {
    let angleInDegree = number;
    let angleInRadians = angleInDegree * (Math.PI / 180);
    let cosine = Math.cos(angleInRadians);
    return cosine;

}


function tanAngle(number) {
    let angleInDegree = number;
    let angleInRadians = angleInDegree * (Math.PI / 180);
    let targent = Math.tan(angleInRadians);
    return targent;

}

function partern1() {
    let text = (sinAngle(secoundEvaluate()));
    return text
}
function partern2() {
    let text = (cosAngle(secoundEvaluate()));
    return text
}
function partern3() {
    let text = (tanAngle(secoundEvaluate()));
    return text
}

function sqRt(number) {
    let root = Math.sqrt(number)
    return root
}


$(document).ready(function () {


    $("#sin").click(function () {
        $("#inputEval").removeClass("fade")
        $("#inputEval").removeClass("fade2")
        let name = $(this).text()

        let run = partern1()
        $("#inputEval").val(run);

        if (currentInput() === "") {
            $("#input-js").val("");
            $("#inputEval").val("");
        }
        else {

            $("#input-js").val(name + Text());
            $("#inputEval").show();

        }

    });
    $("#cos").click(function () {
        $("#inputEval").removeClass("fade")
        $("#inputEval").removeClass("fade2")
        let name = $(this).text()

        let run = partern2()
        $("#inputEval").val(run);

        if (currentInput() === "") {
            $("#input-js").val("");
            $("#inputEval").val("");
        }
        else {

            $("#input-js").val(name + Text());
            $("#inputEval").show()

        }

    });

    $("#tan").click(function () {
        let name = $(this).text()
        $("#inputEval").removeClass("fade")
        $("#inputEval").removeClass("fade2")

        let run = partern3()
        $("#inputEval").val(run);

        if (currentInput() === "") {
            $("#input-js").val("");
            $("#inputEval").val("");
        }
        else {

            $("#input-js").val(name + Text());
            $("#inputEval").show()

        }


    });

    // $("#modulos").click(function () {
    //     $("#input-js").val(currentInput().concat(("%")));

    // });

    $(".nums").click(function () {

        let index = $(this).text();
        $("#input-js").val(currentInput() + index)
        $("#inputEval").val(secoundCurrentInput() + index)
        $("#inputEval").addClass("fade2")
        $("#inputEval").removeClass("opac");


        operator = false

    });

    $(".opra").click(function () {

        let sign = $(this).find("P").text();


        $("#inputEval").addClass("fade")
        $("#inputEval").removeClass("opac");

        if (currentInput() === "") {
            $("#input-js").val("");
            $("#inputEval").val("");

        }

        else if (!operator) {
            $("#input-js").val(currentInput() + sign)
            $("#inputEval").val(secoundCurrentInput() + sign)


            operator = true
        }
    });



    $("#minus").click(function () {

        let index = $(this).text();
        $("#input-js").val(currentInput() + index)
        $("#inputEval").val(secoundCurrentInput() + index)
        $("#inputEval").addClass("fade")
        $("#inputEval").removeClass("opac");

        operator = true

    });

    $("#sq-rt").click(function () {

        let name = $(this).find("p").text()

        let run = sqRt(secoundEvaluate())

        $("#inputEval").val(run);


        if (currentInput() === "") {
            $("#input-js").val("");
            $("#inputEval").val("");
        }
        else if (isNaN(secoundCurrentInput())) {
            $("#input-js").val("invalid format");
            $("#inputEval").val("invalid format");
        }
        else if (secoundCurrentInput() !== run) {
            $("#inputEval").show()
            $("#inputEval").removeClass("fade")
            $("#inputEval").removeClass("fade2")
            $("#input-js").val(name + Text());
        }

        else {

            $("#input-js").val(name + Text());


        }
    });



    $("#equalto").click(function () {

        let ans = $("#inputEval").val(secoundEvaluate());

        if (secoundCurrentInput() !== ans) {
            $("#inputEval").show()
            $("#inputEval").removeClass("fade")
            $("#inputEval").removeClass("fade2")

        }

        else {
            $("#inputEval").hide()
        }

    });

    // REMOVEBUTTONS

    $("#remove").click(function () {

        if (secoundCurrentInput() === "") {
            $("#inputEval").hide()
            $("#input-js").val(currentInput().slice(0, currentInput().length - 1));

        }
        else if (currentInput() !== "invalid format") {
            $("#input-js").val(currentInput().slice(0, currentInput().length - 1));
            $("#inputEval").val(secoundCurrentInput().slice(0, secoundCurrentInput().length - 1));


        }
        else if (currentInput() === "invalid format") {
            $("#inputEval").val("")
            $("#input-js").val("")
            $("#inputEval").hide()
        }
        else {
            $("#inputEval").show()

        }

    });

    $("#clear").click(function () {
        $("#input-js").val("");
        $("#inputEval").val("");
        $("#inputEval").hide()


    });

    $("#input-js").click(function () {


        if (secoundCurrentInput() !== "") {
            $("#inputEval").toggle();
            $("#inputEval").addClass("opac");
        } else {
            $("#inputEval").hide();
        }

    });
    $("#inputEval").click(function () {


        if (secoundCurrentInput() !== "") {
            $("#inputEval").toggle();
            $("#inputEval").addClass("opac");
        } else {
            $("#inputEval").hide();
        }

    });

    $("#buttinON").click(function () {
        $(".calc-body").addClass("firstam");
        $(".inputA").addClass("secoundam");
        $("#spec-button button").addClass("thirdam");
        $(".nums").addClass("fortham");
        $(".clear button").addClass("fiftham");
        $("#equalto").addClass("sixtham");
        $(".opra2").addClass("seventham");
        $("#inputEval").addClass("newcolor");
        $("#buttinOFF").toggle();
        $("#buttinON").toggle();
        $("#buttinOFF").addClass("blink");
        $("#input-js").val("");
        $("#inputEval").val("");
        $("#inputEval").hide();

    });
    $("#buttinOFF").click(function () {
        $(".calc-body").removeClass("firstam");
        $(".inputA").removeClass("secoundam");
        $("#spec-button button").removeClass("thirdam");
        $(".nums").removeClass("fortham");
        $(".clear button").removeClass("fiftham");
        $("#equalto").removeClass("sixtham");
        $(".opra2").removeClass("seventham");
        $("#inputEval").removeClass("newcolor");
        $("#buttinON").toggle();
        $("#buttinOFF").toggle();
        $("#buttinON").addClass("blink");
        $("#input-js").val("");
        $("#inputEval").val("");
        $("#inputEval").hide();

    });

});