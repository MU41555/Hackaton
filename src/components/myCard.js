import Button from "./button";
import { useNavigate } from "react-router";


export default function Mycard() {
    
    const navigate = useNavigate();
    let gotoroom = () => {
        navigate("/room");
    };

    return (
        <>
            <div className="my-5 service">
                <h3>Featured Rooms</h3>
                <div className="cards">
                    <div className="mycard">
                        <div className="mycards">
                            <div className="imgs">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.VrTq-iHUSi5VyiMnN4yAkQHaEo&pid=Api&P=0&w=254&h=159" alt="" />
                            </div>
                            <p>Double Deluxe</p>
                        </div>
                    </div>
                    <div className="mycard">
                        <div className="mycards">
                            <div className="imgs">
                                <img src="https://www.elitetraveler.com/wp-content/uploads/2013/06/Chicago-Trump.jpg" alt="" />
                            </div>
                            <p>Family Deluxe</p>
                        </div>
                    </div>
                    <div className="mycard">
                        <div className="mycards">
                            <div className="imgs">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.8yWez3F7teZGZV-owgPWCwHaFX&pid=Api&P=0&w=245&h=178" alt="" />
                            </div>
                            <p>Presidential</p>
                        </div>
                    </div>
                    <div className="mycard">
                        <div className="mycards">
                            <div className="imgs">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.4yhjZOMSYyWXYPwlEAr1UwHaEo&pid=Api&P=0&w=262&h=164" alt="" />
                            </div>
                            <p>Single Deluxe</p>
                        </div>
                    </div>
                </div>
                <Button onClick={gotoroom} className="btns bon my-5">Our Home</Button>
            </div>
        </>
    );
}