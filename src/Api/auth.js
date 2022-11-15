
export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch(' https://lawyer-server-10.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('myreviews-service-token', data.token);

        })
        .catch(err => console.error(err))
}