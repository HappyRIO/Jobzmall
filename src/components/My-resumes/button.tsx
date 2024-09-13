import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

interface ChildProps {
    // filter : string;
    setLayout : React.Dispatch<React.SetStateAction<string>>;
}

const ResumeButton: React.FC<ChildProps> = ({setLayout}) => {
  return (
    <>
      {/* <div className="flex py-6 text-white bg-purple-600 shadow-lg shadow-purple-600">
                <div></div>
                <div className="ml-2 mr-1 text-sm">Write Me a New Resume</div>
            </div> */}
      <Button
        sx={{
          borderRadius: "999px",
          color: "white",
          backgroundColor: "#9333EA",
          paddingY: 1.5,
          textTransform: "none",
        }}
        // onPress={onOpen}
        className="px-6 shadow-lg shadow-purple-600"
        variant="contained"
        onClick={() => {
            setLayout('center');
          }}
        startIcon={<SendIcon />}
      >
        Write Me a New Resume
      </Button>
    </>
  );
};

export default ResumeButton;
