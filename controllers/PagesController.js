exports.home = (req, res) => {
    res.render('home');
};

exports.cennik = (req, res) => {
    res.render('cennik')
};

exports.login = (req, res) => {
    res.render('login')
};

exports.edit = (req, res) => {
    res.render('edit')
};

exports.view = (req, res) => {
    res.render('view')
};
