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
      document.body.style.setProperty('--main-green-color', '#00870b');
      document.body.style.setProperty('--main-blue-color', '#0e5797');
      document.body.style.setProperty('--main-border1-color', '#676767');
      document.body.style.setProperty('--main-border2-color', '#4e4e4e');
      document.body.style.setProperty('--np-place-color', '#333335');
      document.body.style.setProperty('--main-color',  '#222225');
      document.body.style.setProperty('--text-color',  'rgb(204, 204, 204)');
      document.body.style.setProperty('--post-color',  '#414141');
    break;
    case 1: 
      theme = 0;
      document.body.style.setProperty('--main-green-color', '#00d413');
      document.body.style.setProperty('--main-blue-color', '#1593ff');
      document.body.style.setProperty('--main-border1-color', '#616161');
      document.body.style.setProperty('--main-border2-color', '#676767');
      document.body.style.setProperty('--np-place-color', '#e0e0e0');
      document.body.style.setProperty('--main-color',  '#fff');
      document.body.style.setProperty('--text-color',  '#000');
      document.body.style.setProperty('--post-color',  '#f0eeff');
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