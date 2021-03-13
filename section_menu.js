// Configure section menu
var section_menu = document.getElementById("section_menu");
var shorcut_collection = document.getElementsByClassName("shortcuts");
for (let shortcut of shorcut_collection) {
    var section_name = shortcut.childNodes[1].innerHTML;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(section_name));
    a.href = shortcut.childNodes[1].href;
    li.appendChild(a);
    section_menu.appendChild(li);
}

// Show or hide section menu when clicked
function displaySections() {
    if (section_menu.style.display === 'none') {
        section_menu.style.display = "block";
    } 
    else {
        section_menu.style.display = "none";
    }
}

window.addEventListener('click', function(e){
    // Clicked outside the topics_icon
    if (!document.getElementById('topics_icon').contains(e.target)){
        section_menu.style.display = "none";
    }
});