import { Link } from 'react-router-dom'

const CategoryExposition = () => {
    const category = [
        {
          categoryName:'Cocina',
          categoryId: 'cc',
          categoryPicture: './pictures/A130442.png'
        },
        {
          categoryName:'Regalería',
          categoryId: 'cr',
          categoryPicture: './pictures/Garden-pie-de-sitio-1556x1706.png'
        },
        {
          categoryName:'Juguetería',
          categoryId: 'cj',
          categoryPicture: './pictures/juguetes.png'
        },
        {
          categoryName:'Mates y Termos',
          categoryId: 'cmt',
          categoryPicture: './pictures/termoMate.png'
        },
        {
          categoryName:'Limpieza y Baño',
          categoryId: 'clb',
          categoryPicture: './pictures/limpieza.png'
        }
    ]
    return(
        <section className="categoryExposition">
            <h1>Gran variedad en productos de</h1>
            <div className="categoryExpositionDisplay">
                {category.map(c => (
                    <div className={"categoryDisplay "+ c.categoryId}>
                        <div>
                            <h2>{c.categoryName}<div></div></h2>
                            <Link to={'/category/'+c.categoryId+'/all'}>Ver más</Link>
                        </div>
                        <img src={c.categoryPicture} alt="c.categoryName"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryExposition