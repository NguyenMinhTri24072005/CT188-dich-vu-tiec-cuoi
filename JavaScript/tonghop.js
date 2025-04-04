/*dành cho đăng ký */
function signup(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var telephone = document.getElementById("telephone").value;
    var contract = document.getElementById("contract");

    
    if (username == "" || email == "" || password1 == "" || password2 == "" || telephone == ""){
        alert("vui lòng nhập đầy đủ thông tin !")
    }else {
        var check = localStorage.getItem(username);
        var data = JSON.parse(check);
        
        if (check != null && username == data.username){
            alert("username đã tồn tại !");
        }
        else if (password1!=password2){
            alert("mật khẩu không giống nhau")
        }
        else if (!contract.checked){
            alert("vui lòng đồng ý với điều khoản!");
        }else {
            var user = {
                username : username,
                email : email,
                password1 : password1,
                password2 : password2,
                telephone : telephone,
            }
            var json = JSON.stringify(user);
            localStorage.setItem(username, json);
            alert("đăng ký thành công !");
            window.location.href="dangnhap.html";
        } 
    }
    
}
/*dành cho đăng nhập */
function signin(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var contract = document.getElementById("contract");


    if (!contract.checked){
        alert("vui lòng đồng ý với điều khoản !")
    }else {
        var user = localStorage.getItem(username)
        var data = JSON.parse(user);
        if (user == null){
            alert("vui lòng nhập lại email hoặc mật khẩu")
        }
        else if (username == data.username && password == data.password1 && password == data.password2){
            alert("đăng nhập thành công")
            window.location.href="trangchu.html";
        }
        else {
            alert("đăng nhập thất bại");
        }
    }
}

/*dành cho giỏ hàng */
function toggleCart() {
    var cart = document.getElementById("cart-container");
    cart.style.display = cart.style.display === "none" || cart.style.display === "" ? "block" : "none";
}

function addToCart(name, price, imageUrl) {
    var cartItems = document.getElementById("cart-items");
    var listItem = document.createElement("li");
    listItem.classList.add("cart-item");
    listItem.innerHTML = `<img src='${imageUrl}' alt='${name}'> ${name} - ${price}VNĐ <button class='remove-btn' onclick='removeFromCart(this, ${price})'>Xóa</button>`;
    cartItems.appendChild(listItem);
    updateTotalPrice(price);
}


function removeFromCart(button, price) {
    var cartItems = document.getElementById("cart-items");
    cartItems.removeChild(button.parentElement);
    updateTotalPrice(-price);
}

function updateTotalPrice(amount) {
    var totalPriceElement = document.getElementById("total-price");
    var currentTotal = parseInt(totalPriceElement.textContent);
    totalPriceElement.textContent = currentTotal + amount;
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Ngăn form reload trang

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const eventType = document.getElementById("package").value;
        const packageType = document.getElementById("menu-package").value;
        const tables = document.getElementById("sl").value;
        const note = document.getElementById("message").value;

        alert(
            `Cảm ơn ${name}!\nBạn đã đặt ${tables} bàn cho gói ${packageType} (${eventType})\nChúng tôi sẽ liên hệ qua số: ${phone} hoặc email: ${email}\nGhi chú: ${note}`
        );

        form.reset(); // Xoá dữ liệu sau khi xác nhận
    });
});
/*dành cho giới thiệu */

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

