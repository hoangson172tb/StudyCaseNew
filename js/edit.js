function redirectEdit(index) {
    getStudents()
    localStorage.setItem("studentEdit", JSON.stringify(studentsList[index]))
    window.location.href = "edit.html"
}

let studentEdit = JSON.parse(localStorage.getItem("studentEdit"))
showStudentEdit()

function showStudentEdit() {
    // console.log("student", studentEdit)
    document.getElementById("fullname").value = studentEdit.name
    document.getElementById("email").value = studentEdit.email
    document.getElementById("phone").value = studentEdit.phone
    document.getElementById("address").value = studentEdit.address
    document.getElementById("msv").value = studentEdit.msv

    let genderDOM = document.getElementsByName("gender")
    for (let i = 0; i < genderDOM.length; i++) {
        if (genderDOM[i].value == studentEdit.gender) genderDOM[i].checked = true
    }
}

function editStudent() {
    getStudents()
    studentEdit.name = document.getElementById("fullname").value
    studentEdit.email = document.getElementById("email").value
    studentEdit.phone = document.getElementById("phone").value
    studentEdit.address = document.getElementById("address").value
    studentEdit.msv = document.getElementById("msv").value
    studentEdit.gender = document.querySelector('input[name="gender"]:checked').value
    for (let i = 0; i < studentsList.length; i++) {
        if (studentsList[i].msv == studentEdit.msv){
            studentsList.splice(i, 1, studentEdit)
        }
    }
    localStorage.setItem("students", JSON.stringify(studentsList))
    window.location.href="index.html"
}
function cancelStudent() {
    window.location.href="index.html"
}