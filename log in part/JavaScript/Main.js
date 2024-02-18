function formatPhoneNumber() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const formattedPhoneNumber = `${countryCode} ${phoneNumber}`;
    document.getElementById('formattedPhoneNumber').innerText = `Formatted Phone Number: ${formattedPhoneNumber}`;
  }
  