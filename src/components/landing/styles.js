import styled from "@emotion/styled";

export const Container = styled.div`
    position:relative;
    
    background-image: 
        url(img/landing/line.png),  
        url(img/landing/textura_04.png), 
        url(img/landing/textura_02.png),
        url(img/landing/textura_01.png),
        url(img/landing/bg-desktop.png)
        ;
        
    background-position:
        left bottom,
        90% 90%,
        5% 3%,
        5% 60%,
        top right
     ;
    background-size:
     50% auto,
     20% auto,
     10% auto,
     30% auto,
     auto  100vh;
    background-repeat:no-repeat;
    
    
    @media all and (max-width:991px){
          background-image: 
            url(img/landing/line.png),  
            url(img/landing/textura_04.png), 
            url(img/landing/textura_02.png),
            url(img/landing/textura_01.png),
            url(img/landing/bg-movil.png)
            ;
        
    background-position:
        left bottom,
        90% 90%,
        5% 3%,
        5% 60%,
        top right
     ;
    background-size:
     50% auto,
     20% auto,
     10% auto,
     30% auto,
     100% auto
     ;
    background-repeat:no-repeat;
        
    }
`;
