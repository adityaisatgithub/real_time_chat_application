import { createContext, useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ Define PropTypes for children
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
