const signupForm = async (event) => {
    event.preventDefault();

    // Capture the values from the signup form

    const username = document.querySelector('#inputUsername').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (username && password) {
        const respond = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { "Content-Type": "application/json" }
        });

        if (respond.ok) {
            // Directs the user to the dashboard
            document.location.replace("/dashboard");
        } else {
            alert(respond.statusText);
        }
    }
};

document.querySelector('#signupForm').addEventListener('submit', signupForm);