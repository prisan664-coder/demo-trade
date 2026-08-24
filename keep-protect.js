// ปิดการใช้งานคลิกขวา
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// ปิดคีย์ลัดเปิดดูโค้ด (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) { // Ctrl+Shift+I / J
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) { // Ctrl+U (View Source)
        return false;
    }
};

// protect.js
setInterval(function() {
    const threshold = 160;
    if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
        document.body.innerHTML = '<div style="text-align:center; margin-top:20%; font-size:24px; font-family:Sarabun, sans-serif;">⚠️ ไม่อนุญาตให้เปิด Developer Tools บนหน้านี้</div>';
    }
}, 1000);

// เพิ่มบรรทัดนี้ไว้ส่วนบนสุดของไฟล์ protect.js
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobile) {
    // โค้ดป้องกันเดิมของคุณทำทำงานเฉพาะบนคอมพิวเตอร์เท่านั้น
    // (ใส่โค้ดเดิมของคุณไว้ในนี้)
}