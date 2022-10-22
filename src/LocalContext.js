import React from "react";

const defaultValue = {
  locale: 'hk',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);