/**
 * Created by Chanyeol on 2017/6/20.
 */
window.addEventListener("load", function() {
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var submit = document.getElementById("submit");

    submit.addEventListener("click", function () {
        if(password.value===password2.value){
            if(!email.value.match(/^[a-z0-9]+@([a-z0-9]+\.)+[a-z]{2,}$/i)) {
                document.getElementById("warning").innerHTML = " * Wrong Email!";
            }else if(password.value.match(/^[0-9]*$/)){
                document.getElementById("warning").innerHTML = " * Password too weak!";
            }else if(password.value.match(/^[A-Za-z]+$/)){
                document.getElementById("warning").innerHTML = " * Password too weak!";
            }
            else{
                var form = document.getElementById("registerForm");
                console.log(name.innerText);
                console.log(document.getElementById("file"));
                var formData = new FormData(form);
                var xhr = new XMLHttpRequest();
                xhr.open("post", "register.php", true);
                xhr.send(formData);
                xhr.onload = function () {
                    var res = xhr.responseText;
                    console.log(res);
                    if (res == "success") {
                        window.location.href = "index.html";
                    } else
                        warning.innerText = " * " + res;
                }
            }
        }else{
            document.getElementById("warning").innerHTML=" * Different Passwords!";
            password.value="";
            password2.value="";
        }

    });


});
