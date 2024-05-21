// This script allows you to easily update the daily affirmation and photo.
document.addEventListener("DOMContentLoaded", function() {
    const dailyAffirmation = `"Today, I release all fears and doubts, and I embrace positivity and confidence." May God calm any anxiety or worry you feel and lead you to face this new phase of your exams with courage and wisdom!`;
    const dailyPhotoSrc = "path-to-todays-photo.jpg"; // Update this path daily

    document.getElementById('daily-affirmation').textContent = dailyAffirmation;
    document.getElementById('daily-photo').src = dailyPhotoSrc;
});