// // async function signupFormHandler(event) {
// //   event.preventDefault();

// //   const username = document.querySelector('#username-signup').value.trim();  
// //   const password = document.querySelector('#password-signup').value.trim();

// //   if (username && password) {
// //     const response = await fetch('/api/users', {
// //       method: 'post',
// //       body: JSON.stringify({
// //         username,
// //         password
// //       }),
// //       headers: { 'Content-Type': 'application/json' }
// //     });

// //     //check if the response status
// //     if (response.ok) {
// //       console.log('success');
// //       alert('New user created you can now log in');
// //       document.location.reload();
// //     } else {
// //       alert(response.statusText);
// //     }
// //   }  
// // }

// // async function loginFormHandler(event) {
// //   event.preventDefault();

// //   const username = document.querySelector('#username-login').value.trim();
// //   const password = document.querySelector('#password-login').value.trim();

// //   if (username && password) {
// //     const response = await fetch('/api/users/login', {
// //       method: 'post',
// //       body: JSON.stringify({
// //         username,
// //         password
// //       }),
// //       headers: { 'Content-Type': 'application/json' }
// //     });

// //     if (response.ok) {
// //       document.location.replace('/dashboard');
// //     } else {
// //       alert(response.statusText);
// //     }
// //   }
// // }

// // document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
// // document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// const loginBtn = document.querySelector("#logIn");
// const signupBtn = document.querySelector("#signUp");
// const logInContent = document.querySelector("#login-form")
// const signUpContent = document.querySelector("#signup-form")

// const loginFormHandler = async (event) => {
//   // Stop the browser from submitting the form so we can do so with JavaScript
//   event.preventDefault();
//   console.log(event);

//   // Gather the data from the form elements on the page
//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     // Send the e-mail and password to the server
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in');
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   // const name = document.querySelector('#name-signup').value.trim();
//   const email = document.querySelector('#username-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (name && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
//   .querySelector('.login-form')
//   .addEventListener('click', loginFormHandler);

//   document
//   .querySelector('.signup-form')
//   .addEventListener('click', signupFormHandler);

//   // signupBtn.addEventListener("click", function(){
//   //   logInContent.style.display = "none"
//   //   signUpContent.style.display = "block"

//   // })

//   // loginBtn.addEventListener("click", function(){
//   //   signUpContent.style.display = "none"
//   //   logInContent.style.display = "block"
//   // })

const loginBtn = document.querySelector(".login-display");
const signupBtn = document.querySelector(".signup-display");
const logInContent = document.querySelector("#login-form")
const signUpContent = document.querySelector("#signup-form")


const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  console.log(event);

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

  document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);

  signupBtn.addEventListener("click", function(){
    logInContent.style.display = "none"
    signUpContent.style.display = "block"

  })

  loginBtn.addEventListener("click", function(){
    signUpContent.style.display = "none"
    logInContent.style.display = "block"
  })