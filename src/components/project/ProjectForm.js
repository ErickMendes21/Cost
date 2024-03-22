import {useEffect, useState} from 'react'
import styles from './ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select' 
import SubmitButton from '../Form/SubmitButton'
import * as React from 'react';
import { useNavigate } from 'react-router-dom'

function ProjectForm({handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([]) //useState([]) Array vazio para esparar a resposta que vem da API
    const [project, setProject] = useState(projectData || {})
    const navigate = useNavigate();

     useEffect(()=>{
         fetch('http://localhost:5000/categories', {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json'
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                
                setCategories(data)
            })
            .catch((err) => console.log(err))
        }, []);
        const submit = (e) => {      
            e.preventDefault()
            handleSubmit(project)
            navigate("/Projects", { state: { key: "value" } });
        }
        
        function handleChange(e) {
            console.log(e)
            setProject({ ...project, [e.target.name]: e.target.value })
        }
        
        function handleCategory(e) {
            setProject({ ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            } })
        }
        
        return(
            <form onSubmit={submit} className={styles.value}>
            <Input type="Text" text="Nome do Projeto" name="Name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} Value={project.name ? project.name : ''} />
            <div>
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} Value={project.budget ? project.budget : ''} /> 
            </div>
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} Value={project.category ? project.category.id : ''}/>
            <SubmitButton text={btnText} /> 
        </form>
    )
}

export default ProjectForm  