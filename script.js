// This script allows you to easily update the daily affirmation and photo.
document.addEventListener("DOMContentLoaded", function() {
    const dailyAffirmation = "";
    const dailyPhotoSrc = "path-to-todays-photo.jpg"; // Update this path daily

    // document.getElementById('daily-affirmation').textContent = dailyAffirmation;
    document.getElementById('daily-photo').src = dailyPhotoSrc;
});