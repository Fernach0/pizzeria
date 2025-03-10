import {Button} from '@mui/material';

type Props = {
    onClick?:(message:string) => void;
    text:string;
    textAlert:string 
}

export const CallToAction = (props: Props) =>{
    const {onClick,text,textAlert} = props;

    //esto es para el texto del boton, es un parametro
    const handleClick = () =>{
        if(onClick){
            onClick(textAlert);
        }
    }
    return(<>
    <Button variant="contained" onClick={() => onClick?.(textAlert)}>{text}</Button>
    </>);
}