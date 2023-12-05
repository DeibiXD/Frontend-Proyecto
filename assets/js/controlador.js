let testingUsers = [
    {
      Nombre: 'premiumUser',
      currentPlan: 1,
      passWord: 'lorem'
    },
    {
      Nombre: 'plusUser',
      currentPlan: 2,
      passWord: 'lorem2'
    },
    {
      Nombre: 'standardUser',
      currentPlan: 3,
      passWord: 'lorem3'
    }
  ];
  

function testing() {
    var div1 = document.getElementById('landing-page');
    var div2 = document.getElementById('main-page');
    var div3=document.getElementById('subscription-page');
    var computedStyle1 = window.getComputedStyle(div1);
    var computedStyle2 = window.getComputedStyle(div2);
    var computedStyle3 = window.getComputedStyle(div3);
    var current_active;

    if (computedStyle1.display === 'block') {
        current_active = 1;
    } else if (computedStyle2.display === 'block') {
        current_active = 2;
    } else if ( computedStyle3.display === 'block'){
        current_active = 3;
    }

    switch (current_active) {
        case 1:
            div1.style.display = 'none';
            div2.style.display = 'block';
            break;

        case 2:
            div2.style.display = 'none';
            div3.style.display = 'block';
            break;
        
        case 3: 
        div3.style.display = 'none';
        div1.style.display = 'block';
    }
}

function checkLogin() {
    var username = document.getElementById("textbox1").value;
    var password = document.getElementById("textbox2").value;
  
    // Loop through the array of users
    for (var i = 0; i < testingUsers.length; i++) {
      var user = testingUsers[i];
  
      // Check if the entered username and password match any user
      if (username === user.Nombre && password === user.passWord) {
        // Update subscription-related content based on the user's subscription plan
        updateSubscriptionContent(user.currentPlan);  // Change to user.currentPlan
        testing();
        return; // Exit the function if a match is found
      }
    }
    alert("Login failed. Please check your username and password.");
}
  
function updateSubscriptionContent(subscriptionPlan) {
    var subscriptionMessage = document.getElementById("subscriptionMessage");
  
    // Check the user's subscription plan and update the content accordingly
    switch (subscriptionPlan) {
      case 1:
        subscriptionMessage.textContent = "Welcome Premium User! You have the most premium subscription.";
        break;
      case 2:
        subscriptionMessage.textContent = "Welcome Plus User! You have a Plus subscription.";
        break;
      default:
        subscriptionMessage.textContent = "Welcome User! You have a free subscription.";
        break;
    }
  }
  