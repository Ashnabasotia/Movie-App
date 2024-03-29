import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: #353535;
    color: #fff;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 1280px;
    padding: 0 20px;
    span {
        font-size: 1.2rem;
        color: #fff;
        padding-right: 10px;

        @media screen and (max-width: 768px){
            font-size: 1.1rem;
        }
    }
`;