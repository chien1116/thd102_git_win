function logInPage_show(){$("#signUpPage").hide(),$(".form_background").css("display","flex"),$("#logInPage").show()}function SignUpPage_show(){$("#logInPage").hide(),$(".form_background").css("display","flex"),$("#signUpPage").show()}function logIn_background_hide(){$(".form_background").click(function(n){n.target.closest(".form")||$(".form_background").css("display","none")})}function login_toggle(){$("#logInPage .accountToggle").click(function(){$("#logInPage").slideUp(500,function(){$("#signUpPage").slideDown(500)})}),$("#signUpPage .accountToggle").click(function(){$("#signUpPage").slideUp(500,function(){$("#logInPage").slideDown(500)})})}$(".logIn").click(function(){logIn_background_hide(),logInPage_show(),login_toggle()}),$(".signUp").click(function(){logIn_background_hide(),SignUpPage_show(),login_toggle()}),$("#btn_signUp").click(function(n){n.preventDefault();var n=$("#signusername").val(),o=$("#passwordSignUp").val(),e=$("#passwordConfirm").val(),a={};a.email=n,a.password=o,""==n||""==o||""==e||o!=e?alert("Please Enter Correct Information."):axios.post("https://hex-escape-room.herokuapp.com/api/user/signup",a).then(function(n){n=n.data.message;"帳號註冊成功"===n?alert("Registration Success!"):"此帳號已被使用"===n?alert("This account has already been registered"):alert("Please confirm account and password are correct!")}).catch(function(n){console.log(n)})}),$("#btn_logIn").click(function(n){n.preventDefault();var n=$("#usernameLogIn").val(),o=$("#passwordLogIn").val(),e={};e.email=n,e.password=o,""===n||""===o?alert("Please Enter Correct Information."):axios.post("https://hex-escape-room.herokuapp.com/api/user/signin",e).then(function(n){"此帳號不存在或帳號密碼錯誤"===n.data.message?alert("Please confirm account and password are correct!"):alert("Log in Success!")}).catch(function(n){console.log(n)})});