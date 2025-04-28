window.onload = function() {
  document.getElementById("year").textContent = new Date().getFullYear();
  if (!(window.location.pathname === '/catagories/extensions/')){
    var ul, li, a, i;
    ul = document.getElementById("all");
    li = Array.from(ul.getElementsByTagName('li'));
    li.sort(function(a, b) {
      var textA = a.getElementsByTagName("a")[0].textContent || a.getElementsByTagName("a")[0].innerText;
      var textB = b.getElementsByTagName("a")[0].textContent || b.getElementsByTagName("a")[0].innerText;
      return textA.localeCompare(textB);
    });
    ul.innerHTML = "";
    li.forEach(function(item) {
      ul.appendChild(item);
    });
  }else{
    var ul = document.getElementById("all");
    var li = Array.from(ul.getElementsByTagName('li'));
    li.sort(function(a, b) {
        var textA = a.querySelector(".dropdown > .dropbtn").textContent.trim();
        var textB = b.querySelector(".dropdown > .dropbtn").textContent.trim();
        return textA.localeCompare(textB);
    });
    ul.innerHTML = "";
    li.forEach(function(item) {
        ul.appendChild(item);
    });    
  }
  var popup = document.getElementById("popupcontent");
  if ((window.location.pathname === '/') || (window.location.pathname === '/catagories/no-darkmode/')|| (window.location.pathname === '/catagories/open-source/')){
    popup.innerHTML += li.length + ' Websites/Apps'
  }else if ((window.location.pathname === '/catagories/extensions/')){
    popup.innerHTML += li.length + ' Extensions'
  }else if ((window.location.pathname === '/catagories/websites/')){
    popup.innerHTML += li.length + ' Websites'
  }else if ((window.location.pathname === '/catagories/websites/')){
    popup.innerHTML += li.length + ' Websites'
  }else if ((window.location.pathname === '/catagories/profile-websites/')){
    popup.innerHTML += li.length + ' About-Me Websites/Pages'
  }else if ((window.location.pathname === '/catagories/Wiki/')){
    popup.innerHTML += li.length + ' Websites/Pages'
  }else if ((window.location.pathname === '/catagories/pay-for-darkmode/')){
    popup.innerHTML += li.length + ' App'
  }else{
    popup.innerHTML += li.length + ' Apps'
  }
}

function searchSite() {
  var input, filter, ul, li, button, a, i, number, txtValue;
  input = document.getElementById('searchapp');
  filter = input.value.toUpperCase();
  number = 0
  ul1 = document.getElementById("all");
  li1 = ul1.getElementsByTagName('li');
  if (!(window.location.pathname === '/catagories/extensions/')){
    for (i = 0; i < li1.length; i++) {
      a = li1[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().startsWith(filter) || txtValue.toUpperCase().includes(" " + filter)) {
        li1[i].style.display = "";
        number = 1;
      } else {
        li1[i].style.display = "none";
      }
    }
  }else{
    for (i = 0; i < li1.length; i++) {
      a = li1[i].getElementsByTagName("button")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().startsWith(filter) || txtValue.toUpperCase().includes(" " + filter)) {
        li1[i].style.display = "";
        number = 1;
      } else {
        li1[i].style.display = "none";
      }
    }
  }
  if (number === 0) {
    document.getElementById('nothingfound').style.display = "";
  } else {
    document.getElementById('nothingfound').style.display = "none";
  }
}
const allElements = document.querySelectorAll('*');
allElements.forEach(element => {
  element.draggable = false;
});
function delay(milliseconds){
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}
/* async function start() {
  var color = Math.floor(Math.random() * 360);
  console.log(`Highlight color set to: hsla(${color}, 25%, 25%, 1)`)
  document.documentElement.style.setProperty(`--color`, `hsla(${color}, 25%, 25%, 1)`);
  await delay(10000);
}
start()*/
var is_OSX = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var is_iOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);

var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var is_windows = navigator.platform.indexOf('Win') >=0
var is_iPhone = navigator.platform == "iPhone";
var is_iPod = navigator.platform == "iPod";
var is_iPad = navigator.platform == "iPad";
var is_Android = navigator.platform == "Android";

var mac = document.getElementById('mac');
var windows = document.getElementById('windows');
var iphone = document.getElementById('iphone');
var android = document.getElementById('android');
var phone = document.getElementById('phone');

/* if (!is_OSX) type.innerHTML += "This NOT a Mac or an iOS Device!";
if (is_Mac) type.innerHTML += "This is a Mac Computer!\n";
if (is_iOS) type.innerHTML += "You're using an iOS Device!\n";
if (is_iPhone) type.innerHTML += "This is an iPhone!";
if (is_iPod) type.innerHTML += "This is an iPod Touch!";
if (is_iPad) type.innerHTML += "This is an iPad!";*/

try
{
  if (!is_iPhone && !is_windows && !is_Android) windows.innerHTML += "Your computer is Not A Windows Computer so some of these programs might not work with DarkMode on your device";
  if (!is_iPhone && !is_Mac && !is_Android) mac.innerHTML += "Your computer is Not A Mac Computer so some of these programs might not work with DarkMode on your device";
  if (!is_iPhone && !is_Mac && !is_windows) iphone.innerHTML += "Your Phone is Not An iPhone so some of these programs might not work with DarkMode on your device";
  if (!is_Android && !is_Mac && !is_windows) android.innerHTML += "Your Phone/Tablet is Not An Android so some of these programs might not work with DarkMode on your device";
  if (is_iPhone || is_Android ) phone.innerHTML += "Your Phone's browser most likely won't be able to run extensions";
}
catch(e)
{
}
function closePopup() {
  document.getElementById('popup2').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}