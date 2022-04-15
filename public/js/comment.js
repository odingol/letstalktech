const addedComment = async (event) => {
event.preventDefault();

// Capture the values from the comment form 

const comment = document.querySelector("#inputComment").value.trim();
const post_id = commentForm.getAttribute('data-id');

if (comment && post_id) {
    const respond = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            post_id,
            comment
        }),
        headers: { "Content-Type": "application/json"}
    });
    
    if (respond.ok) {
        document.location.reload();
    } else {
        alert(respond.statusText);
    }
}};

const commentForm = document.querySelector('.commentForm');
commentForm.addEventListener('submit', addedComment);