import { useEffect, useState } from "react";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import HelpItem from "./HelpItem";
import HelpListService from "../service";

const HelpList = () => {
  const [helpList, setHelpList] = useState([]);

  const getHelpList = async () => {
    const response = await HelpListService.findSosList();
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
                id={help.id}
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
        <Footer sequence={0} />
      </div>
    </>
  );
};

export default HelpList;
