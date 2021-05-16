import Head from "next/head";
import { Typography, AppBar, makeStyles } from "@material-ui/core";

import VideoPlayer from "../components/VideoPlayer";
import Options from "../components/Options";
import Notifications from "../components/Notifications";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Web-Rtc Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            Video Chat
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </>
  );
}
