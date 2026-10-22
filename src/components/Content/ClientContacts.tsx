import { Box, Button } from "@mui/material";
import React, { use, useState } from "react";
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
function ClientInformation() {
  return (
    <div className="flex gap-4 my-2 *:flex-col border">
      <div id="icon">
        <FaRegUserCircle size={100 / 2} />
      </div>
      <div id="content">
        <h1 className="text-2xl font-bold">Email@famous.com</h1>
        <p className="text-xl font-light tracking-wider">Message of the...</p>
      </div>
      <div id="next" className="ml-auto flex flex-col items-center">
        <p>{new Date().toDateString()}</p>
        <MdNavigateNext size={50 / 1.5} />
      </div>
    </div>
  );
}

export interface ClientReq<T = string> {
  Icon?: T;
  email: T;
  message: T;
}

function ClientContacts() {
  const [clientData, setClientData] = useState<ClientReq>({
    email: "",
    message: "",
  });

  return (
    <Box
      component={"div"}
      className="grid h-screen place-content-center mx-auto"
    >
      <h1 className="text-3xl font-bold">Clients & Messages</h1>
      <div className="flex gap-4">
        <MuiTabBarPure />
      </div>
      <div className="h-96 border">
        <ClientInformation />
        <ClientInformation />
        <ClientInformation />
        <ClientInformation />
      </div>
    </Box>
  );
}

export default ClientContacts;
