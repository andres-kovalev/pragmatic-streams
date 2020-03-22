#/bin/sh

set -e

node ./tools/generate-readmes.js ./src/streams/
node ./tools/generate-readmes.js ./src/utility/
node ./tools/generate-docs.js ./templates/streams.hbs --streams ./src/streams > ./src/streams/README.md
node ./tools/generate-docs.js ./templates/utility.hbs --utility ./src/utility > ./src/utility/README.md
node ./tools/generate-docs.js ./templates/index.hbs --streams ./src/streams --utility ./src/utility > ./README.md
node ./tools/generate-docs.js ./templates/summary.hbs --streams ./src/streams --utility ./src/utility > ./SUMMARY.md
