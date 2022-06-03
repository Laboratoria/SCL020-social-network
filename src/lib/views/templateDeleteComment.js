export const deleteComment = () => {
    const divDeleteComment = document.createElement("div");

    const viewDeleteComment = `
        <div>
            <img src="" alt="logo-ticket">
            <p>Are you sure you want to delete your comment? </p>
            <button class="btn-yes">Yes</button>
            <button class="btn-no">No</button>
        </div>
    `
    divDeleteComment.innerHTML = viewDeleteComment;
    return divDeleteComment;
}