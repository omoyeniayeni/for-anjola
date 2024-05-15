// This script allows you to easily update the daily affirmation and photo.
document.addEventListener("DOMContentLoaded", function() {
    const dailyAffirmation = "As I prepare for tomorrow's paper, I am calm and confident. I have worked hard and I trust in my abilities. I will rest well tonight, knowing that I am ready to face the challenges ahead. I believe in myself and my success that lies ahead, and I trust in God to guide me and give me strength."; // Update this text daily
    const dailyPhotoSrc = "path-to-todays-photo.jpg"; // Update this path daily

    document.getElementById('daily-affirmation').textContent = dailyAffirmation;
    document.getElementById('daily-photo').src = dailyPhotoSrc;
});
