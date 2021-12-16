import Button from "../components/button";
import Input from "../components/input";
import img2 from "../images/register.svg"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signUp } from "../config/functions";

export default function Sign_Un_Page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let signup = (e) => {
        e.preventDefault();
        let obj = {
            email,
            password,
            name
        };
        dispatch(() => signUp(obj, navigate));
        navigate("/");
    };

    

    return (
        <div className="containers sign-up-mode">
            <div className="forms-containers">
                <div className="signin-signup">
                    <form onSubmit={(e) => signup(e)} className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                type="text"
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
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
                        <Button className="btns">
                            Sign up
                        </Button>
                        <p className="social-text">Or Sign up with social platforms</p>
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
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <Button className="btns transparent">
                            Sign in
                        </Button>
                    </div>
                    <img src={img2} className="image" alt="" />
                </div>
            </div>
        </div>
    );
}