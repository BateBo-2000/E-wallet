
export const tokenHandler = (data, setError) => {
    //this writes down the token in the session storage
    if(!data.token) {
        setError('Missing jsonwebtoken!'); //no jwt
        return;
    }
    // set token in temporary storage
    sessionStorage.setItem('e-w_token', data.token);

    return true;
}

export const statusChecker = (response, setError)=>{
    //checks the response's status first
    if(response.status !== 200) {
        response.json() // parse response to json
        .then(body => setError(body.message ? body.message : 'Something went wrong!')) //error recieved by server
        .catch(() => setError('Something went wrong!'));   //other errors
        return false // if there is error return false
    }
    return true     //if there is no error return true
}