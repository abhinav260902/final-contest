let post = document.querySelector('.post-btn');
// Create or select the feed element
let feed = document.querySelector('.your-feed');

post.addEventListener('click', () =>{
    let text = document.querySelector('input.post-input').value;
    let feed_ticket = document.createElement('div');
    feed_ticket.classList.add('feed-ticket');
    // Use backticks and escape backticks in alt attributes
    feed_ticket.innerHTML = `
    
    
    <div class="ticket-img">
        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" height="40px" alt="\profile-pic\">
    </div>

    <div class="ticket-main">
        <div class="ticket-header">
        <p>Jonne Graham </p>
        <p>@jonnegraham</p>
            <div class="ticket-header-icon">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" class="edit"alt="\edit-icon\">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" class="delete"alt="\delet-icon\">
            </div>
        </div>
        <div class="ticket-body">
            ${text}
        </div>
        <div class="ticket-footer">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" class="like"alt="\like-icon\">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" class="comment" alt="\comment-icon\">
        </div>
    </div>

    


    `
    feed.appendChild(feed_ticket);
    feed.querySelector('.like').addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'blue' : 'red';
    });


    // After appending the new ticket to the feed


// Add event listener to the edit icon
    let editIcons = document.querySelectorAll('.edit');
    editIcons.forEach(editIcon => {
        editIcon.addEventListener('click', function() {
            // Get the current tweet text
            let currentTweet = this.parentNode.parentNode.querySelector('.ticket-body').textContent;
            // Open a prompt for the user to edit their tweet
            let newTweet = prompt('Edit your tweet:', currentTweet);
            // Update the tweet text with the user's input
            if (newTweet !== null) {
                this.parentNode.parentNode.querySelector('.ticket-body').textContent = newTweet;
            }
        });
    });


});