

export const deleteComment = () => {
    const divDeleteComment = document.createElement("div");

    const viewDeleteComment = //html
    `
        <div class="container-deleteComment">
            <div class="sub-container-deleteComment">
                <div class="container-s-logo-ticket"><img class="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <div class="container-p"><p>Are you sure you want to delete your comment?</p></div>
                <div class="container-btn">
                    <a href="#/profile"><button id ="btn-yes" class="btn">Yes</button></a>
                    <a href="#/profile"><button class="btn">No</button></a>
                </div>
            </div>
        </div>
    `
    
    divDeleteComment.innerHTML = viewDeleteComment;
    return divDeleteComment;
}