#/bin/sh

set -e

node ./tools/generate-readmes.js ./src/streams/
node ./tools/generate-readmes.js ./src/utility/
node ./tools/generate-docs.js ./src/streams/README.hbs --streams ./src/streams > ./src/streams/README.md
node ./tools/generate-docs.js ./src/utility/README.hbs --utility ./src/utility > ./src/utility/README.md
node ./tools/generate-docs.js ./README.hbs --streams ./src/streams --utility ./src/utility > ./README.md
node ./tools/generate-docs.js ./SUMMARY.hbs --streams ./src/streams --utility ./src/utility > ./SUMMARY.md
