set -e
npm run codegen
npm run build
rm -rf squid_db
# rm -rf db/migrations/*.js
# npm run db:create
# npm run db:generate
npm run db:apply
# npx sqd db migrate