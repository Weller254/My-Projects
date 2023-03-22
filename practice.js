const button= document.getElementById("btn1");
button.addEventListener("click",calculateGrade)


function calculateGrade() {
    const marks=document.getElementById("gradeid").value;
    if (marks >=0 && marks <20) {
        grade="E";
    } 
    else if (marks >=20 && marks <30) {
        grade="D";
    }
    else if (marks >=30 && marks <40) {
        grade="C"
    }
    else if (marks >=40 && marks <50) {
        grade="B"
    }
    else if (marks >=50 && marks <65) {
        grade="B+"
    }
    else if (marks >=65 && marks <80) {
        grade="A-"
    }
    else if (marks >=80 && marks <100) {
        grade="A"
    }
    
    document.getElementById("output1").innerHTML=grade;


}