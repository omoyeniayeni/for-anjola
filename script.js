// This script allows you to easily update the daily affirmation and photo.
document.addEventListener("DOMContentLoaded", function() {
    const dailyAffirmation = `I embrace this day with confidence and trust in God's guidance. 
    I am calm, focused, and ready for this exam. 
    My preparation has been thorough, and I trust in my ability to perform well.
    You've got this babe! 😘`;
    const dailyPhotoSrc = "path-to-todays-photo.jpg"; // Update this path daily

    document.getElementById('daily-affirmation').textContent = dailyAffirmation;
    document.getElementById('daily-photo').src = dailyPhotoSrc;
});