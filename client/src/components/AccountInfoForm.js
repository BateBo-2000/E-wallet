const AccountInfoForm = () => {
    return ( 
        <div className="account-info-form">
            <h2>Add your information</h2>
            <form>
                <label>Egn</label>
                <input type="text" />
                <label>First name</label>
                <input type="text" />
                <label>Middle name</label>
                <label htmlFor="midleN"></label>
                <input type="text" name="midleN"/>
                <label>Last name</label>
                <input type="text" />
                <label>Address</label>
                <input type="text" />
                <label>Date of birth</label>
                <input type="date" />
                <label>Secret question</label>
                <input type="text" />
                <label>Secret answer</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />

                <input type="checkbox" name="I have read and agree terms and conditions" />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default AccountInfoForm;