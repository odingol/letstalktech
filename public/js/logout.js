const logout = async () => {
    const respond = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (respond.ok) {
        document.location.replace('/');
        alert('You are now logged out!')
    } else {
        alert(respond.statusText);
    }
}

document.querySelector('.logout-link').addEventListener('click', )