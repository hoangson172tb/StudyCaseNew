function    addStudent() {
    if (JSON.parse(localStorage.getItem("students")) == null) {
        studentsList = []
    } else {
        studentsList = JSON.parse(localStorage.getItem("students"))
    }
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let msv = document.getElementById("msv").value;
    let gender = "";
    if (name.length <= 2) {
        name = ""
        document.getElementById("nameError").innerHTML = "Vui lòng nhập tên!"
    } else {
        document.getElementById("nameError").innerHTML = ``
    }

    if (email.length < 1) {
        email = ""
        document.getElementById("emailError").innerHTML = "Vui lòng nhập email!"
    } else {
        document.getElementById("emailError").innerHTML = ``
    }

    if (phone.length <= 0) {
        phone = ""
        document.getElementById("phoneError").innerHTML = "Vui lòng nhập số điện thoại! "
    } else if (phone.length > 10) {
        document.getElementById("phoneError").innerHTML = "Số điện thoại không đúng! "
    } else {
        document.getElementById("phoneError").innerHTML = ``
    }

    if (address.length <= 0) {
        address = ""
        document.getElementById("addressError").innerHTML = "Vui lòng nhập địa chỉ! "
    } else {
        document.getElementById("addressError").innerHTML = ``
    }

    if (msv.length <= 0) {
        msv = ""
        document.getElementById("msvError").innerHTML = "Vui lòng nhập mã sinh viên!"
    } else if (msv.length > 10) {
        document.getElementById("msvError").innerHTML = "Sai mã sinh viên!"

    } else {
        document.getElementById("msvError").innerHTML = ``
    }

    gender = document.querySelector('input[name="gender"]:checked').value

    if (gender.length <= 0) {
        gender = ""
        document.getElementById("genderError").innerHTML = "Vui lòng chọn giới tính!"
    } else {
        document.getElementById("genderError").innerHTML = ``
    }
    let students = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        msv: msv,
        gender: gender,
    }
    if (name && email && phone && address && msv && gender) {
        studentsList.push(students);
        localStorage.setItem("students", JSON.stringify(studentsList))
    }
    window.location.href="index.html"
}