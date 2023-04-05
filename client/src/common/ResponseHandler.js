
//if res.status == 200 returns true and sets the token in the session storage
export const tokenHandler = (response, setError) => {

    //checks the response's status first
    if(response.status != 200) {
        response.json() // parse response to json
        .then(body => setError(body.message ? body.message : 'Something went wrong!')) //error recieved by server
        .catch(err => setError('Something went wrong!'));   //other errors
        return;
    }

    response.json()
    .then(body => {
        if(!body.token) {
            setError('Missing jsonwebtoken!'); //no jwt
            return;
        }
        // set token in temporary storage
        sessionStorage.setItem('e-w_token', body.token);
        return true;
    })
    .catch(err => setError('Something went wrong!')); //other errors
}