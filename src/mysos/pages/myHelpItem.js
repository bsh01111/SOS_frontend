import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import MySosService from "../service";
import ApplyItem from "./applyItem";

const MyHelpItem = ({ id, content, location, cost, status }) => {
  const [applyList, setApplyList] = useState([]);

  const getApplyList = async () => {
    const response = await MySosService.findApplyList({ id });
    setApplyList(response.data.applyList);
  };

  useEffect(() => {
    getApplyList();
  }, []);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.helpDiv}>
          <TextField
            id="helpContent"
            multiline
            rows={2}
            value={content || ""}
            style={styles.helpContent}
          />
          <div style={styles.helpInfoDiv}>
            <TextField
              id="location"
              size="small"
              value={location || ""}
            ></TextField>
            <TextField id="cost" size="small" value={cost || 0}></TextField>
          </div>
          <div>
            {applyList.map((apply) => (
              <ApplyItem
                sosId={id}
                userId={apply.id}
                nickname={apply.nickname}
                url={apply.url}
                status={apply.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", marginBottom: 130 },
  helpDiv: {
    border: "1px solid black",
    height: 80,
  },
  helpContent: {
    width: "65%",
  },
  helpInfoDiv: {
    width: "34%",
    float: "right",
  },
};

export default MyHelpItem;
