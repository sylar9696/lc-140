Passaggi per lavorare:

1- spostarci nela cartella di lavoro corretta con il terminale
2- metodi di creazione del progetto: 
    - npm create vite@latest    ( versione CLI per passaggi )
    - npm create vite@latest nome-Progetto -- --template react  ( viene usato il template base del framework specificato e viene creato un progetto con il nome scelto )
    - npm create vite@latest . -- --template react ( DEVE ESSERE LANCIATO NELLA CARTELLA PROGETTO VUOTA: viene creato il progetto senza creare la cartella perchè giù esistente )
3- mi sposto nella cartella creata se ne ho bisogno con il terminale: cd nome-cartella
    3.1 - npm install
    3.2 - npm run dev
4- svuotamento dei file extra creati dal template di vite: 
    - cancellare App.css
    - svuotare index.css
    - svuotare App.jsx dalle informazioni extra, risultato di App.jsx:
        function App() {
            return <h1>Hello World</h1>
        }

        export default App
    - nella cartella assets dentro src, vanno inserite le immagini se presenti
5- mi dedico al progetto e creo i diversi componenti per App.jsx nella cartella components dentro src