import React from "react";
import { Box, Text } from "theme-ui";
import { keyframes } from "@emotion/react";

// const StyledDiv = styled.div`
//   position: fixed;
//   left: 50%;
//   top: 0;
//   transform: translate(-50%, -50%);
//   width: 600px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   text-align: center;

//   &#show {
//     visibility: visible;
//     animation: ${fadeInAnimation} 0.5s, ${fadeOutAnimation} 0.5s 2.5s;
//   }

//   &#hide {
//     visibility: hidden;
//   }

//   background: ${(props) => (props.type === "success" ? "#14ffd0" : "#ff0f5f")};
// `;

// const StyledSymbol = styled.div`
//   flex: 20%;
// `;

// const StyledMessage = styled.div`
//   flex: 80%;
//   text-align: start;
// `;

const fadeInAnimation = keyframes`
    from {
        bottom: 0;
        opacity: 0;
    }
    to {
        bottom: 30px;
        opacity: 1;
    }

`;

const fadeOutAnimation = keyframes`
    from {
        bottom: 30px;
        opacity: 1;
    }
    to {
        bottom: 0;
        opacity: 0;
    }

`;

interface Props {
  message: string | undefined;
  type: string | undefined;
  toasterState: boolean;
}

const Toaster: React.FC<Props> = ({ message, type, toasterState }) => {
  //const [showToaster, setLocalShowToaster] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        left: ["60%", "30%", "50%"],
        top: 50,
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        visibility: toasterState ? "visible" : "hidden",
        animation: `${fadeInAnimation} 0.5s, ${fadeOutAnimation} 0.5s 2.5s`,

        zIndex: 5,

        backgroundColor: type === "success" ? "#49CFDE" : "#f87ea7",
      }}
    >
      <Text
        sx={{ justifyContent: "center", textAlign: "start", color: "black", mx: "auto" }}
        id="message"
      >
        {message}
      </Text>
    </Box>
  );
};

export default Toaster;
