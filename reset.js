function validateEmail(email) {

     
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let sub =prompt("enter the email id");
    if (emailPattern.test(email)) {
        alert("Verification send to  email address!");
        return false;
    } else {
        alert("Invalid email address!");
        return true;
    }
}