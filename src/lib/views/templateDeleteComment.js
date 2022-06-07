export const deleteComment = () => {
    const divDeleteComment = document.createElement("div");

    const viewDeleteComment = `
        <div class="container-deleteComment">
            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket">
            <p>Are you sure you want to delete your comment? </p>
            <a href="#/profile"><button class="btn">Yes</button></a>
            <a href="#/profile"><button class="btn">No</button></a>
        </div>
    `
    divDeleteComment.innerHTML = viewDeleteComment;
    return divDeleteComment;
}