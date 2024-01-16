import { PiX } from "react-icons/pi"
import { Container,  MenuHeader, Text } from "./styles"
import COLORS from '../../styles/themes'
export const Menu = ({onClose}) => {
    return (
        <Container>
            <MenuHeader>
                <PiX size={30} color={COLORS.DARK_900} onClick={onClose}/>
                <Text>Menu</Text>
            </MenuHeader>
        </Container>
    )
}