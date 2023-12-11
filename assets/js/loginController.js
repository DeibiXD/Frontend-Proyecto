const serverUrl = 'http://localhost:3000';

async function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  try {
      const response = await fetch(`${serverUrl}/user/encontrarUsuario?username=${username}&password=${password}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          // Redirect to main-page.html
          window.location.href = "./main-page.html";
      } else {
          // Handle login error here
          const errorData = await response.json();
          alert(`Login failed with status ${response.status}: ${errorData.message}`);
      }
  } catch (error) {
      alert(`An error occurred: ${error.message}`);
  }
}




async function createUser() {
    const username = document.getElementById('createUsername').value;
    const password = document.getElementById('createPassword').value;

    try {
        const response = await fetch(`${serverUrl}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // Redirect to main-page.html
            window.location.href = "./main-page.html";
        } else {
            // Handle user creation error here
            alert('User creation failed. Please try again.');
        }
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
}
