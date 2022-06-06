export const deleteComment = () => {
    const divDeleteComment = document.createElement("div");

    const viewDeleteComment = `
        <div>
            <img src="" alt="logo-ticket">
            <p>Are you sure you want to delete your comment? </p>
            <a href="#/profile"><button class="btn-yes">Yes</button></a>
            <a href="#/profile"><button class="btn-no">No</button></a>
        </div>
    `
    divDeleteComment.innerHTML = viewDeleteComment;
    return divDeleteComment;
}