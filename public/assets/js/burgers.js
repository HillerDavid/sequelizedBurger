$(() => {
    $(".eat-burger").on("click", function (event) {
        let id = $(this).data("id")
        let eatenState = $(this).data("devoured")

        let isDevoured = {
            devoured: eatenState
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function () {
            location.reload()
        })
    })

    $("#burger-submit").on("click", function (event) {
        event.preventDefault()

        let newBurger = {
            burger_name: $("#new-burger").val().trim()
        }

        $("#new-burger").val("")

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload()
        })
    })
})