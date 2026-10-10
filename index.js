var users=
[
        {
            "username":"Medapati Navya sri",
            "gender":"Female",
            "image":"user.jpg"
        },
        {
            "username":"John Doe",
            "gender":"Male",
            "image":"John.jpg"
        }
    ]
    var index=0;
function toggle(){
    if(index==0){
        index=1;
    }else{
        index=0;
    }
    document.getElementById("user-name").innerText=users[index].username;
    document.getElementById("gender").innerText=users[index].gender;
    document.getElementById("image").src=users[index].image;
}