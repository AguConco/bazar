import { Link } from 'react-router-dom'
import CategoryExposition from './CategoryExposition'
import './Home.css'

const Home = () => {
    return(
    <>
        <CategoryExposition />
        <section className="sectionBrands">
            <div>
                <h3>marcas que trabajamos</h3>
                <div className="containerBrands">
                    <Link to={'/category/cc/scc20'} className="carol"><img src="./pictures/carol.png" alt="logo carol"/></Link>
                    <Link to={'/category/cc/scc19'} className="rigolleau"><img src="./pictures/logo-rigolleau.png" alt="logo rigolleau"/></Link>
                    <Link to={'/category/cc/scc21'} className="tramontina"><img src="./pictures/tramontina.png" alt="logo tramontina"/></Link>
                    <Link to={'/category/cmt/scmt09'} className="lumilagro"><img src="./pictures/lumilagro.png" alt="logo lumilagro"/></Link>
                </div>
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
        </section>
    </>
    )
}

export default Home