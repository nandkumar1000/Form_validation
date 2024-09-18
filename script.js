const validateForm = () => {
  const userID = document.getElementById('UserID').value;
  const contact = document.getElementById('contact').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmpassword').value;

  if (!userID || !contact || !password || !confirmPassword) {
    alert('All fields are mandatory');
    return false;
  }

  if (contact.length !== 10 || isNaN(contact)) {
    alert('Enter a valid 10-digit contact number');
    return false;
  }

  if (password.length < 8) {
    alert('Your password is too weak (minimum 8 characters)');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }

  return true;
}
