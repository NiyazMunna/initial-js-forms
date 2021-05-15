 function myFunction(){
      let name = document.getElementById("name").value;
      let birthday = document.querySelector("#dob").value;
      let regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
      let regexTest = regex.test(birthday);
      let useBirthday =  new Date(birthday.replace(regex, "$3-$2-$1"));
      let todayYear = (new Date()).getFullYear();
      let below18 = new Date();
      below18.setFullYear( todayYear - 18);
      let below100 = new Date();
      below100.setFullYear(todayYear - 100);
      if (!regexTest) { 
        dobErrMsg.innerHTML = "enter date of birth format dd/mm/yyyy";
        
        if(!name){
          nameErrMsg.innerHTML = "please enter the name";
        }
        else{
            nameErrMsg.innerHTML = "";
        }
      } else if (isNaN(useBirthday)) {
        dobErrMsg.innerHTML = "date of birth is invalid";
        if(!name){
            nameErrMsg.innerHTML = "please enter the name";
          }
          else{
              nameErrMsg.innerHTML = "";
          }
      } else if (useBirthday > below18) {
        dobErrMsg.innerHTML = "neengal 18 keel ullavar";
        if(!name){
            nameErrMsg.innerHTML = "please enter the name";
          }
          else{
              nameErrMsg.innerHTML = "";
          }
      } else if (useBirthday > below100 && useBirthday < below18) {
        dobErrMsg.innerHTML = "neengal 18 lirundhu 100 vayadhukku ulla var";
        if(!name){
            nameErrMsg.innerHTML = "please enter the name";
          }
          else{
              nameErrMsg.innerHTML = "";
          }
      } else if (useBirthday < below100) {
        dobErrMsg.innerHTML = "neengal vayasanavargal";
        if(!name){
            nameErrMsg.innerHTML = "please enter the name";
          }
          else{
              nameErrMsg.innerHTML = "";
          }
      } else {
        dobErrMsg.innerHTML = "";
      }
   

  }