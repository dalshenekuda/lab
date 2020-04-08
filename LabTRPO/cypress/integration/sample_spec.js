describe('Test 1', () => {
  it('Проверка наличия кнопки ввода на странице', () => {
	cy.visit('http://localhost:8080/trpo/index.html')
 	cy.contains('Show pic')	
  })
})

describe('Test 2', () => {
  it('Проверка наличия поля ввода и корректности его работы', () => {
	cy.visit('http://localhost:8080/trpo/index.html')
	cy.get('.pole2')
     	.type('корректность')
      	.should('have.value', 'корректность')
 
  })
})



describe('Test 3', () => {
  it('Проверка получения статуса', () => {
	cy.visit('http://localhost:8080/trpo/index.html')
	cy.get('.pole2').type('mr_dm1try')
 	cy.contains('Show pic').click()
		cy.contains('sadness')	
  })
})







