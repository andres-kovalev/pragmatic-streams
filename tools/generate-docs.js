const { readFileSync, readdirSync, statSync } = require('fs');
const handlebars = require('handlebars'); // eslint-disable-line import/no-extraneous-dependencies

const groupNameRegExp = /^--(\w*)$/;

const [ templateFile, ...args ] = process.argv.slice(2);

const data = args.reduce(
    (reduced, item, index) => {
        const [ , field ] = item.match(groupNameRegExp) || [];
        const next = args[index + 1];

        if (field && next && !groupNameRegExp.test(next)) {
            return {
                ...reduced,
                [field]: getFunctions(next)
            };
        }

        return reduced;
    }, {}
);

const template = readFileSync(templateFile, 'utf8');
const compiled = handlebars.compile(template);

console.log(compiled(data)); // eslint-disable-line no-console

function getFunctions(path) {
    return readdirSync(path).filter(isDir(path));
}

function isDir(path) {
    return (file) => statSync(`${ path }/${ file }`).isDirectory();
}
