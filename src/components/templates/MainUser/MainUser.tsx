import { ContainerUser, FlexName, ImageUser, List } from "./MainUser.style";
import Img from "../../atoms/avatar.webp"


const MainUser = () => {
    return (
        <ContainerUser>
            <FlexName>
                <ImageUser src={Img} alt="user" />
                <div>
                    <h3>Antonio Silva</h3>
                    <p>Desenvolvedor de Software</p>
                </div>
            </FlexName>
            <List>
                <li>Urgente</li>
                <li>Pessoal</li>
                <li>Trabalho</li>
            </List>
        </ContainerUser>
    )
}

export default MainUser;