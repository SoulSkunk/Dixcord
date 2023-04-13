import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Container } from "../components/Login/Container";
import { Wrapper } from "../components/Login/Wrapper";
import { auth } from "../firebase.config";

export default function ({ setUsername }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleLogin(email, password) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
    
            const user = userCredential.user;
            setUsername(user.displayName);
    
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
          });
      }
    return (
        <Container>
            <Wrapper>
                <div>
                    <h1>Ha, te revoilà !</h1>
                    <h3>Nous sommes si heureux de te revoir !</h3>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(email, password);
                    }}
                >
                    <label htmlFor="email" aria-required>
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>

                    <label htmlFor="password" aria-required>
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <button type="submit">Connexion</button>
                </form>
                <Link to="register">S'enregistrer</Link>
            </Wrapper>
        </Container>
    );
}
