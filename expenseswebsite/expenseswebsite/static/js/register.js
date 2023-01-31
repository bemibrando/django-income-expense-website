console.log('register loading')

const usernameField=document.querySelector("#usernameField");
const feedBackArea = document.querySelector(".invalid-feedback");

usernameField.addEventListener("keyup", (e) => {
    const usernameValue = e.target.value;
    
    if (usernameValue.length > 0){
        fetch('/authentication/validate-username', {
            body: JSON.stringify({ username: usernameValue}),
            method: "POST"
        })
        .then(res => res.json())
        .then((data) => {
            console.log("data", data);
            if (data.username_error) {
                usernameField.classList.add("is-invalid");
                feedBackArea.style.display = "block";
                feedBackArea.innerHTML = `<p>${data.username_error}</p>`
            }
            else{
                usernameField.classList.remove("is-invalid");
                feedBackArea.style.display = "none";
            }
        });
    }
});