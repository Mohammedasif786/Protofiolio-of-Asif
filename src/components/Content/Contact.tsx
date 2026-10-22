import { useState } from "react";
import { type ClientReq } from "./ClientContacts";

function Contact() {
  const [clientData, setClientData] = useState<ClientReq>({
    email: "",
    message: "",
  });
  const sendToDev = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/users", {
        method: "POST", // Explicitly define the method
        headers: {
          "Content-Type": "application/json", // Tell the server you are sending JSON
        },
        body: JSON.stringify(clientData), // Convert your JavaScript object to a JSON string
      });

      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

      console.log("Runn Successfully!", res.ok);
      const clients = await res.json();
      return clients;
    } catch (error) {
      throw new Error("There is something wrong!", { cause: error });
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center border-2 w-4/4 content-center max-h-3/4 p-4 text-center"
    >
      <h1 className="text-2xl font-bold mb-8">-:Contact Me:-</h1>
      <div className="flex gap-4 items-center mb-12 lg:w-[50%] border-2 rounded-2xl">
        <form onSubmit={sendToDev} className="flex flex-col gap-4 p-4 w-1/2">
          <label htmlFor="name">
            <input
              type="email"
              placeholder="Email@xyz.com"
              className="border-2 p-2 rounded w-62 lg:w-140"
              onChange={(e) =>
                setClientData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>
          <textarea
            placeholder="Message for Work..."
            className="border-2 h-42 w-62 lg:w-140 rounded p-2"
            onChange={(e) =>
              setClientData((prev) => ({ ...prev, message: e.target.value }))
            }
          ></textarea>
          <div className="w-62 lg:w-140">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 lg:w-64">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
