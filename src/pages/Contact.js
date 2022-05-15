import { IconButton } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_div">
        <h2>Contact Us</h2>
        <div className="contact_no">
          <strong> Mobile Number : </strong>
          <span> +91 8770267637</span>
        </div>
        <div className="contact_no">
          <strong>Social-Media : </strong> You can contact us on Instagram link
          is Here{" "}
          <strong>
            <ArrowRightAlt />
          </strong>
          <a href="https://instagram.com/santosh_auto_electricals?igshid=YmMyMTA2M2Y=">
            <IconButton>
              <img
                src="/Images/Instagram_logo.png"
                style={{ width: "30px" }}
                alt=""
              />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
