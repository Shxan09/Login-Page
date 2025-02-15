//object
let accounts = {
    // key: value,
    username1: {
        email: "seanvillangca30@gmail.com",
        password: "12",
        FirstName: "Sean",
        LastName: "Villangca",
    },

    username2: {
        email: "mrlongbomb@gmail.com",
        password: "34",
        FirstName: "Long",
        LastName: "Bomb",
    },

    username3: {
        email: "kobe24@gmail.com",
        password: "56",
        FirstName: "Kobe",
        LastName: "Bryant",
    },
}

function login(form){
    let email = form.email.value;
    let password = form.password.value;
    let flag = 0
    for(account in accounts) {
        let existingEmail = accounts[account].email;
        let existingPassword = accounts[account].password;
        if(email == existingEmail && 
            password == existingPassword) {

                let fn = accounts[account].FirstName;
                let ln = accounts[account].LastName;
                alert("Welcome!, "+fn+" "+ln+"!");
                flag = 1;
                break;
            } 
    }

    if(flag==0) {
        alert("BOSSING?? TANGINA MO MALI NILAGAY MO!!!");
        return false;
    }
}

function displayData() {
    let table = document.getElementById("display");
    let output = "<tr>";
    output += "<th>First Name</th>";
    output += "<th>Last Name</th>";
    output += "<th>Email</th>";
    output += "<th>Username</th>";
    output += "</tr>";

    for(account in accounts){
        output += "<tr>";
        output += "<td>"+ accounts[account].FirstName+"</td>";
        output += "<td>"+ accounts[account].LastName+"</td>";
        output += "<td>"+ accounts[account].email+"</td>";
        output += "<td>"+ account+"</td>";
        output += "</tr>";
    }
    
    table.innerHTML = output;
}





//inline javascript

// EVENTS
// (mouse = onclick, oncontextmenu, ondbclick, onhover, onmouseover, onmouseenter, onmouseout, onmouseleave) 

// (keyboard = onkeypres, onkeydown, onkeyup, ) 

// (form = onfocus, onblur, onchange, onsumbit (input type sumbit), onreset (input type reset) 

// (document/window = onload, onunload, onresize, onscroll, 


//POP UP BOX

//alert
//confirm
//prompt