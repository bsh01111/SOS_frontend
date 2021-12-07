import { useEffect, useState } from "react";
import profile from "../../public/image/profile.jpeg";
import help from "../../public/image/help.png";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { TextField, Button } from "@mui/material";
import HelpDetailService from "../service";
import * as LocalStorage from "../../lib/localStorage";

const HelpDetail = (props) => {
  const [helpDetail, setHelpDetail] = useState({
    id: 0,
    mainProfileUrl: "",
    nickname: "",
    content: "",
    location: "",
    cost: 0,
    mediaUrl: "",
    userId: 0,
  });

  const getHelpDetail = async () => {
    const helpId = props.match.params.id;
    const response = await HelpDetailService.findSosDetail({ id: helpId });
    const helpDetailInfo = response.data.sos;
    if (helpDetailInfo) {
      setHelpDetail({
        id: helpDetailInfo.id,
        mainProfileUrl: helpDetailInfo.mainProfileUrl,
        nickname: helpDetailInfo.userNickname,
        content: helpDetailInfo.content,
        location: helpDetailInfo.location,
        cost: helpDetailInfo.cost,
        mediaUrl: helpDetailInfo.mediaUrl,
        userId: helpDetailInfo.userId,
      });
    }
  };

  const onClickHelpButton = async () => {
    const { id: helpId } = helpDetail;
    const userId = LocalStorage.getItem("userId");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }
    try {
      await HelpDetailService.insertUserSosApply({ userId, sosId: helpId });
      alert("신청 성공!");
    } catch (e) {
      alert("이미 도움을 신청했습니다");
    }
  };

  useEffect(() => {
    getHelpDetail();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <div style={{ marginTop: 55, marginBottom: 70 }}>
          <div style={styles.profileDiv}>
            <img
              style={styles.profileImage}
              src={helpDetail.mainProfileUrl || profile}
            />
            <div>
              <TextField
                id="nickName"
                size="small"
                variant="standard"
                value={helpDetail.nickname || ""}
                inputProps={{ style: styles.prifileNickname }}
              />
            </div>
          </div>
          <div style={styles.helpDiv}>
            <TextField
              id="helpContent"
              multiline
              rows={3}
              value={helpDetail.content || ""}
              style={styles.helpContent}
            />
          </div>
          <div style={styles.helpInfoDiv}>
            <TextField
              id="location"
              size="small"
              style={styles.helpInfo}
              value={helpDetail.location || ""}
            ></TextField>
            <TextField
              id="cost"
              size="small"
              style={styles.helpInfo}
              value={helpDetail.cost || ""}
            ></TextField>
          </div>
          <div style={styles.helpImageDiv}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={helpDetail.mediaUrl || help}
            />
          </div>
          <div style={styles.helpButtonDiv}>
            <Button style={styles.helpButton} onClick={onClickHelpButton}>
              도와주기
            </Button>
          </div>
        </div>
        <Footer sequence={0} />
      </div>
    </>
  );
};

const styles = {
  profileDiv: {
    height: 200,
    border: "1px solid black",
    textAlign: "center",
  },
  profileImage: { width: 150, height: 150, marginTop: 5 },
  prifileNickname: { marginTop: 5, textAlign: "center" },
  helpDiv: {
    border: "1px solid black",
    height: 100,
    marginTop: 5,
  },
  helpContent: {
    width: "100%",
  },
  helpInfoDiv: {
    border: "1px solid black",
    marginTop: 5,
  },
  helpInfo: {
    width: "50%",
  },
  helpImageDiv: {
    border: "1px solid black",
    height: 240,
    marginTop: 5,
  },
  helpButtonDiv: {
    border: "1px solid black",
    height: 60,
    marginTop: 5,
    textAlign: "center",
  },
  helpButton: {
    border: "1px solid black",
    marginTop: 15,
    textAlign: "center",
    height: 30,
    width: "80%",
    color: "black",
  },
};

export default HelpDetail;
