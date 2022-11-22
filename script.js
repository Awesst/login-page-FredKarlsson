let mainHeader = document.getElementById("mainHeader");
let mainContent = document.getElementById("mainContent");
let mainFooter = document.getElementById("mainFooter");
let loginBtn = document.getElementById("loginBtn");


const loginData = [
    {userName: "janne", password: "test"},
    {userName: "jane", password: "doe"},
    {userName: "john", password: "smith"},
    {userName: "al", password: "vedon"},
    {userName: "pro", password: "gamer"}
]

// 1. CHECK IF USER IS STORED IN LOCAL STORAGE
//  IF TRUE, SEND HIM/HER TO WELCOME USER PAGE
//  IF FALSE, SEND HIM/HER TO LOGIN PAGE -> 2

// 2. DISPLAY LOGIN PAGE

// 3. WHEN LOGIN BUTTON IS CLICKED, LOOP loginData TO CHECK IF CORRECT DATA
//  IF TRUE, SEND HIM/HER TO WELCOME USER PAGE
//  IF FALSE, SEND HIM/HER TO ERROR MESSAGE

