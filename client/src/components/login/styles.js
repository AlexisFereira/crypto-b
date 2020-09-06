import styled from "@emotion/styled";
import Flex from "../UI/Flex";

export const ContainerFom = styled.div`
    position:relative;
    width:100%;
    max-width:350px;
    border-radius:8px;
    margin-top:50px;
    background: rgb(9,49,98);
    background: linear-gradient(183deg, rgba(9,49,98,0) 50%, rgba(9,49,98,1) 100%);
    
  
    .title{
        font-weight:300;
        font-size:40px;
        color:white;
     }
     
     @media all and (max-width:768px){
        margin-top:0;
     }
`;

export const Container = styled(Flex)`
    position:relative;
    height:100%;
    .lang{
        position:fixed;
        height:80px;
        width:50px;
        right:20px;
        top:0;
        z-index:9999;
    }
    
    .sombra{
        opacity:.8;
    }
    
    .area-login{
        background-image: url(img/bottom-hex.png), url(img/hexa.png);
        background-repeat:no-repeat;
        background-position:bottom right,bottom left;
        background-size: 30% auto, 90% auto; 
        overflow:hidden auto;
        min-height:100%;
    }
    
    .area-foto{
        background-image: url(img/login-bg.jpg);
        background-repeat:no-repeat;
        background-position:center;
        background-size: cover;
    }
    
    .gold-movil{
        img{
            width:50px; height:auto;
        }
        
        .telegramBtn{
            width:210px;
            height: 40px;
            border-radius:22px;
            background:#0088CC;
            text-align:center;
            font-size:12px;
            color:white;
            text-transform:uppercase;
            font-weight:bold;
            line-height:35px;
            
            a{
                color:white;
            }
            
            img{
                height:40px;
                width:auto;
                margin:auto;
                display:inline-block;
            }
        }
    }
    
    @media all and (max-width:768px){
        .area-login{
            background-image: url(img/login-bg-movil.png);
            background-repeat:no-repeat;
            background-position:bottom right,bottom left;
            background-size:100% auto; 
            justify-content:flex-start;
        }
    }
    
`;
