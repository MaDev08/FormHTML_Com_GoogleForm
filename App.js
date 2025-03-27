const validateInput = (inputElement) => {
    inputElement.addEventListener('input', () => {
        let value = parseInt(inputElement.value, 10);
        if (value < 0) {
            inputElement.value = 0;
        } else if (value > 10) {
            inputElement.value = 10;
        }
    });
};

const idadeCriancaInput = document.getElementById('idade_crianca');
const dinoBrasilInput = document.getElementById('dinoBrasil');
const gostaDinoInput = document.getElementById('gostaDino');
const atividadesArLivreInput = document.getElementById('atividadesArLivre');

validateInput(idadeCriancaInput);
validateInput(dinoBrasilInput);
validateInput(gostaDinoInput);
validateInput(atividadesArLivreInput);