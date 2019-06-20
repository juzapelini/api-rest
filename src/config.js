global.SALT_KEY = 'F8ajaaj9Ja97ahd7';
global.EMAIL_TMPL = 'Ola <strong> {0} </strong>, seja bem vindo ao node store';

var mongoConnection = "";
if(process.env.NODE_ENV == "production"){
    mongoConnection = {mongoURI: "mongodb+srv://zapelini:zap01ok@blogapp-prod-m5sjd.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    mongoConnection = {mongoURI: "mongodb://localhost/blogapp"}
}

module.exports = {
    connectionString: mongoConnection,
    sendGridKey: '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', 
    containerConnectionString: 'TBD'
}


