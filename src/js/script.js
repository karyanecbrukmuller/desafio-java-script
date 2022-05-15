const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];


function somarIdade() {
    const idades = users.map(user => user.age);

    console.log(idades);

    const soma = idades.reduce((previous, current) => previous + current, 0);

    return soma;
}
  
// somarIdade();

  
function validaLogin(param) {
    const login = users.find(el => el.login === param);
    
    if (login === undefined) {
      console.log('Não encontramos esse usuário');
      alert('Não encontramos esse usuário');
    } else {
      console.log(`O usuário ${login.login} foi encontrado.`); // "O usuário" + login + "foi encotrado."      
    }
}
  
// validaLogin('lucasplc');
 

function validaEmail(param) {
    const email = users.find(el => el.email === param);
    
    if (email === undefined) {
      console.log('Não encontramos esse usuário');
      return false;
    } else {
      console.log(`O usuário ${email.email} foi encontrado.`); // "O usuário" + login + "foi encotrado."      
      return true;  
    }
}

 // validaEmail('thaina.biudes@gmail.com');


function mostrarEmails() {
    const lista = users.map(el => el.email);
    
    console.log(`A lista de e-mail foi ${lista}`);
}
  
// mostrarEmails();
  
  
function contarEmails() {
    const emailsPbTech = users.filter(user => user.email.endsWith('@pbtech.net.br'));
    
    console.log(emailsPbTech);
    
    console.log(`A soma dos e-mails pertencentes ao pbtech.net.br foi de ${emailsPbTech.length}`)
}
  
//contarEmails();


function ValidateForm(event) {
    var email =  document.getElementById('email').value;
    var passwd = document.getElementById('passwd').value;

    const emailValido = validaEmail(email);
    const somaIdade = somarIdade();

    const lblEmail = document.getElementById('lbl-email');
    const lblPasswd = document.getElementById('lbl-passwd');
    
    // se o campo de email estiver vazio
    if(email == '' || passwd == '') {
        if(email == '') {        
            lblEmail.classList.add('error');                        
        } 
    
        if(passwd == '') {
            lblPasswd.classList.add('error');                
        } 

        return false;
    } else {
        
        lblEmail.classList.remove('error');
        lblPasswd.classList.remove('error');
        
    }


    if(emailValido === false) {
        lblEmail.classList.remove('error');
        lblEmail.classList.remove('succes');
        
        alert('Email ou senha inválido!');    
        return false;        
    }

    if(passwd != somaIdade){
        lblEmail.classList.remove('error');
        lblEmail.classList.remove('succes');

        alert('Email ou senha inválido!');
        return false;
    }


    lblEmail.classList.add('success');
    lblPasswd.classList.add('success');

    alert('Formulário submetido com sucesso!');
    return true;
}

function validaFormatoEmail() {
    console.log('evento disparado quando o usuario desfocar do campo de email..');
    var email =  document.getElementById('email').value;
    const lblEmail = document.getElementById('lbl-email');
    // se o email esta em um formato valido
    // referencia https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if(regexEmail.test(email)) {
        lblEmail.classList.remove('error');
        lblEmail.classList.add('success');
        console.log('email valido'); 
    } else {
        console.log('email invalido');
        lblEmail.classList.add('error'); 
    }
}

/*
    1. Referenciar elementos dos campos do formulário pelo ID
    2. Verificar se a senha e o e-mail estão válidos 
    3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido

    Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
*/























/*var; teste = 1;
console.log(teste);


var nome = 'Karyane';
console.log(nome);


function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 7))*/












