document.getElementById("user-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    let userEmail = document.getElementById("emil-id").value;
    let userPassword = document.getElementById("password-id").value;
    let emailInput = document.getElementById("emil-id");
    let passwordInput = document.getElementById("password-id");

    try {
        let UserApi = await fetch("https://fakestoreapi.com/users");
        let apiJson = await UserApi.json();
        console.log(apiJson);

        // Reset input styles and error message
        emailInput.style.borderColor = "";
        passwordInput.style.borderColor = "";
        let errorMessage = document.getElementById("error-message");
        if (errorMessage) errorMessage.remove();

        // Check if user matches the email and password
        const user = apiJson.find(
            (user) => user.email === userEmail && user.password === userPassword
        );

        if (user) {
            window.location.href = "../index.html";
        } else {
            // Highlight input fields and show error message
            emailInput.style.borderColor = "red";
            passwordInput.style.borderColor = "red";
            
            let errorDiv = document.createElement("div");
            errorDiv.id = "error-message";
            errorDiv.style.color = "red";
            errorDiv.innerText = "Invalid email or password. Please try again.";
            document.getElementById("user-form").appendChild(errorDiv);
        }
    } catch (error) {
        console.error("Error", error);
    }
});
