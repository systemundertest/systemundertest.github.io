function showSpoiler(obj) {
  var spoiler = obj.parentNode;
  var inner = spoiler.getElementsByTagName("div")[0];
  if (inner.style.display == "none" || inner.style.display == "") {
    spoiler.className = 'spoiler-expanded';
    inner.style.display = "block";
  } else {
    spoiler.className = 'spoiler-collapsed';
    inner.style.display = "none";
  }
}

