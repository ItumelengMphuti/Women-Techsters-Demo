document.getElementById('signUp').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    // You can perform further actions here, such as sending the data to a server for authentication
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email Address:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:',cpassword);

});