import styled from "styled-components";

export const NoteContentStyled = styled.div`
    height: 100%;
    border-radius: 4px;
    padding: 8px;
    width: 68%;
    background-color: black;
    color: #fff;
    overflow: auto;
    li{
        border: 1px solid yellow;
        border-radius: 6px;
        padding: 4px;
        margin-bottom: 4px;
    }
`;

export  const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;