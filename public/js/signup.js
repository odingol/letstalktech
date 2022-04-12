const signUp = document.querySelector('.signUp');

signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;

    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(res => {
    window.location = '/dashboard'
    }) 
})