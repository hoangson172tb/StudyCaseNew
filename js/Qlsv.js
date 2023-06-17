let studentsList = [];
showStudentList();

function deleteList(id) {
    // alert("Bạn có muốn xóa?")
    // prompt("Xoa?")
    // prompt()
    getStudents();
    studentsList.splice(id, 1)
    localStorage.setItem("students", JSON.stringify(studentsList))
    showStudentList();
}

function getStudents() {
    if (JSON.parse(localStorage.getItem("students")) == null) {
        studentsList = []
    } else {
        studentsList = JSON.parse(localStorage.getItem("students"))
    }
}

function showStudentList() {
    getStudents();
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
<!--            <a href="edit.html"><img src="../img/edit.png" width="10px" height="10px"></a>-->
            <button onclick="redirectEdit(${i})"><img src="../img/edit.png" width="10px" height="10px"></button>
            </td>
            <td>
            <button onclick="deleteList(${i})"> <img src="../img/delete.png" width="10px" height="10px"></button>
            </td>
        </tr>
    `
    }
    let resultDOM = document.getElementById("result")
    resultDOM.innerHTML = str;
    // if (str.length != 0) document.getElementById("result").innerHTML = str
}

function redirectEdit(index) {
    getStudents()
    localStorage.setItem("studentEdit", JSON.stringify(studentsList[index]))
    window.location.href = "edit.html"
}