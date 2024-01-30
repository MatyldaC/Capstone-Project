import React from "react";
import { Link } from "react-router-dom"

const ConfirmationPage = () => {

    return (
        <body className="congrats-container">
            <div className="congrats">
                <h1>Congratulations!</h1>
                <img src=""/>
                <h2>Your Table is booked</h2>
                <p>Confirmation email has been sent to your email address
                </p>
                <p>Thank you and see you soon</p>
                    <div className="button_sec">
                        <Link to="/reservation">
                            <button className="button">Go Back</button>
                        </Link>
                        <Link to="/">
                        <button className="button">Home</button>
                        </Link>
                </div>
                </div>
        </body>
    )
}

export default ConfirmationPage;
