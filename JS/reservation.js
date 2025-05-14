
        function goToStep(step) {
            const date = document.getElementById('date').value;
            const guests = document.getElementById('guests').value;
            const time = document.getElementById('time').value;

            if (!date || !guests || !time) {
                alert("Please fill all fields in Step 1.");
                return;
            }

            document.getElementById('step1').classList.remove('active');
            document.getElementById('step2').classList.add('active');
        }

        document.getElementById('bookingForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const contact = document.getElementById('contact').value;

            if (!name || !contact) {
                alert("Please fill all required fields.");
                return;
            }

            const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
            modal.show();
        });

        function showThankYou() {
            document.getElementById('bookingForm').style.display = 'none';
            document.getElementById('thankYouScreen').classList.add('active');
        }

        function restartForm() {
            document.getElementById('bookingForm').reset();
            document.getElementById('step1').classList.add('active');
            document.getElementById('step2').classList.remove('active');
            document.getElementById('thankYouScreen').classList.remove('active');
            document.getElementById('finalMessage').style.display = 'none';
            document.getElementById('bookingForm').style.display = 'block';
        }

        function showFinalMessage() {
            document.getElementById('thankYouScreen').classList.remove('active');
            document.getElementById('finalMessage').style.display = 'block';
        }