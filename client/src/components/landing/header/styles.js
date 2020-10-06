import styled from "@emotion/styled";

export const Container = styled.header`
    position:relative;
    z-index:99999;
    .menu {
        text-transform:uppercase;
        color:white;
        
        .link{
            background:transparent;
            text-transform:uppercase;
        }
    }
    
    .cont-logo{
       flex : 0 0 200px;
    }
    
    .menu{
        flex: 1 0 50%;
    }
    
    @media all and (max-width:991px){
        .cont-logo{
           flex : 1 0 100%;
            margin-bottom:20px;
           
           img{
            margin:auto;
           }
        } 
        
         .menu{
            flex:1 0 60%;
            max-width:350px;
        }   
    }
`;
