const { I, home_page, login_page } = inject();


Given('I am on the login screen', () => {
    I.amOnPage('/')
    home_page.loginPage()
});

When('filling in user credentials', () => {
    login_page.loggedUser('qa.areda@gmail.com', 'senha123')
});

When('I click on Sign In', () => {
    login_page.signIn()
});

Then('I check Dashboard logged in the home page', () => {
    I.see('Dashboard')
});


When('fill the user wrong', () => {
  login_page.loggedUser('user@email.com', 'senha123')  
});

Then('I check user error message', () => {
  I.see('Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.') 
});

When('fill the password wrong', () => {
  login_page.loggedUser('qa.areda@gmail.com', '123') 
});

Then('I check password error message', () => {
  I.see('Erro: a senha fornecida para o e-mail qa.areda@gmail.com está incorreta.')   
});
