// This script allows you to easily update the daily affirmation and photo.
document.addEventListener("DOMContentLoaded", function() {
    const dailyAffirmation = `And when fear or doubt intrudes, I pray that God grant you  courage and confidence. 
    As you continue to prepare for your exam, may God guide. You are capable ❤️`;
    const dailyPhotoSrc = "path-to-todays-photo.jpg"; // Update this path daily

    document.getElementById('daily-affirmation').textContent = dailyAffirmation;
    document.getElementById('daily-photo').src = dailyPhotoSrc;
});