function searchSite() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchapp');
  filter = input.value.toUpperCase();
  ul1 = document.getElementById("all");
  li1 = ul1.getElementsByTagName('li');
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