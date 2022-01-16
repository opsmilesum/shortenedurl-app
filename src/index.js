/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import ReactDOM from "react-dom";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./index.css";
import Button from "@mui/material/Button";
import Loader from "./Loader";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

type TabsProps = {
    +initializeUrl: string,
    +onClick: (string, string) => void,
};

function BasicTabs({url: initialUrl, onTabChange, onClick, tab}: TabsProps) {
    const [url, setUrl] = useState(initialUrl);
    return (
        <Box sx={{width: "100%"}}>
            <Box sx={{borderBottom: 1, borderColor: "darkgrey"}}>
                <Tabs
                    value={tab}
                    onChange={(event, value) => {
                        setUrl("");
                        onTabChange(value);
                    }}
                    aria-label="basic tabs example"
                >
                    <Tab label="Shortened"/>
                    <Tab label="Full"/>
                </Tabs>
            </Box>
            <TabPanel value={tab} index={0}>
                <div className="inputRow">
                    <TextField
                        id="outlined-basic"
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                        fullWidth={true}
                        variant="outlined"
                        placeholder="Enter the link"
                    />
                    <Button variant="contained" onClick={() => onClick(url, "SHORTENED")}>
                        Go
                    </Button>
                </div>
                <div className="description">Convert a long url to a short one.</div>
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <div className="inputRow">
                    <TextField
                        id="outlined-basic"
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                        fullWidth={true}
                        variant="outlined"
                        placeholder="Enter the shortened link"
                    />
                    <Button variant="contained" onClick={() => onClick(url, "FULL")}>
                        Go
                    </Button>
                </div>
                <div className="description">
                    Convert a shortened url to the original long link.
                </div>
            </TabPanel>
        </Box>
    );
}

function ShortenedUrl() {
    const [url, setUrl] = useState("");
    const [mode, setMode] = useState("");
    const [tab, setTab] = useState(0);

    const onClickGo = (url, mode) => {
        setUrl(url);
        setMode(mode);
    };

    const onTabChange = (tab) => {
        setUrl("");
        setTab(tab);
    };

    return (
        <div className="page">
            <div className="title">
                <h1>Shortened URL</h1>
            </div>
            <div className="tab">
                <BasicTabs
                    initializeUrl={url}
                    tab={tab}
                    onTabChange={onTabChange}
                    onClick={onClickGo}
                />
            </div>
            <div className="showResult">
                {url !== "" && (
                    <>
                        <Loader url={url} mode={mode}/>
                    </>
                )}
            </div>
            <div className="company">
                {/*<div className="user">Our user</div>*/}
                <div>
                    <img
                        src="https://i0.wp.com/eodhistoricaldata.com/financial-apis-blog/wp-content/uploads/2019/04/nasdaq_company_logos.jpg?w=665&ssl=1"/>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<ShortenedUrl/>, document.getElementById("root"));
