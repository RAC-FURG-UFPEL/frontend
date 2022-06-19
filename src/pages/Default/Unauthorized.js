import { useNavigate } from "react-router-dom"

function Unauthorized() {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <>
            <h1>403 Acesso não autorizado</h1>
            <button onClick={goBack}>Voltar</button>
        </>
    )
}

export default Unauthorized