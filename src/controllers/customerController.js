const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('select * from customer', (err, customers) => {
			console.log(customers);
			res.render('customersList', {data: customers});
		});
	});
};

controller.add = (req, res) => {
	res.render('customerAdd');
};

controller.create = (req, res) => {
	const data = req.body;
	req.getConnection((err, conn) => {
		conn.query('insert into customer set ?', [data], (err, customer) => {
			console.log(customer);
			res.redirect('/');
		});
	});
};

controller.edit = (req, res) => {
	const {id} = req.params;
	req.getConnection((err, conn) => {
		conn.query('select * from customer where id = ?', [id], (err, customer) => {
			console.log(customer);
			res.render('customerEdit', {data: customer[0]});
		});
	});
};

controller.update = (req, res) => {
	const {id} = req.params;
	const data = req.body;
	req.getConnection((err, conn) => {
		conn.query('update customer set ? where id = ?', [data, id], (err, customer) => {
			console.log(customer);
			res.redirect('/');
		});
	});
};

controller.delete = (req, res) => {
	const {id} = req.params;
	req.getConnection((err, conn) => {
		conn.query('delete from customer where id = ?', [id], (err, customer) => {
			console.log(customer);
			res.redirect('/');
		});
	});
};

module.exports = controller;