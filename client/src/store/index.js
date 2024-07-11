import { proxy } from "valtio";
const state = proxy({
    intro : true,
    color: '#A4E311',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./cool.png',
    fullDecal:'./cool.png'
});

export default state;