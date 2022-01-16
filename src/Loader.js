import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const {Suspense} = React;

const loaderCreateShortenedUrlMutation = graphql`
    mutation LoaderCreateShortenedUrlMutation($originalUrl: String) {
        createShortenedUrl(originalUrl: $originalUrl)
    }
`;

const loaderGetOriginalUrlQuery = graphql`
    query LoaderGetOriginalUrlQuery($shortenedUrl: String) {
        getOriginalUrl(shortenedUrl: $shortenedUrl)
    }
`;

type Props = {
    +url: String,
    +mode: "SHORTENED" | "FULL",
};

function LoaderWorker({mode, url}: props) {
    const querySentences =
        mode === "SHORTENED"
            ? loaderCreateShortenedUrlMutation
            : loaderGetOriginalUrlQuery;

    const preloadedQuery = loadQuery(
        RelayEnvironment,
        querySentences,
        mode === "SHORTENED" ? {originalUrl: url} : {shortenedUrl: url}
    );
    const data = usePreloadedQuery(querySentences, preloadedQuery);
    const value =
        mode === "SHORTENED" ? data.createShortenedUrl : data.getOriginalUrl;

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="large" onClick={handleClose}>
                Got it
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );
    return (
        <div className="showResult">
            <header>
                <p>{value}</p>
            </header>
            <div className="copyButton">
                <ContentCopyIcon
                    textAnchor="Copy"
                    alignmentBaseline={"before-edge"}
                    fontSize={"medium"}
                    onClick={() => {
                        navigator.clipboard.writeText(value);
                        setOpen(true);
                    }}
                />
            </div>
            <Snackbar
                open={open}
                onClose={handleClose}
                message="Copied"
                action={action}
            />
        </div>
    );
}

function Loader({url, mode}: Props) {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={"Loading..."}>
                <LoaderWorker url={url} mode={mode}/>
            </Suspense>
        </RelayEnvironmentProvider>
    );
}

export default Loader;
