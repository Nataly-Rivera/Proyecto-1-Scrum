
import { app } from '../../firebaseConfig';
import{useState}from"react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin =async () =>{
        try {
         const auth = getAuth(app);
            await signInWithEmailAndPassword(email,password, auth)
            console.log("Usuario ingresado exitosamente")
            setErrorMessage("Error")
        } catch (error) {
            console.error("El error alingresar usuario ", error.message)
            setErrorMessage(error.message)
        }
    }

    const manejarRegistroUsuarios=async () =>{
        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(email,password)
        } catch (error) {
            setError(error.message)
            console.log("El error fue: ", error)
        }
    }



    return(
        <div>
        <h1>Login</h1>
        <input type="email"placeholder="Esriba un correo" value={email}
        onChange={(e) => setEmail(e.target.value)} />

       <input type="password"placeholder="Esriba una contraseña" 
       value={password} onChange={(e) => setPassword(e.target.value)} />

       <button onClick={handleLogin}>Iniciar sesion</button>
       {errorMessage  && <p>{errorMessage}</p>}
        
        </div>
        
    )

}

export default Login