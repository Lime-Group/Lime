var theme = 0;
////////////////////////////////////////////////////////////////////////////////
const icon = document.getElementById("iconId");
const AddNewPostIMGSize = document.querySelector('.AddNewPostIMG');
const valueIcon = getComputedStyle(icon).getPropertyValue("height");
const AddNewPostIMGSizeValue = getComputedStyle(AddNewPostIMGSize).getPropertyValue("height");
icon.style.width = valueIcon;
AddNewPostIMGSize.style.width = AddNewPostIMGSizeValue;
////////////////////////////////////////////////////////////////////////////////
$(function() {
  $('.phone').mask('+8(000)000-00-00');
});
////////////////////////////////////////////////////////////////////////////////
function chooseTheme(){
  switch(theme){
    case 0: 
      theme = 1;
      const allItems = document.querySelector('*');
      allItems.style.setProperty('--main-green-color', '--main-blue-color');
    break;
    case 1: 
      theme = 0;
      const allItems = document.querySelector('*');
      allItems.style.setProperty('--main-blue-color', '--main-green-color');
    break;
  }
}
////////////////////////////////////////////////////////////////////////////////
var fileName;
function AddAcIcon(fileName){
  const acIcon = document.querySelector('.acIcon');
  const navAcIcon = document.querySelector('.navAcIcon');
  const AddNewPostIMG = document.querySelector('.AddNewPostIMG');
  acIcon.style.backgroundImage = "url('sprites/" + fileName + "')";
  navAcIcon.style.backgroundImage = "url('sprites/" + fileName + "')";
  AddNewPostIMG.style.backgroundImage = "url('sprites/" + fileName + "')";
}
////////////////////////////////////////////////////////////////////////////////
function AddNPOpen(){
  const main = document.querySelector('body');
  main.insertAdjacentHTML(
    'beforeend',
    '<div class="AddNPBack"></div>'
 );
 const AddNPBack = document.querySelector('.AddNPBack');
 AddNPBack.insertAdjacentHTML(
   'beforeend',
   '<div class="AddNPPlace"><textarea placeholder="Что у вас нового?"></textarea><div class="AddLine"><i class="AddNPImageI"><input class="AddNPImage" type="file" style="color:transparent;" accept="image/jpeg,image/png"></i></div><div class="AddNP Close" onclick="AddNPClose()">Закрыть окно</div><div class="AddNP Upload" onclick="AddNPClose()">Создать</div></div>'
);
}
function AddNPClose() {
  const AddNPBack = document.querySelector('.AddNPBack');
  AddNPBack.remove();
}