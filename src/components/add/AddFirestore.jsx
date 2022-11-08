import { useState } from "react"
import $ from 'jquery'
import './add.css'

const AddFirestone = () =>{

    const [pictures, setPictures] = useState()
    const [name, setName] = useState()
    const [code, setCode] = useState()
    const [availableQuantity, setAvailableQuantity] = useState()
    const [pricePublic, setPricePublic] = useState()
    const [priceWholesaler, setPriceWholesaler] = useState()
    const [discount, setDiscount] = useState()
    const [categoryId, setCategoryId] = useState()
    const [subcategory, setSubcategory] = useState('')
    const [state, setState] = useState()
    const [mainFeatures, setMainFeatures] = useState('')

    const sub = [
        ['Aluminio y acero|scc01','Melamina|scc02','Teflón|scc03','Cerámica|scc04','Herméticos|scc05','Platos y compoteras|scc06','Vasos y copas|scc07','Jarras, jarros y tazas|scc08','Cubiertos|scc09','Utensillos|scc10','Bandejas, bowls y ensaladeras|scc11','Botellas y bidones|scc12','Tablas|scc13','Artículos de asador|scc14','Secaplatos y coladores|scc15','Repostería|scc16','Electrodomésticos|scc17','Infantiles|scc18','Rigolleau|scc19','Carol|scc20','Tramontina|scc21'],
        ['Decoración|scr01','Portaretratos|scr02','Lamparas, velas y sahumerios|scr03','Flores y floreros|scr04','Bolsos, billeteras y necesers|scr05','Relojes|scr06'],
        ['Juegos de mesa|scj01','Didácticos|scj02','Verano|scj03','Vehiculos|scj04','Muñecas/os|scj05','Animales|scj06','Musicales|scj07','Pelotas|scj08'],
        ['Mates|scmt01','Termos|scmt02','Equipos de mate|scmt03','Bombillas|scmt04','Vertedores|scmt05','Portatermos|scmt06','Repuestos|scmt07','Pavas|scmt08','Lumilagro|scmt09'],
        ['Alfombras|sclb01','Limpieza casa|sclb02','Limpieza personal|sclb03','Baldes, fuentes y palanganas|sclb04','Ropa|sclb05','Cortinas|sclb06','Baño|sclb07'],
        ['Electrónica|scv01','Jardinería|scv02','Librería|scv03','Invierno|scv04','Camping|scv05','Organizadores|scv06']
    ];

    const addProduct = () =>{
        const productData = new FormData()
        productData.append('picture',pictures)
        productData.append('id',generarId())
        productData.append('code',code)
        productData.append('name',name)
        productData.append('pricePublic',pricePublic)
        productData.append('priceWholesaler',priceWholesaler)
        productData.append('discount',discount)
        productData.append('availableQuantity',availableQuantity)
        productData.append('categoryId',categoryId)
        productData.append('subcategory',subcategory)
        productData.append('mainFeatures',mainFeatures)
        productData.append('state',state)

        $.ajax({                        
            url:`http://localhost:80/Bazar-Backend/addProduct.php`,              // a donde queres enviar la informacion
            type:'POST',                 // como la queres mandar si POST, GET, PUT o DELETE
            processData: false,
            contentType: false,
            data: productData,      // la informacion que queres mandar
            success: response => {  
                response === 1 && document.getElementById('reset').reset()
            }    //success
        }) // ajax
    }
    const addSubcategoria = (p) =>{
        const s = subcategory.split('|')

        if(s.indexOf(p) < 0){
            setSubcategory(current => current + p + '|')
        }else{
            const sArray = s.filter(e => e !== p)
            setSubcategory(sArray.join('|'))    
        }        
    }
    const generarId = () => Math.random().toString(36).substr(2)

    return(
    <section className="sectionFormAdd">
        <form id="addForm" onSubmit={e => {
            e.preventDefault()
            addProduct()
            }}>
            <span>Imagen</span>          
            <input onChange={e => setPictures(e.target.files[0])} type="file" accept="image/png,image/jpeg" required />
            <input onKeyUp={e => setName(e.target.value)} type="text" placeholder="Nombre" required />
            <input onKeyUp={e => setPriceWholesaler(e.target.value)} type="number" placeholder="Precio mayorista" required />
            <input onKeyUp={e => setPricePublic(e.target.value)} type="number" placeholder="Precio minorista" required />
            <input onKeyUp={e => setDiscount(e.target.value)} type="number" placeholder="Descuento" value={0} required />
            <input onKeyUp={e => setCode(e.target.value)} type="text" placeholder="Código" required />
            <input onKeyUp={e => setAvailableQuantity(e.target.value)} type="number" placeholder="Stock" required />
            <select onChange={e => setState(e.target.value)} required>
                <option value="">Estado</option>
                <option value="active">active</option>
                <option value="inactive">inactive</option>
            </select>
            <select onChange={e => {
                setCategoryId(e.target.value)
                setSubcategory('')
                }} required>
                <option value="">Categoría</option>
                <option value="cc">Cocina</option>
                <option value="cr">Regalería</option>
                <option value="cj">Jugueretía</option>
                <option value="cmt">Mates y Termos</option>
                <option value="clb">Limpieza y Baño</option>
                <option value="cv">Varios</option>
            </select>
            <input value={subcategory} type="text" placeholder="subcategoría" disabled required />
            <div>
                {categoryId === 'cc'  && sub[0].map(e => ( <button onClick={e => addSubcategoria(e.target.value)} type="button" value={e.split('|')[1]}>{e.split('|')[0]}</button> ))}
                {categoryId === 'cr'  && sub[1].map(e => ( <button onClick={e => addSubcategoria(e.target.value)} type="button" value={e.split('|')[1]}>{e.split('|')[0]}</button> ))}
                {categoryId === 'cj'  && sub[2].map(e => ( <button onClick={e => addSubcategoria(e.target.value)} type="button" value={e.split('|')[1]}>{e.split('|')[0]}</button> ))}
                {categoryId === 'cmt' && sub[3].map(e => ( <button onClick={e => addSubcategoria(e.target.value)} type="button" value={e.split('|')[1]}>{e.split('|')[0]}</button> ))}
                {categoryId === 'clb' && sub[4].map(e => ( <button onClick={e => addSubcategoria(e.target.value)} type="button" value={e.split('|')[1]}>{e.split('|')[0]}</button> ))}
                {categoryId === 'cv'  && sub[5].map(e => ( <button onClick={e => addSubcategoria(e.target.value)} type="button" value={e.split('|')[1]}>{e.split('|')[0]}</button> ))}
            </div>
            <input onKeyUp={e => setMainFeatures(e.target.value)} type="text" placeholder="caracteristicas separadas por |"/>
            <button className="agregar" type="submit">Agregar</button>
            <button className="reset" type="reset">reset</button>
        </form>
    </section>
    )
}

export default AddFirestone