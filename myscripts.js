function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const guestsInput = document.getElementById('guests');
    const messageInput = document.getElementById('message');
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');
    const timeError = document.getElementById('timeError');
    const guestsError = document.getElementById('guestsError');
    const messageError = document.getElementById('messageError');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const date = dateInput.value.trim();
    const time = timeInput.value.trim();
    const guests = guestsInput.value.trim();
    const message = messageInput.value.trim();
  
    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Assuming 10 digit phone number format
  
    let isValid = true;
  
    if (!name) {
      nameError.textContent = 'Name is required';
      nameInput.focus();
      isValid = false;
    } else {
      nameError.textContent = '';
    }
  
    if (!email) {
      emailError.textContent = 'Email is required';
      emailInput.focus();
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      emailInput.focus();
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    if (!phone) {
      phoneError.textContent = 'Phone number is required';
      phoneInput.focus();
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      phoneError.textContent = 'Please enter a valid 10-digit phone number';
      phoneInput.focus();
      isValid = false;
    } else {
      phoneError.textContent = '';
    }
  
    if (!date) {
      dateError.textContent = 'Date is required';
      dateInput.focus();
      isValid = false;
    } else {
      dateError.textContent = '';
    }
  
    if (!time) {
      timeError.textContent = 'Time is required';
      timeInput.focus();
      isValid = false;
    } else {
      timeError.textContent = '';
    }
  
    if (!guests) {
      guestsError.textContent = 'Number of guests is required';
      guestsInput.focus();
      isValid = false;
    } else if (guests < 1) {
      guestsError.textContent = 'Please enter a valid number of guests';
      guestsInput.focus();
      isValid = false;
    } else {
      guestsError.textContent = '';
    }
  
    if (!message) {
      messageError.textContent = 'Message is required';
      messageInput.focus();
      isValid = false;
    } else {
      messageError.textContent = '';
    }
  
    if (isValid) {
      // If all fields are valid, you can proceed with form submission or other actions
      // For this example, let's just log the form data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Date:', date);
      console.log('Time:', time);
      console.log('Number of Guests:', guests);
      console.log('Message:', message);
      
      // Here you can submit the form using AJAX or proceed with any other action
      // document.getElementById('reservationForm').submit();
    }
  }