import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
body {
    animation: fadeIn 4s ease-in-out;


    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        10% {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
`;
