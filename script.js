// This script allows you to easily update the daily affirmation and photo.
document.addEventListener("DOMContentLoaded", function() {
    const dailyAffirmation = `I'm so proud of how far you've come!... I pray that during your exam today, you receive God's favor in all aspects of the exam. I pray that you are able to remember, organize your thoughts and communicate your ideas in a way that will favor you.!`;
    const dailyPhotoSrc = "path-to-todays-photo.jpg"; // Update this path daily

    document.getElementById('daily-affirmation').textContent = dailyAffirmation;
    document.getElementById('daily-photo').src = dailyPhotoSrc;
});