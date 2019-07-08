document.getElementById("parent-list").addEventListener("click", function(event) {
    if(event.target && event.target.nodeName == "LI") {
        console.log(`List item ${event.target.id.replace("post-", "")} was clicked.`);
    }
});

document.getElementById("myDiv").addEventListener("click", function(event) {
    if(event.target && event.target.matches("a.classA")) {
        console.log("Anchor element cĺicked");
    }
})