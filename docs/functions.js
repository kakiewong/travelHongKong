$(document).ready(function () {
    $("button").click(function () {
        let parent = this.parentNode
        let sibling = parent.nextElementSibling
        $(parent).addClass("front--fade-out")
        $(sibling).removeClass("hide")
        setTimeout(function () {
            $(parent).addClass("hide")
            $(sibling).addClass("back--fade-in")
        }, 500)
    })
})