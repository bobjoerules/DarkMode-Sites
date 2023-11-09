function searchSite() {
  var input, filter, ul, li, a, i, number, txtValue;
  input = document.getElementById('searchapp');
  filter = input.value.toUpperCase();
  number = 0
  ul1 = document.getElementById("all");
  li1 = ul1.getElementsByTagName('li');
  for (i = 0; i < li1.length; i++) {
    a = li1[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().startsWith(filter)) {
      li1[i].style.display = "";
      number = 1;
    } else {
      li1[i].style.display = "none";
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
async function start() {
  var color = Math.floor(Math.random() * 360);
  console.log(`Highlight color set to: hsla(${color}, 25%, 25%, 1)`)
  document.documentElement.style.setProperty(`--color`, `hsla(${color}, 25%, 25%, 1)`);
  await delay(10000);
}
start()
var is_OSX = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var is_iOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);

var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
console.log(navigator.platform)
var is_windows = navigator.platform.indexOf('Win') >=0
var is_iPhone = navigator.platform == "iPhone";
var is_iPod = navigator.platform == "iPod";
var is_iPad = navigator.platform == "iPad";
var is_Android = navigator.platform == "Android";

var mac = document.getElementById('mac');
var windows = document.getElementById('windows');
var iphone = document.getElementById('iphone');
var android = document.getElementById('android');

/* if (!is_OSX) type.innerHTML += "This NOT a Mac or an iOS Device!";
if (is_Mac) type.innerHTML += "This is a Mac Computer!\n";
if (is_iOS) type.innerHTML += "You're using an iOS Device!\n";
if (is_iPhone) type.innerHTML += "This is an iPhone!";
if (is_iPod) type.innerHTML += "This is an iPod Touch!";
if (is_iPad) type.innerHTML += "This is an iPad!";*/

if (!is_iPhone && !is_windows && !is_Android) windows.innerHTML += "Your computer is Not A Windows Computer so some of these programs might not work with DarkMode on your device";
if (!is_iPhone && !is_Mac && !is_Android) mac.innerHTML += "Your computer is Not A Mac Computer so some of these programs might not work with DarkMode on your device";
if (!is_iPhone && !is_Mac && !is_windows) iphone.innerHTML += "Your Phone is Not An iPhone so some of these programs might not work with DarkMode on your device";
if (!is_Android && !is_Mac && !is_windows) android.innerHTML += "Your Phone/Tablet is Not An Android so some of these programs might not work with DarkMode on your device";
