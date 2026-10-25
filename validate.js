<!--//
var max=1800
function addChar(){
des1=document.MyForm.message.value.length
document.MyForm.lendes.value=des1
}
function checkName() {
  if(document.MyForm.name.value) {
    var oneYearHence = new Date((new Date()).getTime() + 1000*60*60*24*365);
    document.cookie="VN_FORUM_USERNAME=" + document.MyForm.name.value + 
                    "; expires=" + oneYearHence.toGMTString();
    return true;
  } else { alert("Укажите Ваше им\я!"); document.MyForm.name.focus(); return false;
  }
}
function checkEmail() {
 if(document.MyForm.email.value == "") {
/*    alert("Hе указан E-Mail адрес!"); document.MyForm.email.focus(); return false; */
   return true;
  } else {

  if (document.MyForm.email.value.indexOf('@', 0) == -1 ||
      document.MyForm.email.value.indexOf('.', 0) == -1)
  { alert("\nВы указали не правильный E-mail адрес."); document.MyForm.email.focus(); return false; }
    return true;
  }
}
function checkTitle() {
 if(document.MyForm.title.value == "") {
    alert("Вы не указали заголовок сообщени\я!"); document.MyForm.title.focus(); return false;
  } else {
    return true;
  }
}
function checkMessage() {
 if(document.MyForm.message.value == "") {
    alert("Вы ни чего не написали!"); document.MyForm.message.focus(); return false;
  } else {
 if(document.MyForm.message.value.length > max ) {
    alert("Текст сообщения должен быть не более 1800 знаков!\nЕсли же Вам необходимо послать сообщение большего размера,\nто пошлите его по E-Mail discus@vnab.kirov.ru"); document.MyForm.message.focus(); return false;
 }
    return true;
  }
}
function registerNow() {
  return (checkTitle() && checkName() && checkEmail() && checkMessage());
}
//-->
