import React from "react";

const TokenContext = React.createContext({
    token: "",
    logout: () => {}
});

export default TokenContext;