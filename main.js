$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        const newTask = $(".form-input").val();
        
        const existingTask = $("ul li")
            .toArray()
            .some((li) => $(li).text() === newTask);
        if (existingTask) {
            alert("This task has already been added to the list.");
            return;
        }

        const taskList = $(`<li class="has-marker">${newTask}</li>`);
        $(taskList).appendTo("ul");
        $(".form-input").val("");
    });

    $("ul").on("click", "li", function() {
        $(this).toggleClass("strike-through");
    });
});
