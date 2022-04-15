const createPostForm = async (event) => {
    event.preventDefault();

    // Capture the values from the newPost form
    
    const title = document.querySelector('#inputTitle').value.trim();
    const content = document.querySelector('#inputContent').value.trim();

    if (title && content) {
        const respond = await fetch('/api/post', {
            method: "POST",
            body: JSON.stringify({title, content}),
            headers: {"Content-Type": "applicaton/json"}
        });

        if (respond.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(respond.statusText);
        }
    }
}

document.querySelector("#postForm").addEventListener("submit", createPostForm);