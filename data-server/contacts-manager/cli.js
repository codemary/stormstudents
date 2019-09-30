let args = process.argv.slice(2);
let minimist = require('minimist');

let inputArgs = minimist(args, {
    string: ['username', 'name', 'password', 'phone', 'email', 'birthdate']
});

inputArgs = minimist(args);

function usage() {
    console.log(`
        Usage: node cli.js <command> <options>

        commands:
            seed
            create --name <name> --username <username> --password <password> (required all)
            read --username <username> (required)
            delete --username <username> (required)
            update --username <username> (required)
                --phone <phone>
                --email <email>
                --birthdate <dd/mm/yyyy>
    `);
    process.exit(1);
}

let seedCmd = 'seed';
let createCmd = 'create';
let readCmd = 'read';
let deleteCmd = 'delete';
let updateCmd = 'update';

const validCmds = [seedCmd, createCmd, readCmd, deleteCmd, updateCmd];

if(inputArgs["_"].length == 0) {
    usage();
}

const cmd = inputArgs["_"][0];

if(!validCmds.includes(cmd)) {
    usage();
} 

const faker = require('faker');
const Contact = require('./models/contact');

const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const db = mongoose.connection;
// attach listeners to the db connection
db.on('error', function() {
    process.exit(1);
})

db.once('open', function() {
    switch (cmd) {
    case seedCmd:
        console.log(`Inserting docs...`);
        seed();
        break;
    case createCmd:
        if(!inputArgs.username && !inputArgs.name && !inputArgs.password) {
            usage();
        }
        console.log(`Creating contact...`);
        createContact(inputArgs.name, inputArgs.username, inputArgs.password);
        break;
    case readCmd:
        if(!inputArgs.username) {
           usage(); 
        }
        console.log("Reading contact...");
        readContact(inputArgs.username);
        break;
    case deleteCmd: 
        if(!inputArgs.username) {
            usage;
        }
        console.log("Deleting contact...");
        deleteContact(inputArgs.username);
        break;
    case updateCmd: 
        if(!inputArgs.username) {
            usage;
        }
        if(!inputArgs.phone && !inputArgs.email && !inputArgs.birthdate) {
            usage(); 
        }
        console.log("Updating contact...");
        updateContact(inputArgs);
        break;
    default:
        break;
    }
})

function seed() {
    let rawContacts = [];
    for (let i = 0; i < 20; i++) {
        let rawContact = {
            username: faker.internet.userName(),
            user: {
                name: faker.name.firstName(),
                password: faker.internet.password()
            },
            address: {
                street: {
                    name: faker.address.streetName(),
                    num: faker.random.number(),
                },
                city: faker.address.city(),
                state: faker.address.state(),
                country: faker.address.country(),
                post_code: faker.address.zipCode()
            },
            contact: {
                phone_numbers: [faker.phone.phoneNumber()],
                emails: [faker.internet.email()],
                birth_date: faker.date.past()
            }
        }
        rawContacts.push(rawContact);
    }

    Contact.insertMany(rawContacts, function(error, docs) {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        // console.log(`${docs.length} docs inserted!`);
        // console.log(docs[0].fullAddress);
        process.exit(0);
    })
}

function createContact(name, username, password) {
    let rawContact = {
        username: username,
        user: {
            name: name,
            password: password
        }
    }
    
    Contact.init().then(event => {
        console.log(event);
        Contact.create(rawContact, function(err, docs) {
            if(err) {
                console.log(err);
                process.exit(1);
            }
            console.log((docs));
            process.exit(0);
        }) 
    })
}

function readContact(username) {
    Contact.findOne({username: username}, function(err, contact) {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        console.log(contact);
        process.exit(0);
    });
}

function deleteContact(username) {
    Contact.deleteOne({username: username}, function(err, docs) {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        console.log(docs);
        process.exit(0);
    });
}

function updateContact(args) {
    const username = args.username;
    let phones = [];
    if(args.phone) {
        if(Array.isArray(args.phone)) {
            phones = args.phone;
        } else {
            phones.push(args.phone);
        }
    }
    
    let emails = [];
    if(args.email) {
        if(Array.isArray(args.email)) {
            emails = args.email;
        } else {
            emails.push(args.email)
        }
    }
    const birthdate = args.birthdate;

    console.log(username, phones, emails, birthdate);

    Contact.findOne({username: username}, function(err, contact) {
        if(!err) {
            if(!contact) {
                console.log("Contact not found...");
                process.exit(0);
                return;
            }
            
            phones.forEach(phone => !contact.contact.phone_numbers.includes(phone) && contact.contact.phone_numbers.push(phone));
            emails.forEach(email => !contact.contact.emails.includes(email) && contact.contact.emails.push(email));

            if(birthdate) {
                contact.contact.birth_date = birthdate;
            }

            contact.save(function(err, docs) {
                if(err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log(docs);
                process.exit(0);
            })
        }
    })
}

