// const postId = document.querySelector('input[name="post-id"]').value;

// const editFormHandler = async function(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const body = document.querySelector('textarea[name="post-text"]').value;

//   await fetch(`/api/post/${postId}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       body
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   document.location.replace('/dashboard');
// };

// document
//   .querySelector('#edit-post-form')
//   // .addEventListener('submit', editFormHandler);

//   document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);