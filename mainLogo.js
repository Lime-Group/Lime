$(function() {
  $('.phone').mask('+8(000)000-00-00');
});
////////////////////////////////////////////////////////////////////////////////
var fileName;
function AddAcIcon(fileName){
  const acIcon = document.querySelector('.acIcon');
  const navAcIcon = document.querySelector('.navAcIcon');
  acIcon.style.backgroundImage = "url('sprites/" + fileName + "')";
  navAcIcon.style.backgroundImage = "url('sprites/" + fileName + "')";
}
////////////////////////////////////////////////////////////////////////////////
function AddNPOpen(){
  const main = document.querySelector('.main');
  main.insertAdjacentHTML(
    'beforeend',
    '<div class="AddNPBack"></div>'
 );
 const AddNPBack = document.querySelector('.AddNPBack');
 AddNPBack.insertAdjacentHTML(
   'beforeend',
   '<div class="AddNPPlace"><input class="AddNPImage" type="file" accept="image/jpeg,image/png"><input class="AddNPText" placeholder="Текст записи"><div class="AddNPClose" onclick="AddNPClose()"></div><div class="UploadPost" onclick="AddNPClose()"></div></div>'
);
}
function AddNPClose() {
  const AddNPBack = document.querySelector('.AddNPBack');
  AddNPBack.remove();
}