import { useState, type SyntheticEvent } from "react";
import {
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

type TabKey = "project" | "rm";

interface TabConfig {
  key: TabKey;
  label: string;
  items: string[];
}

interface FeedbackEntry {
  comment: string;
  rating: number;
}

const TABS: TabConfig[] = [
  {
    key: "project",
    label: "Project",
    items: ["Typing Project", "Ecommerce Website", "Banking Book"],
  },
  { key: "rm", label: "R&M", items: [] },
];

const FEEDBACK: FeedbackEntry[] = [
  {
    comment: "Wow Amazing website and More Colors are needed it will cool!",
    rating: 4,
  },
  {
    comment: "This is amazing website would like more be comfortable",
    rating: 5,
  },
  {
    comment: "It just fine but to other website to compare it should be...",
    rating: 3,
  },
  { comment: "Working fine but need update", rating: 2 },
  { comment: "Need to improve...", rating: 1 },
];

const COLORS = {
  panel: "#D9D9D9",
  tabIdle: "#E8E8E8",
  line: "#000000",
  text: "#000000",
};

const FONT = `"JetBrains Mono", "Roboto Mono", "Courier New", monospace`;

export default function ProjectTabs() {
  const [active, setActive] = useState<TabKey>("project");

  const handleChange = (_: SyntheticEvent, value: TabKey) => setActive(value);
  const current = TABS.find((t) => t.key === active)!;

  return (
    <Box
      component={"div"}
      sx={{ pt: 7, fontFamily: FONT }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Tab strip */}
      <h1 className="text-center text-3xl font-bold my-12">
        Project & FeedBack
      </h1>
      <Tabs
        value={active}
        onChange={handleChange}
        aria-label="Sections"
        sx={{
          minHeight: 0,
          pl: "14px",
          "& .MuiTabs-indicator": { display: "none" },
          "& .MuiTabs-flexContainer": { gap: "10px" },
        }}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.key}
            value={tab.key}
            label={tab.label}
            id={`tab-${tab.key}`}
            aria-controls={`panel-${tab.key}`}
            disableRipple
            sx={{
              minHeight: 48,
              minWidth: 125,
              px: 2,
              textTransform: "none",
              fontFamily: FONT,
              fontSize: 20,
              fontWeight: 700,
              color: COLORS.text,
              bgcolor: COLORS.tabIdle,
              borderRadius: "12px 12px 0 0",
              "&.Mui-selected": {
                color: COLORS.text,
                bgcolor: COLORS.panel,
              },
            }}
          />
        ))}
      </Tabs>

      {/* Panel */}
      <Box
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        sx={{ bgcolor: COLORS.panel, minHeight: 325 }}
      >
        <List disablePadding>
          {active === "rm"
            ? FEEDBACK.map(({ comment, rating }) => (
                <ListItem
                  key={comment}
                  disablePadding
                  sx={{
                    minHeight: 79,
                    borderBottom: `1px solid ${COLORS.line}`,
                  }}
                >
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr",
                      alignItems: "center",
                      width: "100%",
                      minHeight: 50,
                    }}
                  >
                    <Box
                      sx={{
                        px: "14px",
                        fontFamily: "Arial, sans-serif",
                        fontSize: 18,
                        lineHeight: 1.2,
                      }}
                    >
                      {comment}
                    </Box>
                    <Box
                      role="img"
                      aria-label={`${rating} out of 5 stars`}
                      sx={{
                        borderLeft: `1px solid ${COLORS.line}`,
                        display: "flex",
                        justifyContent: "center",
                        color: "#777777",
                        fontFamily: "Arial, sans-serif",
                        fontSize: 26,
                        letterSpacing: 2,
                      }}
                    >
                      {"★".repeat(rating)}
                    </Box>
                  </Box>
                </ListItem>
              ))
            : current.items.map((item) => (
                <ListItem
                  key={item}
                  disablePadding
                  sx={{ borderBottom: `1px solid ${COLORS.line}` }}
                >
                  <ListItemButton sx={{ py: 3, px: "14px" }}>
                    <ListItemText
                      primary={item}
                      slotProps={{
                        primary: {
                          sx: {
                            fontFamily: FONT,
                            fontSize: 20,
                            fontWeight: 700,
                            color: COLORS.text,
                          },
                        },
                      }}
                    />
                    +20 {">"}
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Box>
    </Box>
  );
}
