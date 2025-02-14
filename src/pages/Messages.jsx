import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND from "../../constrance";
import "../css/message.css";
import { RxCross1 } from "react-icons/rx";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axios
      .get(`${BACKEND}/contact`) // Replace with your API URL
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);

  const deleteHandeler = async (id) => {
    const response = await axios
      .delete(`${BACKEND}/contact/${id}`)
      .then((res) => {
        // setRefresh((prev) => prev + 1);
        // console.log(res.data.data);
        setMessages(res.data.data);
      });
  };

  return (
    <div className="container-fluid msg-container-fluid">
      <h1 className="all-msg">All Messages</h1>
      <div className="container msg-container">
        <div className="row msg-row">
          {messages.map((message) => (
            <div className="col-md-3 message-col g-5" key={message._id}>
              <h3 className="cross-icon">
                <RxCross1 onClick={() => deleteHandeler(message._id)} />
              </h3>
              <p className="name">Name:&nbsp;{message.name}</p>
              <p className="name">Email:&nbsp;{message.email}</p>
              <p className="name">Subject:&nbsp;{message.subject}</p>
              <p>Message: &nbsp; {message.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Messages;
