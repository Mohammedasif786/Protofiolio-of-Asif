import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const tabs = ["All", "Ayn"];
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

function ClientContacts() {
  return (
    <Box
      component={"div"}
      className="grid h-screen place-content-center mx-auto"
    >
      <h1 className="text-3xl font-bold">Clients & Messages</h1>
      <div className="flex gap-4">
        <MuiTabBarPure />
      </div>
      <div className="h-96 border"></div>
    </Box>
  );
}

export default ClientContacts;
