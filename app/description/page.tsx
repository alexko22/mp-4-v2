// Alex Olson | alexko@bu.edu | MP-4
// app/description/page.tsx (makes the API call to retrieve data)
// secondary page with description info


// styling working here but not in the other page


import styled from 'styled-components';

const StyledDiv = styled.div`
    color: beige
`;

const StyledH1 = styled.h1`
    color: blue
`;

export default function Desc() {
    return (
        <StyledDiv>
            <StyledH1> Secondary Page Test </StyledH1>
        </StyledDiv>
    );
}