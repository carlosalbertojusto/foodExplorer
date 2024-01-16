import { Container } from './styles';

import { FiPlus, FiX } from 'react-icons/fi';

export function Ingredients({ title, isNew, primary = false, value, onClick, ...rest}){
    return(
        <Container isNew={isNew} primary={primary}>
           <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
           />
           
           <button
                type="button"
                onClick={onClick}
                className={isNew ? 'button-delete' : 'button-add'}
           >
            {title} 
            {isNew ? <FiPlus/> : <FiX/>}
           </button>
        </Container>
    );
}