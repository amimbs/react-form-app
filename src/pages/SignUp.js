import React from "react";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

class SignUp extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.username.value);
        console.log(event.target.password.value);
        let username = event.target.username.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        let body = {
            username: username,
            email: email,
            password: password
        };

        fetch('herouku backend url')({
            method: 'POST',
            headers: {
                'Conent-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => {
            console.log(data);
        });
    };

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h1>Sign-Up Page</h1>
                </Grid>
                <Grid item xs={8}>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                name="username"
                                id="username"
                                label="Username 🤮"
                                variant="outlined" />
                        </div>

                        <div>
                            <TextField
                                name="email"
                                id="email"
                                label="email"
                                variant="outlined" />
                        </div>

                        <div>
                            <TextField
                                name="password"
                                id="password"
                                label="Password"
                                variant="outlined" />
                        </div>
                        <Button
                            type="submit"
                            variant="contained">Submit</Button>
                    </form>
                </Grid>
            </Grid>
        );
    };
};

export default SignUp;