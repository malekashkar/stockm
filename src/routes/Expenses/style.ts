import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CreateExpenseForm = styled.div`
    margin: auto;
    width: 60%;
    padding: 10px;
    border-radius:10px;
    box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
`;

export const CloseExpenseFormButton = styled(FontAwesomeIcon)`
    float: right;
`;