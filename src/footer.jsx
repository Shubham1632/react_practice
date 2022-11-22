
const d = new Date();
const year = d.getFullYear();

export default function Footer(){
    return(
        <footer>Copywrite @{year} </footer>
    );
}