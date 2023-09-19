import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiTwotoneMail,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Style from "./Style.module.css";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h2>Contact Me</h2>
              <div className={Style.info}>
                <p>
                  <AiTwotoneMail />
                  <span className="p-3">haseeb99sh@gmail.com</span>
                </p>
              </div>
              <div className={Style.info}>
                <p>
                  <BsFillTelephoneFill />
                  <span className="p-3">0342-7282514</span>
                </p>
              </div>
              <div className={Style.icon}>
                <Link
                  to="http://github.com/Haseebsheikh786"
                  target="blank"
                  className={Style.github}
                >
                  <FaGithub />
                </Link>
                <Link
                  to="https://www.instagram.com/muhammad.haseeb26/"
                  target="blank"
                  className={Style.insta}
                >
                  <AiOutlineInstagram />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/haseeb-sheikh-2a04b3270"
                  target="blank"
                  className={Style.linkdin}
                >
                  <AiFillLinkedin />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 my-2">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
