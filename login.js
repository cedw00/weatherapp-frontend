// Insert your code here
document.querySelector('#register').addEventListener('click', function() {
    const userName = document.querySelector('#registerName').value;
    const userEmail = document.querySelector('#registerEmail').value;
    const userPassword = document.querySelector('#registerPassword').value;
    let data = {
        name: userName,
        email: userEmail,
        mdp: userPassword,
    }
    fetch('https://weatherapp-backend-smoky.vercel.app/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
    }).then(response => response.json()).then(data => {
        if (data.result) {
            window.location.assign('index.html');
            console.log('Success');
        } else {
            console.log('Fail to register');
        }
    })
});

document.querySelector('#connection').addEventListener('click', function() {
    const userEmail = document.querySelector('#connectionEmail').value;
    const userPassword = document.querySelector('#connectionPassword').value;
    let body = {
        email: userEmail,
        mdp: userPassword,
    }
    fetch('https://weatherapp-backend-smoky.vercel.app/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ body }),
    }).then(response => response.json()).then(data => {
        if (data.result) {
            window.location.assign('index.html');
            console.log('Success');
        } else {
            console.log("Invalid password or email");
        }
    })
});