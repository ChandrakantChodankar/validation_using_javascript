function validation() {
    // Fetches the data from the form
    var fn = document.getElementById("fname").value;
    var mn = document.getElementById("mname").value;
    var ln = document.getElementById("lname").value;
    var br = document.getElementsByName("branch");
    var gen = document.getElementsByName("gender");
    var lan = document.getElementsByName("language");
    var em = document.getElementById("ema").value;
    var pas = document.getElementById("pass").value;
    var se = document.getElementById("sem").value;
    var st = document.getElementById("state").value;
    var dt = document.getElementById("dob").value;
    var fi = document.getElementById("upload").value;

    // Pattern matching
    var np = /^([a-zA-Z]+)$/;
    var emp = /^([a-zA-Z0-1]+)$/;
    var co = /^([a-zA-Z0-9\.\-\_]+)@([a-z]+)\.([a-zA-Z]+)\.([a-zA-Z]+)$/;
    var sep = /^[1-8]$/;

    // checking validation
    if (np.test(fn && mn && ln) == false) {
        alert("Name must be letter");
    }
    else if ((fn.trim()) && (mn.trim()) && (ln.trim()) == " ") {
        alert("Name cannot be empty");
    }
    // radio buttons
    else if ((br[0].checked == false) && (br[1].checked == false) && (br[2].checked == false) && (br[2].checked == false)) {
        alert("Select the branch");
    }
    else if ((gen[0].checked == false) && (gen[1].checked == false)) {
        alert("Select Gender");
    }
    // check box
    else if ((lan[0].checked == false) && (lan[1].checked == false) && (lan[2].checked == false) && (lan[3].checked == false)) {
        alert("Please select language");
    }
    // email
    else if (em.trim() == false) {
        alert("Please enter email address");
    }
    else if (co.test(em) == false) {
        alert("Invalid email address");
    }
    // password test
    else if (pas.trim().length < 6 | pas.trim().length > 12) {
        alert("Password must be between 6 to 12");
    }
    else if (pas.search(/[a-z]/) == -1) {
        alert("Must contain small letter");
    }
    else if (pas.search(/[A-Z]/) == -1) {
        alert("Must contain capital letter");
    }
    else if (pas.search(/[0-9]/) == -1) {
        alert("Must contain number");
    }
    else if (pas.search(/[\&\$\#\.\*\@]/) == -1) {
        alert("Must special symbol");
    }
    // number
    else if (sep.test(se) == false) {
        alert("Select Semester");
    }
    //dropdown list
    else if (st == 0) {
        alert("Please select the state");
    }
    // date
    else if (dt == 0) {
        alert("Please select the date");
    }
    // file
    else if (fi == 0) {
        alert("Please Upload the file");
    }
    else {
        alert("Validated Form");
    }
}