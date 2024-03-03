import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Base = () =>{
    return(
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}
export default Base