import { Skeleton } from "antd";
import Blockies from "react-blockies";
import { useMoralis } from "react-moralis";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

function Blockie(props) {
  const { account, isAuthenticated } = useMoralis();
    // if (!props.address && (!account || !isAuthenticated))
    //   return <Skeleton.Avatar active size={40} />;

  return (
    <Blockies
      seed={
        account
      }
      className="identicon"
      size="3"
      style={{borderRadius: "50px"}}
      {...props}
    />
  );
}

export default Blockie;