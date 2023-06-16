let studentsList = [];
showStudentList();

function addStudent() {
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

    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else if (document.getElementById("famale").checked) {
        gender = document.getElementById("famale").value
    }
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
        showStudentList()
    }
}

function deleteList(id) {
    // alert("Bạn có muốn xóa?")
    // prompt("Xoa?")
    // prompt()
    studentsList.splice(id, 1)
    showStudentList();
}

function showStudentList() {
    if (JSON.parse(localStorage.getItem("students")) == null) {
        studentsList = []
    }
    else {
        studentsList = JSON.parse(localStorage.getItem("students"))
    }
    let str = "";
    for (let i = 0; i < studentsList.length; i++) {
        str += `
     <tr>
            <td>${i + 1}</td>
            <td>${studentsList[i].name}</td>
            <td>${studentsList[i].email}</td>
            <td>${studentsList[i].phone}</td>
            <td>${studentsList[i].address}</td>
            <td>${studentsList[i].msv}</td>
            <td>${studentsList[i].gender}</td>
            <td>
            <button onclick="editList(${i})">Edit</button>
            </td>
            <td>
            <button onclick="deleteList(${i})">Delete</button>
            </td>
        </tr>
    `
    }
    document.getElementById("result").innerHTML = str
}

function editList(index) {
    window.location.href = "edit.html"
    // let student = studentsList[index]
    // console.log(student)
    // // student.name = prompt("name");
    // // student.email = prompt("email");
    // // student.phone = prompt("phone");
    // // student.address = prompt("address");
    // // student.msv = prompt("msv");
    // document.getElementById("fullname").value = student.name
    // document.getElementById("email").value = student.email
    // document.getElementById("phone").value = student.phone
    // document.getElementById("address").value = student.address
    // document.getElementById("msv").value = student.msv
    // showStudentList()
}