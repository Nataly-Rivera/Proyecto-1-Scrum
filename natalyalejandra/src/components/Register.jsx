import{useState}from"react";
import { app } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrorMessage] = useState(null);

    const handleRegister=async () =>{
        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword (auth,email,password)
            console.log("Usuario registrado exitosamente")
            setErrorMessage(error.message)
           } catch (error) {
               console.error("Error al registrar: ", error.message)
               setErrorMessage(error.message)
           };

           
    return(
        <div>
        <h1>Register</h1>
        <input type="email"placeholder="Esriba un correo" value={email}
        onChange={(e) => setEmail(e.target.value)} />

       <input type="password"placeholder="Esriba una contraseña" 
       value={password} onChange={(e) => setPassword(e.target.value)} />

       <button onClick={handleRegister}>Registrar</button>
       {errorMessage  && <p>{errorMessage}</p>}
        
        </div>
        
    )

}
}

export default Register