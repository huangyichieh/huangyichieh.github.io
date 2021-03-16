function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

var icon_table = document.getElementsByClassName("float_icon_table")[0];
var icon_rows = icon_table.getElementsByClassName("float_icon_row");
var desc_rows = document.getElementsByClassName("icon_desc");
for(var i = 0; i < icon_rows.length; i++) {
    var icon = icon_rows[i].getElementsByTagName("img")[0];
    
    icon.addEventListener(
        'mouseleave',
        function() {
            var desc = desc_rows[i];
            return function() {
                desc.style.visibility = "hidden";
            }
    }());
    icon.addEventListener(
        'mouseover',
        function() {
            var icon_func = icon_rows[i].getElementsByTagName("img")[0];
            var desc = desc_rows[i];
            return function() {
                desc.style.transform = ""; // move back to original position
                var icon_top = getOffset(icon_func).top;
                var icon_left = getOffset(icon_func).left;
                var desc_top = getOffset(desc).top;
                var desc_left = getOffset(desc).left;
                var offset_x = -10;
                var translate_x = icon_left - desc_left - desc.offsetWidth + offset_x;
                var translate_y = icon_top - desc_top + 0.5 * icon_func.offsetHeight - 0.5 * desc.offsetHeight;
                desc.style.transform = "translate(" + translate_x.toString() + "px," + translate_y.toString() + "px)";
                desc.style.visibility = "visible";
            }
    }());
    document.addEventListener(
        'scroll', 
        function() {
            var icon_func = icon_rows[i].getElementsByTagName("img")[0];
            var desc = desc_rows[i];
            return function() {
                desc.style.transform = ""; // move back to original position
                var icon_top = getOffset(icon_func).top;
                var icon_left = getOffset(icon_func).left;
                var desc_top = getOffset(desc).top;
                var desc_left = getOffset(desc).left;
                var offset_x = -10;
                var translate_x = icon_left - desc_left - desc.offsetWidth + offset_x;
                var translate_y = icon_top - desc_top + 0.5 * icon_func.offsetHeight - 0.5 * desc.offsetHeight;
                desc.style.transform = "translate(" + translate_x.toString() + "px," + translate_y.toString() + "px)";
        }
    } ());
}