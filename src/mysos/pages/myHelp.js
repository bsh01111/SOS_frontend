import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { useEffect, useState } from "react";
import Header from "../common/component/header";
import MyHelpItem from "./myHelpItem";
import MySosService from "../service";
import * as LocalStorage from "../../lib/localStorage";

const MyHelp = () => {
  const [myHelpList, setMyHelpList] = useState([]);

  const getMyHelpList = async () => {
    const id = LocalStorage.getItem("userId");
    const response = await MySosService.findMyHelpList({ id });
    setMyHelpList(response.data.sosList);
  };

  useEffect(() => {
    getMyHelpList();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <Header sequence={0} />
        <div style={{ marginBottom: 85 }}>
          <div>
            {myHelpList.map((myHelp) => (
              <MyHelpItem
                id={myHelp.id}
                content={myHelp.content}
                location={myHelp.location}
                cost={myHelp.cost}
              />
            ))}
          </div>
        </div>
        <Footer sequence={1} />
      </div>
    </>
  );
};

export default MyHelp;
