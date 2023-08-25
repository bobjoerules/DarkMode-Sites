function searchSite() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchapp');
    filter = input.value.toUpperCase();
    ul1 = document.getElementById("all");
    li1 = ul1.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li1.length; i++) {
      a = li1[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().startsWith(filter)) {
        li1[i].style.display = "";
      } else {
        li1[i].style.display = "none";
      }
    }
  }
  