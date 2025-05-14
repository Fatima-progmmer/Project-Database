document.getElementById("franchiseForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    thankYouModal.show();
    this.reset();
});
