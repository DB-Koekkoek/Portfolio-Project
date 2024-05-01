import { getLayout } from './layout'; // Importeer de getLayout functie uit layout.tsx

function Contact() {
    return (
        <h1>Contact Pagina</h1>
    );
}

Contact.getLayout = getLayout; // Wijs de getLayout functie toe aan Contact pagina

export default Contact;