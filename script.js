function RangeValue() {
    document.getElementById("ragvalue").textContent = document.getElementById("myvalue").value;
}

function handleSubmit () {
    // Thu thập dữ liệu từ các input
    let uniname = document.getElementById("uniname").value;
    let university = document.getElementById("checkbox1").checked ? "Graduated" : "Not Graduated";
    let sexual = document.querySelector('input[name="sexual"]:checked') ? document.querySelector('input[name="sexual"]:checked').value : "";
    let name = document.getElementById("name").value;
    let favcolor = document.getElementById("favcolor").value;
    let favsport = document.getElementById("favsport").value;
    let birthday = document.getElementById("birthday").value;
    let rangeValue = document.getElementById("myvalue").value;

    // Tạo object chứa các thông tin người dùng
    let userData = {
        uniname: uniname,
        university: university,
        sexual: sexual,
        name: name,
        favcolor: favcolor,
        favsport: favsport,
        birthday: birthday,
        rangeValue: rangeValue
    };

    // Log object ra console
    console.log(userData);
}