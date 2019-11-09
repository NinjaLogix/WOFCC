import React from 'react';

export const Context = React.createContext({
    dataStore: {
        services: '',
        setServices: () => {}
    }
});