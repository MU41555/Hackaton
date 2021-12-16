import Button from '../components/button';
import Input from '../components/input';
import img1 from '../images/log.svg';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../config/functions";

export default function Sign_In_Page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    let login = (e) => {
        e.preventDefault();
        let obj = {
            email,
            password,
        };
        dispatch(() => userLogin(obj));
    };



    return (
        <div className="containers">
            <div className="forms-containers">
                <div className="signin-signup">
                    <form onSubmit={(e) => login(e)} className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                type="email"
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                        <Button className="btns solid">
                            LOGIN
                        </Button>

                        <p className="social-text">Or Sign in with social platforms</p>

                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-containers">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <Button className="btns transparent">
                            Sign up
                        </Button>
                    </div>
                    <img src={img1} className="image" alt="" />
                </div>
            </div>
        </div>
    );
}