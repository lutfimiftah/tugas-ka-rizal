const usernameLogin = "lutfimiftah@email.com"
const paswordLogin = "rise123"

const usernameElm = document.getElementById ("usn")
const paswordElm = document.getElementById ("psw")
const btnLgnElm = document.getElementById ("btn")

btnLgnElm.addEventListener ('click', function () {
  const usernameValue = usernameElm.value 
  const paswordValue = paswordElm.value 
  
  //console.log(usernameValue)
  //console.log(paswordValue)

  if (usernameValue == usernameLogin) {
    if (paswordValue == paswordLogin) {
      alert("Berhasil Login")
    } else {
      alert("Silahkan Coba Lagi")
    } 
  } else {
    alert("NetNot!")
  } 
})
