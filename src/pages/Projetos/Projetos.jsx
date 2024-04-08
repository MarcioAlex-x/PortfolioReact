import { useState } from "react"
import Card from "../../components/Card/Card"
import styles from './Projetos.module.css'
import { useEffect } from "react"

const Projetos = () =>{

    const[repositories, setRepositories] = useState([])
    const[infos, setInfos] = useState([])
 

    useEffect(()=>{
        const getInfos = async () =>{
            const reposnse  = await fetch('https://api.github.com/users/MarcioAlex-x?page=1&per_page=80')
            const data = await reposnse.json()
            setInfos(data)
        }
        getInfos()
    }, [])

    useEffect(()=>{
        const getRepositories = async () =>{
            const response = await fetch('https://api.github.com/users/MarcioAlex-x/repos')
            const data = await response.json()
            setRepositories(data)
        }
        getRepositories()
    },[])

    return(
        <section className={styles.projetos}>
            <h2>Informações Github</h2>
            <div className={styles.infos}>
                <div className={styles.info_header}>
                    <img src={infos.avatar_url} alt="imagem do github de {infos.login}" />
                    <h2>{infos.login}</h2>
                </div>
                <div className={styles.info_contents}>
                    <p>Site: {infos.blog}</p>
                    <p>Bio: {infos.bio}</p>
                    <p>Seguidores: {infos.followers}</p>
                    <p>Seguindo: {infos.following}</p>
                    <p>repositórios públicos {infos.public_repos}</p>
                </div>
            </div>

             <h2>Alguns projetos</h2>
             {
                repositories.length > 0 ? (
                    
            <div className={styles.cards}>
                 {
                    repositories.map((repo)=>(
                        
                        <Card 
                        key={repo.id} 
                        name={ repo.name } 
                        description={repo.description} 
                        html_url={repo.html_url}
                        languages={repo.languages}
                        />
                    ))
                } 
                
            </div>
                ):(
                    <h2>Carregando Repositórios...</h2>
                )
             }
            <div className={styles.pages}>
                <h2>Lista de URLs</h2>
                <ul>
                    <li>Site criado para auxiliar consultoras sob liderança de Fabiana Carvalho - Criado em 16/02/2024 - <a href="https://meuboleto.netlify.app">Acessar</a></li>

                    <li>Site criado para proprietário de assistência - Criado em 15/02/2024 - <a href="https://resetcell.netlify.app">Acessar</a></li>

                    <li>Site criado para material de aula - Criado em 31/01/2024 - <a href="https://tec-cell.netlify.app">Acessar</a></li>

                    <li>Site de agência de criação de sites - Criado em 23/01/2024 - <a href="https://criativoweb.netlify.app">Acessar</a></li>

                    <li>Portfólio feito em HTML, CSS e Js - Criado em 17/05/2023 - <a href="https://marciofreitas.netlify.app">Acessar</a></li>

                    <li>Site criado para material de aula - Criados me 12/01/2023 - <a href="https://passeio-buggy.netlify.app">Acessar</a></li>

                    <li>Site criado para auxiliar a minha esposa - Criado em 29/12/2022 - <a href="https://grupo1851.netlify.app">Acessar</a></li>

                    <li>Site criado para demonstraçã de aula - Criado em 25/11/2022 - <a href="https://assistenciaelemental.netlify.app">Acessar</a></li>

                    <li>Site para demonstração de aula - Criado em 20/11/2022 - <a href="https://barbeariaalex.netlify.app">Acessar</a> </li>

                    <li>Site criado para minha esposa Fabiana Carvalho - Criado em 28/05/2022 - <a href="https://cadastropreaprovado.netlify.app">Acessar</a></li>

                    <li>Primeiro portfólio que eu criei, feito com VueJs - Criado em 27/04/2022 - <a href="https://marcioalex.netlify.app">Acessar</a></li>

                    <li>Site criado para treinamento pessoal - Criado em 02/12/2021 - <a href="https://alexfreitas.netlify.app" >Acessar</a></li>

                    <li>Site para um amigo que possui uma banda de Ska - Criado em 15/09/2021 - <a href="https://parahybaskajazz.netlify.app">Acessar</a></li>

                    <li>Site para uma assistência técnica que possuí - Criado em 02/08/2021 - <a href="https://alfatecjp.netlify.app" target="_blak">Acessar</a></li>
                </ul>
            </div>

        </section>
    )
}
export default Projetos
