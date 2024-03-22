import styles from '../project/ProjectForm.module.css'
import {useState} from 'react'
import Input from '../Form/Input'
import SubmitButton from '../Form/SubmitButton'

function ServiceForm({handleSubmit, btnText, projectData}) {

    const[service, setService] = useState([])

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    
    function handleChange(e) { //--> ele vai receber um evento 
        setService({...service, [e.target.name]: e.target.value})
    }
    
    return(
        <form onSubmit={submit} className={styles.form}>    
            <Input
            type="text" 
            text="nome do serviço"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
            />
            <Input
            type="number" 
            text="custo de serviço"
            name="cost"
            placeholder="Insira o valor total"
            handleOnChange={handleChange}
            />
            <Input
            type="text" 
            text="nome do serviço"
            name="description"
            placeholder="descreva o serviço"
            handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm