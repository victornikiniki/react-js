function UserGreeting(props){

    const welcomeMessage = <h2 class="welcome-message">
                            Welcome {props.username}</h2>

    const loginPrompt = <h2 class="login-prompt">Please log in to continue</h2>
    
    return(props.isLoggedIn ? welcomeMessage :
                              loginPrompt
    );

}

export default UserGreeting