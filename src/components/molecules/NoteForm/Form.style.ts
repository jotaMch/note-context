import styled from "styled-components";

export const AddNote = styled.div`
    border-radius: 12px;
    form{
        display: flex;
        flex-direction: column;

        .addTitle {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background-color: #ccc;
            padding: 8px;
            font-size: 26px;
        }
    }
    .flex-content{
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .content-note{
        height: 50px;
    }
`;
