var post = document.getElementById("post");
post.addEventListener("click", function () {
    var commentBoxValue = document.getElementById("comment-box").value;

    var h3 = document.createElement("h3");
    var text = document.createTextNode(commentBoxValue);
    h3.appendChild(text);
    document.getElementById("unordered").appendChild(h3);
    event.preventDefault();
});