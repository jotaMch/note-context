import NoteContent from "../../molecules/NoteContent/NoteContent";
import Sidebar from "../../organisms/NoteSidebar/Sidebar";
/* import MainUser from "../MainUser/MainUser";
 */import { Container } from "./Dashboard.style";

const Dashboard = () => {
    return (
        <Container>
            <Sidebar />
            {/* <MainUser /> */}
            <NoteContent />
        </Container>
    )
}

export default Dashboard;