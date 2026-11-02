import { Box, Button, keyframes } from "@mui/material";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const tabs = ["All", "Anonymous"];
function MuiTabBarPure() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        borderBottom: "2px solid black",
        pl: 4,
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            disableRipple
            sx={{
              fontFamily: "monospace",
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "black",
              bgcolor: "white",
              borderRadius: 0,
              textTransform: "none",
              px: 4,
              py: 1,
              mr: 2,
              mb: "-2px", // Pulls tab down 2px over the bottom line
              border: "2px solid black",
              borderBottom: isActive ? "none" : "2px solid black",
              "&:hover": {
                bgcolor: "white",
              },
            }}
          >
            {tab}
          </Button>
        );
      })}
    </Box>
  );
}

function ClientInformation({ email, message }: ClientReq) {
  return (
    <div className="flex gap-4 my-2 *:flex-col border">
      <div id="icon">
        <FaRegUserCircle size={100 / 2} />
      </div>
      <div id="content">
        <h1 className="text-2xl font-bold">{email}</h1>
        <p className="text-xl font-light tracking-wider">{message}</p>
      </div>
      <div id="next" className="ml-auto flex flex-col items-center">
        <p>{new Date().toDateString()}</p>
        <MdNavigateNext size={50 / 1.5} />
      </div>
    </div>
  );
}

export interface ClientReq {
  Icon?: React.ElementType;
  email: string;
  message: string;
}

function ClientContacts() {
  const [clientData, setClientData] = useState<ClientReq[]>([]);

  const giveData = async (): Promise<ClientReq[]> => {
    try {
      const res = await axios.get("http://localhost:4000/api/users");
      return res.data;
    } catch (error: any) {
      console.log(error.name);
      console.error(error.message);
      return [];
    }
  };

  useEffect(() => {
    giveData()
      .then((users) => setClientData(users))
      .catch((err) => console.log({ name: err.name, msg: err.message }));
  }, []);

  return (
    <Box
      component={"div"}
      className="grid h-screen place-content-center mx-auto"
    >
      <h1 className="text-3xl mx-auto relative bottom-12 font-bold">
        Clients & Messages
      </h1>
      <div className="flex gap-4">
        <MuiTabBarPure />
      </div>
      <div className="h-96 border">
        {clientData.map((user) => (
          <ClientInformation key={user.email} {...user} />
        ))}
      </div>
    </Box>
  );
}

export default ClientContacts;
