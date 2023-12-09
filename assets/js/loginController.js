// loginController.js

// Function to handle login
async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const response = await fetch(`/user/encontrarUsuario?username=${username}&password=${password}`);
      const data = await response.json();
  
      if (response.status === 200) {
        // Successful login, redirect to main-page.html or perform other actions
        alert('Login successful!');
        window.location.href = 'main-page.html';
      } else {
        // Display an alert for unsuccessful login
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  }
  
  // Function to handle user creation
  async function createUser() {
    const username = document.getElementById('createUsername').value;
    const password = document.getElementById('createPassword').value;
  
    try {
      // Check if the username already exists
      const checkUserResponse = await fetch(`/user/encontrarUsuario?username=${username}`);
      const checkUserData = await checkUserResponse.json();
  
      if (checkUserResponse.status === 200) {
        // Username already exists, show alert
        alert('Username already exists. Please choose a different username.');
      } else {
        // Username is available, proceed with user creation
        const createUserResponse = await fetch('/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const createUserResult = await createUserResponse.json();
  
        if (createUserResponse.status === 200) {
          // User created successfully, show alert or redirect to main-page.html
          alert('User created successfully!');
          window.location.href = 'main-page.html';
        } else {
          // Display an alert for unsuccessful user creation
          alert('Error creating user. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during user creation:', error);
      alert('An error occurred during user creation. Please try again later.');
    }
  }
  
  // You can add more functions or modify the code as needed
  