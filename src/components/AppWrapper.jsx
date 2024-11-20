/* 
    - Component that encapsulates the entire project, contains the styles of the main structure.

    - Applies within App.jsx
*/

import React from "react";
import styled from "styled-components";

const AppWrapper = ( {children} ) => {
    return (
        <BoxWrapper>
            {children}
        </BoxWrapper>
    )
};

export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export default AppWrapper;