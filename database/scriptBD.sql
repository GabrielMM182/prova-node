---Rode o script no banco da sua aplicação

CREATE TABLE bills(
	id INTEGER PRIMARY KEY IDENTITY,
	among INTEGER NOT NULL,
	product VARCHAR(30) NOT NULL,
	paymentMethod VARCHAR(100) NOT NULL,
	customer VARCHAR(30) NOT NULL
)

