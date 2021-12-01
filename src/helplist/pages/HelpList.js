import { useEffect, useState } from "react";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import HelpItem from "./HelpItem";
import LoginService from "../service";

const HelpList = () => {
  const [helpList, setHelpList] = useState([]);

  const getHelpList = async () => {
    const response = await LoginService.findSosList();
    console.log(response.data.sosList);
    setHelpList(response.data.sosList);
  };
  useEffect(() => {
    getHelpList();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <div style={{ marginTop: 55, marginBottom: 70 }}>
          <div>
            {helpList.map((help) => (
              <HelpItem
                mainProfileUrl={help.mainProfileUrl}
                nickname={help.userNickname}
                content={help.content}
                location={help.location}
                cost={help.cost}
                mediaUrl={help.mediaUrl}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HelpList;
