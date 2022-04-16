// Update Post functionality

const updatedPost = async () => {
    const title = document.querySelector('#inputTitle').value.trim();
    const content = document.querySelector('#inputContent').value.trim();
    const id = document.querySelector('#inputTitle').getElementById('data-id');

    if (title && content && id) {
        // Use a PUT request to the API endpoint
        const respond = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {"Content-Type": "application/json'"}
        });

        if (respond.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(respond.statusText);
        }
    }
};

document.querySelector('.updateBtn').addEventListener('click', updatedPost);


// Delete Post Functionality

const deletePost = async () => {
    const id = document.querySelector('#inputTitle').getAttribute('data-id');

    if(id) {
        const respond = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (respond.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(respond.statusText);
        }
    }
}

document.querySelector('.deleteBtn').addEventListener('click', deletePost);

