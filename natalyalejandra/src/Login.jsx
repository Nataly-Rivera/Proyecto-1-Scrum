
import firebaseApp from '../firebaseConfig';
import{useState}from"react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleGoogleLogin = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(firebaseApp);
          await signInWithPopup(auth, provider);
          console.log('Usuario ingresado exitosamente con Google');
        } catch (error) {
          console.error('Error al ingresar usuario con Google: ', error.message);
        }
    };



    const handleLogin =async () =>{
        try {
         const auth = getAuth(firebaseApp);
            await signInWithEmailAndPassword(email,password, auth)
            console.log("Usuario ingresado exitosamente")
            setErrorMessage("Error")
        } catch (error) {
            console.error("El error alingresar usuario ", error.message)
            setErrorMessage(error.message)
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

       <button onClick={handleGoogleLogin}>Iniciar sesion con cuenta de Google</button>
       {errorMessage  && <p>{errorMessage}</p>}

       
        </div>
        
    )

}

export default Login