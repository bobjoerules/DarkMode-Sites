function searchSite() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchapp');
    filter = input.value.toUpperCase();
    ul1 = document.getElementById("Desktop");
    ul2 = document.getElementById("Websites");
    ul3 = document.getElementById("Phone");
    ul4 = document.getElementById("Browser");
    li1 = ul1.getElementsByTagName('li');
    li2 = ul2.getElementsByTagName('li');
    li3 = ul3.getElementsByTagName('li');
    li4 = ul4.getElementsByTagName('li');
  
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
    for (i = 0; i < li2.length; i++) {
        a = li2[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().startsWith(filter)) {
          li2[i].style.display = "";
        } else {
          li2[i].style.display = "none";
        }
      }
    for (i = 0; i < li3.length; i++) {
        a = li3[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().startsWith(filter)) {
          li3[i].style.display = "";
        } else {
          li3[i].style.display = "none";
        }
      }
    for (i = 0; i < li4.length; i++) {
        a = li4[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().startsWith(filter)) {
          li4[i].style.display = "";
        } else {
          li4[i].style.display = "none";
        }
      }
  }
  