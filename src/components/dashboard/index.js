import React from "react";
import styled from "@emotion/styled";


const Container = styled.div`
    position:relative;
`;

function Dashboard() {
    return (
        <Container>
            <h1>Dashboard</h1>
        </Container>
    )
}

export default React.memo(Dashboard);
