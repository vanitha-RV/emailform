function checkform(){
  if(document.getElementById("un").value == 'entrielevate' && document.getElementById("pw").value == 'admin123' ){
    window.location.href=("https://vanitha-rv.github.io/calculator/");  
    alert("Login Successful");
      
  }else{
      alert("Access denied. Valid username and password is required.");
      return;
  }
}

