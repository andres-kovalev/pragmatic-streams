const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const TypeDoc = require('typedoc');
const { readFile, writeFile } = require('./common');

const [ pattern ] = process.argv.slice(2);

const app = new TypeDoc.Application();

app.bootstrap({
    excludeNotExported: true,
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    mode: 'file',
    ignoreCompilerErrors: true
});

app.expandInputFiles([ pattern ])
    .filter(isIndex)
    .forEach((file) => generateReadme(app, file));

function isIndex(name) {
    return name.endsWith('index.ts');
}

function generateReadme(tsdoc, sourceFile) {
    const moduleName = getModuleName(sourceFile);
    const outPath = `${ sourceFile }.typedoc`;
    const project = tsdoc.convert([ sourceFile ]);

    if (!project) {
        throw new Error(`Failed to create a project for "${ moduleName }" module!`);
    }

    if (!tsdoc.generateDocs(project, outPath)) {
        throw new Error(`Failed to generate docs for "${ moduleName }" module!`);
    }

    const globalsMd = `${ outPath }/globals.md`;
    const readmeMd = `${ outPath }/README.md`;
    const readmeSource = fs.existsSync(globalsMd) ? globalsMd : readmeMd;
    const readmeFile = `${ outPath }/../README.md`;

    try {
        const lines = readFile(readmeSource).split('\n');
        const index = lines.indexOf('## Index');
        const markdown = [
            `## ${ moduleName } module`,
            ...lines
                .slice(index + 1)
                .map(
                    (line) => line.replace(/globals\.md/g, 'README.md')
                )
        ]
            .join('\n');

        writeFile(readmeFile, markdown);
    } finally {
        removeSafe(globalsMd);
        removeSafe(readmeMd);
        fs.rmdirSync(outPath);
    }
}

function getModuleName(file) {
    return file.split('/').reduceRight((found, item) => {
        if (found) {
            return found;
        }

        const [ name ] = item.split('.');

        return name === 'index' ? null : name;
    }, null);
}

function removeSafe(path) {
    // eslint-disable-next-line no-unused-expressions
    fs.existsSync(path) && fs.unlinkSync(path);
}
